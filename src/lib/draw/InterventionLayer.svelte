<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import type { Feature } from "geojson";
  import { gjSchemeCollection, hideSchemes, mode } from "lib/draw/stores";
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
  import { cfg } from "lib/draw/config";
  import type {
    DataDrivenPropertyValueSpecification,
    ExpressionSpecification,
  } from "maplibre-gl";
  import { map } from "stores";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    LineLayer,
    Popup,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import type { SchemeCollection } from "types";
  import type { FeatureWithAnyProps } from "lib/draw/types";

  $: gj = addLineStringEndpoints($gjSchemeCollection);

  // TODO Maybe have a separate component for different modes.
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

  $: clickable = $mode.mode == "list";

  $: showSchemes = getShowSchemes($hideSchemes);
  function getShowSchemes(schemesToHide: Set<string>): ExpressionSpecification {
    // TODO Can't get https://maplibre.org/maplibre-style-spec/expressions/#in to work
    // Note we filter _out_ schemes to hide, rather than specify the ones to
    // show. Otherwise we have to know when new schemes are created.
    let expression = ["all"] as ExpressionSpecification;
    for (let x of schemesToHide.keys()) {
      // @ts-ignore Can't figure out the problem
      expression.push(["!=", ["get", "scheme_reference"], x]);
    }
    return expression;
  }

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
    gj: SchemeCollection,
  ): DataDrivenPropertyValueSpecification<string> {
    return constructMatchExpression(
      ["get", "scheme_reference"],
      Object.fromEntries(
        Object.values(gj.schemes).map((scheme) => [
          scheme.scheme_reference,
          scheme.color,
        ]),
      ),
      "black",
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
      let feature = features[0] as FeatureWithAnyProps;
      let name = cfg.interventionName(feature);
      let scheme =
        $gjSchemeCollection.schemes[feature.properties.scheme_reference]
          .scheme_name ?? "Untitled scheme";
      return `${name} (${scheme})`;
    }
    // TODO Improve upstream, this should be impossible
    return "Tooltip bug";
  }
</script>

<GeoJSON data={gj}>
  <CircleLayer
    {...layerId("interventions-points")}
    filter={["all", isPoint, hideWhileEditing, notEndpoint, showSchemes]}
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
    filter={["all", isLine, hideWhileEditing, showSchemes]}
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
    filter={["all", ["==", ["get", "endpoint"], true], showSchemes]}
    paint={{
      "circle-radius": 0.5 * lineWidth,
      "circle-opacity": 0,
      "circle-stroke-color": colors.lineEndpointColor,
      "circle-stroke-width": 2.0,
    }}
  />

  <FillLayer
    {...layerId("interventions-polygons")}
    filter={[
      "all",
      isPolygon,
      hideWhileEditing,
      isNotCoveragePolygon,
      showSchemes,
    ]}
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
    filter={[
      "all",
      isPolygon,
      hideWhileEditing,
      isNotCoveragePolygon,
      showSchemes,
    ]}
    paint={{
      "line-color": color,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
  />

  <LineLayer
    {...layerId("interventions-coverage-polygons-outlines")}
    filter={[
      "all",
      isPolygon,
      hideWhileEditing,
      isCoveragePolygon,
      showSchemes,
    ]}
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
