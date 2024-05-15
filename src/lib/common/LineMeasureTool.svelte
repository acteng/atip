<script lang="ts">
  import { lineString } from "@turf/helpers";
  import bearing from "@turf/bearing";
  import turfLength from "@turf/length";
  import { colors } from "colors";
  import { CollapsibleCard, SecondaryButton } from "govuk-svelte";
  import { emptyGeojson, layerId } from "lib/maplibre";
  import { MapMouseEvent } from "maplibre-gl";
  import { GeoJSON, LineLayer, MapEvents, Marker } from "svelte-maplibre";

  let active = false;
  let points: [number, number][] = [];
  $: length = calculateLength(points);

  function calculateLength(points: [number, number][]): number | null {
    if (points.length < 2) {
      return null;
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

  // Returns an angle for both endpoints and null for midpoints
  function arrowAngles(points: [number, number][]): Array<number | null> {
    let angles = [];
    for (let i = 0; i < points.length; i++) {
      if (i == 0 && points.length > 1) {
        angles.push(bearing(points[1], points[0]));
      } else if (i == points.length - 1 && points.length > 1) {
        angles.push(bearing(points[points.length - 2], points[i]));
      } else {
        angles.push(null);
      }
    }
    return angles;
  }
</script>

{#if active}
  <div><SecondaryButton on:click={stop}>Stop measuring</SecondaryButton></div>
  {#if length}
    <p>Length: {length.toFixed(2)} meters</p>
  {/if}

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

  <MapEvents on:click={onMapClick} />

  {#each arrowAngles(points) as angle, idx}
    <Marker
      draggable
      bind:lngLat={points[idx]}
      on:click={() => removePoint(idx)}
      rotation={angle ?? 0}
    >
      {#if angle == null}
        <span class="dot" />
      {:else}
        <span style="font-size: 50px">↑</span>
      {/if}
    </Marker>
  {/each}
{:else}
  <div>
    <SecondaryButton on:click={() => (active = true)}>
      Measure lines
    </SecondaryButton>
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
