<script lang="ts">
  import { getStyleSpecification } from "lib/maplibre";
  import {
    Map,
    type LngLatBoundsLike,
    type StyleSpecification,
  } from "maplibre-gl";
  import { map as mapStore } from "stores";
  import { onMount, setContext } from "svelte";
  import {
    MapEvents,
    MapLibre,
    NavigationControl,
    ScaleControl,
  } from "svelte-maplibre";
  import cycleParking from "../../../assets/bicycle_parking.png?url";
  import chevron from "../../../assets/chevron.png?url";
  import googleLogo from "../../../assets/google_on_non_white_hdpi.png?url";
  import railwayStation from "../../../assets/railway_station.png?url";
  import { attribution, getGoogleAttribution } from "../maplibre/attribution";
  import Attributions from "./Attributions.svelte";

  export let style: string;
  // startBounds will only be used if the URL doesn't already have a camera set
  export let startBounds: LngLatBoundsLike | undefined = undefined;

  let styleSpec: string | StyleSpecification | null = null;

  let map: Map;
  let loaded = false;

  // Before creating the map, record if there's a camera viewport specified. If
  // startBounds isn't used, other code can set one dynamically.
  setContext("setCamera", !window.location.hash);
  if (window.location.hash) {
    startBounds = undefined;
  }

  $: if (loaded) {
    // TODO Get rid of mapStore entirely, eventually?
    mapStore.set(map);
  }

  onMount(async () => {
    styleSpec = await getStyleSpecification(style);
  });

  async function changeStyle(newStyle: string) {
    styleSpec = await getStyleSpecification(style);

    // Update the URL query parameter
    let url = new URL(window.location.href);
    url.searchParams.set("style", newStyle);
    window.history.replaceState(null, "", url.toString());
    // Note this isn't stored in cached browse page params
  }
  $: changeStyle(style);

  function onError(e: CustomEvent<any>) {
    // ErrorEvent isn't exported
    console.error(`MapLibre error: ${e.detail.error}`);
  }

  async function updateViewport() {
    if (style == "google" && $mapStore) {
      $attribution = await getGoogleAttribution($mapStore);
    }
  }
</script>

<div class="map">
  {#if styleSpec}
    <MapLibre
      style={styleSpec}
      bounds={startBounds}
      hash
      bind:loaded
      bind:map
      on:error={onError}
      images={[
        { id: "chevron", url: chevron },
        { id: "cycle_parking", url: cycleParking },
        { id: "railway_station", url: railwayStation },
      ]}
      attributionControl={false}
    >
      {#if $mapStore}
        <MapEvents on:zoomend={updateViewport} on:moveend={updateViewport} />
        <Attributions attribution={$attribution} />
        <ScaleControl />
        <NavigationControl position="bottom-left" visualizePitch />
        {#if style == "google"}
          <img src={googleLogo} alt="Google logo" />
        {/if}
        <slot />
      {/if}
    </MapLibre>
  {/if}
</div>

<style>
  .map {
    position: relative;
    flex-grow: 1;
    /* TODO: Hack, can't figure out why height broken */
    min-height: 100vh;
  }

  img {
    position: absolute;
    bottom: 30px;
    left: 10px;
  }
</style>
