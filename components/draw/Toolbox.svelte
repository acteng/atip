<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import { onMount, onDestroy } from "svelte";
  import { map } from "../../stores.js";

  import SelectMode from "./SelectMode.svelte";
  import EditMode from "./EditMode.svelte";
  import RouteMode from "./RouteMode.svelte";
  import PointOrPolygonMode from "./PointOrPolygonMode.svelte";

  export let routeUrl;
  // Plumbed up from RouteMode, so we can pass it down to EditMode
  let routeSnapper;
  let snapTool;

  // Create and manage this here, then pass down to modes as needed.
  // Every mode is responsible for changing the mode to the appropriate thing
  // upon entry. No "onDestroy" equivalent; otherwise multiple components
  // changeMode with brittle ordering.
  let drawControls;

  let mode = "select";

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

    // mapbox-gl-draw inserts a button to control modes; destroy it
    let elements = document.getElementsByClassName(
      "mapboxgl-ctrl-group mapboxgl-ctrl"
    );
    // We're modifying the HTMLCollection while we iterate over it, so be careful
    while (elements.length > 0) {
      elements[0].remove();
    }
  });

  onDestroy(() => {
    if (drawControls) {
      $map.removeControl(drawControls);
      drawControls = null;
    }
  });

  function selectMode() {
    mode = "select";
  }
  function editMode() {
    mode = "edit";
  }
  // TODO For these and route, disable sidebar interactions
  function newPointMode() {
    mode = "point";
  }
  function newPolygonMode() {
    mode = "polygon";
  }
</script>

{#if drawControls}
  <div class="toolbox">
    <div>
      <button type="button" on:click={selectMode} disabled={mode == "select"}
        >Select</button
      >
      <SelectMode {mode} {drawControls} />
    </div>
    <div>
      <button type="button" on:click={editMode} disabled={mode == "edit"}
        >Edit</button
      >
      {#if routeSnapper && snapTool}
        <EditMode bind:mode {routeSnapper} {snapTool} {drawControls} />
      {/if}
    </div>
    <div>
      <button type="button" on:click={newPointMode} disabled={mode == "point"}
        >New point</button
      >
      <PointOrPolygonMode bind:mode {drawControls} type="point" />
    </div>
    <div>
      <button
        type="button"
        on:click={newPolygonMode}
        disabled={mode == "polygon"}>New polygon</button
      >
      <PointOrPolygonMode bind:mode {drawControls} type="polygon" />
    </div>
    <div>
      <RouteMode
        bind:mode
        url={routeUrl}
        bind:routeSnapper
        bind:snapTool
        {drawControls}
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
  }

  button {
    background-color: #4caf50;
    border: none;
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
