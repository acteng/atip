<script lang="ts">
  import { Modal } from "lib/common";
  import { DefaultButton, SecondaryButton, TextInput } from "govuk-svelte";
  import type { Schemes } from "types";
  import type { Writable } from "svelte/store";

  export let gjSchemes: Writable<Schemes>;

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
    bind:value={$gjSchemes.schemes[scheme_reference].scheme_name}
  />

  <DefaultButton on:click={() => (showModal = false)}>Save</DefaultButton>
</Modal>
