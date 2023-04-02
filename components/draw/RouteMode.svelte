<script>
  import { onMount, onDestroy } from "svelte";
  import { init, RouteSnapper, fetchWithProgress } from "route-snapper/lib.js";

  import { gjScheme, map, newFeatureId } from "../../stores.js";

  export let mode;
  export let url;

  let snapTool;
  let snapProgress;
  let routeSnapper;

  onMount(async () => {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      const graphBytes = await fetchWithProgress(url, snapProgress);
      routeSnapper = new RouteSnapper($map, graphBytes, snapTool);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      snapTool.innerHTML = "Failed to load";
    }

    snapTool.addEventListener("activate", () => {
      mode = "route";
    });
    snapTool.addEventListener("no-new-route", () => {
      mode = "select";
    });

    snapTool.addEventListener("new-route", (e) => {
      const feature = e.detail;
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "route";
        gj.features.push(feature);
        return gj;
      });

      // TODO Act like we've selected the line-string we just drew
      mode = "select";
    });
  });

  onDestroy(() => {
    routeSnapper?.tearDown();
  });
</script>

<div bind:this={snapTool}>
  <!-- TODO the text should be fixed, and the progress bar float -->
  <div bind:this={snapProgress}>Route tool loading...</div>
</div>
