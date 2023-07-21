<script lang="ts">
  import { formOpen, routeInfo } from "../../stores";
  import { Select } from "../govuk";
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
  <Select
    label="Show layer"
    id="show-layer"
    choices={[
      ["none", "None"],
      ["speed limits", "Speed limits"],
    ]}
    bind:value={show}
    disabled={$formOpen != null}
  />
  {#if show == "speed limits"}
    <SpeedLimits id={undefined} />
  {/if}
{:else}
  <p>Route info loading...</p>
{/if}
