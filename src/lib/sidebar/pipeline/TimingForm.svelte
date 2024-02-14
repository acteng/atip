<script lang="ts">
  import { NumberInput, Radio } from "lib/govuk";
  import type { PipelineTiming } from "types";

  export let data: PipelineTiming;
  // Are status and timescale required?
  export let required: boolean;
</script>

<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">Timing and status</legend>

  <Radio
    legend="Status"
    id="scheme-status"
    choices={[
      ["aspiration", "Aspiration"],
      ["planned", "Planned"],
      ["in development", "In development"],
      ["in construction", "In construction"],
      ["completed", "Completed"],
    ]}
    inlineSmall
    {required}
    bind:value={data.status}
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
    {required}
    bind:value={data.timescale}
  />
  <NumberInput
    label="Estimated completion year (if known)"
    width={4}
    min={2010}
    max={2100}
    bind:value={data.timescale_year}
  />

  <NumberInput
    label="What year was this scheme most recently published?"
    width={4}
    min={2010}
    max={2100}
    bind:value={data.year_published}
  />

  <NumberInput
    label="What year was this scheme most recently consulted on?"
    width={4}
    min={2010}
    max={2100}
    bind:value={data.year_consulted}
  />
</fieldset>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
