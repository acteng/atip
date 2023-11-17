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
  import { gjSchemeCollection } from "stores";
  import type { SchemeData } from "types";
  import ATF4Type from "../forms/ATF4Type.svelte";

  export let scheme_reference: string;

  let showModal = false;
  let scheme: SchemeData | null = null;

  // Lazily set defaults when the modal is opened the first time for a scheme
  $: if (showModal) {
    scheme = $gjSchemeCollection.schemes[scheme_reference];
    scheme.pipeline ||= {
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

  function onKeyDown(e: KeyboardEvent) {
    if (showModal && e.key == "Escape") {
      e.stopPropagation();
      finish();
    }
  }

  // No changes in the form are saved until this happens
  function finish() {
    $gjSchemeCollection.schemes[scheme!.scheme_reference] = scheme!;
    $gjSchemeCollection = $gjSchemeCollection;
    showModal = false;
  }

  // Check for all required values
  $: errorMessage =
    scheme &&
    scheme.pipeline?.scheme_type &&
    scheme.pipeline?.status &&
    scheme.pipeline?.timescale
      ? ""
      : "Missing some required data";
</script>

<svelte:window on:keydown={onKeyDown} />

<ErrorMessage {errorMessage} />
<SecondaryButton on:click={() => (showModal = true)}>
  Scheme details
</SecondaryButton>
<Modal title="Scheme details" bind:open={showModal}>
  {#if scheme && scheme.pipeline}
    <TextInput label="Scheme name" required bind:value={scheme.scheme_name} />

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
        bind:value={scheme.pipeline.scheme_type}
      />

      <ATF4Type
        label="Type of the main intervention"
        id="atf4-lead-type"
        bind:value={scheme.pipeline.atf4_lead_type}
      />

      <TextArea
        label="Scheme description (150 words max)"
        bind:value={scheme.pipeline.scheme_description}
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
        bind:value={scheme.pipeline.status}
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
        bind:value={scheme.pipeline.timescale}
      />
      <NumberInput
        label="Estimated completion year (if known)"
        width={4}
        min={2010}
        max={2100}
        bind:value={scheme.pipeline.timescale_year}
      />

      <NumberInput
        label="What year was this scheme most recently published?"
        width={4}
        min={2010}
        max={2100}
        bind:value={scheme.pipeline.year_published}
      />

      <NumberInput
        label="What year was this scheme most recently consulted on?"
        width={4}
        min={2010}
        max={2100}
        bind:value={scheme.pipeline.year_consulted}
      />
    </fieldset>

    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend">Budget</legend>

      <NumberInput
        label="GBP funded"
        width={10}
        min={0}
        bind:value={scheme.pipeline.budget_funded}
      />
      <NumberInput
        label="GBP unfunded"
        width={10}
        min={0}
        bind:value={scheme.pipeline.budget_unfunded}
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
        bind:value={scheme.pipeline.funding_source}
      />

      <Checkbox id="scheme-funded" bind:checked={scheme.pipeline.funded}>
        Is the scheme fully funded?
      </Checkbox>
    </fieldset>

    <DefaultButton on:click={finish}>Save</DefaultButton>
  {/if}
</Modal>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
