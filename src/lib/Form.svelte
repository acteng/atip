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
  >Name:<br />
  <input type="text" bind:value={name} style="width: 100%" />
</label>

<br />
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
<br />

<label>
  Description:<br />
  <textarea bind:value={description} style="width: 100%" rows="5" />
</label>

<br />
<br />

{#if length_meters}
  Length: {prettyPrintMeters(length_meters)}

  <br />
  <br />
{/if}

<div style="display: flex; justify-content: space-between">
  <button type="button" on:click={() => deleteIntervention(id)}>Delete</button>
  <button type="button" on:click={() => formOpen.set(null)}>Save</button>
</div>

<style>
  textarea {
    resize: none;
  }
</style>
