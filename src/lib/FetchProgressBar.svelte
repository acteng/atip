<script lang="ts">
  import { onMount } from "svelte";

  export let url: string;
  export let onSuccess: (bytes: Uint8Array) => void;

  // Both are units of bytes
  let bytesReceived = 0;
  let maxBytes = 100;
  let progressBar = {
    style: "background: linear-gradient(to right, red 0%, transparent 0);",
  };

  onMount(async () => {
    console.log(`Fetching ${url} with a progress bar`);
    let response = await fetch(url);
    let reader = response.body.getReader();

    // TODO Handle when missing?
    maxBytes = parseInt(response.headers.get("Content-Length"));

    let chunks = [];
    while (true) {
      let { done, value } = await reader.read();
      if (done) {
        break;
      }

      chunks.push(value);
      bytesReceived += value.length;

      const percent = (bytesReceived / maxBytes) * 100;
      progressBar.style = `background: linear-gradient(to right, red ${percent}%, transparent 0);`;
    }

    let outputBytes = new Uint8Array(maxBytes);
    let position = 0;
    console.log(
      `max bytes ${maxBytes} - bytes received ${bytesReceived} - progress bar style ${progressBar.style}`
    );
    for (let chunk of chunks) {
      console.log(`position ${position}, outputBytes ${outputBytes.length} - chunk length ${chunk.length}`);
      outputBytes.set(chunk, position);
      position += chunk.length;
    }
    onSuccess(outputBytes);
  });
</script>

<progress style={progressBar.style} value={bytesReceived} max={maxBytes} />
