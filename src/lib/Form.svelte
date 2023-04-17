<script lang="ts">
  import {
    RadioButtonGroup,
    RadioButton,
    TextArea,
    TextInput,
  } from "carbon-components-svelte";
  import { gjScheme, deleteIntervention, formOpen } from "../stores";

  export let id: number;
  export let name: string;
  export let intervention_type: "area" | "route" | "crossing" | "other";
  export let description: string;
  export let length_meters: number;

  function prettyPrintMeters(x: number): string {
    if (x < 1000.0) {
      return Math.round(x) + " m";
    }
    return (x / 1000.0).toFixed(1) + "km";
  }
</script>

<TextInput labelText="Name" bind:value={name} />

<br />

<RadioButtonGroup bind:selected={intervention_type}>
  <RadioButton labelText="Area" value="area" />
  <RadioButton labelText="Route" value="route" />
  <RadioButton labelText="Crossing" value="crossing" />
  <RadioButton labelText="Other" value="other" />
</RadioButtonGroup>

<br />

<TextArea labelText="Description" bind:value={description} />

<br />

{#if length_meters}
  <p>Length: {prettyPrintMeters(length_meters)}</p>
  <br />
{/if}

<div>
  <button type="button" on:click={() => deleteIntervention(id)}>Delete</button>
  <button
    type="button"
    on:click={() => formOpen.set(null)}
    style="float: right;">Save</button
  >
</div>
