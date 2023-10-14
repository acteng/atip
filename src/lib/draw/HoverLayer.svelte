<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import type { GeoJSON as GeoJSONType } from "geojson";
  import {
    emptyGeojson,
    isLine,
    isPoint,
    isPolygon,
    layerId,
  } from "lib/maplibre";
  import { gjScheme, sidebarHover } from "stores";
  import { CircleLayer, GeoJSON, LineLayer } from "svelte-maplibre";

  // Use a layer that only ever has zero or one features for hovering.
  let gj: GeoJSONType = emptyGeojson();

  // When a form is open, ignore regular map and sidebar interactions
  $: {
    let id = $sidebarHover;
    if (id != null) {
      gj = $gjScheme.features.find((f) => f.id == id)!;
    } else {
      gj = emptyGeojson();
    }
  }
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
