<script>
  import { onMount, getContext } from "svelte";
  import {
    drawLine,
    isPolygon,
    isPoint,
    isLine,
    drawCircle,
    drawPolygon,
  } from "../style.js";
  import { emptyGeojson } from "../stores.js";
  import { gjScheme, currentSidebarHover } from "../stores.js";

  const { getMap } = getContext("map");

  let source = "hover";
  let hoverColor = "yellow";
  let lineWidth = 10;
  let circleRadius = 7;

  onMount(() => {
    const map = getMap();

    // Use a layer that only ever has zero or one features for hovering. I
    // think https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should
    // be an easier way to do this, but I can't make it work with the draw
    // plugin.
    map.addSource(source, {
      type: "geojson",
      data: emptyGeojson(),
    });

    map.addLayer({
      id: "hover-polygons",
      source: source,
      filter: isPolygon,
      ...drawPolygon(hoverColor, 0.5),
    });
    map.addLayer({
      id: "hover-lines",
      source: source,
      filter: isLine,
      // TODO I'd like to cover up the base layers, but I can't figure out how to z-order on top of drawControls.
      ...drawLine(hoverColor, 1.5 * lineWidth, 1.0),
    });
    map.addLayer({
      id: "hover-points",
      source: source,
      filter: isPoint,
      ...drawCircle(hoverColor, 1.5 * circleRadius, 0.5),
    });

    currentSidebarHover.subscribe((id) => {
      if (id) {
        map
          .getSource(source)
          .setData($gjScheme.features.find((f) => f.id == id));
      } else {
        map.getSource(source).setData(emptyGeojson());
      }
    });
  });
</script>
