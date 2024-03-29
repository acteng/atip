<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import { Popup } from "lib/common";
  import {
    addLineStringEndpoints,
    isLine,
    isPoint,
    isPolygon,
    layerId,
  } from "lib/maplibre";
  import type { ExpressionSpecification } from "maplibre-gl";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    LineLayer,
  } from "svelte-maplibre";
  import { styleByFundingProgramme } from "./colors";
  import InterventionPopup from "./InterventionPopup.svelte";
  import { schemesGj } from "./stores";

  export let showSchemes: boolean;

  let [colorInterventions] = styleByFundingProgramme();

  $: gj = addLineStringEndpoints($schemesGj);

  // TODO Abusing this property for filtering
  const hideWhileEditing: ExpressionSpecification = [
    "!=",
    ["get", "hide_while_editing"],
    true,
  ];
  const notEndpoint: ExpressionSpecification = [
    "!=",
    ["get", "endpoint"],
    true,
  ];
</script>

<GeoJSON data={gj}>
  <CircleLayer
    {...layerId("interventions-points")}
    filter={["all", isPoint, hideWhileEditing, notEndpoint]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "circle-color": colorInterventions,
      "circle-radius": circleRadius,
      "circle-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup {props} />
    </Popup>
  </CircleLayer>

  <LineLayer
    {...layerId("interventions-lines")}
    filter={["all", isLine, hideWhileEditing]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": colorInterventions,
      "line-width": lineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup {props} />
    </Popup>
  </LineLayer>
  <CircleLayer
    {...layerId("interventions-lines-endpoints")}
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
    {...layerId("interventions-polygons")}
    filter={["all", isPolygon, hideWhileEditing]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "fill-color": colorInterventions,
      "fill-opacity": hoverStateFilter(0.2, 0.5),
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup {props} />
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId("interventions-polygons-outlines")}
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

<style>
  :global(.border-popup .maplibregl-popup-content) {
    border: 1px solid black;
  }
</style>
