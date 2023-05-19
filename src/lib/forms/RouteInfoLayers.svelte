<script lang="ts">
  import SpeedLimits from "../layers/SpeedLimits.svelte";

  export let id: number;

  let layer: "none" | "speed limits" = "none";
</script>

<label>
  Show details:
  <select bind:value={layer}>
    <option value="none">None</option>
    <option value="speed limits">Speed limits</option>
  </select>
</label>
{#if layer == "speed limits"}
  <SpeedLimits {id} />
{/if}
