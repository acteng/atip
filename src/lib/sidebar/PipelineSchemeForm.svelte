<script lang="ts">
  import { Modal } from "lib/common";
  import {
    DefaultButton,
    ErrorMessage,
    Radio,
    SecondaryButton,
    TextArea,
    TextInput,
  } from "lib/govuk";
  import { gjSchemeCollection } from "stores";
  import type { SchemeData } from "types";
  import ATF4Type from "../forms/ATF4Type.svelte";
  import BudgetSubform from "./pipeline_forms/BudgetSubform.svelte";
  import TimescaleSubform from "./pipeline_forms/TimescaleSubform.svelte";

  export let scheme_reference: string;

  let showModal = false;
  let scheme: SchemeData | null = null;

  // Lazily set defaults when the modal is opened the first time for a scheme
  $: if (showModal) {
    scheme = $gjSchemeCollection.schemes[scheme_reference];
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
    scheme.pipeline?.scheme_timescale.status &&
    scheme.pipeline?.scheme_timescale.timescale
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

    <TimescaleSubform
      bind:timescale={scheme.pipeline.scheme_timescale}
      {scheme_reference}
    />
    <BudgetSubform bind:budget={scheme.pipeline.scheme_budget} {scheme_reference} />

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
