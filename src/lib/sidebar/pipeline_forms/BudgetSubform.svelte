<script lang="ts">
  import { Checkbox, NumberInput, Radio } from "lib/govuk";
  import type { PipelineBudget } from "types";

  export let budget: PipelineBudget;
  export let summedCost: number | undefined = undefined;
  $: costHint = getSummedCostHint(summedCost);

  function getSummedCostHint(summedCost: number | undefined) {
    if (summedCost === undefined) return undefined;
    return `The sum of costs of interventions in this scheme is: £${summedCost}`;
  }

  function repeat(x: string): [string, string] {
    return [x, x];
  }
</script>

<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">Budget</legend>

  <NumberInput
    label="Cost"
    width={10}
    min={0}
    bind:value={budget.cost}
    hint={costHint}
  />

  <Checkbox id="development-funded" bind:checked={budget.development_funded}>
    Is the development fully funded?
  </Checkbox>

  <Checkbox id="construction-funded" bind:checked={budget.construction_funded}>
    Is the construction fully funded?
  </Checkbox>

  <Radio
    legend="Funding source"
    id="scheme-funding-source"
    choices={[
      repeat("ATF2"),
      repeat("ATF3"),
      repeat("ATF4"),
      repeat("ATF4E"),
      repeat("CRSTS"),
      repeat("LUF"),
    ]}
    inlineSmall
    bind:value={budget.funding_source}
  />
</fieldset>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
