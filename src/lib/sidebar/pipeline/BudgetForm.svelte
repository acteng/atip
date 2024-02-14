<script lang="ts">
  import type { PipelineBudget, FundingSources } from "types";
  import { Checkbox, CheckboxGroup, MoneyInput, TextInput } from "lib/govuk";

  export let data: PipelineBudget;

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

  <Checkbox id="development_funded" bind:checked={data.development_funded}>
    Is the development fully funded?
  </Checkbox>
  <Checkbox id="construction_funded" bind:checked={data.construction_funded}>
    Is the construction fully funded?
  </Checkbox>

  <p>Funding sources</p>
  <CheckboxGroup>
    {#each fundingSources as source}
      {#if source != "other"}
        <Checkbox id={source} bind:checked={data.funding_sources[source]}>
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
