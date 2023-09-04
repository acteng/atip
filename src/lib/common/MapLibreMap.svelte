<script lang="ts">
  import {
    Map,
    NavigationControl,
    ScaleControl,
    type LngLatBoundsLike,
  } from "maplibre-gl";
  import { onDestroy, onMount, setContext } from "svelte";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { map as mapStore } from "../../stores";

  export let style: string;
  export let startBounds: LngLatBoundsLike | null = null;

  let map: Map;
  let mapContainer: HTMLDivElement;
  let loaded = false;

  // Before creating the map, check if there's a hash, because one will get set below
  // TODO Supposed to use a phantom type, not a string, as the key
  let setCamera = !window.location.hash;
  setContext("setCamera", setCamera);

  onMount(() => {
    map = new Map({
      container: mapContainer,
      style: `https://api.maptiler.com/maps/${style}/style.json?key=${
        import.meta.env.VITE_MAPTILER_API_KEY
      }`,
      hash: true,
    });
    map.addControl(new ScaleControl({}));
    map.addControl(
      new NavigationControl({ visualizePitch: true }),
      "bottom-right"
    );

    map.on("load", () => {
      loaded = true;
      if (setCamera && startBounds) {
        map.fitBounds(startBounds, { animate: false });
      }
      mapStore.set(map);
    });

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    resizeObserver.observe(mapContainer);
  });

  onDestroy(() => {
    map.remove();
  });
</script>

<div class="map" bind:this={mapContainer}>
  {#if loaded}
    <slot />
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
