<script>
  import nearestPointOnLine from "@turf/nearest-point-on-line";
  import lineSplit from "@turf/line-split";
  import { gjScheme, map, emptyGeojson, newFeatureId } from "../../stores.js";
  import {
    overwriteSource,
    overwriteLayer,
    drawCircle,
  } from "../../maplibre_helpers.js";

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

    const nearbyPoint = { x: e.point.x - snapDistancePixels, y: e.point.y };
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

  $map.on("click", (e) => {
    if (mode != thisMode) {
      return;
    }

    if (snappedIndex != null) {
      let result = lineSplit($gjScheme.features[snappedIndex], cursor);
      if (result.features.length == 2) {
        let piece1 = result.features[0];
        let piece2 = result.features[1];

        gjScheme.update((gj) => {
          // Keep the old ID for one, assign a new ID to the other
          piece1.id = gj.features[snappedIndex].id;
          piece2.id = newFeatureId(gj);

          // The properties get lost. Copy everything to both
          piece1.properties = gj.features[snappedIndex].properties;
          // "Deep clone"
          piece2.properties = JSON.parse(JSON.stringify(piece1.properties));

          // TODO Need to fix length_meters and waypoints!

          // Replace the one LineString we snapped to with the two new pieces
          gj.features.splice(snappedIndex, 1, piece1, piece2);

          return gj;
        });
      }
    }
    // TODO Edit one of the pieces?
    changeMode("edit-attribute");
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
    $map.getSource(source).setData(gj);
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
</script>

{#if mode == thisMode}
  <p>Click near a route to split it, or click on the map to cancel</p>
{/if}
