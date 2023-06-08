<script lang="ts">
  import CollapsibleCard from "../../common/CollapsibleCard.svelte";
  import KeyHandler from "../KeyHandler.svelte";
  import { RouteTool } from "../route/route_tool";

  export let routeTool: RouteTool;

  // TODO Disable finish when the route is invalid
</script>

<CollapsibleCard label="Help">
  <ul>
    <li>
      <b>Click</b> green points on the transport network to create snapped routes
    </li>
    <li><b>Click and drag</b> any point to move it</li>
    <li><b>Click</b> a red waypoint to delete it</li>
    <li>Press <b>Enter</b> or <b>double click</b> to finish</li>
    <li>Press <b>Escape</b> to cancel</li>
  </ul>
</CollapsibleCard>

<div style="display: flex; justify-content: space-between">
  <button type="button" on:click={() => routeTool.finish()}>Finish</button>
  <button type="button" on:click={() => routeTool.cancel()}>Cancel</button>
</div>
<KeyHandler tool={routeTool} />
