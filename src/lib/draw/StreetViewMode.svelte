<script lang="ts">
  import { onDestroy } from "svelte";
  import type { EventHandler, Mode } from "../../types";
  import type { GeoJSONSource, MapMouseEvent } from "maplibre-gl";
  import type { Feature, Point } from "geojson";
  import { point } from "@turf/helpers";
  import { map, userSettings, currentMode } from "../../stores";
  import {
    emptyGeojson,
    overwriteSource,
    overwriteCircleLayer,
  } from "../../maplibre_helpers";
  import CollapsibleCard from "../common/CollapsibleCard.svelte";

  export let eventHandler: EventHandler;

  const thisMode = "street-view";

  const circleRadiusPixels = 10;

  export let changeMode: (m: Mode) => void;

  export function start() {}
  export function stop() {
    cursor = null;
  }

  let cursor: Feature<Point> | null = null;

  // Rendering
  let source = "street-view";
  overwriteSource($map, source, emptyGeojson());
  // TODO Different icon?
  overwriteCircleLayer($map, {
    id: "draw-street-view",
    source,
    color: "black",
    radius: circleRadiusPixels,
  });

  $: {
    let gj = emptyGeojson();
    if (cursor) {
      gj.features.push(cursor);
    }
    ($map.getSource(source) as GeoJSONSource).setData(gj);
  }

  const onMouseMove = (e: MapMouseEvent) => {
    cursor = cursorFeature(e.lngLat.toArray());
  };

  const onClick = () => {
    let [lon, lat] = cursor.geometry.coordinates;
    if ($userSettings.streetViewImagery == "google") {
      window.open(
        `http://maps.google.com/maps?q=&layer=c&cbll=${lat},${lon}&cbp=11,0,0,0,0`,
        "_blank"
      );
    } else if ($userSettings.streetViewImagery == "bing") {
      window.open(
        `https://www.bing.com/maps?cp=${lat}~${lon}&style=x`,
        "_blank"
      );
    }
  };

  eventHandler.mapHandlers.click = onClick;
  eventHandler.mapHandlers.mousemove = onMouseMove;

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
  // TODO This doesn't use eventHandler, so it might run even when the mode isn't active.
  function onKeyDown(e: KeyboardEvent) {
    if (e.key == "Escape") {
      changeMode("edit-attribute");
      e.preventDefault();
    }
  }
</script>

{#if $currentMode == thisMode}
  <label>
    <input
      type="radio"
      bind:group={$userSettings.streetViewImagery}
      value="google"
    />
    Google Street View
  </label>
  <br />
  <label>
    <input
      type="radio"
      bind:group={$userSettings.streetViewImagery}
      value="bing"
    />
    Bing Streetside
  </label>

  <CollapsibleCard label="Help">
    <ul>
      <li>
        <b>Click</b> on the map to open a new tab with a 3rd-party imagery provider
      </li>
      <li>Press <b>Escape</b> to exit this mode</li>
    </ul>
  </CollapsibleCard>
{/if}

<svelte:window on:keydown={onKeyDown} />
