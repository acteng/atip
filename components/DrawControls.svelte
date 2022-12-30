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
  import { gjScheme, currentMapHover } from "../stores.js";

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

    // When we draw a new feature, add it to the store
    map.on("draw.create", (e) => {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      // Seed one property
      if (feature.geometry.type == "Polygon") {
        feature.properties.intervention_type = "area";
      } else {
        feature.properties.intervention_type = "other";
      }

      gjScheme.update((gj) => {
        gj.features.push(feature);
        return gj;
      });
    });

    map.on("draw.update", (e) => {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      gjScheme.update((gj) => {
        const update = gj.features.find((f) => f.id == feature.id);
        // Only geometry updates happen, not properties
        update.geometry = feature.geometry;
        return gj;
      });
    });

    // When the store changes, update the drawn objects
    // TODO Form changes will trigger this unnecessarily. Maybe split out geometry and properties?
    gjScheme.subscribe((gj) => {
      drawControls.set(gj);
    });

    // Highlight something in the sidebar when we hover on a feature in the map
    map.on("mousemove", (e) => {
      var newHoverEntry = null;
      // TODO Skip if we're editing something
      if (true) {
        // TODO This whines about a layer missing, and I can't suppress with try/catch
        const ids = drawControls.getFeatureIdsAt(e.point);
        if (ids.length > 0) {
          newHoverEntry = ids[0];
        }
      }
      currentMapHover.set(newHoverEntry);
    });
    map.on("mouseout", () => {
      currentMapHover.set(null);
    });
  });

  async function setupRouteSnapper(map) {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      // TODO Change fetchWithProgress API to take an element, so we don't need IDs.
      const graphBytes = await fetchWithProgress(url, snapProgress.id);
      let routeSnapper = new RouteSnapper(map, graphBytes, snapTool);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      snapTool.innerHTML = "Failed to load";
    }

    snapTool.addEventListener("new-route", (e) => {
      const feature = e.detail;

      // TODO This is convoluted. We add to drawControls just to assign an ID,
      // then update gjScheme, which will go reset drawControls again.
      const ids = drawControls.add(feature);
      feature.id = ids[0];
      feature.properties.intervention_type = "route";
      gjScheme.update((gj) => {
        gj.features.push(feature);
        return gj;
      });

      // Act like we've selected the line-string we just drew
      drawControls.changeMode("direct_select", {
        featureId: feature.id,
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
