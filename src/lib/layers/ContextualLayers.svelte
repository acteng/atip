<script lang="ts">
  import { formOpen, routeInfo } from "../../stores";
  import SpeedLimits from "./SpeedLimits.svelte";

  let show: "none" | "speed limits" = "none";

  // If any form is open, don't show a map-wide layer.
  $: {
    if ($formOpen) {
      show = "none";
    }
  }
</script>

{#if $routeInfo}
  <label>
    Show layer:
    <select bind:value={show} disabled={$formOpen != null}>
      <option value="none">None</option>
      <option value="speed limits">Speed limits</option>
    </select>
  </label>
  {#if show == "speed limits"}
    <SpeedLimits id={undefined} />
  {/if}
{:else}
  <p>Route info loading...</p>
{/if}
