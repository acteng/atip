<script lang="ts">
  import { circleRadius, colors } from "colors";
  import { isLine, isPoint, isPolygon, layerId } from "lib/maplibre";
  import { CircleLayer, FillLayer, GeoJSON, LineLayer } from "svelte-maplibre";
  import { polygonToolGj } from "maplibre-draw-polygon";
</script>

<GeoJSON data={$polygonToolGj}>
  <FillLayer
    {...layerId("edit-polygon-fill")}
    filter={isPolygon}
    paint={{
      "fill-color": "red",
      "fill-opacity": [
        "case",
        ["boolean", ["get", "hover"], "false"],
        1.0,
        0.5,
      ],
    }}
  />
  <LineLayer
    {...layerId("edit-polygon-lines")}
    filter={isLine}
    paint={{
      // TODO Dashed
      "line-color": "black",
      "line-width": 8,
      "line-opacity": 0.5,
    }}
  />
  <CircleLayer
    {...layerId("edit-polygon-vertices")}
    filter={isPoint}
    paint={{
      "circle-color": colors.hovering,
      "circle-opacity": ["case", ["has", "hovered"], 1.0, 0.5],
      "circle-radius": circleRadius,
    }}
  />
</GeoJSON>
