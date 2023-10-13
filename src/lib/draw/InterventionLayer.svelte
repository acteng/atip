<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import {
    addLineStringEndpoints,
    isLine,
    isPoint,
    isPolygon,
    layerId,
  } from "lib/maplibre";
  import { interventionName } from "lib/sidebar/scheme_data";
  import type {
    DataDrivenPropertyValueSpecification,
    FilterSpecification,
  } from "maplibre-gl";
  import { gjScheme, mode } from "stores";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    LineLayer,
    Popup,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import type { Schema } from "types";

  export let schema: Schema;
  export let colorInterventions: DataDrivenPropertyValueSpecification<string>;

  $: gj = addLineStringEndpoints($gjScheme);

  // TODO Maybe have a separate component for different modes.
  const hideWhileEditing: FilterSpecification = [
    "!=",
    "hide_while_editing",
    true,
  ];
  const notEndpoint: FilterSpecification = ["!=", "endpoint", true];

  $: clickable = $mode.mode == "list";

  function onClick(e: CustomEvent<LayerClickInfo>) {
    if ($mode.mode != "list") {
      return;
    }
    // TODO Possible to be missing?
    if (e.detail.features[0]) {
      mode.set({ mode: "edit-form", id: e.detail.features[0].id as number });
    }
  }
</script>

<GeoJSON data={gj}>
  <CircleLayer
    {...layerId("interventions-points")}
    filter={["all", isPoint, hideWhileEditing, notEndpoint]}
    paint={{
      "circle-color": colorInterventions,
      "circle-radius": circleRadius,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup let:features>{interventionName(schema, features[0])}</Popup>
    {/if}
  </CircleLayer>

  <LineLayer
    {...layerId("interventions-lines")}
    filter={["all", isLine, hideWhileEditing]}
    paint={{
      "line-color": colorInterventions,
      "line-width": lineWidth,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup let:features>{interventionName(schema, features[0])}</Popup>
    {/if}
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
  />

  <FillLayer
    {...layerId("interventions-polygons")}
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "fill-color": colorInterventions,
      "fill-opacity": 0.2,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup let:features>{interventionName(schema, features[0])}</Popup>
    {/if}
  </FillLayer>
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
