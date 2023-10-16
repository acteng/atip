<script lang="ts">
  import { BaselayerSwitcher, StreetViewHelp } from "lib/common";
  import { editGeometryControls, gjScheme, mode } from "stores";
  import type { Schema } from "types";
  import PointControls from "../draw/point/PointControls.svelte";
  import PolygonControls from "../draw/polygon/PolygonControls.svelte";
  import RouteControls from "../draw/route/RouteControls.svelte";
  import SnapPolygonControls from "../draw/snap_polygon/SnapPolygonControls.svelte";
  import EditForm from "./EditForm.svelte";
  import ListMode from "./ListMode.svelte";
  import { interventionName } from "./scheme_data";

  export let schema: Schema;

  function editGeometryTitle(): string {
    // @ts-ignore Flow analysis doesn't understand the current mode
    let feature = $gjScheme.features.find((f) => f.id == $mode.id)!;
    return `Editing ${interventionName(schema, feature)}`;
  }
</script>

{#if $mode.mode == "list"}
  <ListMode {schema} />
{:else if $mode.mode == "edit-form"}
  <EditForm {schema} id={$mode.id} />
{:else if $mode.mode == "edit-geometry"}
  <h2>{editGeometryTitle()}</h2>
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
  <h2>New point</h2>
  <PointControls editingExisting={false} />
{:else if $mode.mode == "new-route"}
  <h2>New route</h2>
  <RouteControls extendRoute />
{:else if $mode.mode == "new-freehand-polygon"}
  <h2>New polygon (freehand)</h2>
  <PolygonControls />
{:else if $mode.mode == "new-snapped-polygon"}
  <h2>New polygon (snapped)</h2>
  <SnapPolygonControls />
{:else if $mode.mode == "split-route"}
  <h2>Split route</h2>
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
  <h2>StreetView</h2>
  <StreetViewHelp />
{/if}

<hr />
<BaselayerSwitcher />
