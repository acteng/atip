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
  import { colorInterventionsBySchema } from "schemas";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    LineLayer,
  } from "svelte-maplibre";
  import type { SchemeCollection } from "types";
  import InterventionPopup from "./InterventionPopup.svelte";

  export let schemesGj: SchemeCollection;
  export let showSchemes: boolean;
  export let filterText: string;

  let colorInterventions = colorInterventionsBySchema("v1");

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
  >
    <Popup let:props>
      <InterventionPopup {props} {filterText} />
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
  >
    <Popup let:props>
      <InterventionPopup {props} {filterText} />
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
  >
    <Popup let:props>
      <InterventionPopup {props} {filterText} />
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
