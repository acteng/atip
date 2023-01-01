<script>
  import {
    RadioButtonGroup,
    RadioButton,
    TextArea,
    TextInput,
  } from "carbon-components-svelte";
  import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte";
  import { gjScheme, clearCurrentlyEditing } from "../stores.js";

  export let id;
  export let name;
  export let intervention_type;
  export let description;

  function remove() {
    gjScheme.update((gj) => {
      gj.features = gj.features.filter((f) => f.id != id);
      return gj;
    });
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

<div>
  <button type="button" on:click={remove}>Delete</button>
  <button type="button" on:click={clearCurrentlyEditing} style="float: right;"
    >Save</button
  >
</div>
