<script lang="ts">
  import type { LineString, Point, Polygon } from "geojson";
  import { DefaultButton, SecondaryButton } from "lib/govuk";
  import type { FeatureWithProps } from "lib/maplibre";
  import { editGeometryControls, gjScheme, mode } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature, FeatureUnion } from "types";
  import type { PointTool } from "./point/point_tool";
  import type { PolygonTool } from "./polygon/polygon_tool";
  import type { RouteTool } from "./route/route_tool";

  export let id: number;
  export let pointTool: PointTool;
  export let polygonTool: PolygonTool;
  export let routeTool: RouteTool;

  // As a feature is being edited, store the latest version
  let unsavedFeature: FeatureWithProps<LineString | Polygon> | null = null;

  onMount(() => {
    let maybeFeature: FeatureUnion | null = null;
    gjScheme.update((gj) => {
      maybeFeature = gj.features.find((f) => f.id == id)!;
      // Hide it from the regular drawing while we're editing
      maybeFeature.properties.hide_while_editing = true;
      return gj;
    });
    let feature = maybeFeature!;

    if (feature.geometry.type == "LineString") {
      routeTool.editExistingRoute(feature as Feature<LineString>);
      routeTool.addEventListenerSuccess(onSuccess);
      routeTool.addEventListenerUpdated(onUpdate);
      routeTool.addEventListenerFailure(onFailure);
      editGeometryControls.set("route");
    } else if (feature.geometry.type == "Polygon") {
      if (feature.properties.waypoints) {
        routeTool.editExistingArea(feature as Feature<Polygon>);
        routeTool.addEventListenerSuccess(onSuccess);
        routeTool.addEventListenerUpdated(onUpdate);
        routeTool.addEventListenerFailure(onFailure);
        editGeometryControls.set("snapped-polygon");
      } else {
        polygonTool.editExisting(feature as Feature<Polygon>);
        polygonTool.addEventListenerSuccess(onSuccess);
        polygonTool.addEventListenerUpdated(onUpdate);
        polygonTool.addEventListenerFailure(onFailure);
        editGeometryControls.set("freehand-polygon");
      }
    } else if (feature.geometry.type == "Point") {
      // No need to pass in the existing feature.geometry; it's the same as
      // where the cursor is anyway
      pointTool.start();
      pointTool.addEventListenerSuccess(onSuccess);
      // No auto-save for updates
      pointTool.addEventListenerFailure(onFailure);
      editGeometryControls.set("point");
    }
  });
  // TODO Discuss the state transition. Everything will go to edit-form.
  onDestroy(() => {
    editGeometryControls.set(null);

    pointTool.stop();
    pointTool.clearEventListeners();

    routeTool.stop();
    routeTool.clearEventListeners();

    polygonTool.stop();
    polygonTool.clearEventListeners();

    gjScheme.update((gj) => {
      let featureToBeUpdated = gj.features.find((f) => f.id == id)!;
      if (!featureToBeUpdated) {
        // Should be impossible
        window.alert("Something broke; your edits were lost");
        return gj;
      }

      // Show the feature again
      delete featureToBeUpdated.properties.hide_while_editing;

      // If there are unsaved edits to the feature, copy them over. If the
      // user explicitly canceled, then a failure callback would've run.
      // TODO Think through this again -- when's it happen?
      if (unsavedFeature) {
        updateFeature(featureToBeUpdated, unsavedFeature);
      }
      return gj;
    });
  });

  function onSuccess(editedFeature) {
    gjScheme.update((gj) => {
      let featureToBeUpdated = gj.features.find((f) => f.id == id)!;
      // TODO Should be guaranteed
      updateFeature(featureToBeUpdated, editedFeature);
      delete featureToBeUpdated.properties.hide_while_editing;
      return gj;
    });

    mode.set({ mode: "edit-form", id });
  }

  function onUpdate(feature) {
    // Just remember the update; don't apply it yet
    unsavedFeature = feature;
  }

  function onFailure() {
    // Throw away any updates
    // TODO Refactor these, or think through how they could get called
    gjScheme.update((gj) => {
      let featureToBeUpdated = gj.features.find((f) => f.id == id)!;
      delete featureToBeUpdated.properties.hide_while_editing;
      return gj;
    });

    mode.set({ mode: "edit-form", id });
  }

  // Copy geometry and properties from source to destination
  function updateFeature(
    destination: FeatureUnion,
    source: FeatureWithProps<Point | LineString | Polygon>
  ) {
    destination.geometry = source.geometry;

    // Copy properties that may come from routeTool. Not all tools or cases
    // will produce all of these.
    // TODO We're depending on implementation details here and knowing what to copy...
    if (source.properties.length_meters) {
      destination.properties.length_meters = source.properties.length_meters;
    }
    if (source.properties.waypoints) {
      destination.properties.waypoints = source.properties.waypoints;
    }
    // Only copy route_name if the user hasn't set it. It's not simple to
    // distinguish the user manually editing the name from it being auto-filled
    // previously, so be safe and don't overwrite anything. The user can always
    // use the auto-fill button explicitly.
    if (source.properties.route_name && !destination.properties.name) {
      destination.properties.name = source.properties.route_name;
    }
  }

  function finish() {
    mode.set({ mode: "edit-form", id });
  }

  function cancel() {
    unsavedFeature = null;
    mode.set({ mode: "edit-form", id });
  }
</script>

<DefaultButton on:click={finish}>Finish</DefaultButton>
<SecondaryButton on:click={cancel}>Cancel</SecondaryButton>
