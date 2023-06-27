<script lang="ts">
  import type { LineString } from "geojson";
  import init from "route-snapper";
  import { fetchWithProgress } from "route-snapper/lib.js";
  import { onMount } from "svelte";
  import type { FeatureWithProps } from "../../../maplibre_helpers";
  import {
    currentMode,
    formOpen,
    gjScheme,
    map,
    newFeatureId,
  } from "../../../stores";
  import type { Feature, Mode } from "../../../types";
  import type { EventHandler } from "../event_handler";
  import { RouteTool } from "./route_tool";
  import RouteControls from "./RouteControls.svelte";

  const thisMode = "route";

  export let changeMode: (m: Mode) => void;
  export let url: string;

  let progress: HTMLDivElement;
  export let routeTool: RouteTool;
  export let eventHandler: EventHandler;

  // While the new feature is being drawn, remember its last valid version
  let unsavedFeature: FeatureWithProps<LineString> | null = null;

  // These're for drawing a new route, NOT for editing an existing.
  // GeometryMode manages the latter.
  export function start() {
    // When we enter this mode by clicking the button from edit-geometry, we
    // call routeTool.stop(). Re-activate it if so.
    if (!routeTool.isActive()) {
      routeTool.setHandlers(eventHandler);
      routeTool.startRoute();
    }
  }
  export function stop() {
    routeTool?.stop();

    // If we leave this mode without saving, still create a new feature
    if (unsavedFeature) {
      gjScheme.update((gj) => {
        unsavedFeature.id = newFeatureId(gj);
        unsavedFeature.properties.intervention_type = "route";
        gj.features.push(unsavedFeature as Feature<LineString>);
        return gj;
      });
      unsavedFeature = null;
    }
  }

  onMount(async () => {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      const graphBytes = await fetchWithProgress(url, progress);
      routeTool = new RouteTool($map, graphBytes);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      progress.innerHTML = "Failed to load";
      return;
    }

    routeTool.addEventListenerSuccess((feature) => {
      if ($currentMode == thisMode) {
        gjScheme.update((gj) => {
          feature.id = newFeatureId(gj);
          feature.properties.intervention_type = "route";
          gj.features.push(feature as Feature<LineString>);
          return gj;
        });

        unsavedFeature = null;

        changeMode("edit-attribute");
        formOpen.set(feature.id as number);
      }
    });

    routeTool.addEventListenerUpdated((feature) => {
      unsavedFeature = feature as FeatureWithProps<LineString>;
    });

    routeTool.addEventListenerFailure(() => {
      if ($currentMode == thisMode) {
        changeMode("edit-attribute");
      }
    });
  });
</script>

{#if !routeTool}
  <!-- TODO the text should be fixed, and the progress bar float -->
  <div bind:this={progress}>Route tool loading...</div>
{:else if $currentMode == thisMode}
  <RouteControls {routeTool} extendRoute />
{/if}
