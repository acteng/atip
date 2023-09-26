<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { LngLat, MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { onMount } from "svelte";
  import {
    appVersion,
    Layout,
    LoggedIn,
    MapLibreMap,
    StreetViewController,
  } from "../lib/common";
  import BaselayerSwitcher from "../lib/critical_entry/BaselayerSwitcher.svelte";
  import Form from "../lib/critical_entry/Form.svelte";
  import Pin from "../lib/critical_entry/Pin.svelte";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
    $map.on("click", (e: MapMouseEvent) => {
      markerPosition = e.lngLat;
    });
  });

  let defaultStyle =
    appVersion() == "Private (development)" ? "Road" : "dataviz";

  let markerPosition: LngLat;
  let streetviewOff = true;

  let streetViewController: StreetViewController;

  function onKeydown(e: KeyboardEvent) {
    if (!streetviewOff && e.key == "Escape") {
      streetViewController.disableStreetView();
      e.preventDefault();
    }
  }
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
    <MapLibreMap style={defaultStyle} startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      {#if markerPosition}
        <Pin bind:markerPosition markerPositionUpdated={() => {}} />
      {/if}
      <div class="top-right">
        <BaselayerSwitcher style={defaultStyle} disabled={!streetviewOff} />
        <StreetViewController
          bind:this={streetViewController}
          displayEnableButton
          bind:isInactive={streetviewOff}
        />
      </div>
    </MapLibreMap>
  </div>
</Layout>

<svelte:window on:keydown={onKeydown} />

<style>
  .top-right {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
    padding: 16px;
  }
</style>
