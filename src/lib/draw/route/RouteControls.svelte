<script lang="ts">
  import { RouteTool } from "./route_tool";
  import KeyHandler from "../KeyHandler.svelte";
  import CollapsibleCard from "../../common/CollapsibleCard.svelte";
  import { userSettings } from "../../../stores";

  export let routeTool: RouteTool;

  // TODO When editing, we should save in the route and use the previous value
  $: routeTool.setRouteConfig({
    avoid_doubling_back: $userSettings.avoidDoublingBack,
  });

  // TODO Show if shift is held or not
  // TODO Disable finish when the route is invalid
</script>

<CollapsibleCard label="Help">
  <ul>
    <li>
      <b>Click</b> green points on the transport network to create snapped routes
    </li>
    <li>Hold <b>Shift</b> to draw a point anywhere</li>
    <li><b>Click and drag</b> any point to move it</li>
    <li><b>Click</b> a red waypoint to delete it</li>
    <li>Press <b>Enter</b> or <b>double click</b> to finish</li>
    <li>Press <b>Escape</b> to cancel</li>
  </ul>
</CollapsibleCard>

<label>
  <input type="checkbox" bind:checked={$userSettings.avoidDoublingBack} />
  Avoid doubling back
</label>

<div style="display: flex; justify-content: space-between">
  <button type="button" on:click={() => routeTool.finish()}>Finish</button>
  <button type="button" on:click={() => routeTool.cancel()}>Cancel</button>
</div>
<KeyHandler tool={routeTool} />
