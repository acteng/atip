<script lang="ts">
  import { routeTool } from "lib/draw/stores";
  import { ErrorMessage } from "lib/govuk";
  import init from "route-snapper";
  import { map } from "stores";
  import { onMount } from "svelte";
  import { RouteTool } from "./route_tool";

  export let url: string;

  let progress: number = 0;
  let routeToolReady = false;
  $: downloadComplete = progress >= 100;
  let failedToLoadRouteTool = false;

  onMount(async () => {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      const graphBytes = await fetchWithProgress(url);
      routeTool.set(new RouteTool($map, graphBytes));
      progress = 100;
      routeToolReady = true;
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      failedToLoadRouteTool = true;
    }
  });

  // This requires the server to send back a Content-Length header. The actual
  // bytes received may exceed this length (when the file is compressed), which
  // means setProgress may get percentages over 100.
  async function fetchWithProgress(url: string) {
    const response = await fetch(url);
    // TODO Handle error cases better
    const reader = response.body!.getReader();

    let lengthHeader = response.headers.get("Content-Length");
    if (!lengthHeader) {
      throw new Error(`No Content-Length header from ${url}`);
    }
    const contentLength = parseInt(lengthHeader);

    let receivedLength = 0;
    let chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      chunks.push(value);
      receivedLength += value.length;

      progress = (100.0 * receivedLength) / contentLength;
    }

    let allChunks = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
      allChunks.set(chunk, position);
      position += chunk.length;
    }

    return allChunks;
  }
</script>

{#if !routeToolReady && !failedToLoadRouteTool && !downloadComplete}
  <label for="route-loading">Route tool loading</label>
  <progress id="route-loading" value={progress} />
{:else if downloadComplete && !routeToolReady && !failedToLoadRouteTool}
  <label for="route-unpacking">Route data unpacking</label>
  <progress id="route-unpacking" />
{:else if failedToLoadRouteTool}
  <ErrorMessage errorMessage="Failed to load route snapper" />
{/if}

<style>
  progress {
    width: 100%;
  }
</style>
