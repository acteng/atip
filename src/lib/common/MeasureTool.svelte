<script lang="ts">
  // TODO dashed line
  import { Popup } from "lib/common";
  import { SecondaryButton } from "lib/govuk";
  import { map } from "stores";
  import { onMount, onDestroy } from "svelte";
  import { type LayerClickInfo, hoverStateFilter, GeoJSON, CircleLayer, LineLayer, MarkerLayer } from "svelte-maplibre";
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

  $: markerGj = calculateMarkerGj(waypoints);
  function calculateMarkerGj(waypoints: LngLat[]): FeatureCollection {
    let gj = emptyGeojson();
    // TODO Map
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
    return gj;
  }
  $: lineGj = calculateLineGj(waypoints);
  function calculateLineGj(waypoints: LngLat[]): FeatureCollection {
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

  /*function removeWaypoint(e: CustomEvent<LayerClickInfo>) {
    //console.log(e.detail.features);
    let idx = (e.detail.features[0].id as number) - 1;
    console.log(`removing ${idx}. before:`);
    console.log(JSON.stringify(waypoints));
    waypoints.splice(idx, 1);
    waypoints = waypoints;
    console.log(`... now its`);
    console.log(JSON.stringify(waypoints));
  }*/
</script>

<GeoJSON data={markerGj}>
  <MarkerLayer draggable>
    XX
    <Popup><p>Drag to remove or click to remove</p></Popup>
  </MarkerLayer>
</GeoJSON>
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
