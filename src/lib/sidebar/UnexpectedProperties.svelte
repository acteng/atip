<script lang="ts">
  import { Modal } from "lib/common";
  import { SecondaryButton, WarningButton } from "lib/govuk";
  import { gjScheme } from "stores";
  import { getUnexpectedProperties } from "./scheme_data";

  export let id: number;
  export let props: { [name: string]: any };

  let unexpected = getUnexpectedProperties(props) ?? {};
  let open = false;

  function removeExtraProperties() {
    open = false;
    gjScheme.update((gj) => {
      let feature = gj.features.find((f) => f.id == id)!;
      for (let key of Object.keys(unexpected)) {
        // @ts-ignore TS thinks the properties don't have extra properties, but they do
        delete feature.properties[key];
      }
      return gj;
    });
  }
</script>

{#if unexpected}
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
  <div class="govuk-button-group">
    <WarningButton on:click={removeExtraProperties}>
      Remove these properties
    </WarningButton>
    <SecondaryButton on:click={() => (open = false)}>Cancel</SecondaryButton>
  </div>
</Modal>
