<script lang="ts">
  import { routeInfo } from "../../stores";
  import Select from "../govuk/Select.svelte";
  import LaneDetails from "../layers/LaneDetails.svelte";
  import SpeedLimits from "../layers/SpeedLimits.svelte";

  export let id: number;

  let layer: "none" | "speed limits" | "lane details" = "none";
</script>

{#if $routeInfo}
  <Select
    label="Show details"
    id="show-details-layer"
    choices={[
      ["none", "None"],
      ["speed limits", "Speed limits"],
      ["lane details", "Lane details"],
    ]}
    bind:value={layer}
  />
  {#if layer == "speed limits"}
    <SpeedLimits {id} />
  {:else if layer == "lane details"}
    <LaneDetails {id} />
  {/if}
{:else}
  <p>Route info loading...</p>
{/if}
