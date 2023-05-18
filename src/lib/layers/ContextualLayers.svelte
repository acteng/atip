<script lang="ts">
  import { type Remote } from "comlink";
  import { type RouteInfo } from "../../worker";
  import SpeedLimits from "./SpeedLimits.svelte";

  export let routeInfo: Remote<RouteInfo>;

  let show: "none" | "speed limits" = "none";
</script>

<label>
  Show layer:
  <select bind:value={show}>
    <option value="none">None</option>
    <option value="speed limits">Speed limits</option>
  </select>
</label>
{#if show == "speed limits"}
  <SpeedLimits {routeInfo} />
{/if}
