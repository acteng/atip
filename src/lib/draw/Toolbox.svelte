<script lang="ts">
  import { map, mode } from "stores";
  import { onDestroy } from "svelte";
  import EditGeometryMode from "./EditGeometryMode.svelte";
  import ListMode from "./ListMode.svelte";
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

  // Create and manage these here, then pass down to modes as needed.
  let pointTool = new PointTool($map);
  let polygonTool = new PolygonTool($map);
  let routeTool: RouteTool | null = null;

  onDestroy(() => {
    pointTool?.tearDown();
    polygonTool?.tearDown();
    routeTool?.tearDown();
  });

  // Can't use TS in Svelte markup
  function mustHaveRouteTool(): RouteTool {
    return routeTool!;
  }
</script>

{#if $mode.mode != "edit-form"}
  <div class="top govuk-prose">
    <RouteSnapperLoader url={routeSnapperUrl} bind:routeTool />

    {#if $mode.mode == "list"}
      <ListMode routeTool={mustHaveRouteTool()} />
    {:else if $mode.mode == "edit-geometry"}
      <EditGeometryMode
        id={$mode.id}
        {pointTool}
        {polygonTool}
        routeTool={mustHaveRouteTool()}
      />
    {:else if $mode.mode == "new-point"}
      <PointMode {pointTool} />
    {:else if $mode.mode == "new-route"}
      <RouteMode routeTool={mustHaveRouteTool()} />
    {:else if $mode.mode == "new-freehand-polygon"}
      <PolygonMode {polygonTool} />
    {:else if $mode.mode == "new-snapped-polygon"}
      <SnapPolygonMode routeTool={mustHaveRouteTool()} />
    {:else if $mode.mode == "split-route"}
      <SplitRouteMode />
    {:else if $mode.mode == "streetview"}
      <StreetViewMode />
    {/if}
  </div>
{/if}

<style>
  .top {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 90%;
    background-color: white;
    border: 1px solid black;
    padding: 16px;

    display: flex;
    justify-content: space-between;
  }
</style>
