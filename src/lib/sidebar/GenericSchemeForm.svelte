<script lang="ts">
  import { Modal } from "lib/common";
  import { gjSchemeCollection } from "lib/draw/stores";
  import { DefaultButton, SecondaryButton, TextInput } from "lib/govuk";

  export let scheme_reference: string;

  let showModal = false;

  function onKeyDown(e: KeyboardEvent) {
    if (showModal && e.key == "Escape") {
      e.stopPropagation();
      showModal = false;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<SecondaryButton on:click={() => (showModal = true)}>
  Scheme details
</SecondaryButton>
<Modal title="Scheme details" bind:open={showModal}>
  <TextInput
    label="Scheme name"
    required
    bind:value={$gjSchemeCollection.schemes[scheme_reference].scheme_name}
  />

  <DefaultButton on:click={() => (showModal = false)}>Save</DefaultButton>
</Modal>
