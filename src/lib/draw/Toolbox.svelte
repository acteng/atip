<script lang="ts">
  import { onDestroy } from "svelte";
  import { map } from "../../stores";
  import { PointTool } from "./point/point_tool";
  import { PolygonTool } from "./polygon/polygon_tool";
  import { RouteTool } from "./route/route_tool";
  import type { Mode } from "./types";

  import AttributeMode from "./AttributeMode.svelte";
  import GeometryMode from "./GeometryMode.svelte";
  import RouteMode from "./route/RouteMode.svelte";
  import PointMode from "./point/PointMode.svelte";
  import PolygonMode from "./polygon/PolygonMode.svelte";
  import SplitRouteMode from "./route/SplitRouteMode.svelte";

  export let routeUrl: string;
  export let planningMode: boolean;
  // Plumbed up from RouteMode, so we can pass it down to GeometryMode
  // TODO Reconsider
  let routeTool: RouteTool;

  // Create and manage these here, then pass down to modes as needed.
  // TODO Teardown too
  let pointTool = new PointTool($map);
  let polygonTool = new PolygonTool($map);

  let mode: Mode = "edit-attribute";
  let attributeMode: AttributeMode;
  let geometryMode: GeometryMode;
  let routeMode: RouteMode;
  let pointMode: PointMode;
  let polygonMode: PolygonMode;
  let splitRouteMode: SplitRouteMode;

  // This must be used; don't manually change mode
  function changeMode(newMode: Mode) {
    let modes = {
      "edit-attribute": attributeMode,
      "edit-geometry": geometryMode,
      route: routeMode,
      point: pointMode,
      polygon: polygonMode,
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
    {#if !planningMode}
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
      on:click={() => changeMode("polygon")}
      disabled={mode == "polygon"}>New polygon</button
    >
    <PolygonMode bind:this={polygonMode} {mode} {changeMode} {polygonTool} />
  </div>
  <div>
    {#if !planningMode}
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
      url={routeUrl}
      bind:routeTool
    />
  </div>
  <div>
    {#if !planningMode}
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
