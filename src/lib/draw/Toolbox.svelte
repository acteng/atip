<script lang="ts">
  import { onDestroy } from "svelte";
  import { map } from "../../stores";
  import type { Schema } from "../../types";
  import { PointTool } from "./point/point_tool";
  import { PolygonTool } from "./polygon/polygon_tool";
  import { RouteTool } from "./route/route_tool";
  import type { Mode } from "./types";

  import Button from "./Button.svelte";
  import AttributeMode from "./AttributeMode.svelte";
  import GeometryMode from "./GeometryMode.svelte";
  import RouteMode from "./route/RouteMode.svelte";
  import PointMode from "./point/PointMode.svelte";
  import PolygonMode from "./polygon/PolygonMode.svelte";
  import SnapPolygonMode from "./snap_polygon/SnapPolygonMode.svelte";
  import SplitRouteMode from "./route/SplitRouteMode.svelte";

  import editAttributesIcon from "../../../assets/edit_attributes.svg";
  import editGeometryIcon from "../../../assets/edit_geometry.svg";
  import pointIcon from "../../../assets/point.svg";
  import polygonSnappedIcon from "../../../assets/polygon_snapped.svg";
  import polygonFreehandIcon from "../../../assets/polygon_freehand.svg";
  import routeIcon from "../../../assets/route.svg";
  import splitRouteIcon from "../../../assets/split_route.svg";

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
    <Button
      {mode}
      thisMode="edit-attribute"
      label="Edit attributes"
      icon={editAttributesIcon}
      {changeMode}
    />
    <AttributeMode bind:this={attributeMode} {mode} {changeMode} />
  </div>
  <div>
    <Button
      {mode}
      thisMode="edit-geometry"
      label="Edit geometry"
      icon={editGeometryIcon}
      {changeMode}
    />
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
      <Button
        {mode}
        thisMode="point"
        label="New point"
        icon={pointIcon}
        {changeMode}
      />
    {/if}
    <PointMode bind:this={pointMode} {mode} {changeMode} {pointTool} />
  </div>
  <div>
    <Button
      {mode}
      thisMode="free-polygon"
      label="New polygon (freehand)"
      icon={polygonFreehandIcon}
      {changeMode}
    />
    <PolygonMode bind:this={polygonMode} {mode} {changeMode} {polygonTool} />
  </div>
  <div>
    <Button
      {mode}
      thisMode="snap-polygon"
      label="New polygon (snapped)"
      icon={polygonSnappedIcon}
      {changeMode}
    />
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
      <Button
        {mode}
        thisMode="route"
        label="New route"
        icon={routeIcon}
        {changeMode}
      />
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
      <Button
        {mode}
        thisMode="split-route"
        label="Split route"
        icon={splitRouteIcon}
        {changeMode}
      />
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
</style>
