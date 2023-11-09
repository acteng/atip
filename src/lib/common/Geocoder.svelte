<script lang="ts">
  import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl";
  import GeocodingControl from "@maptiler/geocoding-control/svelte/GeocodingControl.svelte";
  import type { MapController } from "@maptiler/geocoding-control/types";
  import maplibregl from "maplibre-gl";
  import { map } from "stores";
  import { onMount } from "svelte";

  // TODO The position for the sketch page is very awkward, but there's
  // seemingly no option to make the menu appear above the widget
  export let position: "top-left" | "below-top-bar" = "top-left";

  let mapController: MapController;

  // TODO HMR is broken
  onMount(() => {
    mapController = createMapLibreGlMapController($map, maplibregl);
  });

  // TODO Show markers
  // TODO Set the flyTo duration
</script>

{#if mapController}
  <div class={position}>
    <GeocodingControl
      {mapController}
      apiKey={import.meta.env.VITE_MAPTILER_API_KEY}
      country="gb"
    />
  </div>
{/if}

<style>
  .top-left {
    position: absolute;
    top: 20px;
    left: 50px;
  }

  .below-top-bar {
    position: absolute;
    top: 150px;
    left: 10px;
  }
</style>
