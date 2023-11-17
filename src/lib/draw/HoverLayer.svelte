<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import {
    emptyGeojson,
    isLine,
    isPoint,
    isPolygon,
    layerId,
  } from "lib/maplibre";
  import { gjSchemeCollection, sidebarHover } from "stores";
  import { CircleLayer, GeoJSON, LineLayer } from "svelte-maplibre";

  // Use a layer that only ever has zero or one features for hovering.
  $: gj =
    $sidebarHover == null
      ? emptyGeojson()
      : $gjSchemeCollection.features.find((f) => f.id == $sidebarHover)!;
</script>

<GeoJSON data={gj}>
  <LineLayer
    {...layerId("hover-polygons")}
    filter={isPolygon}
    paint={{
      "line-color": colors.hovering,
      "line-width": 0.5 * lineWidth,
    }}
  />
  <LineLayer
    {...layerId("hover-lines")}
    filter={isLine}
    paint={{
      "line-color": colors.hovering,
      "line-width": 1.5 * lineWidth,
    }}
  />
  <CircleLayer
    {...layerId("hover-points")}
    filter={isPoint}
    paint={{
      "circle-color": colors.hovering,
      "circle-radius": 1.5 * circleRadius,
    }}
  />
</GeoJSON>
