<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { FeatureCollection, Polygon } from "geojson";
  import BoundaryLayer from "lib/BoundaryLayer.svelte";
  import {
    appVersion,
    Geocoder,
    getAuthoritiesGeoJson,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import InterventionLayer from "lib/draw/InterventionLayer.svelte";
  import Toolbox from "lib/draw/Toolbox.svelte";
  import { SecondaryButton } from "lib/govuk";
  import About from "lib/sidebar/About.svelte";
  import EntireScheme from "lib/sidebar/EntireScheme.svelte";
  import Instructions from "lib/sidebar/Instructions.svelte";
  import LeftSidebar from "lib/sidebar/LeftSidebar.svelte";
  import { mapStyle, mode } from "stores";
  import { onMount } from "svelte";
  import type { Schema } from "types";

  let showAbout = false;
  let showInstructions = false;

  const params = new URLSearchParams(window.location.search);
  // TODO Add validation and some kind of error page
  let authorityName: string = params.get("authority")!;
  let schema: Schema = (params.get("schema") as Schema) || "v1";

  mapStyle.set(params.get("style") || "streets");

  // The version numbers here are arbitrary, not necessarily related to the
  // app's version. The version of the code deployed has to match the data, and
  // it's simplest to increment the number here for new incompatible data
  // releases.
  let routeSnapperUrl = `${
    import.meta.env.VITE_RESOURCE_BASE
  }/route-snappers/v2.2/${authorityName}.bin.gz`;

  function toggleAbout() {
    showAbout = !showAbout;
    showInstructions = false;
  }
  function toggleInstructions() {
    showInstructions = !showInstructions;
    showAbout = false;
  }

  let boundaryGeojson: FeatureCollection<Polygon>;
  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    boundaryGeojson = await loadAuthorityBoundary();
  });

  async function loadAuthorityBoundary(): Promise<FeatureCollection<Polygon>> {
    let geojson = await getAuthoritiesGeoJson();
    geojson.features = geojson.features.filter(
      (feature) => feature.properties?.name == authorityName
    );
    if (geojson.features.length === 0) {
      window.location.href = `/?error=Authority name not found: ${authorityName}`;
    }
    return geojson;
  }
</script>

<div class="overall-layout">
  <div class="sidebar govuk-prose">
    {#if $mode.mode == "list"}
      <h2>ATIP Scheme Sketcher</h2>
      <p>App version: {appVersion()}</p>
      <div style="display: flex; justify-content: space-between">
        <p>{authorityName}</p>
        <a href="index.html">Change area</a>
        <ZoomOutMap {boundaryGeojson} />
      </div>

      <div class="govuk-button-group">
        <SecondaryButton on:click={toggleAbout}>About</SecondaryButton>
        <SecondaryButton on:click={toggleInstructions}>
          Instructions
        </SecondaryButton>
      </div>
      <LoggedIn />
    {/if}
    <EntireScheme {authorityName} {schema} />
    <LeftSidebar {schema} />
  </div>
  <div class="main">
    <MapLibreMap style={$mapStyle}>
      <Geocoder position="bottom-left" />
      <BoundaryLayer {boundaryGeojson} />
      <InterventionLayer {schema} />
      <Toolbox {routeSnapperUrl} />
    </MapLibreMap>
  </div>
</div>

<About bind:open={showAbout} />
<Instructions bind:open={showInstructions} {schema} />

<style>
  * {
    box-sizing: border-box;
  }

  .overall-layout {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-flow: row nowrap;
  }

  .sidebar {
    width: 25rem;
    padding: 1rem;
    overflow-y: auto;
  }

  .main {
    flex-grow: 1;
    display: flex;
  }
</style>
