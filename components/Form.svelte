<script>
  import {
    RadioButtonGroup,
    RadioButton,
    TextArea,
    TextInput,
  } from "carbon-components-svelte";
  import { gjScheme, clearCurrentlyEditing } from "../stores.js";

  export let id;
  export let name;
  export let intervention_type;
  export let description;
  export let length_meters;

  function remove() {
    gjScheme.update((gj) => {
      gj.features = gj.features.filter((f) => f.id != id);
      return gj;
    });
  }

  function prettyPrintMeters(x) {
    if (x < 1000.0) {
      return x.round() + " m";
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
  <button type="button" on:click={remove}>Delete</button>
  <button type="button" on:click={clearCurrentlyEditing} style="float: right;"
    >Save</button
  >
</div>
