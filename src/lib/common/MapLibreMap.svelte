<script lang="ts">
  import { getStyleSpecification } from "lib/maplibre";
  import {
    Map,
    type LngLatBoundsLike,
    type StyleSpecification,
  } from "maplibre-gl";
  import { map as mapStore } from "stores";
  import { onMount } from "svelte";
  import { MapLibre, NavigationControl, ScaleControl } from "svelte-maplibre";

  export let style: string;
  export let startBounds: LngLatBoundsLike | undefined = undefined;

  let styleSpec: string | StyleSpecification | null = null;

  let map: Map;
  let loaded = false;

  $: if (loaded) {
    // TODO Get rid of mapStore entirely, eventually?
    mapStore.set(map);
  }

  onMount(async () => {
    styleSpec = await getStyleSpecification(style);
    /*map.on("load", () => {
      loaded = true;
      if (setCamera && startBounds) {
        map.fitBounds(startBounds, { animate: false });
      }
      mapStore.set(map);
    });*/
  });

  async function changeStyle(newStyle: string) {
    styleSpec = await getStyleSpecification(style);

    // Update the URL query parameter
    let url = new URL(window.location.href);
    url.searchParams.set("style", newStyle);
    window.history.replaceState(null, "", url.toString());
  }
  $: changeStyle(style);
</script>

<div class="map">
  {#if styleSpec}
    <MapLibre style={styleSpec} bounds={startBounds} bind:loaded bind:map>
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
