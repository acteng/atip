<script lang="ts">
  import type { LineString } from "geojson";
  import init from "route-snapper";
  import { onMount, tick } from "svelte";
  import type { FeatureWithProps } from "../../../maplibre_helpers";
  import { currentMode, map } from "../../../stores";
  import type { Mode } from "../../../types";
  import { handleUnsavedFeature, setupEventListeners } from "../common";
  import type { EventHandler } from "../event_handler";
  import { RouteTool } from "./route_tool";
  import RouteControls from "./RouteControls.svelte";

  const thisMode = "route";

  export let changeMode: (m: Mode) => void;
  export let url: string;

  export let routeTool: RouteTool;
  export let eventHandler: EventHandler;

  let progress: number = 0;
  let routeToolReady = false;
  $: downloadComplete = progress >= 100;
  let failedToLoadRouteTool = false;

  // While the new feature is being drawn, remember its last valid version
  let unsavedFeature: { value: FeatureWithProps<LineString> | null } = {
    value: null,
  };

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

    console.log(`Grabbing ${url}`);
    try {
      const graphBytes = await fetchWithProgress(
        url,
        (percentLoaded) => (progress = percentLoaded)
      );
      routeTool = new RouteTool($map, graphBytes, routeToolInitialised);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      failedToLoadRouteTool = true;

      return;
    }

    setupEventListeners(
      routeTool,
      unsavedFeature,
      "route",
      thisMode,
      changeMode
    );
  });

  async function fetchWithProgress(url, setProgress: (number) => void) {
    const response = await fetch(url);
    const reader = response.body.getReader();

    const contentLength = parseInt(response.headers.get("Content-Length"));

    let receivedLength = 0;
    let chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      chunks.push(value);
      receivedLength += value.length;

      const percent = (100.0 * receivedLength) / contentLength;
      setProgress(percent);
    }

    let allChunks = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
      allChunks.set(chunk, position);
      position += chunk.length;
    }

    return allChunks;
  }

  function routeToolInitialised() {
    progress = 100;
    routeToolReady = true;
  }
</script>

{#if !routeToolReady && !failedToLoadRouteTool && !downloadComplete}
  <label for="route-loading">Route tool loading</label>
  <progress id="route-loading" value={progress} />
{:else if downloadComplete && !routeToolReady && !failedToLoadRouteTool}
  <label for="route-unpacking">Route data unpacking</label>
  <progress id="route-unpacking" />
{:else if failedToLoadRouteTool}
  <p>Failed to load</p>
{:else if $currentMode == thisMode}
  <RouteControls {routeTool} extendRoute />
{/if}

<style>
  progress {
    width: 100%;
  }
</style>
