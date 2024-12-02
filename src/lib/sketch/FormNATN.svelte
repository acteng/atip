<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { routeTool } from "scheme-sketcher-lib/draw/stores";
  import {
    FormElement,
    Radio,
    SecondaryButton,
    Select,
    TextArea,
  } from "govuk-svelte";
  import { prettyPrintMeters } from "lib/maplibre";
  import type { InterventionProps, Schemes } from "types";
  import { schemeName } from "./config";
  import type { Writable } from "svelte/store";
  import type { FeatureProps } from "scheme-sketcher-lib/draw/types";

  export let gjSchemes: Writable<Schemes>;
  export let props: FeatureProps<InterventionProps>;

  props.natn ||= {
    element: "",
  };

  // Sets the intervention name to "From {road1 and road2} to {road3 and
  // road4}". Only meant to be useful for routes currently.
  function autoFillName() {
    try {
      props.name = $routeTool!.inner.routeNameForWaypoints(props.waypoints);
    } catch (e) {
      window.alert(`Couldn't auto-name route: ${e}`);
    }
  }

  function pairs(list: string[]): [string, string][] {
    return list.map((x) => [x, x]);
  }

  let nameId = uuidv4();
</script>

{#if props.natn}
  <Radio
    label="Type"
    choices={pairs([
      "urban corridor",
      "urban area",
      "urban crossing",
      "urban local route",
      "city centre footway",
      "rural path",
      "rural crossing",
      "quiet lane",
      "local placemaking",
      "standalone junction",
    ])}
    bind:value={props.natn.element}
  />
{/if}

<FormElement label="Name" id={nameId}>
  <input type="text" class="govuk-input" id={nameId} bind:value={props.name} />
  <!-- Only LineStrings can be auto-named, and length_meters being set is the simplest proxy for that -->
  {#if props.length_meters}
    <SecondaryButton on:click={() => autoFillName()} disabled={!$routeTool}>
      Auto-fill
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
