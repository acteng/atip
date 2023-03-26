<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import {
    isPoint,
    drawCircle,
    isLine,
    drawLine,
    isPolygon,
    drawPolygon,
  } from "../style.js";
  import { colors } from "../colors.js";
  import { onMount, onDestroy } from "svelte";
  import { init, RouteSnapper, fetchWithProgress } from "route-snapper/lib.js";

  import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

  import {
    gjScheme,
    currentMapHover,
    setCurrentlyEditing,
    clearCurrentlyEditing,
    currentlyEditing,
    map,
  } from "../stores.js";

  const circleRadius = 7;
  const lineWidth = 10;
  const polygonOpacity = 0.5;
  // TODO The fallback black should never be used in practice, but it seems to
  // be for polygons being drawn
  const colorByInterventionType = [
    "match",
    ["get", "user_intervention_type"],
    "area",
    colors.area,
    "route",
    colors.route,
    "crossing",
    colors.crossing,
    "other",
    colors.other,
    "black",
  ];
  const styles = [
    {
      id: "interventions-points",
      filter: ["all", isPoint, ["==", "meta", "feature"]],
      ...drawCircle(colorByInterventionType, circleRadius),
      // TODO Outline?
    },
    {
      id: "interventions-lines",
      filter: ["all", isLine, ["==", "meta", "feature"]],
      ...drawLine(colorByInterventionType, lineWidth),
    },
    {
      id: "interventions-polygons",
      filter: ["all", isPolygon, ["==", "meta", "feature"]],
      ...drawPolygon(colorByInterventionType, polygonOpacity),
      // TODO Outline too?
    },
    {
      id: "draggable-points",
      filter: ["all", isPoint, ["!=", "meta", "feature"]],
      ...drawCircle(colors.draggablePoint, circleRadius),
    },
    {
      id: "polygon-outline-while-editing",
      filter: ["all", isLine, ["!=", "meta", "feature"]],
      ...drawLine(colors.draggablePoint, lineWidth),
    },
  ];

  export let url;

  let snapTool;
  let snapProgress;
  let drawControls;
  let routeSnapper;

  onMount(async () => {
    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      userProperties: true,
      controls: {
        point: true,
        polygon: true,
      },
      modes: Object.assign(
        {
          static: StaticMode,
        },
        MapboxDraw.modes
      ),
      styles,
    });
    $map.addControl(drawControls);

    await setupRouteSnapper($map);

    // When we draw a new feature, add it to the store
    $map.on("draw.create", (e) => {
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

    $map.on("draw.update", (e) => {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      gjScheme.update((gj) => {
        const update = gj.features.find((f) => f.id == feature.id);
        // Only geometry updates happen, not properties
        update.geometry = feature.geometry;
        return gj;
      });
    });

    $map.on("draw.selectionchange", (e) => {
      if (
        e.features.length == 1 &&
        (!routeSnapper || !routeSnapper.isActive())
      ) {
        setCurrentlyEditing(e.features[0].id);
      } else if (e.features.length == 0) {
        clearCurrentlyEditing();
      }
    });

    // When the store changes, update the drawn objects
    // TODO Form changes will trigger this unnecessarily. Maybe split out geometry and properties?
    gjScheme.subscribe((gj) => {
      // TODO The subscription doesn't seem to be torn down when this component gets unmounted
      if (drawControls) {
        drawControls.set(gj);
      }
    });

    // Highlight something in the sidebar when we hover on a feature in the map
    $map.on("mousemove", (e) => {
      var newHoverEntry = null;
      if (routeSnapper && !routeSnapper.isActive()) {
        // TODO This whines about a layer missing, and I can't suppress with try/catch
        const ids = drawControls.getFeatureIdsAt(e.point);
        if (ids.length > 0) {
          newHoverEntry = ids[0];
        }
        currentMapHover.set(newHoverEntry);
      }
    });
    $map.on("mouseout", () => {
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

  onDestroy(() => {
    $map.removeControl(drawControls);
    routeSnapper.tearDown();
  });

  async function setupRouteSnapper(map) {
    await init();

    console.log(`Grabbing ${url}`);
    try {
      const graphBytes = await fetchWithProgress(url, snapProgress);
      routeSnapper = new RouteSnapper(map, graphBytes, snapTool);
    } catch (err) {
      console.log(`Route tool broke: ${err}`);
      snapTool.innerHTML = "Failed to load";
    }

    snapTool.addEventListener("activate", () => {
      // Disable interactions with other drawn objects
      drawControls.changeMode("static");
    });
    snapTool.addEventListener("no-new-route", () => {
      drawControls.changeMode("simple_select");
    });

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

  // Depending on https://github.com/mapbox/mapbox-gl-draw-static-mode/ isn't
  // useful for something so small
  let StaticMode = {};
  StaticMode.onSetup = function () {
    this.setActionableState();
    return {};
  };
  StaticMode.toDisplayFeatures = function (state, geojson, display) {
    display(geojson);
  };
</script>

<div class="header">Add intervention</div>
<div class="route-container" bind:this={snapTool}>
  <!-- TODO the text should be fixed, and the progress bar float -->
  <div bind:this={snapProgress}>Route tool loading...</div>
</div>

<style>
  .header {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    background-color: white;
    font-size: 1.5em;
  }

  :global(.mapboxgl-ctrl-top-right) {
    margin-top: 50px;
    margin-right: 20px;
  }

  .route-container {
    position: absolute;
    top: 200px;
    right: 10px;
    padding: 10px;
    background-color: white;
    font-size: 1.2em;
  }

  :global(.mapboxgl-ctrl-group > button) {
    width: 60px;
    height: 60px;
  }

  :global(.mapbox-gl-draw_polygon, .mapbox-gl-draw_point) {
    background-size: 50px;
  }
</style>
