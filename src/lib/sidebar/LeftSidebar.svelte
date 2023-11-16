<script lang="ts">
  import { BaselayerSwitcher } from "lib/common";
  import { DefaultButton } from "lib/govuk";
  import { map, mode, pointTool, polygonTool, routeTool } from "stores";
  import { onDestroy } from "svelte";
  import type { Schema } from "types";
  import EditGeometryMode from "../draw/EditGeometryMode.svelte";
  import ImageMode from "../draw/image/ImageMode.svelte";
  import { PointTool } from "../draw/point/point_tool";
  import PointMode from "../draw/point/PointMode.svelte";
  import { PolygonTool } from "../draw/polygon/polygon_tool";
  import PolygonMode from "../draw/polygon/PolygonMode.svelte";
  import RouteMode from "../draw/route/RouteMode.svelte";
  import RouteSnapperLoader from "../draw/route/RouteSnapperLoader.svelte";
  import SnapPolygonMode from "../draw/snap_polygon/SnapPolygonMode.svelte";
  import StreetViewMode from "../draw/StreetViewMode.svelte";
  import EditForm from "./EditForm.svelte";
  import ListMode from "./ListMode.svelte";

  export let schema: Schema;
  export let routeSnapperUrl: string;

  $: if ($map && !$pointTool) {
    pointTool.set(new PointTool($map));
  }
  $: if ($map && !$polygonTool) {
    polygonTool.set(new PolygonTool($map));
  }

  onDestroy(() => {
    $pointTool?.tearDown();
    $polygonTool?.tearDown();
    $routeTool?.tearDown();
  });
</script>

<!-- We only want one RouteSnapperLoader per lifetime of the page, so we don't
repeatedly load anything. The progress bar would ideally be in list mode's
toolbox, but that gets created and destroyed frequently. -->
<div style:visibility={$mode.mode == "list" ? "visible" : "hidden"}>
  {#if $map}
    <RouteSnapperLoader url={routeSnapperUrl} />
  {/if}
</div>

{#if $mode.mode == "list"}
  <ListMode {schema} />
{:else if $mode.mode == "edit-form"}
  <EditForm {schema} id={$mode.id} />
{:else if $mode.mode == "edit-geometry"}
  <EditGeometryMode {schema} id={$mode.id} />
{:else if $mode.mode == "new-point"}
  <h2>New point</h2>
  <PointMode />
{:else if $mode.mode == "new-route"}
  <h2>New route</h2>
  <RouteMode />
{:else if $mode.mode == "new-freehand-polygon"}
  <h2>New polygon (freehand)</h2>
  <PolygonMode />
{:else if $mode.mode == "new-snapped-polygon"}
  <h2>New polygon (snapped)</h2>
  <SnapPolygonMode />
{:else if $mode.mode == "split-route"}
  <h2>Split route</h2>
  <DefaultButton on:click={() => mode.set({ mode: "list" })}>
    Finish
  </DefaultButton>

  <ul>
    <li>
      <b>Click</b>
      on a route to split it
    </li>
    <li>
      <b>Click</b>
      on the map or press
      <b>Escape</b>
      to cancel
    </li>
  </ul>
{:else if $mode.mode == "set-image"}
  <h2>Georeference image</h2>
  <ImageMode />
{:else if $mode.mode == "streetview"}
  <h2>StreetView</h2>
  <StreetViewMode />
{/if}

<hr />
<BaselayerSwitcher />
