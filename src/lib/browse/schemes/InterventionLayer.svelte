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
  import type { Schemes } from "types";
  import type { SchemeTypeDetails } from "./data";
  import InterventionPopup from "./InterventionPopup.svelte";
    import type { Writable } from "svelte/store";

  export let name: string;
  export let details: SchemeTypeDetails;
  export let show: Writable<boolean>;

  export let schemesGj: Schemes;
  export let filterSchemeText: string;
  export let filterInterventionText: string;

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
    {...layerId(`${name}-interventions-points`)}
    filter={["all", isPoint, hideWhileEditing, notEndpoint]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "circle-color": details.colour,
      "circle-radius": circleRadius,
      "circle-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup
        description={details.title}
        {props}
        {schemesGj}
        {filterSchemeText}
        {filterInterventionText}
      />
    </Popup>
  </CircleLayer>

  <LineLayer
    {...layerId(`${name}-interventions-lines`)}
    filter={["all", isLine, hideWhileEditing]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": details.colour,
      "line-width": lineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup
        description={details.title}
        {props}
        {schemesGj}
        {filterSchemeText}
        {filterInterventionText}
      />
    </Popup>
  </LineLayer>
  <CircleLayer
    {...layerId(`${name}-interventions-lines-endpoints`)}
    filter={["==", "endpoint", true]}
    paint={{
      "circle-radius": 0.5 * lineWidth,
      "circle-opacity": 0,
      "circle-stroke-color": colors.lineEndpointColor,
      "circle-stroke-width": 2.0,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />

  <FillLayer
    {...layerId(`${name}-interventions-polygons`)}
    filter={["all", isPolygon, hideWhileEditing]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "fill-color": details.colour,
      "fill-opacity": hoverStateFilter(0.2, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup
        description={details.title}
        {props}
        {schemesGj}
        {filterSchemeText}
        {filterInterventionText}
      />
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId(`${name}-interventions-polygons-outlines`)}
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "line-color": details.colour,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />
</GeoJSON>

<style>
  :global(.border-popup .maplibregl-popup-content) {
    border: 1px solid black;
  }
</style>
