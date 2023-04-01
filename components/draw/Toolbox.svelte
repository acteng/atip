<script>
  let state = {
    mode: "select",
  };

  function selectMode() {
    state.mode = "select";
  }
  function editMode() {
    state.mode = "edit";
  }
  // TODO For these 3, disable sidebar interactions
  function newPointMode() {
    state.mode = "point";
  }
  function newAreaMode() {
    state.mode = "area";
  }
  function newRouteMode() {
    state.mode = "route";
  }
</script>

<div class="toolbox">
  <div>
    <button
      type="button"
      on:click={selectMode}
      disabled={state.mode == "select"}>Select</button
    >
  </div>
  <div>
    <button type="button" on:click={editMode} disabled={state.mode == "edit"}
      >Edit</button
    >
  </div>
  <div>
    <button
      type="button"
      on:click={newPointMode}
      disabled={state.mode == "point"}>New point</button
    >
  </div>
  <div>
    <button type="button" on:click={newAreaMode} disabled={state.mode == "area"}
      >New area</button
    >
  </div>
  <div>
    <button
      type="button"
      on:click={newRouteMode}
      disabled={state.mode == "route"}>New route</button
    >
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
