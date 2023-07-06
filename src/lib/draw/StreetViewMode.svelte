<script lang="ts">
  import type { MapMouseEvent } from "maplibre-gl";
  import { currentMode, map, userSettings } from "../../stores";
  import type { Mode } from "../../types";
  import CollapsibleCard from "../common/CollapsibleCard.svelte";
  import type { EventHandler } from "./event_handler";

  export let eventHandler: EventHandler;

  const thisMode = "street-view";

  export let changeMode: (m: Mode) => void;

  export function start() {
    $map.getCanvas().style.cursor = "zoom-in";
  }
  export function stop() {
    $map.getCanvas().style.cursor = "inherit";
  }

  eventHandler.mapHandlers.click = (e: MapMouseEvent) => {
    let lon = e.lngLat.lng;
    let lat = e.lngLat.lat;
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

  eventHandler.documentHandlers.keydown = (e: KeyboardEvent) => {
    if (e.key == "Escape") {
      changeMode("edit-attribute");
      e.preventDefault();
    }
  };
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
