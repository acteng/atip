<script lang="ts">
  // MapLibre's built-in controls don't easily support changing the attribution text frequently.
  //
  // - Updating the style constantly has noticeable overhead, because of how svelte-maplibre handles preserving non-basemap sources and layers
  // - The attribution control doesn't have a direct API to change text dynamically, and recreating it constantly appears to leak controls sometimes.
  export let attribution: string;
</script>

<div>
  {@html attribution} |
  <a href="https://maplibre.org/" target="_blank">MapLibre</a>
</div>

<style>
  div {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: white;
    padding: 4px;
  }
</style>
