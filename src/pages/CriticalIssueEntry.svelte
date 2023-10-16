<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { LngLat } from "maplibre-gl";
  import { mapStyle } from "stores";
  import { onMount } from "svelte";
  import {
    appVersion,
    BaselayerSwitcher,
    Geocoder,
    Layout,
    LineMeasureController,
    LoggedIn,
    MapLibreMap,
    StreetViewTool,
  } from "../lib/common";
  import Form from "../lib/critical_entry/Form.svelte";
  import Pin from "../lib/critical_entry/Pin.svelte";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  const params = new URLSearchParams(window.location.search);
  let defaultStyle =
    appVersion() == "Private (development)" ? "Road" : "dataviz";
  mapStyle.set(params.get("style") || defaultStyle);

  let markerPosition: LngLat | null = null;
  let streetviewEnabled = false;
</script>

<Layout sidebarWidth="35rem">
  <div slot="sidebar" class="govuk-prose">
    <h1>Critical issue entry</h1>
    <p>App version: {appVersion()}</p>
    <LoggedIn />
    {#if markerPosition}
      <Form pt={markerPosition} />
    {:else}
      <p>Click the map to add a critical</p>
    {/if}
  </div>
  <div slot="main">
    <MapLibreMap style={$mapStyle} startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      <Geocoder />
      <Pin bind:markerPosition enableAdding={!streetviewEnabled} />
      <div class="top-right">
        <BaselayerSwitcher disabled={streetviewEnabled} />
        <StreetViewTool bind:enabled={streetviewEnabled} />
        <div><LineMeasureController /></div>
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
  }
</style>
