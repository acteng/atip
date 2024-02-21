<script lang="ts">
  import type { PipelineBudget, FundingSources } from "types";
  import { Checkbox, CheckboxGroup, MoneyInput, TextInput } from "govuk-svelte";

  export let data: PipelineBudget;
  // Svelte reactivity for fields modified by this component are invisible to
  // the caller, so use this callback to listen to changes.
  export let onUpdate: () => void;

  function update(_: PipelineBudget) {
    onUpdate();
  }
  $: update(data);

  // TODO Note below we make sure "other" isn't in this list, just to make TS happy
  let fundingSources = [
    "atf2",
    "atf3",
    "atf4",
    "atf4e",
    "crsts",
    "luf",
  ] as Array<keyof FundingSources>;
</script>

<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">Budget</legend>

  <MoneyInput label="Cost (GBP)" bind:value={data.budget} />

  <Checkbox bind:checked={data.development_funded}>
    Is the development fully funded?
  </Checkbox>
  <Checkbox bind:checked={data.construction_funded}>
    Is the construction fully funded?
  </Checkbox>

  <p>Funding sources</p>
  <CheckboxGroup>
    {#each fundingSources as source}
      {#if source != "other"}
        <Checkbox bind:checked={data.funding_sources[source]}>
          {source.toUpperCase()}
        </Checkbox>
      {/if}
    {/each}
  </CheckboxGroup>
  <TextInput
    label="Other funding sources"
    bind:value={data.funding_sources.other}
  />
</fieldset>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
