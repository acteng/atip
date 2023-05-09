<script lang="ts">
  import { onDestroy } from "svelte";
  import { map } from "../../stores";
  import type { Schema } from "../../types";
  import { PointTool } from "./point/point_tool";
  import { PolygonTool } from "./polygon/polygon_tool";
  import { RouteTool } from "./route/route_tool";
  import type { Mode } from "./types";

  import AttributeMode from "./AttributeMode.svelte";
  import GeometryMode from "./GeometryMode.svelte";
  import RouteMode from "./route/RouteMode.svelte";
  import PointMode from "./point/PointMode.svelte";
  import PolygonMode from "./polygon/PolygonMode.svelte";
  import SnapPolygonMode from "./snap_polygon/SnapPolygonMode.svelte";
  import SplitRouteMode from "./route/SplitRouteMode.svelte";

  export let routeSnapperUrl: string;
  export let schema: Schema;
  // Plumbed up from RouteMode, so we can pass it down to GeometryMode
  // TODO Create this here too?
  let routeTool: RouteTool;

  // Create and manage these here, then pass down to modes as needed.
  let pointTool = new PointTool($map);
  let polygonTool = new PolygonTool($map);

  let mode: Mode = "edit-attribute";
  let attributeMode: AttributeMode;
  let geometryMode: GeometryMode;
  let routeMode: RouteMode;
  let pointMode: PointMode;
  let polygonMode: PolygonMode;
  let snapPolygonMode: SnapPolygonMode;
  let splitRouteMode: SplitRouteMode;

  // This must be used; don't manually change mode
  function changeMode(newMode: Mode) {
    let modes = {
      "edit-attribute": attributeMode,
      "edit-geometry": geometryMode,
      route: routeMode,
      point: pointMode,
      "free-polygon": polygonMode,
      "snap-polygon": snapPolygonMode,
      "split-route": splitRouteMode,
    };

    if (mode == newMode) {
      console.log(`Mode is already ${mode}, not changing`);
      return;
    }
    console.log(`Stopping old mode ${mode}`);
    modes[mode].stop();
    mode = newMode;
    console.log(`Starting new mode ${mode}`);
    modes[mode].start();
  }

  onDestroy(() => {
    pointTool?.tearDown();
    polygonTool?.tearDown();
    routeTool?.tearDown();
  });
</script>

<div class="toolbox">
  <div>
    <button
      type="button"
      on:click={() => changeMode("edit-attribute")}
      disabled={mode == "edit-attribute"}>Edit attributes</button
    >
    <AttributeMode bind:this={attributeMode} {mode} {changeMode} />
  </div>
  <div>
    <button
      type="button"
      on:click={() => changeMode("edit-geometry")}
      disabled={mode == "edit-geometry"}>Edit geometry</button
    >
    {#if routeTool}
      <GeometryMode
        bind:this={geometryMode}
        {mode}
        {pointTool}
        {polygonTool}
        {routeTool}
      />
    {/if}
  </div>
  <div>
    {#if schema != "planning"}
      <button
        type="button"
        on:click={() => changeMode("point")}
        disabled={mode == "point"}>New point</button
      >
    {/if}
    <PointMode bind:this={pointMode} {mode} {changeMode} {pointTool} />
  </div>
  <div>
    <button
      type="button"
      on:click={() => changeMode("free-polygon")}
      disabled={mode == "free-polygon"}>New polygon (freehand)</button
    >
    <PolygonMode bind:this={polygonMode} {mode} {changeMode} {polygonTool} />
  </div>
  <div>
    <button
      type="button"
      on:click={() => changeMode("snap-polygon")}
      disabled={mode == "snap-polygon"}>New polygon (snapped)</button
    >
    {#if routeTool}
      <SnapPolygonMode
        bind:this={snapPolygonMode}
        {mode}
        {changeMode}
        {routeTool}
      />
    {/if}
  </div>
  <div>
    {#if schema != "planning"}
      <button
        type="button"
        on:click={() => changeMode("route")}
        disabled={mode == "route"}>New route</button
      >
    {/if}
    <RouteMode
      bind:this={routeMode}
      {mode}
      {changeMode}
      url={routeSnapperUrl}
      bind:routeTool
    />
  </div>
  <div>
    {#if schema != "planning"}
      <button
        type="button"
        on:click={() => changeMode("split-route")}
        disabled={mode == "split-route"}>Split route</button
      >
    {/if}
    <SplitRouteMode bind:this={splitRouteMode} {mode} {changeMode} />
  </div>
</div>

<style>
  .toolbox {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    background-color: white;
    border: solid 2px black;
    font-size: 1.5em;
    width: 250px;
  }

  button {
    background-color: #4caf50;
    border: solid 2px #4caf50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
  }

  button:hover:enabled {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    border: solid 2px black;
  }

  button:disabled {
    opacity: 0.6;
    cursor: auto;
  }
</style>
