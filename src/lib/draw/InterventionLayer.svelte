<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import type { Feature } from "geojson";
  import {
    addLineStringEndpoints,
    constructMatchExpression,
    isCoveragePolygon,
    isLine,
    isNotCoveragePolygon,
    isPoint,
    isPolygon,
    layerId,
  } from "lib/maplibre";
  import { interventionName } from "lib/sidebar/scheme_data";
  import type {
    DataDrivenPropertyValueSpecification,
    FilterSpecification,
  } from "maplibre-gl";
  import { gjSchemeCollection, map, mode } from "stores";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    LineLayer,
    Popup,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import type { FeatureUnion, Schema, SchemeCollection } from "types";

  export let schema: Schema;

  $: gj = addLineStringEndpoints($gjSchemeCollection);

  // TODO Maybe have a separate component for different modes.
  const hideWhileEditing: FilterSpecification = [
    "!=",
    "hide_while_editing",
    true,
  ];
  const notEndpoint: FilterSpecification = ["!=", "endpoint", true];

  $: clickable = $mode.mode == "list";

  let color: DataDrivenPropertyValueSpecification<string>;
  $: {
    let fadeColor = "grey";
    if ($mode.mode == "edit-form") {
      // @ts-ignore Can't figure out the problem
      color = ["case", ["==", ["id"], $mode.id], colorInterventions, fadeColor];
    } else if ($mode.mode == "list") {
      color = colorInterventions;
    } else if ($mode.mode == "split-route") {
      color = [
        "case",
        ["==", "intervention_type", "route"],
        // @ts-ignore Can't figure out the problem
        colorInterventions,
        fadeColor,
      ];
    } else {
      color = fadeColor;
    }
  }

  $: colorInterventions = colorByScheme($gjSchemeCollection);
  function colorByScheme(
    gj: SchemeCollection
  ): DataDrivenPropertyValueSpecification<string> {
    return constructMatchExpression(
      ["get", "scheme_reference"],
      Object.fromEntries(
        Object.values(gj.schemes).map((scheme) => [
          scheme.scheme_reference,
          scheme.color,
        ])
      ),
      "black"
    );
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    if ($mode.mode != "list") {
      return;
    }
    // TODO Possible to be missing?
    if (e.detail.features[0]) {
      // We just clicked a feature, so the cursor would've been different
      $map.getCanvas().style.cursor = "inherit";
      mode.set({ mode: "edit-form", id: e.detail.features[0].id as number });
    }
  }

  function tooltip(features: Feature[] | null): string {
    if (features) {
      return interventionName(schema, features[0] as FeatureUnion);
    }
    // TODO Improve upstream, this should be impossible
    return "Tooltip bug";
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
      <Popup openOn="hover" openIfTopMost let:features>
        <div class="govuk-prose"><p>{tooltip(features)}</p></div>
      </Popup>
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
      <Popup openOn="hover" openIfTopMost let:features>
        <div class="govuk-prose"><p>{tooltip(features)}</p></div>
      </Popup>
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
    filter={["all", isPolygon, hideWhileEditing, isNotCoveragePolygon]}
    paint={{
      "fill-color": color,
      "fill-opacity": 0.2,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup openOn="hover" openIfTopMost let:features>
        <div class="govuk-prose"><p>{tooltip(features)}</p></div>
      </Popup>
    {/if}
  </FillLayer>
  <LineLayer
    {...layerId("interventions-polygons-outlines")}
    filter={["all", isPolygon, hideWhileEditing, isNotCoveragePolygon]}
    paint={{
      "line-color": color,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
  />

  <LineLayer
    {...layerId("interventions-coverage-polygons-outlines")}
    filter={["all", isPolygon, hideWhileEditing, isCoveragePolygon]}
    paint={{
      "line-color": color,
      "line-opacity": 0.5,
      "line-width": 0.4 * lineWidth,
    }}
    hoverCursor={clickable ? "pointer" : undefined}
    on:click={onClick}
    manageHoverState={clickable}
  >
    {#if clickable}
      <Popup openOn="hover" openIfTopMost let:features>
        <div class="govuk-prose"><p>{tooltip(features)}</p></div>
      </Popup>
    {/if}
  </LineLayer>
</GeoJSON>
