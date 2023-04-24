<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Mode } from "../types";
  import type { GeoJSONSource, MapMouseEvent } from "maplibre-gl";
  // Note we don't use our specialization of Feature here
  import type { Feature, LineString, Point, Position } from "geojson";
  import type { Feature as OurFeature } from "../../../types";
  import nearestPointOnLine from "@turf/nearest-point-on-line";
  import { point } from "@turf/helpers";
  import length from "@turf/length";
  import lineSplit from "@turf/line-split";
  import lineSlice from "@turf/line-slice";
  import { gjScheme, map, newFeatureId } from "../../../stores";
  import {
    emptyGeojson,
    overwriteSource,
    overwriteLayer,
    drawCircle,
  } from "../../../maplibre_helpers";

  const thisMode = "split-route";

  const circleRadiusPixels = 10;
  const snapDistancePixels = 30;

  export let mode: string;
  export let changeMode: (m: Mode) => void;

  export function start() {}
  export function stop() {
    cursor = null;
    snappedIndex = null;
  }

  let cursor: Feature<Point> | null = null;
  // Index into gjScheme of what we're snapped to
  let snappedIndex: number | null = null;

  $map.on("mousemove", onMouseMove);
  $map.on("click", onClick);

  onDestroy(() => {
    $map.off("mousemove", onMouseMove);
    $map.off("click", onClick);
  });

  // Rendering
  let source = "split-route";
  overwriteSource($map, source, {
    type: "geojson",
    data: emptyGeojson(),
  });
  // TODO Scissors icon?
  // TODO Z-ordering wrong?
  overwriteLayer($map, {
    id: "draw-split-route",
    source,
    ...drawCircle("black", circleRadiusPixels, [
      "case",
      ["==", ["get", "snapped"], true],
      1.0,
      0.5,
    ]),
  });

  $: {
    let gj = emptyGeojson();
    if (cursor) {
      gj.features.push(cursor);
    }
    ($map.getSource(source) as GeoJSONSource).setData(gj);
  }

  function onMouseMove(e: MapMouseEvent) {
    if (mode != thisMode) {
      return;
    }

    cursor = cursorFeature(e.lngLat.toArray(), false);
    snappedIndex = null;

    const nearbyPoint: [number, number] = [
      e.point.x - snapDistancePixels,
      e.point.y,
    ];
    const thresholdKm =
      $map.unproject(e.point).distanceTo($map.unproject(nearbyPoint)) / 1000.0;

    // Are we snapped to anything?
    let candidates: [number, Position, number][] = [];
    for (let [index, f] of $gjScheme.features.entries()) {
      if (f.geometry.type == "LineString") {
        let snapped = nearestPointOnLine(f.geometry, cursor, {
          units: "kilometers",
        });
        if (
          snapped.properties.dist != undefined &&
          snapped.properties.dist <= thresholdKm
        ) {
          candidates.push([
            index,
            snapped.geometry.coordinates,
            snapped.properties.dist,
          ]);
        }
      }
    }
    candidates.sort((a, b) => a[2] - b[2]);

    if (candidates.length > 0) {
      cursor = cursorFeature(candidates[0][1], true);
      snappedIndex = candidates[0][0];
    }
  }

  function onClick() {
    if (mode != thisMode) {
      return;
    }

    if (snappedIndex == null) {
      // We clicked the map, stop the tool
      changeMode("edit-attribute");
    } else {
      // TODO Can we avoid using ! everywhere here?
      let result = lineSplit(
        $gjScheme.features[snappedIndex!] as Feature<LineString>,
        cursor!
      );
      if (result.features.length == 2) {
        let piece1 = result.features[0];
        let piece2 = result.features[1];

        gjScheme.update((gj) => {
          // Keep the old ID for one, assign a new ID to the other
          piece1.id = gj.features[snappedIndex!].id;
          piece2.id = newFeatureId(gj);

          // The properties get lost. Copy everything to both
          piece1.properties = JSON.parse(
            JSON.stringify(gj.features[snappedIndex!].properties)
          );
          // "Deep clone"
          piece2.properties = JSON.parse(JSON.stringify(piece1.properties));

          fixRouteProperties(
            gj.features[snappedIndex!] as OurFeature<LineString>,
            piece1 as OurFeature<LineString>,
            piece2 as OurFeature<LineString>,
            cursor!
          );

          // Replace the one LineString we snapped to with the two new pieces
          gj.features.splice(
            snappedIndex!,
            1,
            piece1 as OurFeature<LineString>,
            piece2 as OurFeature<LineString>
          );

          return gj;
        });
      }

      // Stay in this mode, but reset state
      stop();
    }
  }

  function cursorFeature(pt: number[], snapped: boolean): Feature<Point> {
    return {
      type: "Feature",
      properties: {
        snapped,
      },
      geometry: {
        type: "Point",
        coordinates: pt,
      },
    };
  }

  // TODO Move this function to route-snapper, and remove some turf dependencies.
  // The implementation there would likely be Rust, to avoid depending on turf in the NPM package...
  function fixRouteProperties(
    original: OurFeature<LineString>,
    piece1: OurFeature<LineString>,
    piece2: OurFeature<LineString>,
    splitPt: Feature<Point>
  ) {
    // Fix length
    piece1.properties.length_meters =
      length(piece1, { units: "kilometers" }) * 1000.0;
    piece2.properties.length_meters =
      length(piece2, { units: "kilometers" }) * 1000.0;

    piece1.properties.waypoints = [];
    piece2.properties.waypoints = [];

    let splitDist = distanceAlongLine(original, splitPt);
    let firstPiece = true;
    // TODO Can we iterate over an array's contents and get the index at the same time?
    let i = 0;
    for (let waypt of original.properties.waypoints!) {
      let wayptDist = distanceAlongLine(
        original,
        point([waypt.lon, waypt.lat])
      );
      if (firstPiece) {
        if (wayptDist < splitDist) {
          piece1.properties.waypoints.push(waypt);
        } else {
          // We found where the split occurs. We'll insert a new waypoint
          // representing the split at the end of piece1 and the beginning of
          // piece2. Should that new waypoint be snapped or freehand? There are
          // 4 cases for where the split (|) happens with regards to a
          // (s)napped and (f)reehand point:
          //
          // 1) s | s
          // 2) s | f
          // 3) f | s
          // 4) f | f
          //
          // Only in case 1 should the new waypoint introduced at (|) be
          // snapped.
          // TODO Problem: in case 1, what if we split in the middle of a road,
          // far from an intersection?

          // Note i > 0; splitDist can't be before the first waypoint (distance 0)
          // TODO Edge case: somebody manages to exactly click a waypoint
          let snapped =
            waypt.snapped && original.properties.waypoints![i - 1].snapped;

          piece1.properties.waypoints.push({
            lon: splitPt.geometry.coordinates[0],
            lat: splitPt.geometry.coordinates[1],
            snapped,
          });

          firstPiece = false;
          piece2.properties.waypoints.push({
            lon: splitPt.geometry.coordinates[0],
            lat: splitPt.geometry.coordinates[1],
            snapped,
          });
          piece2.properties.waypoints.push(waypt);
        }
      } else {
        piece2.properties.waypoints.push(waypt);
      }
      i++;
    }
  }

  // Returns the distance of a point along a line-string from the start, in
  // meters. The point should be roughly on the line.
  function distanceAlongLine(line: Feature<LineString>, point: Feature<Point>) {
    // TODO Is there a cheaper way to do this?
    let start = line.geometry.coordinates[0];
    let sliced = lineSlice(start, point, line);
    return length(sliced, { units: "kilometers" }) * 1000.0;
  }
</script>

{#if mode == thisMode}
  <p>Click near a route to split it, or click on the map to cancel</p>
{/if}
