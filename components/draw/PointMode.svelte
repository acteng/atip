<script>
  import {
    map,
    gjScheme,
    newFeatureId,
    emptyGeojson,
    setCurrentlyEditing,
  } from "../../stores.js";
  import {
    overwriteSource,
    overwriteLayer,
    drawCircle,
  } from "../../maplibre_helpers.js";
  import { colors, circleRadius } from "../../colors.js";

  const thisMode = "point";

  export let mode;
  export let changeMode;

  // An optional Feature<Point>
  let cursor = null;

  export function start() {}
  export function stop() {
    cursor = null;
  }

  $map.on("mousemove", (e) => {
    if (mode == thisMode) {
      cursor = pointFeature(e.lngLat.toArray());
    }
  });
  $map.on("click", (e) => {
    // TODO is it possible cursor is null?
    if (mode == thisMode && cursor) {
      gjScheme.update((gj) => {
        cursor.id = newFeatureId(gj);
        cursor.properties.intervention_type = "other";
        gj.features.push(cursor);
        return gj;
      });

      // Remember before stop()
      let id = cursor.id;
      changeMode("edit-attribute");
      setCurrentlyEditing(id);
    }
  });

  // Render
  const source = "edit-point-mode";
  overwriteSource($map, source, {
    type: "geojson",
    data: emptyGeojson(),
  });
  overwriteLayer($map, {
    id: "edit-point-mode",
    source,
    ...drawCircle(colors.hovering, circleRadius, 1.0),
  });

  $: {
    let gj = emptyGeojson();
    if (cursor) {
      gj.features.push(cursor);
    }
    $map.getSource(source).setData(gj);
  }

  function pointFeature(pt) {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: pt,
      },
    };
  }
</script>

{#if mode == thisMode}
  <p>Click to add a new point</p>
{/if}
