<script>
  import { map, gjScheme, currentHover } from "../../stores.js";

  export let mode;
  export let routeSnapper;
  export let snapTool;
  export let drawControls;

  $: {
    if (mode == "edit-geometry") {
      drawControls.changeMode("static");
    }
  }

  // This is different than the stores.js one!
  let currentlyEditing = null;

  // Calculate hover
  $map.on("mousemove", (e) => {
    if (mode == "edit-geometry" && currentlyEditing == null) {
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
    if (mode == "edit-geometry" && currentlyEditing == null) {
      currentHover.set(null);
    }
  });

  // Handle clicking the hovered feature
  $map.on("click", (e) => {
    if (mode == "edit-geometry" && currentlyEditing == null) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      if (results.length > 0) {
        startEditing(results[0].id);
      }
    }
  });

  snapTool.addEventListener("new-route", (e) => {
    if (mode == "edit-geometry") {
      const editedRoute = e.detail;
      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing);
        // Keep the ID and any properties. Just copy over stuff from routeSnapper.
        // TODO We're depending on implementation details here and knowing what to copy...
        feature.properties.length_meters = editedRoute.properties.length_meters;
        feature.properties.waypoints = editedRoute.properties.waypoints;
        delete feature.properties.hide_while_editing;
        feature.geometry = editedRoute.geometry;
        return gj;
      });

      // Stay in this mode
      currentlyEditing = null;
    }
  });

  $map.on("draw.update", (e) => {
    if (mode == "edit-geometry") {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      gjScheme.update((gj) => {
        let updateFeature = gj.features.find((f) => f.id == currentlyEditing);
        updateFeature.geometry = feature.geometry;
        return gj;
      });

      // Stay in this mode
    }
  });

  $map.on("draw.selectionchange", (e) => {
    if (mode == "edit-geometry" && e.features.length == 0) {
      drawControls.changeMode("static");
      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing);
        delete feature.properties.hide_while_editing;
        return gj;
      });

      // Stay in this mode
      currentlyEditing = null;
    }
  });

  function startEditing(id) {
    currentHover.set(null);

    let feature;
    gjScheme.update((gj) => {
      feature = gj.features.find((f) => f.id == id);
      // Hide it from the regular drawing while we're editing
      feature.properties.hide_while_editing = true;
      return gj;
    });

    currentlyEditing = id;

    if (feature.geometry.type == "LineString") {
      routeSnapper.editExisting(feature);
    } else if (feature.geometry.type == "Polygon") {
      // The feature already has an ID set, so no need to check what add() returns
      drawControls.add(feature);
      drawControls.changeMode("direct_select", { featureId: currentlyEditing });
    } else if (feature.geometry.type == "Point") {
      drawControls.add(feature);
      // We can't direct_select a point
      // TODO The UX is awkward. Override the style and make the point much larger?
      drawControls.changeMode("simple_select");
    }
  }
</script>

{#if mode == "edit-geometry"}
  <p>Click an intervention to edit its geometry</p>
{/if}
