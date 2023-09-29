<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import { Popup } from "lib/common";
  import {
    addLineStringEndpoints,
    isLine,
    isPoint,
    isPolygon,
  } from "lib/maplibre";
  import type { FilterSpecification } from "maplibre-gl";
  import { colorInterventionsBySchema } from "schemas";
  import { gjScheme } from "stores";
  import { CircleLayer, FillLayer, GeoJSON, LineLayer } from "svelte-maplibre";
  import InterventionPopup from "./InterventionPopup.svelte";

  export let showSchemes: boolean;
  export let filterText: string;

  let colorInterventions = colorInterventionsBySchema("v1");

  $: gj = addLineStringEndpoints($gjScheme);

  // TODO Abusing this property for filtering
  const hideWhileEditing: FilterSpecification = [
    "!=",
    "hide_while_editing",
    true,
  ];
  const notEndpoint: FilterSpecification = ["!=", "endpoint", true];
</script>

<GeoJSON data={gj}>
  <CircleLayer
    id="interventions-points"
    filter={["all", isPoint, hideWhileEditing, notEndpoint]}
    paint={{
      "circle-color": colorInterventions,
      "circle-radius": circleRadius,
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <InterventionPopup {props} {filterText} />
    </Popup>
  </CircleLayer>

  <LineLayer
    id="interventions-lines"
    filter={["all", isLine, hideWhileEditing]}
    paint={{
      "line-color": colorInterventions,
      "line-width": lineWidth,
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <InterventionPopup {props} {filterText} />
    </Popup>
  </LineLayer>
  <CircleLayer
    id="interventions-lines-endpoints"
    filter={["==", "endpoint", true]}
    paint={{
      "circle-radius": 0.5 * lineWidth,
      "circle-opacity": 0,
      "circle-stroke-color": colors.lineEndpointColor,
      "circle-stroke-width": 2.0,
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
  />

  <FillLayer
    id="interventions-polygons"
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "fill-color": colorInterventions,
      "fill-opacity": 0.2,
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <InterventionPopup {props} {filterText} />
    </Popup>
  </FillLayer>
  <LineLayer
    id="interventions-polygons-outlines"
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "line-color": colorInterventions,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
  />
</GeoJSON>
