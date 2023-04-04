<script>
  import {
    map,
    currentHover,
    currentlyEditing,
    setCurrentlyEditing,
  } from "../../stores.js";

  export let mode;
  export let drawControls;

  $: {
    if (mode == "edit-attribute") {
      drawControls.changeMode("static");
    }
  }

  // Calculate hover
  $map.on("mousemove", (e) => {
    if (mode == "edit-attribute" && $currentlyEditing == null) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      // TODO ? syntax
      var newHoverId = null;
      if (results.length > 0) {
        newHoverId = results[0].id;
      }
      currentHover.set(newHoverId);
    }
  });
  $map.on("mouseout", () => {
    if (mode == "edit-attribute" && $currentlyEditing == null) {
      currentHover.set(null);
    }
  });

  // Handle clicking the hovered feature
  $map.on("click", (e) => {
    if (mode == "edit-attribute") {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      if (results.length > 0) {
        setCurrentlyEditing(results[0].id);
      } else {
        setCurrentlyEditing(null);
      }
    }
  });
</script>

{#if mode == "edit-attribute"}
  <p>Click an intervention to fill out its attributes</p>
{/if}
