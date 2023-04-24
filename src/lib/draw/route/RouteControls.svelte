<script lang="ts">
  import { RouteTool } from "./route_tool";
  import KeyHandler from "../KeyHandler.svelte";

  export let routeTool: RouteTool;

  // TODO Save this in the route
  let avoidDoublingBack = false;
  $: routeTool.setConfig({
    avoid_doubling_back: avoidDoublingBack,
  });

  // TODO Show if shift is held or not
  // TODO Disable finish when the route is invalid
</script>

<ul>
  <li>
    <b>Click</b> green points on the transport network to create snapped routes
  </li>
  <li>Hold <b>Shift</b> to draw a point anywhere</li>
  <li><b>Click and drag</b> any point to move it</li>
  <li><b>Click</b> a red waypoint to delete it</li>
  <li>Press <b>Enter</b> to finish route</li>
  <li>Press <b>Escape</b> to cancel</li>
</ul>

<label>
  <input type="checkbox" bind:checked={avoidDoublingBack} />
  Avoid doubling back
</label>

<div style="display: flex; justify-content: space-between">
  <button type="button" on:click={() => routeTool.finish()}>Finish</button>
  <button type="button" on:click={() => routeTool.cancel()}>Cancel</button>
</div>
<KeyHandler tool={routeTool} />
