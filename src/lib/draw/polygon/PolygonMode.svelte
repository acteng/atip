<script lang="ts">
  import type { Polygon } from "geojson";
  import { DefaultButton, SecondaryButton } from "lib/govuk";
  import { gjScheme, mode2, newFeatureId } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import type { PolygonTool } from "./polygon_tool";

  export let polygonTool: PolygonTool;

  onMount(() => {
    polygonTool.startNew();
    polygonTool.addEventListenerSuccess(onSuccess);
    polygonTool.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    polygonTool.stop();
    polygonTool.clearEventListeners();
  });

  function onSuccess(feature) {
    gjScheme.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.intervention_type = "area";
      gj.features.push(feature as Feature<Polygon>);
      return gj;
    });

    mode2.set({ mode: "edit-form", id: feature.id });
  }

  function onFailure() {
    mode2.set({ mode: "list" });
  }
</script>

<DefaultButton on:click={() => polygonTool.finish()}>Finish</DefaultButton>
<SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>
