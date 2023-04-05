<script>
  import {
    map,
    gjScheme,
    newFeatureId,
    setCurrentlyEditing,
  } from "../../stores.js";

  // "point" or "polygon"
  export let thisMode;
  export let mode;
  export let changeMode;
  export let drawControls;

  // This is state that needs to survive between draw.create and draw.modechange
  let createdFeatureId;

  export function start() {
    drawControls.changeMode(`draw_${thisMode}`);
  }
  export function stop() {
    createdFeatureId = null;
    drawControls.changeMode("static");
    drawControls.deleteAll();
  }

  $map.on("draw.create", (e) => {
    if (mode == thisMode) {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      gjScheme.update((gj) => {
        feature.properties.intervention_type =
          thisMode == "point" ? "other" : "area";
        feature.id = newFeatureId(gj);
        gj.features.push(feature);

        // Remember this, so modechange below works
        createdFeatureId = feature.id;

        // It'd be great to do the callback below right now, but mapbox-gl-draw
        // will infinitely recurse and blow up if we mutate it inside
        // draw.create.

        return gj;
      });
    }
  });

  $map.on("draw.modechange", (e) => {
    if (mode == thisMode) {
      // Remember this before stop() erases it
      let rememberId = createdFeatureId;
      changeMode("edit-attribute");
      if (rememberId) {
        // TODO Seems to work for polygons, but not points? Possibly just a
        // race condition; sidebar doesn't open fast enough? Or we catch a
        // mousemove event?
        setCurrentlyEditing(rememberId);
        createdFeatureId = null;
      } else {
        // Shouldn't happen. If it does, we just fail to open the sidebar form.
        console.error(
          `After drawing a new ${thisMode}, we lost the new feature ID`
        );
      }
    }
  });
</script>

{#if mode == "point" && thisMode == mode}
  <p>Click the map to draw a new point</p>
{:else if mode == "polygon" && thisMode == mode}
  <p>
    Click the map to add a vertex. Click the last vertex or press <strong
      >Enter</strong
    > to finish.
  </p>
{/if}
