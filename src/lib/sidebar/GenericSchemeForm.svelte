<script lang="ts">
  import { Modal } from "lib/common";
  import { DefaultButton, SecondaryButton, TextInput } from "lib/govuk";
  import { gjSchemeCollection } from "stores";
  import type { SchemeData } from "types";
  import { getArbitraryScheme } from "./scheme_data";

  let showModal = false;
  let scheme: SchemeData | null = null;

  // This component is only created once, but gjScheme could be cleared
  // completely multiple times. Set defaults anytime the modal is open.
  $: if (showModal) {
    // TODO Change the UI to plumb in the scheme_reference, when we manage multiple
    scheme = getArbitraryScheme($gjSchemeCollection);
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
