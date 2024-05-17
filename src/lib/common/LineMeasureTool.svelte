<script lang="ts">
  import { lineString } from "@turf/helpers";
  import turfLength from "@turf/length";
  import { colors } from "colors";
  import { CollapsibleCard } from "govuk-svelte";
  import { emptyGeojson, layerId } from "lib/maplibre";
  import { MapMouseEvent } from "maplibre-gl";
  import { GeoJSON, LineLayer, MapEvents, Marker } from "svelte-maplibre";
  import icon from "../../../assets/measure.svg?url";
  import { IconButton } from "./";

  let active = false;
  let points: [number, number][] = [];
  $: length = calculateLength(points);

  function calculateLength(points: [number, number][]): number {
    if (points.length < 2) {
      return 0;
    }
    return 1000 * turfLength(lineString(points), { units: "kilometers" });
  }

  function onMapClick(e: CustomEvent<MapMouseEvent>) {
    points = [...points, e.detail.lngLat.toArray()];
  }

  function stop() {
    active = false;
    points = [];
  }

  function keyDown(e: KeyboardEvent) {
    if (active && e.key === "Escape") {
      e.stopPropagation();
      stop();
    }
  }

  function removePoint(idx: number) {
    points.splice(idx, 1);
    points = points;
  }
</script>

{#if active}
  <div style="display: flex; flex-flow: column">
    <IconButton on:click={stop} activated>
      <img src={icon} alt="Stop measuring lines" />
    </IconButton>
    <p>Length: {length.toFixed(2)} meters</p>

    <CollapsibleCard label="Help">
      <ul>
        <li>
          <b>Click</b>
          on the map to place a new waypoint
        </li>
        <li>
          <b>Click and drag</b>
          an existing waypoint to move it
        </li>
        <li>
          <b>Click</b>
          an existing waypoint to delete it
        </li>
        <li>
          Press <b>Escape</b>
          to exit this mode
        </li>
      </ul>
    </CollapsibleCard>
  </div>

  <MapEvents on:click={onMapClick} />

  {#each points as point, idx}
    <Marker draggable bind:lngLat={point} on:click={() => removePoint(idx)}>
      <span class="dot" />
    </Marker>
  {/each}
{:else}
  <div>
    <IconButton on:click={() => (active = true)}>
      <img src={icon} alt="Measure lines" />
    </IconButton>
  </div>
{/if}

<svelte:window on:keydown={keyDown} />

<GeoJSON data={points.length < 2 ? emptyGeojson() : lineString(points)}>
  <LineLayer
    {...layerId("measurement-line")}
    paint={{ "line-color": colors.measuringLine, "line-width": 5 }}
  />
</GeoJSON>

<style>
  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    background: red;
  }

  .dot:hover {
    border: 1px solid black;
    cursor: pointer;
  }
</style>
