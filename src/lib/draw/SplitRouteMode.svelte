<script lang="ts">
  import type { GeoJSONSource } from "maplibre-gl";
  import type { Feature, LineString } from "geojson";
  import nearestPointOnLine from "@turf/nearest-point-on-line";
  import { point } from "@turf/helpers";
  import length from "@turf/length";
  import lineSplit from "@turf/line-split";
  import lineSlice from "@turf/line-slice";
  import { gjScheme, map, newFeatureId } from "../../stores";
  import {
    emptyGeojson,
    overwriteSource,
    overwriteLayer,
    drawCircle,
  } from "../../maplibre_helpers";

  const thisMode = "split-route";

  const circleRadiusPixels = 10;
  const snapDistancePixels = 30;

  export let mode;
  export let changeMode;

  export function start() {}
  export function stop() {
    cursor = null;
    snappedIndex = null;
  }

  // An optional Feature<Point>
  let cursor = null;
  // Index into gjScheme of what we're snapped to
  let snappedIndex = null;

  $map.on("mousemove", (e) => {
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
    let candidates = [];
    for (let [index, f] of $gjScheme.features.entries()) {
      if (f.geometry.type == "LineString") {
        let snapped = nearestPointOnLine(f.geometry, cursor, {
          units: "kilometers",
        });
        if (snapped.properties.dist <= thresholdKm) {
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
  });

  $map.on("click", () => {
    if (mode != thisMode) {
      return;
    }

    if (snappedIndex == null) {
      // We clicked the map, stop the tool
      changeMode("edit-attribute");
    } else {
      let result = lineSplit(
        $gjScheme.features[snappedIndex] as Feature<LineString>,
        cursor
      );
      if (result.features.length == 2) {
        let piece1 = result.features[0];
        let piece2 = result.features[1];

        gjScheme.update((gj) => {
          // Keep the old ID for one, assign a new ID to the other
          piece1.id = gj.features[snappedIndex].id;
          piece2.id = newFeatureId(gj);

          // The properties get lost. Copy everything to both
          piece1.properties = JSON.parse(
            JSON.stringify(gj.features[snappedIndex].properties)
          );
          // "Deep clone"
          piece2.properties = JSON.parse(JSON.stringify(piece1.properties));

          fixRouteProperties(gj.features[snappedIndex], piece1, piece2, cursor);

          // Replace the one LineString we snapped to with the two new pieces
          gj.features.splice(snappedIndex, 1, piece1, piece2);

          return gj;
        });
      }

      // Stay in this mode, but reset state
      stop();
    }
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

  function cursorFeature(pt, snapped) {
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
  function fixRouteProperties(original, piece1, piece2, splitPt) {
    // Fix length
    piece1.properties.length_meters =
      length(piece1.geometry, { units: "kilometers" }) * 1000.0;
    piece2.properties.length_meters =
      length(piece2.geometry, { units: "kilometers" }) * 1000.0;

    piece1.properties.waypoints = [];
    piece2.properties.waypoints = [];

    let splitDist = distanceAlongLine(original, splitPt);
    let firstPiece = true;
    // TODO Can we iterate over an array's contents and get the index at the same time?
    let i = 0;
    for (let waypt of original.properties.waypoints) {
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
            waypt.snapped && original.properties.waypoints[i - 1].snapped;

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
  function distanceAlongLine(lineFeature, pointFeature) {
    // TODO Is there a cheaper way to do this?
    let start = lineFeature.geometry.coordinates[0];
    let sliced = lineSlice(start, pointFeature, lineFeature);
    return length(sliced, { units: "kilometers" }) * 1000.0;
  }
</script>

{#if mode == thisMode}
  <p>Click near a route to split it, or click on the map to cancel</p>
{/if}
