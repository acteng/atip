<script>
  import {
    RadioButtonGroup,
    RadioButton,
    TextArea,
    TextInput,
  } from "carbon-components-svelte";
  import {
    gjScheme,
    setCurrentlyEditing,
    currentlyEditing,
  } from "../stores.js";

  export let id;
  export let name;
  export let intervention_type;
  export let description;
  export let length_meters;

  let bottomOfForm;

  currentlyEditing.subscribe((openedId) => {
    if (id == openedId) {
      // Wait 1ms before doing this, because it appears the accordion doesn't
      // expand instantly. This is flaky when clicking the accordion instead of
      // the map.
      setTimeout(() => bottomOfForm?.scrollIntoView({ behavior: "smooth" }), 1);
    }
  });

  function remove() {
    gjScheme.update((gj) => {
      gj.features = gj.features.filter((f) => f.id != id);
      return gj;
    });
    setCurrentlyEditing(null);
  }

  function prettyPrintMeters(x) {
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

<div bind:this={bottomOfForm}>
  <button type="button" on:click={remove}>Delete</button>
  <button
    type="button"
    on:click={() => setCurrentlyEditing(null)}
    style="float: right;">Save</button
  >
</div>
