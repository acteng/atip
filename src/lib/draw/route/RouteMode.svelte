<script lang="ts">
  import type { LineString } from "geojson";
  import { DefaultButton, SecondaryButton } from "lib/govuk";
  import { gjScheme, mode, newFeatureId } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import type { RouteTool } from "./route_tool";

  export let routeTool: RouteTool;

  onMount(() => {
    routeTool.startRoute();
    routeTool.addEventListenerSuccess(onSuccess);
    routeTool.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    routeTool.stop();
    routeTool.clearEventListeners();
  });

  function onSuccess(feature) {
    gjScheme.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.intervention_type = "route";
      if (feature.properties.route_name) {
        feature.properties.name = feature.properties.route_name;
        delete feature.properties.route_name;
      }
      gj.features.push(feature as Feature<LineString>);
      return gj;
    });

    mode.set({ mode: "edit-form", id: feature.id });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }

  // TODO It'd be nice to wire up reactivity to RouteTool directly.
  let snapping = true;
  function onKeyDown(e: KeyboardEvent) {
    if (e.key == "Shift") {
      snapping = false;
    }
  }
  function onKeyUp(e: KeyboardEvent) {
    if (e.key == "Shift") {
      snapping = true;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp} />

{#if snapping}
  <p>
    Snapping to existing roads. Press <b>Shift</b>
    to draw anywhere
  </p>
{:else}
  <p>
    Drawing points anywhere. Release <b>Shift</b>
    to snap to roads
  </p>
{/if}
<div>
  <DefaultButton on:click={() => routeTool.finish()}>Finish</DefaultButton>
</div>
<div><SecondaryButton on:click={onFailure}>Cancel</SecondaryButton></div>
