<script lang="ts">
  // TODO dashed line
  import PointWorld from "./PointWorld.svelte";
  import { SecondaryButton } from "lib/govuk";
  import { map } from "stores";
  import { GeoJSON, LineLayer } from "svelte-maplibre";
  import { emptyGeojson, layerId } from "lib/maplibre";
  import type { LngLat } from "maplibre-gl";
  import type { FeatureCollection } from "geojson";

  let active = false;
  let waypoints: LngLat[] = [];

  $: lineGj = calculateLineGj(waypoints);
  function calculateLineGj(waypoints: LngLat[]): FeatureCollection {
    console.log(waypoints);

    let gj = emptyGeojson();
    if (waypoints.length > 1) {
      gj.features.push({
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: waypoints.map((pt) => pt.toArray()),
        }
      });
    }
    return gj;
  }

  function start() {
    active = true;
    $map.getCanvas().style.cursor = "crosshair";
  }

  function stop() {
    active = false;
    waypoints = [];
    $map.getCanvas().style.cursor = "inherit";
  }
</script>

<PointWorld {active} bind:points={waypoints} />

<GeoJSON data={lineGj}>
  <LineLayer
    {...layerId("line-tool-line")}
    paint={{ "line-color": "cyan", "line-width": 5 }}
  />
</GeoJSON>

{#if active}
  <SecondaryButton on:click={stop}>Stop measuring</SecondaryButton>
{:else}
  <SecondaryButton on:click={start}>Measure distances</SecondaryButton>
{/if}
