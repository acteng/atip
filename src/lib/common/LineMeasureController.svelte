<script lang="ts">
  import { lineString, type Feature, type LineString } from "@turf/helpers";
  import length from "@turf/length";
  import { colors } from "colors";
  import type { GeoJSON, GeoJsonProperties } from "geojson";
  import DraggablePin from "lib/common/DraggablePin.svelte";
  import { SecondaryButton } from "lib/govuk";
  import {
    emptyGeojson,
    overwriteLineLayer,
    overwriteSource,
  } from "lib/maplibre";
  import { GeoJSONSource, LngLat, MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";
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
    updateLinestring();
  }

  function removeLineFromMap() {
    if ($map.getSource(layerName)) {
      ($map.getSource(layerName) as GeoJSONSource).setData(emptyGeojson());

      lineToMeasure = undefined;
    }
  }

  function updateLinestring() {
    if (!$map.getSource(layerName)) {
      overwriteSource($map, layerName, lineToMeasure as GeoJSON);

      overwriteLineLayer($map, {
        id: layerName,
        source: layerName,
        color: colors.measuringLine,
        width: 5,
      });
    } else {
      ($map.getSource(layerName) as GeoJSONSource).setData(
        lineToMeasure as Feature<LineString, GeoJsonProperties>
      );
    }
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
