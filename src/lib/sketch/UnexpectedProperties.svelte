<script lang="ts">
  import { ButtonGroup, SecondaryButton, WarningButton } from "govuk-svelte";
  import { Modal } from "lib/common";
  import { getUnexpectedProperties } from "./config";

  export let props: { [name: string]: any };

  $: unexpected = getUnexpectedProperties(props);
  let open = false;

  function removeExtraProperties() {
    open = false;
    for (let key of Object.keys(unexpected)) {
      delete props[key];
    }
    props = props;
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
