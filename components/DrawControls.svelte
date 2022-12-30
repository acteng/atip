<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import { drawControlsStyle } from "../style.js";
  import { onMount, getContext } from "svelte";
  import { init, RouteSnapper, fetchWithProgress } from "route-snapper/lib.js";

  import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

  const { getMap } = getContext("map");
  import {
    gjScheme,
    currentMapHover,
    setCurrentlyEditing,
    clearCurrentlyEditing,
    currentlyEditing,
  } from "../stores.js";

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

    map.on("draw.selectionchange", (e) => {
      if (e.features.length == 1) {
        setCurrentlyEditing(e.features[0].id);
      } else if (e.features.length == 0) {
        clearCurrentlyEditing();
      }
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

    currentlyEditing.subscribe((id) => {
      if (id) {
        let feature = $gjScheme.features.find((f) => f.id == id);
        // Act like we've selected the object. (This is irrelevant for points.)
        if (feature.geometry.type != "Point") {
          drawControls.changeMode("direct_select", {
            featureId: feature.id,
          });
        }
      }
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

  :global(.mapboxgl-ctrl-group > button) {
    width: 60px;
    height: 60px;
  }

  :global(
      .mapbox-gl-draw_polygon,
      .mapbox-gl-draw_point,
      .mapbox-gl-draw_line
    ) {
    background-size: 50px;
  }

  /* TODO Can't get this to match the other buttons */
  :global(.draw-route-icon) {
    /* From https://fonts.google.com/icons?selected=Material+Icons+Sharp and using https://yoksel.github.io/url-encoder/ */
    background-image: url('data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="%23000000"%3E%3Cg%3E%3Crect fill="none" height="24" width="24"/%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d="M19,15.18V7c0-2.21-1.79-4-4-4s-4,1.79-4,4v10c0,1.1-0.9,2-2,2s-2-0.9-2-2V8.82C8.16,8.4,9,7.3,9,6c0-1.66-1.34-3-3-3 S3,4.34,3,6c0,1.3,0.84,2.4,2,2.82V17c0,2.21,1.79,4,4,4s4-1.79,4-4V7c0-1.1,0.9-2,2-2s2,0.9,2,2v8.18c-1.16,0.41-2,1.51-2,2.82 c0,1.66,1.34,3,3,3s3-1.34,3-3C21,16.7,20.16,15.6,19,15.18z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    width: 50px;
    height: 50px;
    border: none;
    background-color: white;
  }
</style>
