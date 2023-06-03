<script lang="ts">
  export let label: string;
  export let onChange: (e: Event) => void;

  let fileInput: HTMLInputElement;
</script>

<!-- TODO Interactive elements inside a label are apparently invalid, but this works -->
<label>
  <input type="file" bind:this={fileInput} on:change={onChange} />
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
