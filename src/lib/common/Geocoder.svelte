<script lang="ts">
  import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl";
  import GeocodingControl from "@maptiler/geocoding-control/svelte/GeocodingControl.svelte";
  import type { MapController } from "@maptiler/geocoding-control/types";
  import maplibregl from "maplibre-gl";
  import { map } from "stores";
  import { onMount } from "svelte";

  // TODO The position for the sketch page is very awkward, but there's
  // seemingly no option to make the menu appear above the widget
  export let position: "top-left" | "top-right" = "top-left";

  let mapController: MapController;

  onMount(() => {
    let marker = true;
    let showResultMarkers = true;
    let flyToOptions = {
      duration: 1000,
    };
    let fitBoundsOptions = {
      duration: 1000,
    };
    mapController = createMapLibreGlMapController(
      $map,
      maplibregl,
      marker,
      showResultMarkers,
      flyToOptions,
      fitBoundsOptions,
    );
  });
</script>

{#if mapController}
  <div class={position}>
    <GeocodingControl
      {mapController}
      apiKey={import.meta.env.VITE_MAPTILER_API_KEY}
      country="gb"
      proximity={[
        {
          type: "map-center",
        },
      ]}
    />
  </div>
{/if}

<style>
  .top-left {
    position: absolute;
    top: 20px;
    left: 50px;
  }

  .top-right {
    position: absolute;
    top: 150px;
    right: 10px;
  }
</style>
