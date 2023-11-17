<script lang="ts">
  import { NumberInput, Radio } from "lib/govuk";
  import type { PipelineTimescale } from "types";
  import { getMaxTimescale } from "../scheme_data";

  export let timescale: PipelineTimescale;
  export let scheme_reference: string | undefined = undefined;

  let forIntervention = scheme_reference === undefined;

  function timescaleHint(): string | undefined {
    if (!scheme_reference) {
      return undefined;
    }
    let max = getMaxTimescale(scheme_reference);
    if (max) {
      return `The longest timescale from interventions in this scheme is: ${max}`;
    }
    return undefined;
  }
</script>

<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">Timing and status</legend>

  <Radio
    legend="Status"
    id="scheme-status"
    choices={[
      ["planned", "Planned"],
      ["in development", "In development"],
      ["in construction", "In construction"],
      ["completed", "Completed"],
    ]}
    inlineSmall
    required={!forIntervention}
    bind:value={timescale.status}
  />

  <Radio
    legend="Timescale"
    id="scheme-timescale"
    choices={[
      ["short", "Short (1-3 years)"],
      ["medium", "Medium (3-6 years)"],
      ["long", "Long (6-10 years)"],
    ]}
    inlineSmall
    required={!forIntervention}
    bind:value={timescale.timescale}
    hint={timescaleHint()}
  />
  <NumberInput
    label="Estimated completion year (if known)"
    width={4}
    min={2010}
    max={2100}
    bind:value={timescale.timescale_year}
  />
  {#if !forIntervention}
    <NumberInput
      label="What year was this scheme most recently published?"
      width={4}
      min={2010}
      max={2100}
      bind:value={timescale.year_published}
    />

    <NumberInput
      label="What year was this scheme most recently consulted on?"
      width={4}
      min={2010}
      max={2100}
      bind:value={timescale.year_consulted}
    />
  {/if}
</fieldset>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
