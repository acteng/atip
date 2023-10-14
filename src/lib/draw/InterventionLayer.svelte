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
  import { interventionName } from "lib/sidebar/scheme_data";
  import type { FilterSpecification } from "maplibre-gl";
  import { colorInterventionsBySchema } from "schemas";
  import { gjScheme, mode } from "stores";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    LineLayer,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import type { Schema } from "types";

  export let schema: Schema;

  $: gj = addLineStringEndpoints($gjScheme);

  // TODO Maybe have a separate component for different modes.
  const hideWhileEditing: FilterSpecification = [
    "!=",
    "hide_while_editing",
    true,
  ];
  const notEndpoint: FilterSpecification = ["!=", "endpoint", true];

  $: clickable = $mode.mode == "list";

  let color;
  $: {
    let colorInterventions = colorInterventionsBySchema(schema);
    let fadeColor = "grey";
    if ($mode.mode == "edit-form") {
      color = ["case", ["==", ["id"], $mode.id], colorInterventions, fadeColor];
    } else if ($mode.mode == "list") {
      color = colorInterventions;
    } else if ($mode.mode == "split-route") {
      color = [
        "case",
        ["==", "intervention_type", "route"],
        colorInterventions,
        fadeColor,
      ];
    } else {
      color = fadeColor;
    }
  }

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
      "circle-color": color,
      "circle-radius": circleRadius,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup let:feature><p>{interventionName(schema, feature)}</p></Popup>
    {/if}
  </CircleLayer>

  <LineLayer
    {...layerId("interventions-lines")}
    filter={["all", isLine, hideWhileEditing]}
    paint={{
      "line-color": color,
      "line-width": lineWidth,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup let:feature><p>{interventionName(schema, feature)}</p></Popup>
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
      "fill-color": color,
      "fill-opacity": 0.2,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup let:feature><p>{interventionName(schema, feature)}</p></Popup>
    {/if}
  </FillLayer>
  <LineLayer
    {...layerId("interventions-polygons-outlines")}
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "line-color": color,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
  />
</GeoJSON>
