<script lang="ts">
  import type { Feature, LineString } from "geojson";
  import { gjScheme, routeInfo } from "../../stores";
  import FormElement from "../govuk/FormElement.svelte";
  import Radio from "../govuk/Radio.svelte";
  import SecondaryButton from "../govuk/SecondaryButton.svelte";
  import TextArea from "../govuk/TextArea.svelte";
  import RouteInfoLayers from "./RouteInfoLayers.svelte";

  export let id: number;
  export let name: string;
  export let intervention_type: "area" | "route" | "crossing" | "other";
  export let description: string;
  export let length_meters: number | undefined;

  function prettyPrintMeters(x: number): string {
    if (x < 1000.0) {
      return Math.round(x) + " m";
    }
    return (x / 1000.0).toFixed(1) + "km";
  }

  // Sets the intervention name to "From {road1 and road2} to {road3 and
  // road4}". Only meant to be useful for routes currently.
  async function autoFillName() {
    let linestring = $gjScheme.features.find(
      (f) => f.id == id
    ) as Feature<LineString>;
    try {
      name = await $routeInfo!.nameForRoute(linestring);
    } catch (e) {
      window.alert(`Couldn't auto-name route: ${e}`);
    }
  }
</script>

<FormElement label="Name" id={"name-" + id}>
  <input type="text" class="govuk-input" bind:value={name} />
  <!-- Only LineStrings can be auto-named, and length_meters being set is the simplest proxy for that -->
  {#if length_meters}
    <SecondaryButton on:click={() => autoFillName()} disabled={!$routeInfo}>
      Auto-fill
    </SecondaryButton>
  {/if}
</FormElement>

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
  bind:value={intervention_type}
/>

<TextArea label="Description" bind:value={description} />

{#if length_meters}
  <p>Length: {prettyPrintMeters(length_meters)}</p>
  <RouteInfoLayers {id} />
{/if}
