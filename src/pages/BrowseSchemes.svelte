<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import AppVersion from "lib/browse/AppVersion.svelte";
  import { processInput, type Scheme } from "lib/browse/data";
  import Filters from "lib/browse/Filters.svelte";
  import LayerControls from "lib/browse/LayerControls.svelte";
  import LoadRemoteSchemeData from "lib/browse/LoadRemoteSchemeData.svelte";
  import SchemeCard from "lib/browse/SchemeCard.svelte";
  import authorityNamesList from "../../assets/authority_names.json";
  import "../style/main.css";
  import {
    appVersion,
    FileInput,
    InteractiveLayer,
    Layout,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import PmTiles from "lib/common/PmTiles.svelte";
  import InterventionLayer from "lib/draw/InterventionLayer.svelte";
  import { ErrorMessage } from "lib/govuk";
  import { emptyGeojson, prettyPrintMeters } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { colorInterventionsBySchema } from "schemas";
  import { gjScheme, mapStyle } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Scheme as GjScheme } from "types";

  // TODO Remove after the input data is fixed to plumb correct authority names.
  let authorityNames: Set<string> = new Set(authorityNamesList);

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  const params = new URLSearchParams(window.location.search);
  mapStyle.set(params.get("style") || "dataviz");
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
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
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
    <div style="display: flex; justify-content: space-between">
      <h1>Browse schemes</h1>
      <ZoomOutMap boundaryGeojson={$gjScheme} />
    </div>
    <AppVersion />
    <LoggedIn />
    {#if appVersion() == "Private (development)"}
      <LoadRemoteSchemeData {loadFile} />
    {/if}
    <FileInput label="Load schemes from GeoJSON" id="load-geojson" {loadFile} />
    <ErrorMessage {errorMessage} />

    {#if schemes.size > 0}
      <Filters {schemes} bind:schemesToBeShown bind:filterText />
    {/if}

    <ul>
      {#each schemes.values() as scheme}
        {#if schemesToBeShown.has(scheme.scheme_reference)}
          <SchemeCard {scheme} {authorityNames} />
        {/if}
      {/each}
    </ul>
  </div>
  <div slot="main">
    <PmTiles />
    <MapLibreMap style={$mapStyle} startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      <InterventionLayer
        colorInterventions={colorInterventionsBySchema("v1")}
      />
      <InteractiveLayer
        layer="interventions-points"
        {tooltip}
        clickable={false}
      />
      <InteractiveLayer
        layer="interventions-lines"
        {tooltip}
        clickable={false}
      />
      <InteractiveLayer
        layer="interventions-polygons"
        {tooltip}
        clickable={false}
      />
      <div class="top-right">
        <LayerControls />
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
    /* Leave room at the bottom for some of the map controls */
    max-height: calc(100vh - 200px);
    overflow: auto;
    max-width: 450px;
  }
</style>
