<script lang="ts">
  import { onMount } from "svelte";

  // TODO Loading message
  export let loadFile: (text: string) => void;

  onMount(async () => {
    let resp = await fetch(
      `${import.meta.env.VITE_RESOURCE_BASE}/random_schemes.geojson`
    );
    let text = await resp.text();
    loadFile(text);
  });
</script>
