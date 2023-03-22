<script>
  import { onMount, onDestroy, setContext } from "svelte";
  import { Map, NavigationControl, ScaleControl } from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";

  let map;
  let mapContainer;
  let loaded = false;
  // Before creating the map, check if there's a hash, because one will get set below
  let setCamera = !window.location.hash;

  // TODO Supposed to use a phantom type, not a string, as the key
  setContext("map", { getMap: () => map, setCamera: setCamera });

  onMount(() => {
    map = new Map({
      container: mapContainer,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo",
      hash: true,
    });
    map.addControl(new ScaleControl());
    map.addControl(new NavigationControl(), "bottom-right");

    map.on("load", () => {
      loaded = true;
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
