<script lang="ts">
  import CollapsibleCard from "../../common/CollapsibleCard.svelte";
  import SecondaryButton from "../../govuk/SecondaryButton.svelte";
  import { PointTool } from "./point_tool";

  export let pointTool: PointTool;
  export let editingExisting: boolean;
</script>

<CollapsibleCard label="Help">
  <ul>
    {#if editingExisting}
      <li>Click to move the point here</li>
    {:else}
      <li>Click to add a new point</li>
    {/if}
    <li>
      Press <b>Escape</b>
       to cancel
    </li>
  </ul>
</CollapsibleCard>

<SecondaryButton on:click={() => pointTool.cancel()}>Cancel</SecondaryButton>
