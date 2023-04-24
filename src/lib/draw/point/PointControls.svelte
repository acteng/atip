<script lang="ts">
  import { PointTool } from "./point_tool";
  import KeyHandler from "../KeyHandler.svelte";

  export let pointTool: PointTool;
  export let editingExisting: boolean;
</script>

{#if editingExisting}
  <p>Click to move the point here</p>
{:else}
  <p>Click to add a new point</p>
{/if}
<p>Press <b>Escape</b> to cancel</p>

<button type="button" on:click={() => pointTool.cancel()}>Cancel</button>
<KeyHandler tool={pointTool} />
