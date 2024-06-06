<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";
  import { fetchWithProgress, privateResourceBaseUrl } from "lib/common";
  // means setProgress may get percentages over 100.
  import { onMount } from "svelte";

  export let loadFile: (text: string) => void;

  let shouldLoad = !new URLSearchParams(window.location.search).has(
    "disable_schemes",
  );
  let loading = true;
  let progress = 0;

  async function loadData() {
    let bytes = await fetchWithProgress(
      `${privateResourceBaseUrl()}/v1/all_schemes_output.geojson.gz`,
      (p) => {
        progress = p;
      },
    );
    progress = 100;
    let text = new TextDecoder().decode(bytes);
    loadFile(text);
    loading = false;
  }

  onMount(async () => {
    if (shouldLoad) {
      await loadData();
    }
  });

  async function loadDataManually() {
    shouldLoad = true;
    await loadData();
  }
</script>

{#if !shouldLoad}
  <SecondaryButton on:click={loadDataManually}>
    Load latest scheme data
  </SecondaryButton>
{:else if loading}
  {#if progress <= 100}
    <label>
      Downloading scheme data
      <progress value={progress} />
    </label>
  {:else}
    <label>
      Processing scheme data
      <progress />
    </label>
  {/if}
{/if}

<style>
  progress {
    width: 100%;
  }
</style>
