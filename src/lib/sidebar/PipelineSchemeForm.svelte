<script lang="ts">
  import { Modal } from "lib/common";
  import {
    Checkbox,
    DefaultButton,
    Radio,
    SecondaryButton,
    TextArea,
  } from "lib/govuk";
  import { gjScheme } from "stores";
  import ATF4Type from "../forms/ATF4Type.svelte";

  $gjScheme.pipeline ||= {
    scheme_type: "",
    status: "",
    timescale: "",
    atf4_lead_type: "",
    scheme_description: "",
    funding_source: "",
    funded: false,
  };
  // Guaranteed to exist
  let pipelineProps = $gjScheme.pipeline;

  let showModal = false;

  function repeat(x: string): [string, string] {
    return [x, x];
  }
</script>

<SecondaryButton on:click={() => (showModal = true)}>
  Scheme details
</SecondaryButton>
<Modal title="Scheme details" bind:open={showModal}>
  <Radio
    legend="Scheme type"
    id="scheme-type"
    choices={[
      ["cycling route", "Cycling route"],
      ["walking route", "Walking route"],
      ["shared-use route", "Shared-use route"],
      ["area-based scheme", "Area-based scheme"],
      ["intersection", "Intersection/junction scheme"],
    ]}
    inlineSmall
    required
    bind:value={pipelineProps.scheme_type}
  />

  <ATF4Type
    label="Type of the main intervention"
    id="atf4-lead-type"
    bind:value={pipelineProps.atf4_lead_type}
  />

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
      required
      bind:value={pipelineProps.status}
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
      required
      bind:value={pipelineProps.timescale}
    />
    <div>
      <label>
        Estimated completion year (if known)
        <input
          type="number"
          min="2023"
          max="2100"
          bind:value={pipelineProps.timescale_year}
        />
      </label>
    </div>
  </fieldset>

  <TextArea
    label="Scheme description"
    bind:value={pipelineProps.scheme_description}
  />

  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">Budget</legend>

    <div>
      <label>
        GBP funded
        <input type="number" min="0" bind:value={pipelineProps.budget_funded} />
      </label>
    </div>
    <div>
      <label>
        GBP unfunded
        <input
          type="number"
          min="0"
          bind:value={pipelineProps.budget_unfunded}
        />
      </label>
    </div>

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
      bind:value={pipelineProps.funding_source}
    />

    <Checkbox id="scheme-funded" bind:checked={pipelineProps.funded}>
      Is the scheme fully funded?
    </Checkbox>
  </fieldset>

  <div>
    <label>
      How current is this scheme? Please enter the year of the plan.
      <input
        type="number"
        min="2010"
        max="2100"
        bind:value={pipelineProps.source_data_year}
      />
    </label>
  </div>

  <DefaultButton on:click={() => (showModal = false)}>Save</DefaultButton>
</Modal>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
