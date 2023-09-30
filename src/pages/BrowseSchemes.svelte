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
  import InterventionLayer from "lib/browse/InterventionLayer.svelte";
  import {
    appVersion,
    FileInput,
    Layout,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import { ErrorMessage } from "lib/govuk";
  import { gjScheme, mapStyle } from "stores";
  import { onMount } from "svelte";

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
  let showSchemes = true;

  function loadFile(text: string) {
    try {
      gjScheme.set(JSON.parse(text));
      // @ts-ignore TODO We're abusing the gjScheme store in the browse page for now
      schemes = processInput($gjScheme);
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
      <Filters
        {schemes}
        bind:schemesToBeShown
        bind:filterText
        bind:show={showSchemes}
      />
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
    <MapLibreMap style={$mapStyle} startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      <InterventionLayer {filterText} {showSchemes} />
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
