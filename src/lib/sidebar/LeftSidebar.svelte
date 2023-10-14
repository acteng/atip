<script lang="ts">
  import { BaselayerSwitcher } from "lib/common";
  import { editGeometryControls, mode } from "stores";
  import type { Schema } from "types";
  import PointControls from "../draw/point/PointControls.svelte";
  import PolygonControls from "../draw/polygon/PolygonControls.svelte";
  import RouteControls from "../draw/route/RouteControls.svelte";
  import SnapPolygonControls from "../draw/snap_polygon/SnapPolygonControls.svelte";
  import StreetViewControls from "../draw/StreetViewControls.svelte";
  import EditForm from "./EditForm.svelte";
  import ListMode from "./ListMode.svelte";

  export let schema: Schema;
</script>

{#if $mode.mode == "list"}
  <ListMode {schema} />
{:else if $mode.mode == "edit-form"}
  <EditForm {schema} id={$mode.id} />
{:else if $mode.mode == "edit-geometry"}
  {#if $editGeometryControls == "point"}
    <PointControls editingExisting />
  {:else if $editGeometryControls == "route"}
    <RouteControls extendRoute={false} />
  {:else if $editGeometryControls == "freehand-polygon"}
    <PolygonControls />
  {:else if $editGeometryControls == "snapped-polygon"}
    <SnapPolygonControls />
  {/if}
{:else if $mode.mode == "new-point"}
  <PointControls editingExisting={false} />
{:else if $mode.mode == "new-route"}
  <RouteControls extendRoute />
{:else if $mode.mode == "new-freehand-polygon"}
  <PolygonControls />
{:else if $mode.mode == "new-snapped-polygon"}
  <SnapPolygonControls />
{:else if $mode.mode == "split-route"}
  <ul>
    <li>
      <b>Click</b>
      on a route to split it
    </li>
    <li>
      <b>Click</b>
      on the map or press
      <b>Escape</b>
      to cancel
    </li>
  </ul>
{:else if $mode.mode == "streetview"}
  <StreetViewControls />
{/if}

<hr />
<BaselayerSwitcher />
