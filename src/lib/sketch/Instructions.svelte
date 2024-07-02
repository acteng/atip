<script lang="ts">
  import { Modal } from "lib/common";

  export let open: boolean;
</script>

<Modal title="Instructions" bind:open>
  <div class="govuk-prose">
    <h2>Saving files</h2>
    <p>
      ATIP does not send any data over the network or store your data in the
      cloud. The current file you're editing will be saved in your browser's
      local storage and automatically resume when you return to the page. Click <b
      >
        Edit scheme
      </b>
      , then
      <b>Export to GeoJSON</b>
      or
      <b>Load from GeoJSON</b>
      to save or load a file to your computer. You can share these files with others
      to collaborate on designs.
    </p>
  </div>
</Modal>
