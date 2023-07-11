<script lang="ts">
  import { routeInfo } from "../../stores";
  import P from "../govuk/P.svelte";
  import LaneDetails from "../layers/LaneDetails.svelte";
  import SpeedLimits from "../layers/SpeedLimits.svelte";

  export let id: number;

  let layer: "none" | "speed limits" | "lane details" = "none";
</script>

{#if $routeInfo}
  <div class="govuk-form-group">
    <label class="govuk-label" for="routeinfo-select"> Show details: </label>
    <select id="routeinfo-select" class="govuk-select" bind:value={layer}>
      <option value="none">None</option>
      <option value="speed limits">Speed limits</option>
      <option value="lane details">Lane details</option>
    </select>
    {#if layer == "speed limits"}
      <SpeedLimits {id} />
    {:else if layer == "lane details"}
      <LaneDetails {id} />
    {/if}
  </div>
{:else}
  <P>Route info loading...</P>
{/if}
