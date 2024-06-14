<script lang="ts">
  import { circleRadius, lineWidth } from "colors";
  import { Popup } from "lib/common";
  import { isLine, isPoint, isPolygon, layerId } from "lib/maplibre";
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

  // TODO Abusing this property for filtering
  const hideWhileEditing: ExpressionSpecification = [
    "!=",
    ["get", "hide_while_editing"],
    true,
  ];
</script>

<GeoJSON data={$schemesGj}>
  <CircleLayer
    {...layerId("interventions-points")}
    filter={["all", isPoint, hideWhileEditing]}
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
    paint={{
      "line-color": colorInterventions,
      "line-width": lineWidth,
    }}
    layout={{
      visibility: showSchemes ? "visible" : "none",
    }}
  />
  <LineLayer
    {...layerId("interventions-lines-outlines")}
    filter={["all", isLine, hideWhileEditing]}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": "black",
      "line-width": hoverStateFilter(1, 2),
      "line-gap-width": lineWidth,
    }}
    layout={{
      "line-cap": "round",
      visibility: showSchemes ? "visible" : "none",
    }}
    hoverCursor="pointer"
  >
    <Popup let:props popupClass="border-popup"><p>{props.name}</p></Popup>
    <Popup let:props openOn="click" popupClass="border-popup">
      <InterventionPopup {props} />
    </Popup>
  </LineLayer>

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
