<script lang="ts">
  import type { InterventionProps } from "../types";

  export let props: InterventionProps;

  // TODO Should we start with these defaults, or make everything optional?
  props.planning ||= {
    name: "",
    notes: "",
    reference_type: "preapp",
    size: 0,
    size_units: "number of units",
    triage: "No Comment",
    recommendation: "No Comment",
  };

  const referenceTypes = [
    "preapp",
    "outline",
    "reserved matters",
    "local plan",
  ];
  const sizeUnits = [
    "number of units",
    "floorspace (Gross Floor Area)",
    "area (Hectare)",
  ];
  const triages = ["No Comment", "Standing Advice", "Toolkit Assessment"];
  const recommendations = [
    "No Comment",
    "No Objection",
    "Standing Advice",
    "Deferral",
    "Approve subject to conditions and/or obligations",
    "Refusal",
  ];
</script>

<label
  >Name:<br />
  <input type="text" bind:value={props.planning.name} style="width: 100%" />
</label>

<br />
<br />

<label>
  Reference type:
  <select bind:value={props.planning.reference_type}>
    {#each referenceTypes as x}
      <option value={x}>{x}</option>
    {/each}
  </select>
</label>

<br />
<br />

<label>
  Notes:<br />
  <textarea bind:value={props.planning.notes} style="width: 100%" rows="5" />
</label>

<br />
<br />

<label>
  Size:
  <input type="number" bind:value={props.planning.size} min="0" max="1000" />
  <select bind:value={props.planning.size_units}>
    {#each sizeUnits as x}
      <option value={x}>{x}</option>
    {/each}
  </select>
</label>

<br />
<br />

<label>
  ATE Triage:
  <select bind:value={props.planning.triage}>
    {#each triages as x}
      <option value={x}>{x}</option>
    {/each}
  </select>
</label>

<br />
<br />

<label>
  ATE Recommendation:
  <select bind:value={props.planning.recommendation}>
    {#each recommendations as x}
      <option value={x}>{x}</option>
    {/each}
  </select>
</label>

<style>
  textarea {
    resize: none;
  }
</style>
