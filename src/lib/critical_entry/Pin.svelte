<script lang="ts">
  import { Marker, type LngLat } from "maplibre-gl";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";

  let marker: Marker | null = null;
  export let markerPosition: LngLat;

  onMount(() => {
    // TODO If the user toggles streetview, this cursor is lost
    marker = new Marker({ draggable: true })
      .setLngLat(markerPosition)
      .addTo($map);
    marker.on("dragstart", () => {
      $map.getCanvas().style.cursor = "grabbing";
    });
    marker.on("dragend", () => {
      $map.getCanvas().style.cursor = "inherit";
      markerPosition = marker!.getLngLat();
    });
    marker.on("dblclick", () => {
      console.log("you clicked me");
    });
  });
  onDestroy(() => {
    if (marker) {
      marker.remove();
    }
  });
</script>
