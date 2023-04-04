<script>
  import { map, gjScheme, currentHover } from "../../stores.js";

  export let mode;
  export let routeSnapper;
  export let snapTool;
  export let drawControls;

  $: {
    if (mode == "edit") {
      drawControls.changeMode("static");
    }
  }

  // This is different than the stores.js one!
  let currentlyEditing = null;

  // Calculate hover
  $map.on("mousemove", (e) => {
    if (mode == "edit" && currentlyEditing == null) {
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
    if (mode == "edit" && currentlyEditing == null) {
      currentHover.set(null);
    }
  });

  // Handle clicking the hovered feature
  $map.on("click", (e) => {
    if (mode == "edit" && currentlyEditing == null) {
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
    if (mode == "edit") {
      const editedRoute = e.detail;
      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing);
        // Keep the ID and any properties. Just copy over stuff from routeSnapper.
        // TODO We're depending on implementation details here and knowing what to copy...
        feature.properties.length_meters = editedRoute.properties.length_meters;
        feature.properties.waypoints = editedRoute.properties.waypoints;
        feature.properties.hide_while_editing = false;
        feature.geometry = editedRoute.geometry;
        return gj;
      });

      currentlyEditing = null;

      // TODO Act like we've selected the line-string we just edited?
      mode = "select";
    }
  });

  function startEditing(id) {
    currentHover.set(null);

    gjScheme.update((gj) => {
      let feature = gj.features.find((f) => f.id == id);
      if (feature.geometry.type == "LineString") {
        // Hide it from the regular drawing while we're editing
        feature.properties.hide_while_editing = true;

        currentlyEditing = id;

        // TODO Oops, we need to fix upstream. If they're missing, we can at
        // least attempt the endpoints.
        if (!feature.properties.waypoints) {
          feature.properties.waypoints = [
            {
              lon: feature.geometry.coordinates[0][0],
              lat: feature.geometry.coordinates[0][1],
              snapped: true,
            },
            {
              lon: feature.geometry.coordinates[
                feature.geometry.coordinates.length - 1
              ][0],
              lat: feature.geometry.coordinates[
                feature.geometry.coordinates.length - 1
              ][1],
              snapped: true,
            },
          ];
        }
        routeSnapper.editExisting(feature);
      }
      return gj;
    });
  }
</script>
