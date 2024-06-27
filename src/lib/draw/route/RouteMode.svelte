<script lang="ts">
  import type { Feature, LineString, Polygon } from "geojson";
  import { mode, routeTool } from "lib/draw/stores";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "govuk-svelte";
  import { onDestroy, onMount } from "svelte";
  import RouteControls from "./RouteControls.svelte";
  import { cfg } from "lib/draw/config";

  onMount(() => {
    $routeTool!.startRoute();
    $routeTool!.addEventListenerSuccess(onSuccess);
    $routeTool!.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    $routeTool!.stop();
    $routeTool!.clearEventListeners();
  });

  function onSuccess(feature: Feature<LineString | Polygon>) {
    // We did startRoute, so we know it's a LineString
    cfg.newLineStringFeature(feature as Feature<LineString>);
    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }

  function finish() {
    $routeTool!.finish();
  }
</script>

<ButtonGroup>
  <DefaultButton on:click={finish}>Finish</DefaultButton>
  <SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>
</ButtonGroup>

<RouteControls extendRoute />
