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
  import type {
    DataDrivenPropertyValueSpecification,
    ExpressionSpecification,
  } from "maplibre-gl";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    LineLayer,
  } from "svelte-maplibre";
  import InterventionPopup from "./InterventionPopup.svelte";
  import type { Schemes, SchemeData } from "types";

  export let source: string;
  export let show: boolean;

  export let schemes: Map<string, SchemeData>;
  export let schemesGj: Schemes;
  export let filterSchemeText: string;
  export let filterInterventionText: string;
  export let color: DataDrivenPropertyValueSpecification<string>;

  $: gj = addLineStringEndpoints(schemesGj);

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
    {...layerId(`${source}-interventions-points`)}
    filter={["all", isPoint, hideWhileEditing, notEndpoint]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "circle-color": color,
      "circle-radius": circleRadius,
      "circle-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup
        {props}
        {schemesGj}
        {schemes}
        {filterSchemeText}
        {filterInterventionText}
      />
    </Popup>
  </CircleLayer>

  <LineLayer
    {...layerId(`${source}-interventions-lines`)}
    filter={["all", isLine, hideWhileEditing]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": color,
      "line-width": lineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup
        {props}
        {schemesGj}
        {schemes}
        {filterSchemeText}
        {filterInterventionText}
      />
    </Popup>
  </LineLayer>
  <CircleLayer
    {...layerId(`${source}-interventions-lines-endpoints`)}
    filter={["==", "endpoint", true]}
    paint={{
      "circle-radius": 0.5 * lineWidth,
      "circle-opacity": 0,
      "circle-stroke-color": colors.lineEndpointColor,
      "circle-stroke-width": 2.0,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  />

  <FillLayer
    {...layerId(`${source}-interventions-polygons`)}
    filter={["all", isPolygon, hideWhileEditing]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.2, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup
        {props}
        {schemesGj}
        {schemes}
        {filterSchemeText}
        {filterInterventionText}
      />
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId(`${source}-interventions-polygons-outlines`)}
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "line-color": color,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  />
</GeoJSON>

<style>
  :global(.border-popup .maplibregl-popup-content) {
    border: 1px solid black;
  }
</style>
