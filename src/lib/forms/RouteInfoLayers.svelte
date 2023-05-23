<script lang="ts">
  import SpeedLimits from "../layers/SpeedLimits.svelte";
  import LaneDetails from "../layers/LaneDetails.svelte";

  export let id: number;

  let layer: "none" | "speed limits" | "lane details" = "none";
</script>

<label>
  Show details:
  <select bind:value={layer}>
    <option value="none">None</option>
    <option value="speed limits">Speed limits</option>
    <option value="lane details">Lane details</option>
  </select>
</label>
{#if layer == "speed limits"}
  <SpeedLimits {id} />
{:else if layer == "lane details"}
  <LaneDetails {id} />
{/if}
