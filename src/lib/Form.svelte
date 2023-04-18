<script lang="ts">
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

<label
  >Name
  <input type="text" bind:value={name} />
</label>

<br />

<label>
  <input type="radio" bind:group={intervention_type} value="area" />
  Area
</label>
<label>
  <input type="radio" bind:group={intervention_type} value="route" />
  Route
</label>
<label>
  <input type="radio" bind:group={intervention_type} value="crossing" />
  Crossing
</label>
<label>
  <input type="radio" bind:group={intervention_type} value="other" />
  Other
</label>

<br />

<label>
  Description
  <textarea bind:value={description} />
</label>

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

<style>
  textarea {
    resize: none;
  }
</style>
