<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import {
    addLineStringEndpoints,
    isLine,
    isPoint,
    isPolygon,
    layerId,
  } from "lib/maplibre";
  import type {
    DataDrivenPropertyValueSpecification,
    FilterSpecification,
  } from "maplibre-gl";
  import { gjScheme } from "stores";
  import { CircleLayer, FillLayer, GeoJSON, LineLayer } from "svelte-maplibre";

  export let colorInterventions: DataDrivenPropertyValueSpecification<string>;

  $: gj = addLineStringEndpoints($gjScheme);

  const hideWhileEditing: FilterSpecification = [
    "!=",
    "hide_while_editing",
    true,
  ];
  const notEndpoint: FilterSpecification = ["!=", "endpoint", true];
</script>

<GeoJSON data={gj}>
  <CircleLayer
    {...layerId("interventions-points")}
    filter={["all", isPoint, hideWhileEditing, notEndpoint]}
    paint={{
      "circle-color": colorInterventions,
      "circle-radius": circleRadius,
    }}
  />

  <LineLayer
    {...layerId("interventions-lines")}
    filter={["all", isLine, hideWhileEditing]}
    paint={{
      "line-color": colorInterventions,
      "line-width": lineWidth,
    }}
  />
  <CircleLayer
    {...layerId("interventions-lines-endpoints")}
    filter={["==", "endpoint", true]}
    paint={{
      "circle-radius": 0.5 * lineWidth,
      "circle-opacity": 0,
      "circle-stroke-color": colors.lineEndpointColor,
      "circle-stroke-width": 2.0,
    }}
  />

  <FillLayer
    {...layerId("interventions-polygons")}
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "fill-color": colorInterventions,
      "fill-opacity": 0.2,
    }}
  />
  <LineLayer
    {...layerId("interventions-polygons-outlines")}
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "line-color": colorInterventions,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
  />
</GeoJSON>
