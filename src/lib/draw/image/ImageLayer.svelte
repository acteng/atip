<script lang="ts">
  import type { ImageSource } from "maplibre-gl";
  import { map, mode } from "stores";
  import { onDestroy } from "svelte";
  import { Marker } from "svelte-maplibre";
  import { imgSrc, opacity } from "./stores";

  // TODO Upstream an ImageLayer component

  $: setupSource($imgSrc);

  let source = "image-source";
  let layer = "image-layer";

  let topLeft = { lng: 0, lat: 0 };
  let bottomRight = { lng: 0.1, lat: 0.1 };

  onDestroy(() => {
    setupSource(null);
  });

  function setupSource(url: string | null) {
    if ($map.getLayer(layer)) {
      $map.removeLayer(layer);
    }
    if ($map.getSource(source)) {
      $map.removeSource(source);
    }
    if (!url) {
      return;
    }

    // Reset the markers to cover some of the current viewport
    let bounds = $map.getBounds();
    topLeft.lng =
      bounds.getWest() + 0.4 * (bounds.getEast() - bounds.getWest());
    bottomRight.lng =
      bounds.getWest() + 0.6 * (bounds.getEast() - bounds.getWest());
    topLeft.lat =
      bounds.getNorth() + 0.4 * (bounds.getSouth() - bounds.getNorth());
    bottomRight.lat =
      bounds.getNorth() + 0.6 * (bounds.getSouth() - bounds.getNorth());

    $map.addSource(source, {
      type: "image",
      url,
      coordinates: [
        [topLeft.lng, topLeft.lat],
        [bottomRight.lng, topLeft.lat],
        [bottomRight.lng, bottomRight.lat],
        [topLeft.lng, bottomRight.lat],
      ],
    });
    $map.addLayer({
      id: layer,
      source,
      type: "raster",
      paint: {
        "raster-fade-duration": 0,
        "raster-opacity": $opacity / 100.0,
      },
    });
  }

  $: updateOpacity($opacity);
  function updateOpacity(opacity: number) {
    $map.setPaintProperty(layer, "raster-opacity", $opacity / 100.0);
  }

  function moveImage() {
    ($map.getSource(source) as ImageSource).setCoordinates([
      [topLeft.lng, topLeft.lat],
      [bottomRight.lng, topLeft.lat],
      [bottomRight.lng, bottomRight.lat],
      [topLeft.lng, bottomRight.lat],
    ]);
  }
</script>

{#if $imgSrc && $mode.mode == "set-image"}
  <Marker bind:lngLat={topLeft} draggable on:drag={moveImage}>
    <span class="dot" style="background-color: red" />
  </Marker>
  <Marker bind:lngLat={bottomRight} draggable on:drag={moveImage}>
    <span class="dot" style="background-color: blue" />
  </Marker>
{/if}

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
  }
</style>
