<script lang="ts">
  import ProgressBar from "@megapenthes/svelte4-progressbar";
  import type { LineString } from "geojson";
  import init from "route-snapper";
  import { onMount } from "svelte";
  import type { FeatureWithProps } from "../../../maplibre_helpers";
  import { currentMode, map, routeInfo } from "../../../stores";
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

  let progress: Array<number> = [0 ];
  let routeToolReady = false;

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
        (percentLoaded) => (progress[0] = Math.min(percentLoaded, 90))
      );
      routeTool = new RouteTool($map, graphBytes, routeInfoDeserialised);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
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

  async function fetchWithProgress(
    url,
    setProgress: (number) => void = (percentLoaded) => {}
  ) {
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

 function routeInfoDeserialised() {
  progress[0] = 100;
  routeToolReady = true;
 } 
</script>

{#if !routeToolReady}
  <!-- TODO the text should be fixed, and the progress bar float -->
  <p>Route tool loading</p>
  <ProgressBar bind:series={progress} />
{:else if $currentMode == thisMode}
  <RouteControls {routeTool} extendRoute />
{/if}
