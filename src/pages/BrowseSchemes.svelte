<script lang="ts">
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import LayerControls from "lib/browse/LayerControls.svelte";
  import "../style/main.css";
  import { controls } from "lib/browse/stores";
  import { atfSchemesGj } from "lib/browse/schemes/stores";
  import {
    appVersion,
    Geocoder,
    Layout,
    LoggedIn,
    Alpha,
    MapLibreMap,
    ZoomOutMap,
    Header,
  } from "lib/common";
  import { map, mapStyle } from "stores";
  import { onMount } from "svelte";
  import { map as sketchMapStore } from "scheme-sketcher-lib/config";

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
    <div style="display: flex; justify-content: space-between">
      <h1>Browse schemes</h1>
      <ZoomOutMap boundaryGeojson={$atfSchemesGj} />
    </div>
    <Alpha />
    <LoggedIn />
    <p>App version: {appVersion()}</p>

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
