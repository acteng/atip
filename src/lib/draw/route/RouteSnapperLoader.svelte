<script lang="ts">
  import { routeTool } from "lib/draw/stores";
  import { ErrorMessage } from "govuk-svelte";
  import { map } from "stores";
  import { onMount } from "svelte";
  import { init, RouteTool } from "route-snapper-ts";
  import { routeToolGj, snapMode, undoLength } from "./stores";
  import { fetchWithProgress } from "lib/common";

  export let url: string;

  let progress: number = 0;
  let routeToolReady = false;
  $: downloadComplete = progress >= 100;
  let failedToLoadRouteTool = false;

  onMount(async () => {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      const graphBytes = await fetchWithProgress(url, (p) => {
        progress = p;
      });
      routeTool.set(
        new RouteTool($map, graphBytes, routeToolGj, snapMode, undoLength),
      );
      progress = 100;
      routeToolReady = true;
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      failedToLoadRouteTool = true;
    }
  });
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
