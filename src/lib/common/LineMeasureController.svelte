<script lang="ts">
  import { lineString, type Feature, type LineString } from "@turf/helpers";
  import length from "@turf/length";
  import { colors } from "colors";
  import DraggablePin from "lib/common/DraggablePin.svelte";
  import { SecondaryButton } from "lib/govuk";
  import { emptyGeojson } from "lib/maplibre";
  import { LngLat, MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import { CollapsibleCard } from ".";

  let isInactive = true;
  let waypoints: any[] = [];
  let lineToMeasure: Feature<LineString> | undefined = undefined;
  let isShiftDown = false;
  let nextId = 0;

  let drawGj = emptyGeojson();

  function handleMapClickEvent(e: MapMouseEvent) {
    if (isInactive) {
      return;
    }

    if (!isShiftDown) {
      waypoints.push({
        id: nextId++,
        lngLat: e.lngLat,
      });
      waypoints = waypoints;
      waypointsUpdated();
    }
    if (isShiftDown && waypoints.length > 0) {
      findAndRemoveNeareastWaypoint(e.lngLat);

      waypointsUpdated();
    }
  }

  function findAndRemoveNeareastWaypoint(clickLocation: LngLat) {
    const maxLngLatDistance = new LngLat(0, -90).distanceTo(new LngLat(0, 90));
    let currentShortestDistance = maxLngLatDistance;
    let waypointToRemove: LngLat | undefined = undefined;

    waypoints.forEach((waypoint) => {
      const waypointLngLat = waypoint.lngLat;
      if (currentShortestDistance >= clickLocation.distanceTo(waypointLngLat)) {
        waypointToRemove = waypointLngLat;
        currentShortestDistance = clickLocation.distanceTo(waypointLngLat);
      }
    });

    if (waypointToRemove) {
      waypoints = waypoints.filter((waypoint) => {
        const waypointLngLat = waypoint.lngLat;
        return (
          waypointLngLat.lng != waypointToRemove?.lng ||
          waypointLngLat.lat != waypointToRemove?.lat
        );
      });
    }
  }

  function enableMeasurement() {
    isInactive = false;
  }

  function disableMeasurement() {
    isInactive = true;
    waypoints = [];
    removeLineFromMap();
  }

  function keyDown(keyDownEvent: KeyboardEvent) {
    if (keyDownEvent.key === "Shift") {
      isShiftDown = true;
    }
    if (keyDownEvent.key === "Escape") {
      disableMeasurement();
    }
  }

  function keyUp(keyUpEvent: KeyboardEvent) {
    if (keyUpEvent.key === "Shift") {
      isShiftDown = false;
    }
  }

  // TODO: this callback being used by the draggable pin is quite smelly, we should aim to have this be more reactive but I don't know how just yet
  function waypointsUpdated() {
    if (waypoints.length < 2) {
      removeLineFromMap();
      return;
    }

    const waypointsAsPosition = waypoints.map((waypoint) => {
      return [waypoint.lngLat.lng, waypoint.lngLat.lat];
    });
    lineToMeasure = lineString(waypointsAsPosition, {});
    if (lineToMeasure.properties) {
      lineToMeasure.properties.length = (length(lineToMeasure) * 1000).toFixed(
        2
      );
    }
    drawGj = JSON.parse(JSON.stringify(lineToMeasure));
  }

  function removeLineFromMap() {
    lineToMeasure = undefined;
    drawGj = emptyGeojson();
  }

  onMount(() => {
    $map.on("click", handleMapClickEvent);
  });

  onDestroy(() => {
    $map.off("click", handleMapClickEvent);
  });
</script>

{#if isInactive}
  <SecondaryButton on:click={enableMeasurement}>
    Enable Line Measurement Tool
  </SecondaryButton>
{:else}
  <SecondaryButton on:click={disableMeasurement}>
    Disable Line Measurement Tool
  </SecondaryButton>
{/if}
{#if !isInactive}
  {#if lineToMeasure && lineToMeasure.properties?.length}
    <p>Length: {lineToMeasure.properties?.length}m</p>
  {/if}
  <CollapsibleCard label="Help">
    <ul>
      <li>
        <b>Click</b>
        on the map to place a new waypoint
      </li>
      <li>
        <b>Click and Drag</b>
        an existing waypoint to move it
      </li>
      <li>
        <b>Hold shift and click on</b>
        an existing waypoint to delete it
      </li>
      <li>
        Press <b>Escape</b>
        to exit this mode
      </li>
    </ul>
  </CollapsibleCard>
  {#each waypoints as waypoint (waypoint.id)}
    <DraggablePin
      bind:markerPosition={waypoint.lngLat}
      markerPositionUpdated={waypointsUpdated}
    />
  {/each}
{/if}
<svelte:window on:keydown={keyDown} on:keyup={keyUp} />

<GeoJSON data={drawGj}>
  <LineLayer
    id="measurement-line"
    paint={{ "line-color": colors.measuringLine, "line-width": 5 }}
  />
</GeoJSON>
