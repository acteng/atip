<script lang="ts">
  import Pin from "lib/critical_entry/Pin.svelte";
  import { SecondaryButton } from "lib/govuk";
  import { LngLat, MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { CollapsibleCard } from ".";

  let isInactive = true;
  let waypoints: any[] = [];
  let isShiftDown = false;
  let nextId = 0;

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
    }
    if (isShiftDown && waypoints.length > 0) {
      findAndRemoveNeareastWaypoint(e.lngLat);
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
    $map.on("click", handleMapClickEvent);
  }

  function disableMeasurement() {
    isInactive = true;
    $map.off("click", handleMapClickEvent);
  }

  function keyDown(keyDownEvent: KeyboardEvent) {
    if (keyDownEvent.key === "Shift") isShiftDown = true;
  }

  function keyUp(keyUpEvent: KeyboardEvent) {
    if (keyUpEvent.key === "Shift") isShiftDown = false;
  }
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
  <CollapsibleCard label="Help">
    <ul>
      <li>
        <b>Click</b>
        on the map to place a new waypoint
      </li>
      <li>
        <b>Click & Drag</b>
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
    <Pin bind:markerPosition={waypoint.lngLat} />
  {/each}
{/if}
<svelte:window on:keydown={keyDown} on:keyup={keyUp} />
