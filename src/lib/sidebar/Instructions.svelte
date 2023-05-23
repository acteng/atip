<script lang="ts">
  import Modal from "../common/Modal.svelte";

  export let open: boolean;
</script>

<Modal title="Instructions" bind:open>
  <h2>Drawing objects on the map</h2>
  <p>
    Use the tools on right to sketch on the map. Each tool has a <b>Help</b> button
    or instructions.
  </p>
  <p>
    You can modify the object on the map using <b>Edit geometry</b> and clicking
    something.
  </p>

  <h2>Filling out data</h2>
  <p>
    While you're in <b>Edit attributes</b> mode, you can select an object to describe
    it on the left. The level of detail depends what you're trying to map. Some objects,
    like routes, have extra tools to auto-fill some details or show additional contextual
    layers.
  </p>

  <h2>Saving files</h2>
  <p>
    ATIP does not send any data over the network or store in the cloud. The
    current file you're editing will be saved in your browser's local storage
    (similar to cookies), and automatically resume when you return to the page.
    You can use the <b>Export to GeoJSON</b> and <b>Load from GeoJSON</b>
    buttons to save and load GeoJSON files (with a <i>.txt</i> file extension) to
    your computer. You can email or share these files with your colleagues however
    you normally distribute files.
  </p>
</Modal>
