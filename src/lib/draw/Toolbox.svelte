<script lang="ts">
  import { onDestroy } from "svelte";
  import { get } from "svelte/store";
  import editAttributesIcon from "../../../assets/edit_attributes.svg";
  import editGeometryIcon from "../../../assets/edit_geometry.svg";
  import pointIcon from "../../../assets/point.svg";
  import polygonFreehandIcon from "../../../assets/polygon_freehand.svg";
  import polygonSnappedIcon from "../../../assets/polygon_snapped.svg";
  import routeIcon from "../../../assets/route.svg";
  import splitRouteIcon from "../../../assets/split_route.svg";
  import streetViewIcon from "../../../assets/street_view.svg";
  import { currentMode, map } from "../../stores";
  import type { Mode, Schema } from "../../types";
  import AttributeMode from "./AttributeMode.svelte";
  import { DocumentEvents, EventHandler, MapEvents } from "./event_handler";
  import GeometryMode from "./GeometryMode.svelte";
  import { PointTool } from "./point/point_tool";
  import PointMode from "./point/PointMode.svelte";
  import { PolygonTool } from "./polygon/polygon_tool";
  import PolygonMode from "./polygon/PolygonMode.svelte";
  import { RouteTool } from "./route/route_tool";
  import RouteMode from "./route/RouteMode.svelte";
  import SplitRouteMode from "./route/SplitRouteMode.svelte";
  import SelectToolButton from "./SelectToolButton.svelte";
  import SnapPolygonMode from "./snap_polygon/SnapPolygonMode.svelte";
  import StreetViewMode from "./StreetViewMode.svelte";

  export let routeSnapperUrl: string;
  export let schema: Schema;
  // Plumbed up from RouteMode, so we can pass it down to GeometryMode
  // TODO Create this here too?
  let routeTool: RouteTool;

  // Create and manage these here, then pass down to modes as needed.
  let pointTool = new PointTool($map);
  let polygonTool = new PolygonTool($map);

  let attributeMode: AttributeMode;
  let geometryMode: GeometryMode;
  let routeMode: RouteMode;
  let pointMode: PointMode;
  let polygonMode: PolygonMode;
  let snapPolygonMode: SnapPolygonMode;
  let splitRouteMode: SplitRouteMode;
  let streetViewMode: StreetViewMode;

  const eventHandlers: { [mode in Mode]: EventHandler } = {
    "edit-attribute": new EventHandler(),
    "edit-geometry": new EventHandler(),
    route: new EventHandler(),
    point: new EventHandler(),
    "free-polygon": new EventHandler(),
    "snap-polygon": new EventHandler(),
    "split-route": new EventHandler(),
    "street-view": new EventHandler(),
  };

  for (let eventName of MapEvents) {
    $map.on(eventName, (event) => {
      // @ts-ignore TODO Can't express that MapEvents are the keys
      eventHandlers[get(currentMode)].mapHandlers[eventName](event);
    });
  }

  for (let eventName of DocumentEvents) {
    document.addEventListener(eventName, (event) => {
      // @ts-ignore TODO Can't express that DocumentEvents are the keys
      eventHandlers[get(currentMode)].documentHandlers[eventName](event);
    });
  }

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
      "street-view": streetViewMode,
    };

    const mode = $currentMode;
    if (mode == newMode) {
      console.log(`Mode is already ${mode}, not changing`);
      return;
    }
    console.log(`Stopping old mode ${mode}`);
    modes[mode].stop();
    currentMode.set(newMode);
    console.log(`Starting new mode ${newMode}`);
    modes[newMode].start();
  }

  onDestroy(() => {
    polygonTool?.tearDown();
    routeTool?.tearDown();

    for (let eventName of MapEvents) {
      $map.off(eventName, (event) => {
        // @ts-ignore TODO Can't express that MapEvents are the keys
        eventHandlers[get(currentMode)].mapHandlers[eventName](event);
      });
    }

    for (let eventName of DocumentEvents) {
      document.removeEventListener(eventName, (event) => {
        // @ts-ignore TODO Can't express that DocumentEvents are the keys
        eventHandlers[get(currentMode)].documentHandlers[eventName](event);
      });
    }
  });
</script>

<div class="toolbox govuk-prose">
  <div>
    <SelectToolButton
      thisMode="edit-attribute"
      label="Edit attributes"
      icon={editAttributesIcon}
      {changeMode}
    />
    <AttributeMode
      bind:this={attributeMode}
      {schema}
      {changeMode}
      eventHandler={eventHandlers["edit-attribute"]}
    />
  </div>
  <div>
    <SelectToolButton
      thisMode="edit-geometry"
      label="Edit geometry"
      icon={editGeometryIcon}
      {changeMode}
    />
    {#if routeTool}
      <GeometryMode
        bind:this={geometryMode}
        {schema}
        {pointTool}
        {polygonTool}
        {routeTool}
        eventHandler={eventHandlers["edit-geometry"]}
      />
    {/if}
  </div>
  <div>
    {#if schema != "planning"}
      <SelectToolButton
        thisMode="point"
        label="New point"
        icon={pointIcon}
        {changeMode}
      />
    {/if}
    <PointMode
      bind:this={pointMode}
      {changeMode}
      {pointTool}
      eventHandler={eventHandlers["point"]}
    />
  </div>
  <div>
    <SelectToolButton
      thisMode="free-polygon"
      label="New polygon (freehand)"
      icon={polygonFreehandIcon}
      {changeMode}
    />
    <PolygonMode
      bind:this={polygonMode}
      {changeMode}
      {polygonTool}
      eventHandler={eventHandlers["free-polygon"]}
    />
  </div>
  <div>
    <SelectToolButton
      thisMode="snap-polygon"
      label="New polygon (snapped)"
      icon={polygonSnappedIcon}
      {changeMode}
    />
    {#if routeTool}
      <SnapPolygonMode
        bind:this={snapPolygonMode}
        {changeMode}
        {routeTool}
        eventHandler={eventHandlers["snap-polygon"]}
      />
    {/if}
  </div>
  <div>
    {#if schema != "planning"}
      <SelectToolButton
        thisMode="route"
        label="New route"
        icon={routeIcon}
        {changeMode}
      />
    {/if}
    <RouteMode
      bind:this={routeMode}
      {changeMode}
      url={routeSnapperUrl}
      bind:routeTool
      eventHandler={eventHandlers["route"]}
    />
  </div>
  <div>
    {#if schema != "planning"}
      <SelectToolButton
        thisMode="split-route"
        label="Split route"
        icon={splitRouteIcon}
        {changeMode}
      />
    {/if}
    <SplitRouteMode
      bind:this={splitRouteMode}
      {changeMode}
      eventHandler={eventHandlers["split-route"]}
    />
  </div>
  <div>
    <SelectToolButton
      thisMode="street-view"
      label="Street View"
      icon={streetViewIcon}
      {changeMode}
    />
    <StreetViewMode
      bind:this={streetViewMode}
      {changeMode}
      eventHandler={eventHandlers["street-view"]}
    />
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
</style>
