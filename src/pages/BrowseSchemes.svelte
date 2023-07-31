<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { onDestroy, onMount } from "svelte";
  import { processInput, type Scheme } from "../lib/browse/data";
  import Filters from "../lib/browse/Filters.svelte";
  import HospitalsLayerControl from "../lib/browse/HospitalsLayerControl.svelte";
  import InterventionColorSelector from "../lib/browse/InterventionColorSelector.svelte";
  import MrnLayerControl from "../lib/browse/MrnLayerControl.svelte";
  import ParliamentaryConstituenciesLayerControl from "../lib/browse/ParliamentaryConstituenciesLayerControl.svelte";
  import SchemeCard from "../lib/browse/SchemeCard.svelte";
  import SchoolsLayerControl from "../lib/browse/SchoolsLayerControl.svelte";
  import WardsLayerControl from "../lib/browse/WardsLayerControl.svelte";
  import {
    BaselayerSwitcher,
    CollapsibleCard,
    FileInput,
    InteractiveLayer,
    Layout,
    ZoomOutMap,
  } from "../lib/common";
  import { getAuthoritiesGeoJson } from "../lib/common/data_getter";
  import PmTiles from "../lib/common/PmTiles.svelte";
  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import { CheckboxGroup, ErrorMessage, SecondaryButton } from "../lib/govuk";
  import MapLibreMap from "../lib/Map.svelte";
  import { bbox, emptyGeojson, prettyPrintMeters } from "../maplibre_helpers";
  import { colorInterventionsBySchema } from "../schemas";
  import { gjScheme, map } from "../stores";
  import type { Scheme as GjScheme } from "../types";

  // TODO Remove after the input data is fixed to plumb correct authority names.
  let authorityNames: Set<string> | null = null;

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    let geojson = await getAuthoritiesGeoJson();
    authorityNames = new Set(geojson.features.map((f) => f.properties!.name));
  });

  const params = new URLSearchParams(window.location.search);
  let style: string = params.get("style") || "dataviz";
  let errorMessage = "";

  let schemes: Map<string, Scheme> = new Map();
  let schemesToBeShown: Set<string> = new Set();
  let filterText = "";

  onDestroy(() => {
    gjScheme.set(emptyGeojson() as GjScheme);
  });

  function loadFile(text: string) {
    try {
      let gj = JSON.parse(text);
      schemes = processInput(gj);
      gjScheme.set(gj);
      errorMessage = "";

      $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
    } catch (err) {
      errorMessage = `Couldn't load schemes from a file: ${err}`;
    }
  }

  function tooltip(feature: MapGeoJSONFeature): string {
    let props = feature.properties;
    // TODO Move into a Svelte component, so we don't have to awkwardly build up HTML like this
    var html = `<div style="max-width: 30vw;">`;
    html += `<h2>${highlightFilter(props.name)} (${
      props.intervention_type
    })</h2>`;
    html += `<p>Scheme reference: ${props.scheme_reference}</p>`;
    if (props.length_meters) {
      html += `<p>Length: ${prettyPrintMeters(props.length_meters)}</p>`;
    }
    if (props.description) {
      html += `<p>${highlightFilter(props.description)}</p>`;
    }
    html += `</div>`;
    return html;
  }

  // When the user is filtering name/description by freeform text, highlight the matching pieces.
  function highlightFilter(input: string): string {
    if (!filterText) {
      return input;
    }
    return input.replace(
      new RegExp(filterText, "gi"),
      (match) => `<mark>${match}</mark>`
    );
  }
</script>

<Layout>
  <div slot="sidebar" class="govuk-prose">
    <SecondaryButton on:click={() => window.open("index.html")}>
      Home
    </SecondaryButton>
    <div style="display: flex; justify-content: space-between">
      <h1>Browse schemes</h1>
      <ZoomOutMap boundaryGeojson={$gjScheme} />
    </div>
    {#if errorMessage}
      <ErrorMessage {errorMessage} />
    {/if}
    <FileInput label="Load from GeoJSON" id="load-geojson" {loadFile} />

    {#if schemes.size > 0}
      <Filters {schemes} bind:schemesToBeShown bind:filterText />
    {/if}

    {#if authorityNames}
      <ul>
        {#each schemes.values() as scheme}
          {#if schemesToBeShown.has(scheme.scheme_reference)}
            <SchemeCard {scheme} {authorityNames} />
          {/if}
        {/each}
      </ul>
    {/if}
  </div>
  <div slot="main">
    <PmTiles />
    <MapLibreMap {style}>
      <InterventionLayer
        colorInterventions={colorInterventionsBySchema("v1")}
      />
      <InteractiveLayer layer="interventions-points" {tooltip} />
      <InteractiveLayer layer="interventions-lines" {tooltip} />
      <InteractiveLayer layer="interventions-polygons" {tooltip} />
      <div class="top-right">
        <CollapsibleCard label="Layers" open>
          <InterventionColorSelector />
          <hr />
          <CheckboxGroup small>
            <SchoolsLayerControl />
            <HospitalsLayerControl />
            <MrnLayerControl />
            <ParliamentaryConstituenciesLayerControl />
            <WardsLayerControl />
          </CheckboxGroup>
          <BaselayerSwitcher {style} />
        </CollapsibleCard>
      </div>
    </MapLibreMap>
  </div>
</Layout>

<style>
  .top-right {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
    padding: 16px;
  }
</style>
