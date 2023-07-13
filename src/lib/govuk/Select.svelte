<script lang="ts">
  import FormElement from "../govuk/FormElement.svelte";

  export let label: string;
  // A unique (per page) ID
  export let id: string;
  // A list of [value, label] representing the choices
  export let choices: [string, string][];
  // Make the first option the empty string
  export let emptyOption = true;
  export let disabled = false;

  // The current value
  export let value: string;
</script>

<FormElement {label} {id}>
  <select class="govuk-select" {id} bind:value {disabled}>
    {#if emptyOption}
      <option value="" />
    {/if}

    {#each choices as [thisValue, thisLabel]}
      <option value={thisValue}>{thisLabel}</option>
    {/each}
  </select>
</FormElement>
