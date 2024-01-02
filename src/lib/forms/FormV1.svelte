<script lang="ts">
  import { gjSchemeCollection, routeTool } from "lib/draw/stores";
  import {
    FormElement,
    Radio,
    SecondaryButton,
    Select,
    TextArea,
  } from "lib/govuk";
  import { prettyPrintMeters } from "lib/maplibre";
  import type { InterventionProps } from "types";

  export let id: number;
  export let props: InterventionProps;

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

<Select
  label="Scheme"
  id={"scheme-" + id}
  choices={Object.values($gjSchemeCollection.schemes).map((scheme) => [
    scheme.scheme_reference,
    scheme.scheme_name ?? "Untitled scheme",
  ])}
  bind:value={props.scheme_reference}
/>

<Radio
  legend="Type"
  id={"type-" + id}
  choices={[
    ["area", "Area"],
    ["route", "Route"],
    ["crossing", "Crossing"],
    ["other", "Other"],
  ]}
  inlineSmall
  required
  bind:value={props.intervention_type}
/>

<TextArea label="Description" bind:value={props.description} />

{#if props.length_meters}
  <p>Length: {prettyPrintMeters(props.length_meters)}</p>
{/if}
