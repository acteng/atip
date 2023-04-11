<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import { onMount, onDestroy } from "svelte";
  import { map } from "../../stores.js";
  import { PointTool } from "./point_tool.js";
  import { PolygonTool } from "./polygon_tool.js";

  import AttributeMode from "./AttributeMode.svelte";
  import GeometryMode from "./GeometryMode.svelte";
  import RouteMode from "./RouteMode.svelte";
  import PointMode from "./PointMode.svelte";
  import PolygonMode from "./PolygonMode.svelte";

  export let routeUrl;
  // Plumbed up from RouteMode, so we can pass it down to GeometryMode
  let routeSnapper;
  let snapTool;

  // Create and manage this here, then pass down to modes as needed.
  let drawControls;
  let pointTool;
  let polygonTool;

  let mode = "edit-attribute";
  let attributeMode;
  let geometryMode;
  let routeMode;
  let pointMode;
  let polygonMode;

  // This must be used; don't manually change mode
  function changeMode(newMode) {
    let modes = {
      "edit-attribute": attributeMode,
      "edit-geometry": geometryMode,
      route: routeMode,
      point: pointMode,
      polygon: polygonMode,
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

  onMount(() => {
    // Depending on https://github.com/mapbox/mapbox-gl-draw-static-mode/ isn't
    // useful for something so small
    let StaticMode = {};
    StaticMode.onSetup = function () {
      this.setActionableState();
      return {};
    };
    StaticMode.toDisplayFeatures = function (state, geojson, display) {
      display(geojson);
    };

    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        // TODO Remove soon
        point: true,
        polygon: true,
      },
      modes: Object.assign(
        {
          static: StaticMode,
        },
        MapboxDraw.modes
      ),
    });
    $map.addControl(drawControls);
    drawControls.changeMode("static");

    // mapbox-gl-draw inserts a button to control modes; destroy it. Note this
    // is a brittle way to identify the controls to remove.
    let elements = document.getElementsByClassName("maplibregl-ctrl-top-right");
    // We're modifying the HTMLCollection while we iterate over it, so be careful
    while (elements.length > 0) {
      elements[0].remove();
    }

    pointTool = new PointTool($map);
    polygonTool = new PolygonTool($map);
  });

  onDestroy(() => {
    if (drawControls) {
      $map.removeControl(drawControls);
      drawControls = null;
    }
    // TODO Teardown pointTool and polygonTool
  });
</script>

{#if drawControls}
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
          {drawControls}
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
  </div>
{/if}

<style>
  .toolbox {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    background-color: white;
    border: solid 2px black;
    font-size: 1.5em;
    max-width: 250px;
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
