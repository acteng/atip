<script lang="ts">
  import type { LineString, Point, Polygon } from "geojson";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "lib/govuk";
  import type { FeatureWithProps } from "lib/maplibre";
  import { interventionName } from "lib/sidebar/scheme_data";
  import { gjScheme, mode, pointTool, polygonTool, routeTool } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature, FeatureUnion, Schema } from "types";
  import PointControls from "./point/PointControls.svelte";
  import PolygonControls from "./polygon/PolygonControls.svelte";
  import RouteControls from "./route/RouteControls.svelte";
  import SnapPolygonControls from "./snap_polygon/SnapPolygonControls.svelte";

  export let schema: Schema;
  export let id: number;

  let name = "";
  let controls = "";

  // As a feature is being edited, store the latest version
  let unsavedFeature: FeatureWithProps<Point | LineString | Polygon> | null =
    null;

  onMount(() => {
    let maybeFeature: FeatureUnion | null = null;
    gjScheme.update((gj) => {
      maybeFeature = gj.features.find((f) => f.id == id)!;
      // Hide it from the regular drawing while we're editing
      maybeFeature.properties.hide_while_editing = true;
      return gj;
    });
    let feature = maybeFeature!;
    name = interventionName(schema, feature);

    if (feature.geometry.type == "LineString") {
      $routeTool?.editExistingRoute(feature as Feature<LineString>);
      $routeTool?.addEventListenerSuccess(onSuccess);
      $routeTool?.addEventListenerUpdated(onUpdate);
      $routeTool?.addEventListenerFailure(onFailure);
      controls = "route";
    } else if (feature.geometry.type == "Polygon") {
      if (feature.properties.waypoints) {
        $routeTool?.editExistingArea(feature as Feature<Polygon>);
        $routeTool?.addEventListenerSuccess(onSuccess);
        $routeTool?.addEventListenerUpdated(onUpdate);
        $routeTool?.addEventListenerFailure(onFailure);
        controls = "snapped-polygon";
      } else {
        $polygonTool?.editExisting(feature as Feature<Polygon>);
        $polygonTool?.addEventListenerSuccess(onSuccess);
        $polygonTool?.addEventListenerUpdated(onUpdate);
        $polygonTool?.addEventListenerFailure(onFailure);
        controls = "freehand-polygon";
      }
    } else if (feature.geometry.type == "Point") {
      // No need to pass in the existing feature.geometry; it's the same as
      // where the cursor is anyway
      $pointTool?.start();
      $pointTool?.addEventListenerSuccess(onSuccess);
      // No auto-save for updates
      $pointTool?.addEventListenerFailure(onFailure);
      controls = "point";
    }
  });
  onDestroy(() => {
    $pointTool?.stop();
    $pointTool?.clearEventListeners();

    $routeTool?.stop();
    $routeTool?.clearEventListeners();

    $polygonTool?.stop();
    $polygonTool?.clearEventListeners();

    gjScheme.update((gj) => {
      let featureToBeUpdated = gj.features.find((f) => f.id == id)!;
      if (!featureToBeUpdated) {
        // Should be impossible
        window.alert("Something broke; your edits were lost");
        return gj;
      }

      // Show the feature again
      delete featureToBeUpdated.properties.hide_while_editing;

      // Apply any updates to the feature. Failure / cancel cases will clear
      // out unsavedFeature.
      if (unsavedFeature) {
        updateFeature(featureToBeUpdated, unsavedFeature);
      }
      return gj;
    });
  });

  function onSuccess(feature: FeatureWithProps<Point | Polygon | LineString>) {
    // Let onDestroy apply the update
    unsavedFeature = feature;
    mode.set({ mode: "edit-form", id });
  }

  function onUpdate(feature: FeatureWithProps<Polygon | LineString>) {
    // Just remember the update; don't apply it yet
    unsavedFeature = feature;
  }

  function onFailure() {
    // User canceled in the tool, so throw away unsaved updates
    unsavedFeature = null;
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

<h2>Editing {name}</h2>

<ButtonGroup>
  <DefaultButton on:click={finish}>Finish</DefaultButton>
  <SecondaryButton on:click={cancel}>Cancel</SecondaryButton>
</ButtonGroup>

{#if controls == "point"}
  <PointControls editingExisting />
{:else if controls == "route"}
  <RouteControls extendRoute={false} />
{:else if controls == "freehand-polygon"}
  <PolygonControls />
{:else if controls == "snapped-polygon"}
  <SnapPolygonControls />
{/if}
