<script lang="ts">
  import { BaselayerSwitcher, Legend } from "lib/common";
  import { SecondaryButton } from "lib/govuk";
  import { schemaLegend } from "schemas";
  import { deleteIntervention, map, mode } from "stores";
  import { onDestroy } from "svelte";
  import type { Schema } from "types";
  import pointIcon from "../../../assets/point.svg";
  import polygonFreehandIcon from "../../../assets/polygon_freehand.svg";
  import polygonSnappedIcon from "../../../assets/polygon_snapped.svg";
  import routeIcon from "../../../assets/route.svg";
  import splitRouteIcon from "../../../assets/split_route.svg";
  import streetViewIcon from "../../../assets/street_view.svg";
  import EditFormMode from "./EditFormMode.svelte";
  import EditGeometryMode from "./EditGeometryMode.svelte";
  import { PointTool } from "./point/point_tool";
  import PointMode from "./point/PointMode.svelte";
  import { PolygonTool } from "./polygon/polygon_tool";
  import PolygonMode from "./polygon/PolygonMode.svelte";
  import { RouteTool } from "./route/route_tool";
  import RouteMode from "./route/RouteMode.svelte";
  import RouteSnapperLoader from "./route/RouteSnapperLoader.svelte";
  import SplitRouteMode from "./route/SplitRouteMode.svelte";
  import SnapPolygonMode from "./snap_polygon/SnapPolygonMode.svelte";
  import StreetViewMode from "./StreetViewMode.svelte";

  export let routeSnapperUrl: string;
  export let schema: Schema;

  // Create and manage these here, then pass down to modes as needed.
  let pointTool = new PointTool($map);
  let polygonTool = new PolygonTool($map);
  let routeTool: RouteTool | null = null;

  onDestroy(() => {
    pointTool?.tearDown();
    polygonTool?.tearDown();
    routeTool?.tearDown();
  });
</script>

<div class="top-right govuk-prose">
  <RouteSnapperLoader url={routeSnapperUrl} bind:routeTool />

  {#if $mode.mode == "list"}
    <SecondaryButton on:click={() => mode.set({ mode: "new-point" })}>
      <img src={pointIcon} alt="New point" />
      New point
    </SecondaryButton>
    <SecondaryButton
      on:click={() => mode.set({ mode: "new-route" })}
      disabled={!routeTool}
    >
      <img src={routeIcon} alt="New route" />
      New route
    </SecondaryButton>
    <SecondaryButton
      on:click={() => mode.set({ mode: "new-freehand-polygon" })}
    >
      <img src={polygonFreehandIcon} alt="New polygon (freehand)" />
      New polygon (freehand)
    </SecondaryButton>
    <SecondaryButton
      on:click={() => mode.set({ mode: "new-snapped-polygon" })}
      disabled={!routeTool}
    >
      <img src={polygonSnappedIcon} alt="New polygon (snapped)" />
      New polygon (snapped)
    </SecondaryButton>
    <SecondaryButton on:click={() => mode.set({ mode: "split-route" })}>
      <img src={splitRouteIcon} alt="Split route" />
      Split route
    </SecondaryButton>
    <SecondaryButton on:click={() => mode.set({ mode: "streetview" })}>
      <img src={streetViewIcon} alt="StreetView" />
      StreetView
    </SecondaryButton>
  {:else if $mode.mode == "edit-form"}
    <EditFormMode />
  {:else if $mode.mode == "edit-geometry"}
    <EditGeometryMode id={$mode.id} {pointTool} {polygonTool} {routeTool} />
  {:else if $mode.mode == "new-point"}
    <PointMode {pointTool} />
  {:else if $mode.mode == "new-route"}
    <RouteMode {routeTool} />
  {:else if $mode.mode == "new-freehand-polygon"}
    <PolygonMode {polygonTool} />
  {:else if $mode.mode == "new-snapped-polygon"}
    <SnapPolygonMode {routeTool} />
  {:else if $mode.mode == "split-route"}
    <SplitRouteMode />
  {:else if $mode.mode == "streetview"}
    <StreetViewMode />
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
