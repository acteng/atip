<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { AuthorityBoundaries } from "boundaries";
  import BoundaryLayer from "lib/draw/BoundaryLayer.svelte";
  import {
    appVersion,
    Geocoder,
    getAuthoritiesGeoJson,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import ImageLayer from "lib/draw/image/ImageLayer.svelte";
  import InterventionLayer from "lib/draw/InterventionLayer.svelte";
  import PolygonToolLayer from "lib/draw/polygon/PolygonToolLayer.svelte";
  import RouteSnapperLayer from "lib/draw/route/RouteSnapperLayer.svelte";
  import SplitRouteMode from "lib/draw/route/SplitRouteMode.svelte";
  import { mode } from "lib/draw/stores";
  import Toolbox from "lib/draw/Toolbox.svelte";
  import { ButtonGroup, SecondaryButton } from "govuk-svelte";
  import About from "lib/sidebar/About.svelte";
  import FileManagement from "lib/sidebar/FileManagement.svelte";
  import Instructions from "lib/sidebar/Instructions.svelte";
  import LeftSidebar from "lib/sidebar/LeftSidebar.svelte";
  import { mapStyle, schema } from "stores";
  import { onMount } from "svelte";

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
    <FileManagement {authorityName} />
    <LeftSidebar {routeSnapperUrl} />
  </div>
  <div class="main">
    <MapLibreMap style={$mapStyle}>
      <Geocoder position="top-right" />
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
