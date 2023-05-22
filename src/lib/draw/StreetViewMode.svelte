<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Mode } from "./types";
  import type { GeoJSONSource, MapMouseEvent } from "maplibre-gl";
  import type { Feature, Point } from "geojson";
  import { point } from "@turf/helpers";
  import { map } from "../../stores";
  import {
    emptyGeojson,
    overwriteSource,
    overwriteLayer,
    drawCircle,
  } from "../../maplibre_helpers";

  const thisMode = "street-view";

  const circleRadiusPixels = 10;

  export let mode: Mode;
  export let changeMode: (m: Mode) => void;

  let imagery: "google" | "bing" | "mapillary" = "google";

  export function start() {}
  export function stop() {
    cursor = null;
  }

  let cursor: Feature<Point> | null = null;

  $map.on("mousemove", onMouseMove);
  $map.on("click", onClick);

  onDestroy(() => {
    $map.off("mousemove", onMouseMove);
    $map.off("click", onClick);
  });

  // Rendering
  let source = "street-view";
  overwriteSource($map, source, emptyGeojson());
  // TODO Different icon?
  overwriteLayer($map, {
    id: "draw-street-view",
    source,
    ...drawCircle("black", circleRadiusPixels, 1.0),
  });

  $: {
    let gj = emptyGeojson();
    if (cursor) {
      gj.features.push(cursor);
    }
    ($map.getSource(source) as GeoJSONSource).setData(gj);
  }

  function onMouseMove(e: MapMouseEvent) {
    if (mode != thisMode) {
      return;
    }

    cursor = cursorFeature(e.lngLat.toArray());
  }

  function onClick() {
    if (mode != thisMode) {
      return;
    }

    let [lon, lat] = cursor.geometry.coordinates;
    if (imagery == "google") {
      window.open(
        `http://maps.google.com/maps?q=&layer=c&cbll=${lat},${lon}&cbp=11,0,0,0,0`,
        "_blank"
      );
    } else if (imagery == "bing") {
      window.open(
        `https://www.bing.com/maps?cp=${lat}~${lon}&style=x`,
        "_blank"
      );
    } else if (imagery == "mapillary") {
      window.open(
        `https://www.mapillary.com/app/?lat=${lat}&lng=${lon}&z=17`,
        "_blank"
      );
    }
  }

  function cursorFeature(pt: number[]): Feature<Point> {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: pt,
      },
    };
  }

  // The escape key isn't registered at all for keypress, so use keydown
  function onKeyDown(e: KeyboardEvent) {
    if (mode == thisMode && e.key == "Escape") {
      changeMode("edit-attribute");
      e.preventDefault();
    }
  }
</script>

{#if mode == thisMode}
  <label>
    <input type="radio" bind:group={imagery} value="google" />
    Google Street View
  </label>
  <br />
  <label>
    <input type="radio" bind:group={imagery} value="bing" />
    Bing Streetside
  </label>
  <br />
  <label>
    <input type="radio" bind:group={imagery} value="mapillary" />
    Mapillary
  </label>

  <ul>
    <li><b>Click</b> on the map to open imagery</li>
    <li>Press <b>Escape</b> to cancel</li>
  </ul>
{/if}

<svelte:window on:keydown={onKeyDown} />
