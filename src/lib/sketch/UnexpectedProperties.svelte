<script lang="ts">
  import { Modal } from "lib/common";
  import { ButtonGroup, SecondaryButton, WarningButton } from "govuk-svelte";
  import { getUnexpectedProperties } from "./config";
  import type { Schemes } from "types";
  import type { Writable } from "svelte/store";

  export let gjSchemes: Writable<Schemes>;
  export let id: number;
  export let props: { [name: string]: any };

  $: unexpected = getUnexpectedProperties(props);
  let open = false;

  function removeExtraProperties() {
    open = false;
    gjSchemes.update((gj) => {
      let feature = gj.features.find((f) => f.id == id)!;
      for (let key of Object.keys(unexpected)) {
        delete feature.properties[key];
      }
      return gj;
    });
  }
</script>

{#if Object.entries(unexpected).length > 0}
  <SecondaryButton on:click={() => (open = true)}>
    Handle extra GeoJSON properties
  </SecondaryButton>
{/if}

<Modal
  title="This imported GeoJSON feature has unexpected properties"
  bind:open
>
  <p>The unexpected properties:</p>
  <ul>
    {#each Object.entries(unexpected) as [key, value]}
      <li>
        <b>{key}</b>
        = {JSON.stringify(value)}
      </li>
    {/each}
  </ul>
  <ButtonGroup>
    <WarningButton on:click={removeExtraProperties}>
      Remove these properties
    </WarningButton>
    <SecondaryButton on:click={() => (open = false)}>Cancel</SecondaryButton>
  </ButtonGroup>
</Modal>
