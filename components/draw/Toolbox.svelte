<script>
  import SelectMode from "./SelectMode.svelte";
  import EditMode from "./EditMode.svelte";
  import RouteMode from "./RouteMode.svelte";
  import PointOrPolygonMode from "./PointOrPolygonMode.svelte";

  export let routeUrl;
  // Plumbed up from RouteMode, so we can pass it down to EditMode
  let routeSnapper;
  let snapTool;

  let mode = "select";

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

<div class="toolbox">
  <div>
    <button type="button" on:click={selectMode} disabled={mode == "select"}
      >Select</button
    >
    <SelectMode {mode} />
  </div>
  <div>
    <button type="button" on:click={editMode} disabled={mode == "edit"}
      >Edit</button
    >
    {#if routeSnapper && snapTool}
      <EditMode bind:mode {routeSnapper} {snapTool} />
    {/if}
  </div>
  <div>
    <button type="button" on:click={newPointMode} disabled={mode == "point"}
      >New point</button
    >
    <PointOrPolygonMode bind:mode type="point" />
  </div>
  <div>
    <button type="button" on:click={newPolygonMode} disabled={mode == "polygon"}
      >New polygon</button
    >
    <PointOrPolygonMode bind:mode type="polygon" />
  </div>
  <div>
    <RouteMode bind:mode url={routeUrl} bind:routeSnapper bind:snapTool />
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
