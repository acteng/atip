<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import { drawControlsStyle } from "../style.js";
  import { onMount, getContext } from "svelte";
  import { init, RouteSnapper, fetchWithProgress } from "route-snapper/lib.js";

  import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
  // Do this second to override some stuff
  // TODO Use inline style, but still override above
  import "../css/map_controls.css";

  const { getMap } = getContext("map");

  export let url;

  let snapTool;
  let snapProgress;
  let drawControls;
  let routeSnapper;

  onMount(async () => {
    const map = getMap();

    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        point: true,
        polygon: true,
      },
      styles: drawControlsStyle,
    });
    map.addControl(drawControls);

    routeSnapper = await setupRouteSnapper(map);
  });

  async function setupRouteSnapper(map) {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      console.log(`sup ${snapProgress}. ${snapProgress.id}`);
      // TODO Change fetchWithProgress API to take an element, so we don't need IDs.
      const graphBytes = await fetchWithProgress(url, snapProgress.id);
      let routeSnapper = new RouteSnapper(map, graphBytes, snapTool);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      snapTool.innerHTML = "Failed to load";
    }

    snapTool.addEventListener("new-route", (e) => {
      const json = e.detail;
      const ids = drawControls.add(json);

      // drawControls assigns an ID. When we open the form, pass in the feature with that ID, and some properties pre-fil
      json.id = ids[0];

      // Act like we've selected the line-string we just drew
      drawControls.changeMode("direct_select", {
        featureId: json.id,
      });
    });
  }
</script>

<div class="overlay-topright" bind:this={snapTool}>
  <!-- TODO the text should be fixed, and the progress bar float -->
  <div bind:this={snapProgress} id="TODO">Route tool loading...</div>
</div>

<style>
  .overlay-topright {
    position: absolute;
    top: 130px;
    right: 10px;
    padding: 10px;

    background-color: white;
  }

  /* TODO Bring in the rest from the .css */
</style>
