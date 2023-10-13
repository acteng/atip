<script lang="ts">
  import { editGeometryControls, mode2 } from "stores";
  import type { Schema } from "types";
  import PointControls from "../draw/point/PointControls.svelte";
  import PolygonControls from "../draw/polygon/PolygonControls.svelte";
  import RouteControls from "../draw/route/RouteControls.svelte";
  import SnapPolygonControls from "../draw/snap_polygon/SnapPolygonControls.svelte";
  import EditForm from "./EditForm.svelte";
  import ListMode from "./ListMode.svelte";

  export let schema: Schema;
</script>

{#if $mode2.mode == "list"}
  <ListMode {schema} />
{:else if $mode2.mode == "edit-form"}
  <EditForm {schema} id={$mode2.id} />
{:else if $mode2.mode == "edit-geometry"}
  {#if $editGeometryControls == "point"}
    <PointControls editingExisting />
  {:else if $editGeometryControls == "route"}
    <RouteControls extendRoute={false} />
  {:else if $editGeometryControls == "freehand-polygon"}
    <PolygonControls />
  {:else if $editGeometryControls == "snapped-polygon"}
    <SnapPolygonControls />
  {/if}
{:else if $mode2.mode == "new-point"}
  <PointControls editingExisting={false} />
{:else if $mode2.mode == "new-route"}
  <RouteControls extendRoute />
{:else if $mode2.mode == "new-freehand-polygon"}
  <PolygonControls />
{:else if $mode2.mode == "new-snapped-polygon"}
  <SnapPolygonControls />
{:else}
  <h1>TODO bug: {JSON.stringify($mode2)}</h1>
{/if}
