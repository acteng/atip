<script>
  import { map, gjScheme, currentHover } from "../../stores.js";

  const thisMode = "edit-geometry";

  export let mode;
  export let routeSnapper;
  export let snapTool;
  export let drawControls;
  export let pointTool;

  export function start() {}
  export function stop() {
    if (currentlyEditing) {
      // We could've been editing anything; just handle all possibilities
      drawControls.changeMode("static");
      drawControls.deleteAll();

      routeSnapper.stop();

      pointTool.stop();

      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing);
        delete feature.properties.hide_while_editing;
        return gj;
      });
    }

    currentlyEditing = null;
    currentHover.set(null);
  }

  // stores.js defines a "currently editing" derived store, referring to
  // editing attributes. This is local state to track what ID we're currently
  // editing for geometry. The two are unrelated; we should rename things.
  let currentlyEditing = null;

  // Calculate hover
  $map.on("mousemove", (e) => {
    if (mode == thisMode && currentlyEditing == null) {
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
    if (mode == thisMode && currentlyEditing == null) {
      currentHover.set(null);
    }
  });

  // Handle clicking the hovered feature
  $map.on("click", (e) => {
    if (mode == thisMode && currentlyEditing == null) {
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
    if (mode == thisMode) {
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
  snapTool.addEventListener("no-new-route", () => {
    if (mode == thisMode) {
      // Don't modify the thing we were just editing
      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing);
        delete feature.properties.hide_while_editing;
        return gj;
      });

      // Stay in this mode
      currentlyEditing = null;
    }
  });

  $map.on("draw.update", (e) => {
    if (mode == thisMode) {
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
    if (mode == thisMode && e.features.length == 0) {
      drawControls.changeMode("static");
      drawControls.deleteAll();
      // TODO drawControls continues to render a faint blue outline around
      // polygons, even though we told it to forget about everything. Sigh.

      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing);
        delete feature.properties.hide_while_editing;
        return gj;
      });

      // Stay in this mode
      currentlyEditing = null;
    }
  });

  pointTool.addEventListener((feature) => {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        let updateFeature = gj.features.find((f) => f.id == currentlyEditing);
        updateFeature.geometry = feature.geometry;
        delete updateFeature.properties.hide_while_editing;
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
      // No need to pass in the existing feature.geometry; it's the same as
      // where the cursor is anyway
      pointTool.start();
    }
  }
</script>

{#if mode == thisMode}
  <p>Click an intervention to edit its geometry</p>
{/if}
