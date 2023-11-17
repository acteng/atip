<script lang="ts">
  import { Modal } from "lib/common";
  import { DefaultButton, SecondaryButton, TextInput } from "lib/govuk";
  import { gjSchemeCollection } from "stores";
  import type { SchemeData } from "types";

  export let scheme_reference: string;

  let showModal = false;
  let scheme: SchemeData | null = null;

  $: if (showModal) {
    scheme = $gjSchemeCollection.schemes[scheme_reference];
  }

  function onKeyDown(e: KeyboardEvent) {
    if (showModal && e.key == "Escape") {
      e.stopPropagation();
      finish();
    }
  }

  // No changes in the form are saved until this happens
  function finish() {
    $gjSchemeCollection.schemes[scheme!.scheme_reference] = scheme!;
    $gjSchemeCollection = $gjSchemeCollection;
    showModal = false;
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<SecondaryButton on:click={() => (showModal = true)}>
  Scheme details
</SecondaryButton>
<Modal title="Scheme details" bind:open={showModal}>
  {#if scheme}
    <TextInput label="Scheme name" required bind:value={scheme.scheme_name} />
    <DefaultButton on:click={finish}>Save</DefaultButton>
  {/if}
</Modal>
