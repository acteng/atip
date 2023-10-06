<script lang="ts">
  import { Popup } from "lib/common";
  import { map } from "stores";
  import { onMount, onDestroy } from "svelte";
  import { hoverStateFilter, GeoJSON, CircleLayer } from "svelte-maplibre";
  import { emptyGeojson, layerId } from "lib/maplibre";
  import type { LngLat, MapMouseEvent } from "maplibre-gl";
  import type { FeatureCollection } from "geojson";

  export let active: boolean;
  export let points: LngLat[];

  onMount(() => {
    $map.on("click", onClick);
    $map.on("dragstart", onDragStart);
    //$map.on("drag", onDrag);
    $map.on("dragend", onDragEnd);
    $map.on("mousemove", onMouseMove);
  });
  onDestroy(() => {
    $map.off("click", onClick);
    $map.off("dragstart", onDragStart);
    //$map.off("drag", onDrag);
    $map.off("dragend", onDragEnd);
    $map.off("mousemove", onMouseMove);
  });

  $: gj = calculateGj(points);
  function calculateGj(points: LngLat[]): FeatureCollection {
    let gj = emptyGeojson();
    // TODO Map
    for (let pt of points) {
      gj.features.push({
        type: "Feature",
        id: gj.features.length,
        properties: {},
        geometry: {
          type: "Point",
          coordinates: pt.toArray(),
        }
      });
    }
    return gj;
  }

  // Index into points
  let hovering: number | null = null;
  let dragging = false;

  function onClick(e: MapMouseEvent) {
    if (!active) {
      return;
    }

    if (hovering == null) {
      points.push(e.lngLat);
      points = points;
    } else {
      points.splice(hovering, 1);
      points = points;
    }
  }

  function onDragStart() {
    if (!active) {
      return;
    }

    console.log(`STARTING TO DRAG`);

    dragging = true;
    $map.getCanvas().style.cursor = "grab";
    $map.dragPan.disable();
  }

  // TODO Wat, this is just total bogus, doesnt match docs?
  function onDrag(e: MapMouseEvent) {
    if (!active) {
      return;
    }

    console.log(`got a drag while hovering ${hovering} and at ${e.lngLat}`);

    /*if (dragging) {
      console.log(`dragging ${hovering} to ${e.lngLat}`);
      window.x = e;
      points[hovering!] = e.lngLat;
      points = points;
    } else {
      console.log(`ondrag when we're not dragging, how?!`);
    }*/
  }

  function onDragEnd() {
    if (!active) {
      return;
    }

    console.log(`STOPPING THE DRAG`);

    dragging = false;
    $map.getCanvas().style.cursor = "pointer";
    $map.dragPan.enable();
  }

  function onMouseMove(e: MapMouseEvent) {
    if (!active) {
      return;
    }

    console.log(`moved to ${e.lngLat.toArray()} whilst dragging ${dragging} and hovering ${hovering}`);

    // TODO easier?
    if (dragging) {
      points[hovering!] = e.lngLat;
      points = points;
    } else {
      hovering = null;
      for (let f of $map.queryRenderedFeatures(e.point, { layers: ["line-tool-endpoints"] })) {
        hovering = f.id as number;
        $map.getCanvas().style.cursor = "pointer";
        break;
      }
    }
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
  >
    <Popup><p>Drag to remove or click to remove</p></Popup>
  </CircleLayer>
</GeoJSON>
