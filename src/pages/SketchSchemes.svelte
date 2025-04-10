<script lang="ts">
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { AuthorityBoundaries } from "boundaries";
  import {
    BaselayerSwitcher,
    Beta,
    Geocoder,
    getAuthoritiesGeoJson,
    Header,
    LoggedIn,
    MapLibreMap,
  } from "lib/common";
  import ExternalLink from "lib/common/ExternalLink.svelte";
  import { getKey } from "lib/common/files";
  import { cfg } from "lib/sketch/config";
  import FileManagement from "lib/sketch/FileManagement.svelte";
  import { map as sketchMapStore } from "scheme-sketcher-lib/config";
  import {
    BoundaryLayer,
    ImageLayer,
    InterventionLayer,
    NewFeatureForm,
    Toolbox,
  } from "scheme-sketcher-lib/draw";
  import { emptySchemes, mode } from "scheme-sketcher-lib/draw/stores";
  import { EditFeatureForm, ListMode } from "scheme-sketcher-lib/sidebar";
  import { map, mapStyle, schema } from "stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // FileManagement will set this up
  let gjSchemes = writable(emptySchemes(cfg));

  let params = new URLSearchParams(window.location.search);
  // If the authority is invalid, it'll be handled in onMount asynchronously
  let authority = params.get("authority") || "";
  let filename = decodeURIComponent(params.get("file") || "");

  if (window.localStorage.getItem(getKey(authority, filename)) == null) {
    // If either the filename or authority is wrong, redirect to the very first
    // page. This might be annoying if the authority is correct, but it's
    // simpler. Unless a user copies a bad URL, this shouldn't happen anyway
    window.location.href = `choose_area.html?schema=${$schema}&error=File ${encodeURIComponent(filename)} in authority ${authority} not found`;
  }

  mapStyle.set(params.get("style") || "streets");

  // The version numbers here are arbitrary, not necessarily related to the
  // app's version. The version of the code deployed has to match the data, and
  // it's simplest to increment the number here for new incompatible data
  // releases.
  let routeSnapperUrl = `${
    import.meta.env.VITE_RESOURCE_BASE
  }/route-snappers/v3/${authority}.bin.gz`;

  let boundaryGeojson: AuthorityBoundaries;
  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    boundaryGeojson = await loadAuthorityBoundary();
  });

  async function loadAuthorityBoundary(): Promise<AuthorityBoundaries> {
    let geojson = await getAuthoritiesGeoJson();
    geojson.features = geojson.features.filter(
      (feature) => feature.properties.full_name == authority,
    );
    if (geojson.features.length === 0) {
      window.location.href = `choose_area.html?schema=${$schema}&error=Authority name not found: ${authority}`;
    }
    return geojson;
  }

  $: if ($map) {
    sketchMapStore.set($map);
  }
</script>

<div class="overall-layout">
  <div class="sidebar govuk-prose">
    <Header />

    {#if $mode.mode == "list" || $mode.mode == "split-route" || $mode.mode == "set-image" || $mode.mode == "streetview"}
      <Beta />
      <div style="border-bottom: 1px solid #b1b4b6">
        <LoggedIn />
      </div>

      <h2 style="margin-bottom: 0px">Scheme Sketcher</h2>
      <ExternalLink href="https://www.youtube.com/watch?v=6u2lK8xzQfM">
        Tutorial
      </ExternalLink>
    {/if}

    <FileManagement {gjSchemes} {authority} {filename} />

    {#if $mode.mode == "list" || $mode.mode == "split-route" || $mode.mode == "set-image" || $mode.mode == "streetview"}
      <ListMode {cfg} {gjSchemes} />
    {:else if $mode.mode == "new-point" || $mode.mode == "new-area" || $mode.mode == "new-route"}
      <NewFeatureForm {cfg} {gjSchemes} />
    {:else if $mode.mode == "edit"}
      <EditFeatureForm {cfg} {gjSchemes} id={$mode.id} />
    {/if}
    {#if $mode.mode != "list"}
      <hr />
    {/if}
    <BaselayerSwitcher />
  </div>
  <div class="main">
    <MapLibreMap style={$mapStyle}>
      <Geocoder position="top-right" />
      {#if $sketchMapStore}
        <BoundaryLayer {cfg} {boundaryGeojson} />
        <InterventionLayer {cfg} {gjSchemes} />
        <ImageLayer {cfg} />
        <Toolbox {cfg} {gjSchemes} {routeSnapperUrl} />
      {/if}
    </MapLibreMap>
  </div>
</div>

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
