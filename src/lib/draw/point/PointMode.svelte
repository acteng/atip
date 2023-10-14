<script lang="ts">
  import type { Point } from "geojson";
  import { SecondaryButton } from "lib/govuk";
  import type { FeatureWithProps } from "lib/maplibre";
  import { gjScheme, mode, newFeatureId } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import type { PointTool } from "./point_tool";

  export let pointTool: PointTool;

  onMount(() => {
    pointTool.start();
    pointTool.addEventListenerSuccess(onSuccess);
    pointTool.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    pointTool.stop();
    pointTool.clearEventListeners();
  });

  function onSuccess(feature: FeatureWithProps<Point>) {
    gjScheme.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.intervention_type = "other";
      gj.features.push(feature as Feature<Point>);
      return gj;
    });

    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }
</script>

<SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>
