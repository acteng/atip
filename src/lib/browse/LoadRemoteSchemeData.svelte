<script lang="ts">
  import { privateResourceBaseUrl } from "lib/common";
  import { onMount } from "svelte";

  export let loadFile: (text: string) => void;

  let loading = true;

  onMount(async () => {
    let resp = await fetch(
      `${privateResourceBaseUrl()}/v1/random_schemes.geojson`,
    );
    let text = await resp.text();
    loadFile(text);
    loading = false;
  });
</script>

{#if loading}
  <p>Loading scheme data...</p>
{/if}
