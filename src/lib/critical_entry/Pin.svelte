<script lang="ts">
  import { Marker, type LngLat, type MapMouseEvent } from "maplibre-gl";
  import { onDestroy, onMount } from "svelte";
  import { map } from "../../stores";

  export let enableAdding: boolean;

  let marker: Marker | null = null;
  export let markerPosition: LngLat | null = null;

  onMount(() => {
    $map.on("click", startMarker);
    // TODO If the user toggles streetview, this cursor is lost
    $map.getCanvas().style.cursor = "crosshair";
  });
  onDestroy(() => {
    if (marker) {
      marker.remove();
    }
    $map.off("click", startMarker);
  });

  function startMarker(e: MapMouseEvent) {
    if (marker || !enableAdding) {
      return;
    }
    $map.getCanvas().style.cursor = "inherit";
    marker = new Marker({ draggable: true }).setLngLat(e.lngLat).addTo($map);
    markerPosition = marker.getLngLat();
    marker.on("dragstart", () => {
      $map.getCanvas().style.cursor = "grabbing";
    });
    marker.on("dragend", () => {
      $map.getCanvas().style.cursor = "inherit";
      markerPosition = marker!.getLngLat();
    });
    // TODO Change cursor when we're hovering on the marker
  }
</script>
