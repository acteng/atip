<script lang="ts">
  import { mode } from "lib/draw/stores";
  import { layerId } from "lib/maplibre";
  import { map } from "stores";
  import { ImageSource, Marker, RasterLayer } from "svelte-maplibre";
  import { imgSrc, opacity } from "./stores";
  import Dot from "./Dot.svelte";

  let topLeft = { lng: 0, lat: 0 };
  let bottomRight = { lng: 0, lat: 0 };

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
      [topLeft.lng, topLeft.lat],
      [bottomRight.lng, topLeft.lat],
      [bottomRight.lng, bottomRight.lat],
      [topLeft.lng, bottomRight.lat],
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
