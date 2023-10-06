<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import { Popup } from "lib/common";
  import { layerId } from "lib/maplibre";
  import type { LngLat, MapMouseEvent } from "maplibre-gl";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";
  import { CircleLayer, GeoJSON, hoverStateFilter } from "svelte-maplibre";

  export let active: boolean;
  export let points: LngLat[];

  // Index into points
  let hovering: number | null = null;
  let dragging = false;

  onMount(() => {
    $map.on("click", onClick);
    $map.on("mousedown", onMouseDown);
    $map.on("mouseup", onMouseUp);
    $map.on("mousemove", onMouseMove);
  });
  onDestroy(() => {
    $map.off("click", onClick);
    $map.off("mousedown", onMouseDown);
    $map.off("mouseup", onMouseUp);
    $map.off("mousemove", onMouseMove);
  });

  $: gj = {
    type: "FeatureCollection",
    features: points.map((pt, idx) => {
      return {
        type: "Feature",
        id: idx,
        properties: {},
        geometry: {
          type: "Point",
          coordinates: pt.toArray(),
        },
      };
    }),
  };

  function onClick(e: MapMouseEvent) {
    if (!active) {
      return;
    }

    if (hovering == null) {
      // Add a new point
      points.push(e.lngLat);
      points = points;
    } else {
      // Remove a point
      points.splice(hovering, 1);
      points = points;
    }
  }

  function onMouseDown(e: MapMouseEvent) {
    if (!active) {
      return;
    }

    e.preventDefault();
    dragging = true;
    $map.getCanvas().style.cursor = "grab";
  }

  function onMouseUp() {
    if (!active) {
      return;
    }

    if (dragging) {
      dragging = false;
      $map.getCanvas().style.cursor = "pointer";
    }
  }

  function onMouseMove(e: MapMouseEvent) {
    if (!active) {
      return;
    }

    if (dragging) {
      points[hovering!] = e.lngLat;
      points = points;
    } else {
      hovering = null;
      for (let f of $map.queryRenderedFeatures(e.point, {
        layers: ["line-tool-endpoints"],
      })) {
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
      "circle-radius": 15,
      "circle-stroke-color": "black",
      "circle-stroke-width": hoverStateFilter(1, 3),
    }}
    manageHoverState
  >
    {#if !dragging}
      <Popup><p>Drag to remove or click to remove</p></Popup>
    {/if}
  </CircleLayer>
</GeoJSON>
