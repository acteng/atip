<script lang="ts">
  import type { Feature, Polygon } from "geojson";
  import { mode, polygonTool } from "lib/draw/stores";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "govuk-svelte";
  import { onDestroy, onMount } from "svelte";
  import PolygonControls from "./PolygonControls.svelte";
  import { cfg } from "lib/draw/config";

  onMount(() => {
    $polygonTool!.startNew();
    $polygonTool!.addEventListenerSuccess(onSuccess);
    $polygonTool!.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    $polygonTool!.stop();
    $polygonTool!.clearEventListeners();
  });

  function onSuccess(feature: Feature<Polygon>) {
    cfg.newPolygonFeature(feature);
    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }

  function finish() {
    $polygonTool!.finish();
  }
</script>

<ButtonGroup>
  <DefaultButton on:click={finish}>Finish</DefaultButton>
  <SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>
</ButtonGroup>

<PolygonControls />
