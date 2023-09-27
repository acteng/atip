<script lang="ts">
  import { Marker, type LngLat } from "maplibre-gl";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";

  let marker: Marker | null = null;
  export let markerPosition: LngLat;
  export let markerPositionUpdated: () => any;

  onMount(() => {
    marker = new Marker({ draggable: true })
      .setLngLat(markerPosition)
      .addTo($map);
    marker.on("dragstart", () => {
      $map.getCanvas().style.cursor = "grabbing";
    });
    marker.on("drag", () => {
      $map.getCanvas().style.cursor = "inherit";
      markerPosition = marker!.getLngLat();
      markerPositionUpdated();
    });
  });
  onDestroy(() => {
    if (marker) {
      marker.remove();
    }
  });
</script>
