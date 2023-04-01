<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import {
    isPoint,
    drawCircle,
    isLine,
    drawLine,
    isPolygon,
    drawPolygon,
  } from "../../maplibre_helpers.js";
  import { colors } from "../../colors.js";
  import { onMount, onDestroy } from "svelte";

  import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

  import { gjScheme, openFromSidebar, map } from "../../stores.js";

  const circleRadius = 7;
  const lineWidth = 10;
  const styles = [
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

  onMount(() => {
    drawControls = new MapboxDraw({
      displayControlsDefault: false,
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
    });
    $map.addControl(drawControls);

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

    // When the store changes, update the drawn objects
    // TODO Form changes will trigger this unnecessarily. Maybe split out geometry and properties?
    gjScheme.subscribe((gj) => {
      // TODO The subscription doesn't seem to be torn down when this component gets unmounted
      if (drawControls) {
        drawControls.set(gj);
      }
    });

    openFromSidebar.subscribe((id) => {
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
  });

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

  :global(.mapboxgl-ctrl-group > button) {
    width: 60px;
    height: 60px;
  }

  :global(.mapbox-gl-draw_polygon, .mapbox-gl-draw_point) {
    background-size: 50px;
  }
</style>
