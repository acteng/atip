<script lang="ts">
  import Pin from "lib/critical_entry/Pin.svelte";
  import { SecondaryButton } from "lib/govuk";
  import { LngLat, MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";
  import { CollapsibleCard } from ".";

  let isInactive = true;
  let waypoints: LngLat[] = [];
  let isShiftDown = false;

  function handleMapClickEvent(e: MapMouseEvent) {
    if (isInactive) {
      return;
    }

    if (!isShiftDown) {
      waypoints.push(e.lngLat);
      waypoints = waypoints;
    }
    if (isShiftDown && waypoints.length > 0) {
      console.log("removing?");
      findAndRemoveNeareastWaypoint(e.lngLat);
    }
  }

  function findAndRemoveNeareastWaypoint(clickLocation: LngLat) {
    const maxLngLatDistance = new LngLat(0, -90).distanceTo(new LngLat(0, 90));
    let currentShortestDistance = maxLngLatDistance;
    let waypointToRemove: LngLat | undefined = undefined;

    console.log(`clickLocation ${clickLocation.lat}, ${clickLocation.lng}`);
    console.log(waypoints)
    

    waypoints.forEach((waypoint) => {
      if (currentShortestDistance >= clickLocation.distanceTo(waypoint)) {
        waypointToRemove = waypoint;
        currentShortestDistance = clickLocation.distanceTo(waypoint);
        console.log(
          `waypoint ${waypoint}, ${clickLocation.distanceTo(
            waypoint
          )}, prev shorted ${currentShortestDistance}`
        );
      }
    });

    console.log(waypointToRemove)
    if (waypointToRemove) {
      waypoints = waypoints.filter((waypoint) => {
        return (
          waypoint.lng != waypointToRemove?.lng ||
          waypoint.lat != waypointToRemove?.lat
        );
      });
    }
    console.log(waypoints);
    waypoints = waypoints;
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

  onMount(() => {
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", keyDown);
    document.removeEventListener("keyup", keyUp);
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
        <b>Double click</b>
        an existing waypoint to delete it
      </li>
      <li>
        Press <b>Escape</b>
        to exit this mode
      </li>
    </ul>
  </CollapsibleCard>
  {#each waypoints as waypoint}
    <Pin bind:markerPosition={waypoint} />
  {/each}
{/if}
