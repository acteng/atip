<script lang="ts">
  import { BaselayerSwitcher, Legend } from "lib/common";
  import { SecondaryButton, WarningButton } from "lib/govuk";
  import { schemaLegend } from "schemas";
  import { deleteIntervention, map, mode2 } from "stores";
  import { onDestroy } from "svelte";
  import type { Schema } from "types";
  import pointIcon from "../../../assets/point.svg";
  import polygonFreehandIcon from "../../../assets/polygon_freehand.svg";
  import polygonSnappedIcon from "../../../assets/polygon_snapped.svg";
  import routeIcon from "../../../assets/route.svg";
  import splitRouteIcon from "../../../assets/split_route.svg";
  import streetViewIcon from "../../../assets/street_view.svg";
  import { PointTool } from "./point/point_tool";
  import PointMode from "./point/PointMode.svelte";
  import { PolygonTool } from "./polygon/polygon_tool";
  import { RouteTool } from "./route/route_tool";

  export let routeSnapperUrl: string;
  export let schema: Schema;

  // Create and manage these here, then pass down to modes as needed.
  let pointTool = new PointTool($map);
  let polygonTool = new PolygonTool($map);
  // TODO Create this here too?
  let routeTool: RouteTool | null = null;

  onDestroy(() => {
    pointTool?.tearDown();
    polygonTool?.tearDown();
    routeTool?.tearDown();
  });
</script>

<div class="top-right govuk-prose">
  {#if $mode2.mode == "list"}
    <SecondaryButton on:click={() => mode2.set({ mode: "new-point" })}>
      <img src={pointIcon} alt="New point" />
      New point
    </SecondaryButton>
    <SecondaryButton
      on:click={() => mode2.set({ mode: "new-freehand-polygon" })}
    >
      <img src={polygonFreehandIcon} alt="New polygon (freehand)" />
      New polygon (freehand)
    </SecondaryButton>
  {:else if $mode2.mode == "edit-form"}
    <SecondaryButton on:click={() => mode2.set({ mode: "list" })}>
      Save / back
    </SecondaryButton>
    <WarningButton on:click={() => deleteIntervention($mode2.id)}>
      Delete
    </WarningButton>
  {:else if $mode2.mode == "new-point"}
    <PointMode {pointTool} />
  {:else}
    <h1>TODO</h1>
  {/if}

  <hr />
  <BaselayerSwitcher />
  <Legend rows={schemaLegend(schema)} />
</div>

<style>
  .top-right {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
    padding: 16px;
    /* Leave room at the bottom for some of the map controls */
    max-height: calc(100vh - 200px);
    overflow: auto;
    font-size: 1.5em;
    width: 250px;
  }
</style>
