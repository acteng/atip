<script lang="ts">
  import {
    Checkbox,
    FormElement,
    Radio,
    SecondaryButton,
    TextArea,
  } from "lib/govuk";
  import Select from "lib/govuk/Select.svelte";
  import { prettyPrintMeters } from "lib/maplibre";
  import { gjScheme, routeTool } from "stores";
  import type { InterventionProps } from "types";
  import ATF4Type from "./ATF4Type.svelte";

  export let id: number;
  export let props: InterventionProps;

  const mappedChoices: [string, string][] | undefined =
    $gjScheme.subschemes?.map((subscheme) => {
      return [subscheme.id.toString(), subscheme.name];
    });

  const schemeChoices: [string, string][] = mappedChoices ? mappedChoices : [];

  props.pipeline ||= {
    schemeId: 0,
    description: "",
    type: "",
    atf4_type: "",
    accuracy: "",
    is_alternative: false,
  };
  // Guaranteed to exist
  let pipelineProps = props.pipeline;

  let selectedSchemeIdString =
    pipelineProps?.schemeId == 0 || pipelineProps?.schemeId
      ? pipelineProps?.schemeId.toString()
      : "";

  // Sets the intervention name to "From {road1 and road2} to {road3 and
  // road4}". Only meant to be useful for routes currently.
  function autoFillName() {
    try {
      props.name = $routeTool!.inner.routeNameForWaypoints(props.waypoints);
    } catch (e) {
      window.alert(`Couldn't auto-name route: ${e}`);
    }
  }

  function schemeSelectionChanged() {
    pipelineProps.schemeId = parseInt(selectedSchemeIdString);
  }
</script>

<FormElement label="Name" id={"name-" + id}>
  <input type="text" class="govuk-input" bind:value={props.name} />
  <!-- Only LineStrings can be auto-named, and length_meters being set is the simplest proxy for that -->
  {#if props.length_meters}
    <SecondaryButton on:click={() => autoFillName()} disabled={!$routeTool}>
      Auto-fill
    </SecondaryButton>
  {/if}
</FormElement>

<Select
  id="scheme-selector"
  label="Scheme"
  choices={schemeChoices}
  bind:value={selectedSchemeIdString}
  on:change={schemeSelectionChanged}
/>

<TextArea label="Description" bind:value={props.description} />

{#if props.length_meters}
  <p>Length: {prettyPrintMeters(props.length_meters)}</p>
{/if}

<ATF4Type
  label="Type"
  id={"atf4-type-" + id}
  bind:value={pipelineProps.atf4_type}
/>

<Radio
  legend="Accuracy of mapped data"
  id={"accuracy-" + id}
  choices={[
    ["high", "High"],
    ["medium", "Medium"],
    ["low", "Low"],
  ]}
  inlineSmall
  bind:value={pipelineProps.accuracy}
/>

<Checkbox id={"alternative-" + id} bind:checked={pipelineProps.is_alternative}>
  Is this an alternative route and not the default option?
</Checkbox>
