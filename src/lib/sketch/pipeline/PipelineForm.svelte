<script lang="ts">
  import {
    Checkbox,
    FormElement,
    Radio,
    SecondaryButton,
    Select,
    TextArea,
  } from "govuk-svelte";
  import { prettyPrintMeters } from "lib/maplibre";
  import { routeTool } from "scheme-sketcher-lib/draw/stores";
  import type { FeatureProps } from "scheme-sketcher-lib/draw/types";
  import type { Writable } from "svelte/store";
  import type { InterventionProps, Schemes } from "types";
  import { v4 as uuidv4 } from "uuid";
  import { emptyFundingSources, schemeName } from "../config";
  import BudgetForm from "./BudgetForm.svelte";
  import PipelineType from "./PipelineType.svelte";
  import TimingForm from "./TimingForm.svelte";

  export let gjSchemes: Writable<Schemes>;
  export let props: FeatureProps<InterventionProps>;

  // Lazily fill for each feature (whether newly created or loaded from an older-format file)
  props.pipeline ||= {
    atf4_type: "",
    accuracy: "",
    is_alternative: false,

    development_funded: false,
    construction_funded: false,
    funding_sources: emptyFundingSources(),

    status: "",
    timescale: "",
  };

  props.is_coverage_polygon ||= false;

  const shouldDisplayCoveragePolygonQuestion: boolean =
    ($gjSchemes.features.filter(
      (feature) => feature.properties.is_coverage_polygon,
    ).length == 0 ||
      props.is_coverage_polygon === true) &&
    props.intervention_type === "area";

  // Sets the intervention name to "From {road1 and road2} to {road3 and
  // road4}". Only meant to be useful for routes currently.
  function autoFillName() {
    try {
      props.name = $routeTool!.inner.routeNameForWaypoints(props.waypoints);
    } catch (e) {
      window.alert(`Couldn't auto-name route: ${e}`);
    }
  }

  let nameId = uuidv4();
</script>

<FormElement label="Name" id={nameId}>
  <div class="govuk-hint">Use the name from the LCWIP if possible</div>
  <input type="text" class="govuk-input" id={nameId} bind:value={props.name} />
  <!-- Only LineStrings can be auto-named, and length_meters being set is the simplest proxy for that -->
  {#if props.length_meters}
    <SecondaryButton on:click={() => autoFillName()} disabled={!$routeTool}>
      Auto-fill with street names
    </SecondaryButton>
  {/if}
</FormElement>

<Select
  label="Scheme"
  choices={Object.values($gjSchemes.schemes).map((scheme) => [
    scheme.scheme_reference,
    schemeName(scheme),
  ])}
  bind:value={props.scheme_reference}
/>

<TextArea label="Description" bind:value={props.description} />

{#if props.length_meters}
  <p>Length: {prettyPrintMeters(props.length_meters)}</p>
{/if}

{#if props.pipeline}
  <PipelineType label="Type" bind:value={props.pipeline.atf4_type} />

  <Radio
    label="Accuracy of mapped data"
    choices={[
      ["high", "High"],
      ["medium", "Medium"],
      ["low", "Low"],
    ]}
    required
    inlineSmall
    bind:value={props.pipeline.accuracy}
  />

  <Checkbox bind:checked={props.pipeline.is_alternative}>
    Is this an alternative route and not the default option?
  </Checkbox>
  {#if shouldDisplayCoveragePolygonQuestion && props.is_coverage_polygon !== undefined}
    <Checkbox bind:checked={props.is_coverage_polygon}>
      Does this polygon show the coverage of the scheme? (All area considered
      while making the scheme)
    </Checkbox>
  {/if}

  <TimingForm bind:data={props.pipeline} required={false} onUpdate={() => {}} />

  <BudgetForm bind:data={props.pipeline} onUpdate={() => {}} />
{/if}
