<script lang="ts">
  import { Modal } from "lib/common";
  import {
    Checkbox,
    DefaultButton,
    ErrorMessage,
    NumberInput,
    Radio,
    SecondaryButton,
    TextArea,
    TextInput,
  } from "lib/govuk";
  import { gjScheme } from "stores";
  import ATF4Type from "../forms/ATF4Type.svelte";

  let showModal = false;

  // This component is only created once, but gjScheme could be cleared
  // completely multipel times. Set defaults anytime the modal is open.
  $: if (showModal) {
    $gjScheme.pipeline ||= {
      scheme_type: "",
      status: "",
      timescale: "",
      atf4_lead_type: "",
      scheme_description: "",
      funding_source: "",
      funded: false,
    };
  }

  function repeat(x: string): [string, string] {
    return [x, x];
  }

  // Check for all required values
  $: errorMessage =
    $gjScheme.scheme_name &&
    $gjScheme.pipeline?.scheme_type &&
    $gjScheme.pipeline?.status &&
    $gjScheme.pipeline?.timescale
      ? ""
      : "Missing some required data";
</script>

<ErrorMessage {errorMessage} />
<SecondaryButton on:click={() => (showModal = true)}>
  Scheme details
</SecondaryButton>
<Modal title="Scheme details" bind:open={showModal}>
  {#if $gjScheme.pipeline}
    <TextInput
      label="Scheme name"
      required
      bind:value={$gjScheme.scheme_name}
    />

    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend">Basic information</legend>

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
        bind:value={$gjScheme.pipeline.scheme_type}
      />

      <ATF4Type
        label="Type of the main intervention"
        id="atf4-lead-type"
        bind:value={$gjScheme.pipeline.atf4_lead_type}
      />

      <TextArea
        label="Scheme description (150 words max)"
        bind:value={$gjScheme.pipeline.scheme_description}
      />
    </fieldset>

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
        bind:value={$gjScheme.pipeline.status}
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
        bind:value={$gjScheme.pipeline.timescale}
      />
      <NumberInput
        label="Estimated completion year (if known)"
        width={4}
        min={2010}
        max={2100}
        bind:value={$gjScheme.pipeline.timescale_year}
      />

      <NumberInput
        label="What year was this scheme most recently published?"
        width={4}
        min={2010}
        max={2100}
        bind:value={$gjScheme.pipeline.year_published}
      />

      <NumberInput
        label="What year was this scheme most recently consulted on?"
        width={4}
        min={2010}
        max={2100}
        bind:value={$gjScheme.pipeline.year_consulted}
      />
    </fieldset>

    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend">Budget</legend>

      <NumberInput
        label="GBP funded"
        width={10}
        min={0}
        bind:value={$gjScheme.pipeline.budget_funded}
      />
      <NumberInput
        label="GBP unfunded"
        width={10}
        min={0}
        bind:value={$gjScheme.pipeline.budget_unfunded}
      />

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
        bind:value={$gjScheme.pipeline.funding_source}
      />

      <Checkbox id="scheme-funded" bind:checked={$gjScheme.pipeline.funded}>
        Is the scheme fully funded?
      </Checkbox>
    </fieldset>

    <DefaultButton on:click={() => (showModal = false)}>Save</DefaultButton>
  {/if}
</Modal>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
