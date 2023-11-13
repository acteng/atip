<script lang="ts">
  import {
    Checkbox,
    FormElement,
    Radio,
    SecondaryButton,
    TextArea,
  } from "lib/govuk";
  import { prettyPrintMeters } from "lib/maplibre";
  import { gjScheme, routeTool } from "stores";
  import type { InterventionProps } from "types";
  import ATF4Type from "./ATF4Type.svelte";

  export let id: number;
  export let props: InterventionProps;

  props.pipeline ||= {
    atf4_type: "",
    accuracy: "",
    is_alternative: false,
    is_coverage_polygon: false,
  };

  const shouldDisplayCoveragePolygonQuestion: boolean =
    ($gjScheme.features.filter(
      (feature) => feature.properties.pipeline?.is_coverage_polygon
    ).length == 0 ||
      props.pipeline.is_coverage_polygon) &&
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

<TextArea label="Description" bind:value={props.description} />

{#if props.length_meters}
  <p>Length: {prettyPrintMeters(props.length_meters)}</p>
{/if}

{#if props.pipeline}
  <ATF4Type
    label="Type"
    id={"atf4-type-" + id}
    bind:value={props.pipeline.atf4_type}
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
    bind:value={props.pipeline.accuracy}
  />

  <Checkbox
    id={"alternative-" + id}
    bind:checked={props.pipeline.is_alternative}
  >
    Is this an alternative route and not the default option?
  </Checkbox>
  {#if shouldDisplayCoveragePolygonQuestion}
    <Checkbox
      id={"coverage-polygon-" + id}
      bind:checked={props.pipeline.is_coverage_polygon}
    >
      Is this a polygon to manually denote what the coverage of the scheme/lcwip
      is?
    </Checkbox>
  {/if}
{/if}
