<script lang="ts">
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import LayerControls from "lib/browse/LayerControls.svelte";
  import ActiveLayersLegend from "lib/browse/layers/ActiveLayersLegend.svelte";
  import "../style/main.css";
  import { atfSchemes } from "lib/browse/schemes/stores";
  import { controls } from "lib/browse/stores";
  import {
    Beta,
    Geocoder,
    Header,
    Layout,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import { map as sketchMapStore } from "scheme-sketcher-lib/config";
  import { map, mapStyle } from "stores";
  import { onMount } from "svelte";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  const params = new URLSearchParams(window.location.search);
  mapStyle.set(params.get("style") || "dataviz");

  // Need this for zordering to work
  $: if ($map) {
    sketchMapStore.set($map);
  }

  let sidebarDiv: HTMLDivElement;
  $: if (sidebarDiv && $controls) {
    sidebarDiv.innerHTML = "";
    sidebarDiv.appendChild($controls);
  }
</script>

<Layout>
  <div slot="sidebar" class="govuk-prose">
    <Header />

    <Beta />
    <div style="border-bottom: 1px solid #b1b4b6">
      <LoggedIn />
    </div>

    <div style="display: flex; justify-content: space-between">
      <h1>Scheme Browser</h1>
      <ZoomOutMap boundaryGeojson={$atfSchemes} />
    </div>

    <div bind:this={sidebarDiv} />
  </div>

  <div slot="main">
    <MapLibreMap style={$mapStyle} startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      <Geocoder />
      {#if $sketchMapStore}
        <LayerControls />
      {/if}
    </MapLibreMap>
  </div>
</Layout>

<div class="top-right govuk-prose">
  <ActiveLayersLegend />
</div>

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
