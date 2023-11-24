<script lang="ts">
  import { Modal } from "lib/common";
  import {
    Checkbox,
    CheckboxGroup,
    DefaultButton,
    ErrorMessage,
    NumberInput,
    Radio,
    SecondaryButton,
    TextArea,
    TextInput,
  } from "lib/govuk";
  import { gjSchemeCollection } from "stores";
  import type { FundingSources } from "types";
  import ATF4Type from "../forms/ATF4Type.svelte";

  export let scheme_reference: string;

  let showModal = false;
  // This is just for conveience below, but it means most changes are not
  // synced to $gjSchemeCollection until finish() is called
  let pipeline = $gjSchemeCollection.schemes[scheme_reference].pipeline!;

  // TODO Note below we make sure "other" isn't in this list, just to make TS happy
  let fundingSources = [
    "atf2",
    "atf3",
    "atf4",
    "atf4e",
    "crsts",
    "luf",
  ] as Array<keyof FundingSources>;

  // Check for all required values
  $: errorMessage =
    pipeline.scheme_type && pipeline.status && pipeline.timescale
      ? ""
      : "Missing some required data";

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
        ["area-based scheme", "Area-based scheme"],
        ["intersection", "Intersection/junction scheme"],
      ]}
      inlineSmall
      required
      bind:value={pipeline.scheme_type}
    />

    <ATF4Type
      label="Type of the main intervention"
      id="atf4-lead-type"
      bind:value={pipeline.atf4_lead_type}
    />

    <TextArea
      label="Scheme description (150 words max)"
      bind:value={pipeline.scheme_description}
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
      bind:value={pipeline.status}
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
      bind:value={pipeline.timescale}
    />
    <NumberInput
      label="Estimated completion year (if known)"
      width={4}
      min={2010}
      max={2100}
      bind:value={pipeline.timescale_year}
    />

    <NumberInput
      label="What year was this scheme most recently published?"
      width={4}
      min={2010}
      max={2100}
      bind:value={pipeline.year_published}
    />

    <NumberInput
      label="What year was this scheme most recently consulted on?"
      width={4}
      min={2010}
      max={2100}
      bind:value={pipeline.year_consulted}
    />
  </fieldset>

  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">Budget</legend>

    <NumberInput
      label="Cost (GBP)"
      width={10}
      min={0}
      bind:value={pipeline.budget}
    />

    <Checkbox
      id="development_funded"
      bind:checked={pipeline.development_funded}
    >
      Is the development fully funded?
    </Checkbox>
    <Checkbox
      id="construction_funded"
      bind:checked={pipeline.construction_funded}
    >
      Is the construction fully funded?
    </Checkbox>

    <p>Funding sources</p>
    <CheckboxGroup>
      {#each fundingSources as source}
        {#if source != "other"}
          <Checkbox id={source} bind:checked={pipeline.funding_sources[source]}>
            {source.toUpperCase()}
          </Checkbox>
        {/if}
      {/each}
    </CheckboxGroup>
    <TextInput
      label="Other funding sources"
      bind:value={pipeline.funding_sources.other}
    />
  </fieldset>

  <DefaultButton on:click={() => (showModal = false)}>Save</DefaultButton>
</Modal>

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
