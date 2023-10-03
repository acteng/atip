<script lang="ts">
  import type { LineString } from "geojson";
  import { FormElement, Radio, SecondaryButton, TextArea } from "lib/govuk";
  import { prettyPrintMeters } from "lib/maplibre";
  import { gjScheme, jsRouteSnapper } from "stores";
  import type { Feature } from "types";

  export let id: number;
  export let name: string;
  export let intervention_type: "area" | "route" | "crossing" | "other";
  export let description: string;
  export let length_meters: number | undefined;

  // Sets the intervention name to "From {road1 and road2} to {road3 and
  // road4}". Only meant to be useful for routes currently.
  function autoFillName() {
    let feature = $gjScheme.features.find(
      (f) => f.id == id
    ) as Feature<LineString>;
    try {
      name = $jsRouteSnapper!.routeNameForWaypoints(
        feature.properties.waypoints
      );
    } catch (e) {
      window.alert(`Couldn't auto-name route: ${e}`);
    }
  }
</script>

<FormElement label="Name" id={"name-" + id}>
  <input type="text" class="govuk-input" bind:value={name} />
  <!-- Only LineStrings can be auto-named, and length_meters being set is the simplest proxy for that -->
  {#if length_meters}
    <SecondaryButton
      on:click={() => autoFillName()}
      disabled={!$jsRouteSnapper}
    >
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
{/if}
