<script lang="ts">
  // Load this BEFORE the Map component to configure pmtiles support
  import maplibregl from "maplibre-gl";
  import { Protocol } from "pmtiles";
  import { onDestroy, onMount } from "svelte";

  onMount(() => {
    let protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
  });

  onDestroy(() => {
    maplibregl.removeProtocol("pmtiles");
  });
</script>
