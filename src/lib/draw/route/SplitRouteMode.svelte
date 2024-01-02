<script lang="ts">
  // Note this component has to embedded underneath <Map> for the <GeoJSON>
  // component to work. This is an exception to how LeftSidebar manages most
  // modes.
  import { point } from "@turf/helpers";
  import length from "@turf/length";
  import lineSlice from "@turf/line-slice";
  import lineSplit from "@turf/line-split";
  import nearestPointOnLine from "@turf/nearest-point-on-line";
  // Note we don't use our specialization of Feature here
  import type { Feature, LineString, Point, Position } from "geojson";
  import { gjSchemeCollection, mode, newFeatureId } from "lib/draw/stores";
  import { emptyGeojson, layerId, setPrecision } from "lib/maplibre";
  import type { MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";
  import { CircleLayer, GeoJSON } from "svelte-maplibre";
  import type { Feature as OurFeature } from "types";
  import splitIcon from "../../../../assets/split_route.svg";

  const circleRadiusPixels = 10;
  const snapDistancePixels = 30;

  onMount(() => {
    // Use a fallback icon in case the image fails
    $map.getCanvas().style.cursor = `url(${splitIcon}), crosshair`;

    $map.on("mousemove", onMouseMove);
    $map.on("click", onClick);
  });
  onDestroy(() => {
    $map.getCanvas().style.cursor = "inherit";

    $map.off("mousemove", onMouseMove);
    $map.off("click", onClick);
  });

  let snappedCursor: Feature<Point> | null = null;
  // Index into gjScheme of what we're snapped to
  let snappedIndex: number | null = null;

  let snappedCursorGj = emptyGeojson();
  $: {
    let gj = emptyGeojson();
    if (snappedCursor) {
      gj.features.push(snappedCursor);
    }
    snappedCursorGj = gj;
  }

  function onMouseMove(e: MapMouseEvent) {
    snappedCursor = null;
    snappedIndex = null;

    let cursor = cursorFeature(e.lngLat.toArray());
    const nearbyPoint: [number, number] = [
      e.point.x - snapDistancePixels,
      e.point.y,
    ];
    const thresholdKm =
      $map.unproject(e.point).distanceTo($map.unproject(nearbyPoint)) / 1000.0;

    // Are we snapped to anything?
    let candidates: [number, Position, number][] = [];
    for (let [index, f] of $gjSchemeCollection.features.entries()) {
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
      snappedCursor = cursorFeature(candidates[0][1]);
      snappedIndex = candidates[0][0];
    }
  }

  function onClick() {
    if (snappedIndex == null) {
      // We clicked the map, stop the tool
      mode.set({ mode: "list" });
    } else {
      // TODO Can we avoid using ! everywhere here?
      let result = lineSplit(
        $gjSchemeCollection.features[snappedIndex!] as Feature<LineString>,
        snappedCursor!
      );
      if (result.features.length == 2) {
        let piece1 = result.features[0];
        let piece2 = result.features[1];
        // lineSplit may introduce unnecessary coordinate precision
        piece1.geometry.coordinates =
          piece1.geometry.coordinates.map(setPrecision);
        piece2.geometry.coordinates =
          piece2.geometry.coordinates.map(setPrecision);

        gjSchemeCollection.update((gj) => {
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
            snappedCursor!
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
      snappedCursor = null;
      snappedIndex = null;
    }
  }

  // The escape key isn't registered at all for keypress, so use keydown
  function onKeyDown(e: KeyboardEvent) {
    if (e.key == "Escape") {
      e.stopPropagation();
      mode.set({ mode: "list" });
    }
  }

  function cursorFeature(pt: number[]): Feature<Point> {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: setPrecision(pt),
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

<svelte:window on:keydown={onKeyDown} />

<GeoJSON data={snappedCursorGj}>
  <CircleLayer
    {...layerId("draw-split-route")}
    paint={{ "circle-color": "black", "circle-radius": circleRadiusPixels }}
  />
</GeoJSON>
