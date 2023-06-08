<script lang="ts">
  import { point } from "@turf/helpers";
  import type { Feature, Point } from "geojson";
  import type { GeoJSONSource, MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import {
    emptyGeojson,
    overwriteCircleLayer,
    overwriteSource,
  } from "../../maplibre_helpers";
  import { currentMode, map, userSettings } from "../../stores";
  import type { Mode } from "../../types";
  import CollapsibleCard from "../common/CollapsibleCard.svelte";
  import type { EventHandler } from "./event_handler";

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

  eventHandler.mapHandlers.click = () => {
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

  eventHandler.mapHandlers.mousemove = (e: MapMouseEvent) => {
    cursor = cursorFeature(e.lngLat.toArray());
  };

  eventHandler.documentHandlers.keyDown = (e: KeyboardEvent) => {
    if (e.key == "Escape") {
      changeMode("edit-attribute");
      e.preventDefault();
    }
  };

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
