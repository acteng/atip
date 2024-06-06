<script lang="ts">
  import { privateResourceBaseUrl } from "lib/common";
  import { onMount } from "svelte";

  export let loadFile: (text: string) => void;

  let loading = true;
  let progress = 0;

  onMount(async () => {
    let bytes = await fetchWithProgress(
      `${privateResourceBaseUrl()}/v1/all_schemes_output.geojson.gz`,
    );
    progress = 100;
    let text = new TextDecoder().decode(bytes);
    loadFile(text);
    loading = false;
  });

  // This requires the server to send back a Content-Length header. The actual
  // bytes received may exceed this length (when the file is compressed), which
  // means setProgress may get percentages over 100.
  async function fetchWithProgress(url: string): Promise<Uint8Array> {
    const response = await fetch(url);
    // TODO Handle error cases better
    const reader = response.body!.getReader();

    let lengthHeader = response.headers.get("Content-Length");
    if (!lengthHeader) {
      throw new Error(`No Content-Length header from ${url}`);
    }
    const contentLength = parseInt(lengthHeader);

    let receivedLength = 0;
    let chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      chunks.push(value);
      receivedLength += value.length;

      progress = (100.0 * receivedLength) / contentLength;
    }

    let allChunks = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
      allChunks.set(chunk, position);
      position += chunk.length;
    }

    return allChunks;
  }
</script>

{#if loading}
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
