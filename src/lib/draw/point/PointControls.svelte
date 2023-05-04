<script lang="ts">
  import { PointTool } from "./point_tool";
  import KeyHandler from "../KeyHandler.svelte";

  export let pointTool: PointTool;
  export let editingExisting: boolean;
</script>

<ul>
  {#if editingExisting}
    <li>Click to move the point here</li>
  {:else}
    <li>Click to add a new point</li>
  {/if}
  <li>Press <b>Escape</b> to cancel</li>
</ul>

<button type="button" on:click={() => pointTool.cancel()}>Cancel</button>
<KeyHandler tool={pointTool} />
