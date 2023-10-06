<script lang="ts">
  import { Popup } from "lib/common";
  import { SecondaryButton } from "lib/govuk";
  import { map } from "stores";
  import { onMount, onDestroy } from "svelte";
  import { type LayerClickInfo, hoverStateFilter, GeoJSON, CircleLayer, LineLayer } from "svelte-maplibre";
  import { emptyGeojson, layerId } from "lib/maplibre";
  import type { LngLat, MapMouseEvent } from "maplibre-gl";
  import type { FeatureCollection } from "geojson";

  let active = false;
  let waypoints: LngLat[] = [];

  onMount(() => {
    $map.on("click", addWaypoint);
  });
  onDestroy(() => {
    $map.off("click", addWaypoint);
  });

  $: gj = calculateGeojson(waypoints);
  function calculateGeojson(waypoints: LngLat[]): FeatureCollection {
    let gj = emptyGeojson();
    for (let waypt of waypoints) {
      gj.features.push({
        type: "Feature",
        id: gj.features.length + 1,
        properties: {},
        geometry: {
          type: "Point",
          coordinates: waypt.toArray(),
        }
      });
    }
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

  // TODO Don't run if we match something
  function addWaypoint(e: MapMouseEvent) {
    if (!active) {
      return;
    }

    console.log(`adding waypt, now it's`);
    waypoints.push(e.lngLat);
    waypoints = waypoints;
    console.log(JSON.stringify(waypoints));
  }

  function removeWaypoint(e: CustomEvent<LayerClickInfo>) {
    //console.log(e.detail.features);
    let idx = (e.detail.features[0].id as number) - 1;
    console.log(`removing ${idx}. before:`);
    console.log(JSON.stringify(waypoints));
    waypoints.splice(idx, 1);
    waypoints = waypoints;
    console.log(`... now its`);
    console.log(JSON.stringify(waypoints));
  }
</script>

<GeoJSON data={gj}>
  <CircleLayer
    {...layerId("line-tool-endpoints")}
    paint={{
      "circle-color": "red",
      "circle-radius": 5,
      "circle-stroke-color": "black",
      "circle-stroke-width": hoverStateFilter(1, 3),
    }}
    manageHoverState
    hoverCursor="grab"
    on:click={removeWaypoint}
  >
    <Popup><p>Drag to remove or click to remove</p></Popup>
  </CircleLayer>
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
