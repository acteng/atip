<script lang="ts">
  export let label: string;
  export let onChange: (e: Event) => void;

  // TODO Only one component per page is supported, because the ID is
  // hardcoded. This is only necessary for the Playwright test.
  let fileInput: HTMLInputElement;
</script>

<!-- TODO Interactive elements inside a label are apparently invalid, but this works -->
<label>
  <input
    type="file"
    id="file-input"
    bind:this={fileInput}
    on:change={onChange}
  />
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
