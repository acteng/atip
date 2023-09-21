<script lang="ts">
  import { privateResourceBaseUrl } from "lib/common";
  import { onMount } from "svelte";

  // TODO Loading message
  export let loadFile: (text: string) => void;

  onMount(async () => {
    let resp = await fetch(
      `${privateResourceBaseUrl()}/v1/random_schemes.geojson`
    );
    let text = await resp.text();
    loadFile(text);
  });
</script>
