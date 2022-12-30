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
  import { gjScheme } from "../stores.js";

  const { getMap } = getContext("map");

  let source = "editing";
  let color = "red";
  let lineWidth = 10;
  let circleRadius = 7;

  onMount(() => {
    const map = getMap();

    map.addSource(source, {
      type: "geojson",
      data: emptyGeojson(),
    });

    map.addLayer({
      id: "editing-polygons",
      source: source,
      filter: isPolygon,
      ...drawPolygon(color, 0.5),
    });
    map.addLayer({
      id: "editing-lines",
      source: source,
      filter: isLine,
      ...drawLine(color, 1.5 * lineWidth),
    });
    map.addLayer({
      id: "editing-points",
      source: source,
      filter: isPoint,
      ...drawCircle(color, 1.5 * circleRadius),
    });

    gjScheme.subscribe((gj) => {
      map
        .getSource(source)
        .setData(
          gj.features.find((f) => f.properties.editing) || emptyGeojson()
        );
    });
  });
</script>
