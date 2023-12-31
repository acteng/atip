<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import AppVersion from "lib/browse/AppVersion.svelte";
  import { processInput } from "lib/browse/data";
  import Filters from "lib/browse/Filters.svelte";
  import LayerControls from "lib/browse/LayerControls.svelte";
  import LoadRemoteSchemeData from "lib/browse/LoadRemoteSchemeData.svelte";
  import SchemeCard from "lib/browse/SchemeCard.svelte";
  import "../style/main.css";
  import InterventionLayer from "lib/browse/InterventionLayer.svelte";
  import {
    appVersion,
    FileInput,
    Geocoder,
    Layout,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import { ErrorMessage } from "lib/govuk";
  import { mapStyle } from "stores";
  import { onMount } from "svelte";
  import type { SchemeCollection, SchemeData } from "types";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  const params = new URLSearchParams(window.location.search);
  mapStyle.set(params.get("style") || "dataviz");
  let errorMessage = "";

  let schemesGj: SchemeCollection = {
    type: "FeatureCollection",
    features: [],
    schemes: {},
  };
  let schemes: Map<string, SchemeData> = new Map();
  let schemesToBeShown: Set<string> = new Set();
  let showSchemes = true;

  function loadFile(text: string) {
    try {
      schemesGj = JSON.parse(text);
      schemes = processInput(schemesGj);
      errorMessage = "";
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
    }
  }
</script>

<Layout>
  <div slot="sidebar" class="govuk-prose">
    <div style="display: flex; justify-content: space-between">
      <h1>Browse schemes</h1>
      <ZoomOutMap boundaryGeojson={schemesGj} />
    </div>
    <AppVersion />
    <LoggedIn />
    {#if appVersion() == "Private (development)"}
      <LoadRemoteSchemeData {loadFile} />
    {/if}
    <FileInput label="Load schemes from GeoJSON" id="load-geojson" {loadFile} />
    <ErrorMessage {errorMessage} />

    {#if schemes.size > 0}
      <Filters
        bind:schemesGj
        {schemes}
        bind:schemesToBeShown
        bind:show={showSchemes}
      />
    {/if}

    <ul>
      {#each schemes.values() as scheme}
        {#if schemesToBeShown.has(scheme.scheme_reference)}
          <SchemeCard {schemesGj} {scheme} />
        {/if}
      {/each}
    </ul>
  </div>
  <div slot="main">
    <MapLibreMap style={$mapStyle} startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      <Geocoder />
      <InterventionLayer {schemesGj} {showSchemes} />
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
