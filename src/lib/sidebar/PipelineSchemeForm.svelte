<script lang="ts">
  import TimingForm from "./pipeline/TimingForm.svelte";
  import BudgetForm from "./pipeline/BudgetForm.svelte";
  import { Modal } from "lib/common";
  import { gjSchemeCollection } from "lib/draw/stores";
  import {
    DefaultButton,
    ErrorMessage,
    Radio,
    SecondaryButton,
    TextArea,
    TextInput,
  } from "lib/govuk";
  import PipelineType from "../forms/PipelineType.svelte";

  export let scheme_reference: string;

  let showModal = false;
  // This is just for conveience below, but it means most changes are not
  // synced to $gjSchemeCollection until finish() is called
  let pipeline = $gjSchemeCollection.schemes[scheme_reference].pipeline!;

  // Svelte doesn't see nested updates in BudgetForm and TimingForm, so use a
  // counter and manual callback to recalculate errorMessage
  let updateError = 0;
  $: errorMessage = checkRequiredValues(pipeline, updateError);

  function checkRequiredValues(_: any, updateError: number): string {
    return pipeline.scheme_type && pipeline.status && pipeline.timescale
      ? ""
      : "Missing some required data";
  }

  function onKeyDown(e: KeyboardEvent) {
    if (showModal && e.key == "Escape") {
      e.stopPropagation();
      showModal = false;
    }
  }

  // There are 3 ways to close the modal. Clicking the save button or pressing
  // escape happen here, but clicking outside the modal happens elsewhere. Make
  // sure we save in all cases.
  $: if (!showModal) {
    finish();
  }

  // No changes in the form are saved until this happens
  function finish() {
    $gjSchemeCollection.schemes[scheme_reference].pipeline = pipeline!;
    $gjSchemeCollection = $gjSchemeCollection;
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<ErrorMessage {errorMessage} />
<SecondaryButton on:click={() => (showModal = true)}>
  Scheme details
</SecondaryButton>
<Modal title="Scheme details" bind:open={showModal}>
  <TextInput
    label="Scheme name"
    required
    bind:value={$gjSchemeCollection.schemes[scheme_reference].scheme_name}
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
        [
          "cycling and walking route",
          "Cycling and walking route, not shared use",
        ],
        ["area-based scheme", "Area-based scheme"],
        ["intersection", "Intersection/junction scheme"],
      ]}
      inlineSmall
      required
      bind:value={pipeline.scheme_type}
    />

    <PipelineType
      label="Type of the main intervention"
      id="lead-pipeline-type"
      bind:value={pipeline.atf4_lead_type}
    />

    <TextArea
      label="Scheme description (150 words max)"
      bind:value={pipeline.scheme_description}
    />
  </fieldset>

  <TimingForm data={pipeline} required onUpdate={() => updateError++} />

  <BudgetForm data={pipeline} onUpdate={() => updateError++} />

  <DefaultButton on:click={() => (showModal = false)}>Save</DefaultButton>
</Modal>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
