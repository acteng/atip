<script lang="ts">
  import { getStyleSpecification } from "lib/maplibre";
  import {
    Map,
    type LngLatBoundsLike,
    type StyleSpecification,
  } from "maplibre-gl";
  import { map as mapStore } from "stores";
  import { onMount, setContext } from "svelte";
  import { MapLibre, NavigationControl, ScaleControl } from "svelte-maplibre";

  export let style: string;
  export let startBounds: LngLatBoundsLike | undefined = undefined;

  let styleSpec: string | StyleSpecification | null = null;

  let map: Map;
  let loaded = false;

  // Before creating the map, check if there's a hash, because one will get set below
  // TODO Change BoundaryLayer to not do this?
  setContext("setCamera", !window.location.hash);

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
  }
  $: changeStyle(style);

  function onError(e: CustomEvent<any>) {
    // ErrorEvent isn't exported
    console.error(`MapLibre error: ${e.detail.error}`);
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
    >
      {#if loaded}
        <ScaleControl />
        <NavigationControl position="bottom-right" visualizePitch />
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
</style>
