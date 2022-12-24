<script>
  import { onMount, onDestroy } from "svelte";
  import { Map, NavigationControl, ScaleControl } from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";

  let map;
  let mapContainer;

  onMount(() => {
    map = new Map({
      container: mapContainer,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      hash: true,
    });
    map.addControl(new ScaleControl());
    map.addControl(new NavigationControl(), "bottom-right");
  });

  onDestroy(() => {
    map.remove();
  });
</script>

<div class="map" bind:this={mapContainer} />

<style>
  .map {
    position: relative;
    flex-grow: 1;
    min-height: 100px;
  }
</style>
