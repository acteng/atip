<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import { processInput } from "lib/browse/data";
  import Filters from "lib/browse/Filters.svelte";
  import LayerControls from "lib/browse/LayerControls.svelte";
  import Toolbox from "lib/browse/Toolbox.svelte";
  import LoadRemoteSchemeData from "lib/browse/LoadRemoteSchemeData.svelte";
  import SchemeCard from "lib/browse/SchemeCard.svelte";
  import "../style/main.css";
  import InterventionLayer from "lib/browse/InterventionLayer.svelte";
  import { schemes, schemesGj } from "lib/browse/stores";
  import {
    appVersion,
    Geocoder,
    Layout,
    LoggedIn,
    MapLibreMap,
    Modal,
    ZoomOutMap,
  } from "lib/common";
  import { ErrorMessage, FileInput, SecondaryButton } from "govuk-svelte";
  import { mapStyle } from "stores";
  import { onMount } from "svelte";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  const params = new URLSearchParams(window.location.search);
  mapStyle.set(params.get("style") || "dataviz");
  let errorMessage = "";

  let schemesToBeShown: Set<string> = new Set();
  let showSchemes = true;
  let showSchemeNotes = false;

  function loadFile(text: string) {
    try {
      schemesGj.set(JSON.parse(text));
      schemes.set(processInput($schemesGj));
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
      <ZoomOutMap boundaryGeojson={$schemesGj} />
    </div>
    <p>App version: {appVersion()}</p>
    <LoggedIn />
    {#if appVersion() == "Private (development)"}
      <LoadRemoteSchemeData {loadFile} />
    {/if}
    {#if $schemesGj.notes}
      <SecondaryButton on:click={() => (showSchemeNotes = true)}>
        About the scheme data
      </SecondaryButton>
      <Modal title="About this scheme data" bind:open={showSchemeNotes}>
        <div class="govuk-prose">
          <p>Please note there are data quality caveats for all scheme data:</p>
          <ul>
            {#each $schemesGj.notes as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </div>
      </Modal>
    {/if}
    <FileInput label="Load schemes from GeoJSON" {loadFile} />
    <ErrorMessage {errorMessage} />

    {#if $schemes.size > 0}
      <Filters bind:schemesToBeShown bind:show={showSchemes} />
    {/if}

    <ul>
      {#each $schemes.values() as scheme}
        {#if schemesToBeShown.has(scheme.scheme_reference)}
          <SchemeCard {scheme} />
        {/if}
      {/each}
    </ul>
  </div>
  <div slot="main">
    <MapLibreMap style={$mapStyle} startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      <InterventionLayer {showSchemes} />
      <div class="top-left">
        <Geocoder />
        <Toolbox />
      </div>
      <div class="top-right">
        <LayerControls />
      </div>
    </MapLibreMap>
  </div>
</Layout>

<style>
  .top-left {
    position: absolute;
    top: 10px;
    /* Leave room for the sidebar collapser/expander */
    left: 50px;

    display: flex;
  }

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
