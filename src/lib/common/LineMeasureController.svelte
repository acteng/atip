<script lang="ts">
  import { lineString, type Feature, type LineString } from "@turf/helpers";
  import length from "@turf/length";
  import { colors } from "colors";
  import Pin from "lib/critical_entry/Pin.svelte";
  import { SecondaryButton } from "lib/govuk";
  import { LngLat, MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { CollapsibleCard } from ".";

  let isInactive = true;
  let waypoints: any[] = [];
  let lineToMeasure: Feature<LineString> | undefined = undefined;
  let isShiftDown = false;
  let nextId = 0;
  const layerName = "measurement-line";

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
    $map.on("click", handleMapClickEvent);
  }

  function disableMeasurement() {
    isInactive = true;
    $map.off("click", handleMapClickEvent);
    waypoints = [];
    removeLineFromMap();
  }

  function keyDown(keyDownEvent: KeyboardEvent) {
    if (keyDownEvent.key === "Shift") isShiftDown = true;
  }

  function keyUp(keyUpEvent: KeyboardEvent) {
    if (keyUpEvent.key === "Shift") isShiftDown = false;
  }

  function waypointsUpdated() {
    if (waypoints.length < 2) {
      removeLineFromMap();
      return;
    }

    const waypointsAsPosition = waypoints.map((waypoint) => {
      return [waypoint.lngLat.lng, waypoint.lngLat.lat];
    });
    lineToMeasure = lineString(waypointsAsPosition, {});
    if (lineToMeasure.properties)
      lineToMeasure.properties.length = length(lineToMeasure) * 1000;
    updateLinestring();
  }

  function removeLineFromMap() {
    if ($map.getSource(layerName)) {
      $map.removeLayer(layerName);
      $map.removeSource(layerName);
    }
  }

  function updateLinestring() {
    if (!$map.getSource(layerName)) {
      $map.addSource(layerName, {
        type: "geojson",
        data: lineToMeasure,
      });

      $map.addLayer({
        id: layerName,
        type: "line",
        source: layerName,
        paint: {
          "line-color": colors.measuringLine,
          "line-width": 5,
        },
      });
    } else {
      // @ts-ignore setData not happy for some reason
      $map.getSource(layerName)?.setData(lineToMeasure);
    }
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
  {#if lineToMeasure}
    <p>Length: {lineToMeasure.properties?.length}m</p>
  {/if}
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
    <Pin
      bind:markerPosition={waypoint.lngLat}
      markerPositionUpdated={waypointsUpdated}
    />
  {/each}
{/if}
<svelte:window on:keydown={keyDown} on:keyup={keyUp} />
