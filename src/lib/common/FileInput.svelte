<script lang="ts">
  export let label: string;
  // This must be unique in the DOM
  export let uniqueId: string;
  // Called with the file contents as text
  export let loadFile: (text: string) => void;

  let fileInput: HTMLInputElement;

  function onChange(e: Event) {
    let reader = new FileReader();
    reader.onload = (e) => {
      loadFile(e.target!.result as string);
    };
    let files = fileInput.files!;
    reader.readAsText(files[0]);
  }
</script>

<!-- TODO Interactive elements inside a label are apparently invalid, but this works -->
<label>
  <input type="file" id={uniqueId} bind:this={fileInput} on:change={onChange} />
  <button type="button" on:click={() => fileInput.click()}>{label}</button>
</label>

<style>
  input[type="file"] {
    cursor: pointer;

    /* Make the input type=file effectively invisible, but still let browser accessibility stuff work */
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
</style>
