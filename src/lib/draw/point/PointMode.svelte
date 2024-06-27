<script lang="ts">
  import type { Feature, Point } from "geojson";
  import { mode, pointTool } from "lib/draw/stores";
  import { SecondaryButton } from "govuk-svelte";
  import { onDestroy, onMount } from "svelte";
  import PointControls from "./PointControls.svelte";
  import { cfg } from "lib/draw/config";

  onMount(() => {
    $pointTool!.start();
    $pointTool!.addEventListenerSuccess(onSuccess);
    $pointTool!.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    $pointTool!.stop();
    $pointTool!.clearEventListeners();
  });

  function onSuccess(feature: Feature<Point>) {
    cfg.newPointFeature(feature);
    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }
</script>

<SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>

<PointControls editingExisting={false} />
