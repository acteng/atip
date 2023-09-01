<script lang="ts">
  import { Marker, type LngLat, type MapMouseEvent } from "maplibre-gl";
  import { onDestroy, onMount } from "svelte";
  import { map } from "../../stores";

  let marker: Marker | null = null;
  export let markerPosition: LngLat | null = null;

  onMount(() => {
    $map.on("click", startMarker);
  });
  onDestroy(() => {
    if (marker) {
      marker.remove();
    }
    $map.off("click", startMarker);
  });

  function startMarker(e: MapMouseEvent) {
    if (marker) {
      return;
    }
    marker = new Marker({ draggable: true }).setLngLat(e.lngLat).addTo($map);
    markerPosition = marker.getLngLat();
    marker.on("dragend", () => {
      markerPosition = marker!.getLngLat();
    });
  }
</script>
