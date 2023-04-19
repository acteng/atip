<script lang="ts">
  import { onDestroy } from "svelte";
  import { map } from "../../stores";
  import { PointTool } from "./point_tool";
  import { PolygonTool } from "./polygon_tool";
  import type { RouteSnapper } from "route-snapper/lib.js";

  import AttributeMode from "./AttributeMode.svelte";
  import GeometryMode from "./GeometryMode.svelte";
  import RouteMode from "./RouteMode.svelte";
  import PointMode from "./PointMode.svelte";
  import PolygonMode from "./PolygonMode.svelte";
  import SplitRouteMode from "./SplitRouteMode.svelte";

  export let routeUrl: string;
  // Plumbed up from RouteMode, so we can pass it down to GeometryMode
  let routeSnapper: RouteSnapper;
  let snapTool: HTMLDivElement;

  // Create and manage these here, then pass down to modes as needed.
  // TODO Teardown too
  let pointTool = new PointTool($map);
  let polygonTool = new PolygonTool($map);

  let mode = "edit-attribute";
  let attributeMode;
  let geometryMode;
  let routeMode;
  let pointMode;
  let polygonMode;
  let splitRouteMode;

  // This must be used; don't manually change mode
  function changeMode(newMode: string) {
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
    {#if routeSnapper && snapTool}
      <GeometryMode
        bind:this={geometryMode}
        {mode}
        {routeSnapper}
        {snapTool}
        {pointTool}
        {polygonTool}
      />
    {/if}
  </div>
  <div>
    <button
      type="button"
      on:click={() => changeMode("point")}
      disabled={mode == "point"}>New point</button
    >
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
    <RouteMode
      bind:this={routeMode}
      {mode}
      {changeMode}
      url={routeUrl}
      bind:routeSnapper
      bind:snapTool
    />
  </div>
  <div>
    <button
      type="button"
      on:click={() => changeMode("split-route")}
      disabled={mode == "split-route"}>Split route</button
    >
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
