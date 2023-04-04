<script>
  import {
    map,
    gjScheme,
    newFeatureId,
    setCurrentlyEditing,
  } from "../../stores.js";

  export let mode;
  // "point" or "polygon"
  export let type;
  export let drawControls;
  // Maybe null at first
  export let routeSnapper;

  $: {
    if (mode == type) {
      drawControls.changeMode(`draw_${type}`);
      routeSnapper?.stop();
    }
  }

  $map.on("draw.create", (e) => {
    // Be careful; this callback fires for the other PointOrPolygonMode instance!
    if (mode == type) {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      gjScheme.update((gj) => {
        feature.properties.intervention_type =
          type == "point" ? "other" : "area";
        feature.id = newFeatureId(gj);
        gj.features.push(feature);
        return gj;
      });

      // Clear mapbox-gl-draw state
      drawControls.deleteAll();

      mode = "edit-attribute";
      // TODO Seems to work for polygons, but not points?
      setCurrentlyEditing(feature.id);
    }
  });
</script>

{#if mode == "point" && type == mode}
  <p>Click the map to draw a new point</p>
{:else if mode == "polygon" && type == mode}
  <p>
    Click the map to add a vertex. Click the last vertex or press <strong
      >Enter</strong
    > to finish.
  </p>
{/if}
