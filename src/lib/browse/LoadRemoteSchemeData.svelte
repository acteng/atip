<script lang="ts">
  import { onMount } from "svelte";

  // TODO Loading message
  export let loadFile: (text: string) => void;

  onMount(async () => {
    // TODO VITE_RESOURCE_BASE
    let resp = await fetch(
      "https://storage.googleapis.com/atip-test-1/static/random_schemes.geojson"
    );
    let text = await resp.text();
    loadFile(text);
  });
</script>
