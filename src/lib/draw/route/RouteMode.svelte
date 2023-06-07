<script lang="ts">
  import { onMount } from "svelte";
  import init from "route-snapper";
  import { fetchWithProgress } from "route-snapper/lib.js";
  import { RouteTool } from "./route_tool";
  import {
    gjScheme,
    map,
    newFeatureId,
    formOpen,
    currentMode,
  } from "../../../stores";
  import type { EventHandler, Feature, Mode } from "../../../types";
  import type { LineString } from "geojson";
  import RouteControls from "./RouteControls.svelte";

  const thisMode = "route";

  export let changeMode: (m: Mode) => void;
  export let url: string;

  let progress: HTMLDivElement;
  export let routeTool: RouteTool;
  export let eventHandler: EventHandler;

  // These're for drawing a new route, NOT for editing an existing.
  // GeometryMode manages the latter.
  export function start() {
    // When we enter this mode by clicking the button from edit-geometry, we
    // call routeTool.stop(). Re-activate it if so.
    if (!routeTool.isActive()) {
      routeTool.startRoute();

      routeTool.setHandlers(eventHandler);
    }
  }
  export function stop() {
    routeTool?.stop();
  }

  onMount(async () => {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      const graphBytes = await fetchWithProgress(url, progress);
      routeTool = new RouteTool($map, graphBytes, "route");
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      progress.innerHTML = "Failed to load";
      return;
    }

    routeTool.addEventListenerFailure(() => {
      changeMode("edit-attribute");
    });

    routeTool.addEventListenerSuccessRoute((feature) => {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "route";
        gj.features.push(feature as Feature<LineString>);
        return gj;
      });

      changeMode("edit-attribute");
      formOpen.set(feature.id as number);
    });
  });
</script>

{#if !routeTool}
  <!-- TODO the text should be fixed, and the progress bar float -->
  <div bind:this={progress}>Route tool loading...</div>
{:else if $currentMode == thisMode}
  <RouteControls {routeTool} extendRoute />
{/if}
