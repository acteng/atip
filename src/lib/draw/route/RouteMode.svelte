<script lang="ts">
  import type { LineString } from "geojson";
  import init from "route-snapper";
  import { fetchWithProgress } from "route-snapper/lib.js";
  import { onMount } from "svelte";
  import type { FeatureWithProps } from "../../../maplibre_helpers";
  import { currentMode, map } from "../../../stores";
  import type { Mode } from "../../../types";
  import { handleUnsavedFeature, setupEventListeners } from "../common";
  import type { EventHandler } from "../event_handler";
  import { RouteTool } from "./route_tool";
  import RouteControls from "./RouteControls.svelte";
  import FetchProgressBar from "../../FetchProgressBar.svelte";

  const thisMode = "route";

  export let changeMode: (m: Mode) => void;
  export let url: string;

  export let routeTool: RouteTool;
  export let eventHandler: EventHandler;

  // While the new feature is being drawn, remember its last valid version
  let unsavedFeature: { value: FeatureWithProps<LineString> | null } = {
    value: null,
  };
  let loadError = false;

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
    handleUnsavedFeature(unsavedFeature, "route");
  }

  onMount(async () => {
    await init();
  });

  function setupTool(bytes: Uint8Array) {
    try {
      routeTool = new RouteTool($map, bytes);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      loadError = true;
      return;
    }

    setupEventListeners(
      routeTool,
      unsavedFeature,
      "route",
      thisMode,
      changeMode
    );
  }
</script>
{#if !routeTool}
  {#if loadError}
    Route tool failed to load
  {:else}
    <FetchProgressBar {url} onSuccess={setupTool} />
  {/if}
{:else if $currentMode == thisMode}
  <RouteControls {routeTool} extendRoute />
{/if}
