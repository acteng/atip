<script>
  import { onMount, onDestroy } from "svelte";
  import { init, RouteSnapper, fetchWithProgress } from "route-snapper/lib.js";

  import {
    gjScheme,
    map,
    newFeatureId,
    setCurrentlyEditing,
  } from "../../stores.js";

  const thisMode = "route";

  export let mode;
  export let changeMode;
  export let url;

  export let snapTool;
  let snapProgress;
  export let routeSnapper;

  // These're for drawing a new route, NOT for editing an existing.
  // GeometryMode manages the latter.
  export function start() {}
  export function stop() {
    routeSnapper?.stop();
  }

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
      if (mode == "edit-attribute") {
        changeMode(thisMode);
      }
    });
    snapTool.addEventListener("no-new-route", () => {
      changeMode("edit-attribute");
    });

    snapTool.addEventListener("new-route", (e) => {
      if (mode == thisMode) {
        const feature = e.detail;
        gjScheme.update((gj) => {
          feature.id = newFeatureId(gj);
          feature.properties.intervention_type = "route";
          gj.features.push(feature);
          return gj;
        });

        changeMode("edit-attribute");
        setCurrentlyEditing(feature.id);
      }
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
