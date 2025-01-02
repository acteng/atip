<script lang="ts">
  import { ErrorMessage, Radio, TextArea, TextInput } from "govuk-svelte";
  import { onDestroy } from "svelte";
  import type { Writable } from "svelte/store";
  import type { Schemes } from "types";
  import BudgetForm from "./BudgetForm.svelte";
  import PipelineType from "./PipelineType.svelte";
  import TimingForm from "./TimingForm.svelte";

  export let gjSchemes: Writable<Schemes>;
  export let scheme_reference: string;

  // This is just for conveience below, but it means most changes are not
  // synced to $gjSchemes until onDestroy() is called
  let pipeline = $gjSchemes.schemes[scheme_reference].pipeline!;

  // Svelte doesn't see nested updates in BudgetForm and TimingForm, so use a
  // counter and manual callback to recalculate errorMessage
  let updateError = 0;
  $: errorMessage = checkRequiredValues(pipeline, updateError);

  // No changes in the form are saved until this happens
  onDestroy(() => {
    gjSchemes.update((gj) => {
      // The scheme may have been deleted entirely
      if (Object.hasOwn(gj.schemes, scheme_reference)) {
        gj.schemes[scheme_reference].pipeline = pipeline!;
      }
      return gj;
    });
  });

  function checkRequiredValues(_: any, updateError: number): string {
    return pipeline.scheme_type && pipeline.status && pipeline.timescale
      ? ""
      : "Missing some required data";
  }
</script>

<ErrorMessage {errorMessage} />

<TextInput
  label="Scheme name"
  required
  bind:value={$gjSchemes.schemes[scheme_reference].scheme_name}
/>

<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">Basic information</legend>

  <Radio
    label="Scheme type"
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
    bind:value={pipeline.atf4_lead_type}
  />

  <TextArea
    label="Scheme description (150 words max)"
    bind:value={pipeline.scheme_description}
  />
</fieldset>

<TimingForm data={pipeline} required onUpdate={() => updateError++} />

<BudgetForm data={pipeline} onUpdate={() => updateError++} />

<style>
  fieldset {
    /* TODO govuk doesn't style it, but this seems useful */
    border: 2px solid black;
    padding: 8px;
  }
</style>
