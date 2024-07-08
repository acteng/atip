<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { AuthorityBoundaries } from "boundaries";
  import {
    BoundaryLayer,
    ImageLayer,
    InterventionLayer,
    PolygonToolLayer,
    RouteSnapperLayer,
    SplitRouteMode,
    Toolbox,
  } from "scheme-sketcher-lib/draw";
  import {
    appVersion,
    BaselayerSwitcher,
    Geocoder,
    getAuthoritiesGeoJson,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import { mode } from "scheme-sketcher-lib/draw/stores";
  import { ButtonGroup, SecondaryButton } from "govuk-svelte";
  import About from "lib/sketch/About.svelte";
  import FileManagement from "lib/sketch/FileManagement.svelte";
  import Instructions from "lib/sketch/Instructions.svelte";
  import { PerModeControls } from "scheme-sketcher-lib/sidebar";
  import { map, mapStyle, schema } from "stores";
  import { onMount } from "svelte";
  import { setupSchemeSketcher } from "lib/sketch/config";
  import { map as sketchMapStore } from "scheme-sketcher-lib/config";
  import { setupZorder } from "lib/maplibre";

  let setupDone = false;
  let showAbout = false;
  let showInstructions = false;

  let params = new URLSearchParams(window.location.search);
  // TODO Add validation and some kind of error page
  let authorityName: string = params.get("authority")!;

  mapStyle.set(params.get("style") || "streets");

  // The version numbers here are arbitrary, not necessarily related to the
  // app's version. The version of the code deployed has to match the data, and
  // it's simplest to increment the number here for new incompatible data
  // releases.
  let routeSnapperUrl = `${
    import.meta.env.VITE_RESOURCE_BASE
  }/route-snappers/v2.6/${authorityName}.bin.gz`;

  function toggleAbout() {
    showAbout = !showAbout;
    showInstructions = false;
  }
  function toggleInstructions() {
    showInstructions = !showInstructions;
    showAbout = false;
  }

  let boundaryGeojson: AuthorityBoundaries;
  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    boundaryGeojson = await loadAuthorityBoundary();
    setupSchemeSketcher();
    setupZorder();
    setupDone = true;
  });

  async function loadAuthorityBoundary(): Promise<AuthorityBoundaries> {
    let geojson = await getAuthoritiesGeoJson();
    geojson.features = geojson.features.filter(
      (feature) => feature.properties.full_name == authorityName,
    );
    if (geojson.features.length === 0) {
      window.location.href = `index.html?error=Authority name not found: ${authorityName}`;
    }
    return geojson;
  }

  function authorityDescription(): string {
    let parts = authorityName.split("_");
    if (parts.length == 2) {
      if (parts[0] == "LAD") {
        return `${parts[1]} (LAD)`;
      } else if (parts[0] == "TA") {
        return `${parts[1]} (Transport Authority)`;
      }
    }
    // Unexpected input, just return it
    return authorityName;
  }

  // Need this to set up PerModeControls
  $: if ($map) {
    sketchMapStore.set($map);
  }
</script>

<div class="overall-layout">
  <div class="sidebar govuk-prose">
    {#if $mode.mode == "list"}
      <h2>ATIP Scheme Sketcher</h2>
      <p>App version: {appVersion()}</p>
      <div style="display: flex; justify-content: space-between">
        <p>{authorityDescription()}</p>
        <a href={`index.html?schema=${$schema}`}>Change area</a>
        <ZoomOutMap {boundaryGeojson} />
      </div>

      <ButtonGroup>
        <SecondaryButton on:click={toggleAbout}>About</SecondaryButton>
        <SecondaryButton on:click={toggleInstructions}>
          Instructions
        </SecondaryButton>
      </ButtonGroup>
      <LoggedIn />
    {/if}
    {#if setupDone}
      <FileManagement {authorityName} />
      <PerModeControls {routeSnapperUrl} />
    {/if}
    {#if $mode.mode != "list"}
      <hr />
    {/if}
    <BaselayerSwitcher />
  </div>
  <div class="main">
    <MapLibreMap style={$mapStyle}>
      <Geocoder position="top-right" />
      {#if setupDone}
        <BoundaryLayer {boundaryGeojson} />
        <InterventionLayer />
        <ImageLayer />
        {#if $mode.mode == "list"}
          <Toolbox />
        {:else if $mode.mode == "split-route"}
          <SplitRouteMode />
        {/if}
        <RouteSnapperLayer />
        <PolygonToolLayer />
      {/if}
    </MapLibreMap>
  </div>
</div>

<About bind:open={showAbout} />
<Instructions bind:open={showInstructions} />

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
    overflow-y: hidden;

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
