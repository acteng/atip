<script lang="ts">
  import { mode } from "lib/draw/stores";
  import { layerId } from "lib/maplibre";
  import { map } from "stores";
  import { ImageSource, Marker, RasterLayer } from "svelte-maplibre";
  import {
    imgSrc,
    opacity,
    percentX1,
    percentY1,
    percentX2,
    percentY2,
  } from "./stores";
  import Dot from "./Dot.svelte";

  // Marker positions
  let topLeft = { lng: 0, lat: 0 };
  let bottomRight = { lng: 0, lat: 0 };

  $: x1 = topLeft.lng + $percentX1 * (bottomRight.lng - topLeft.lng);
  $: y1 = topLeft.lat + $percentY1 * (bottomRight.lat - topLeft.lat);
  $: x2 = topLeft.lng + $percentX2 * (bottomRight.lng - topLeft.lng);
  $: y2 = topLeft.lat + $percentY2 * (bottomRight.lat - topLeft.lat);
  $: console.log({ x1, y1, x2, y2 });

  $: if (
    $imgSrc &&
    $mode.mode == "set-image" &&
    topLeft.lng == 0 &&
    topLeft.lat == 0
  ) {
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
  }
</script>

{#if $imgSrc}
  <ImageSource
    url={$imgSrc}
    coordinates={[
      [x1, y1],
      [x2, y1],
      [x2, y2],
      [x1, y2],
    ]}
  >
    <RasterLayer
      {...layerId("georeferenced-image")}
      paint={{
        "raster-fade-duration": 0,
        "raster-opacity": $opacity / 100.0,
      }}
    />
  </ImageSource>
{/if}

{#if $imgSrc && $mode.mode == "set-image"}
  <Marker bind:lngLat={topLeft} draggable>
    <Dot color="red" label="A" />
  </Marker>
  <Marker bind:lngLat={bottomRight} draggable>
    <Dot color="blue" label="B" />
  </Marker>
{/if}
