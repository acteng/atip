<script lang="ts">
  import { colors } from "colors";
  import { CollapsibleCard } from "lib/common";
  import { Radio, SecondaryButton } from "lib/govuk";
  import { getRoadLayerHelpers, LayerHelper } from "lib/maplibre";
  import type { MapMouseEvent } from "maplibre-gl";
  import { map, userSettings } from "stores";
  import { onDestroy } from "svelte";
  import cameraCursorUrl from "../../../assets/camera_cursor.svg?url";
  import StreetViewHelp from "./StreetViewHelp.svelte";

  export let enabled: boolean;

  let roadLayerHelpers: LayerHelper[] = [];

  function on() {
    $map.on("click", onClick);
    $map.getCanvas().style.cursor = `url(${cameraCursorUrl}), auto`;
    // Create these as late as possible, so changes to basemap layers are used
    roadLayerHelpers = getRoadLayerHelpers();
    for (let helper of roadLayerHelpers) {
      helper.setProperty($map, "line-color", colors.streetview);
    }
  }

  function off() {
    $map.off("click", onClick);
    $map.getCanvas().style.cursor = "inherit";
    for (let helper of roadLayerHelpers) {
      helper.returnToDefaultPaintValues($map);
    }
    roadLayerHelpers = [];
  }
  onDestroy(off);

  $: if (enabled) {
    on();
  } else {
    off();
  }

  function onClick(e: MapMouseEvent) {
    if (!enabled) {
      return;
    }
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
  }

  function onKeyDown(e: KeyboardEvent) {
    if (enabled && e.key == "Escape") {
      enabled = false;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

{#if enabled}
  <SecondaryButton on:click={() => (enabled = false)}>
    Disable Street View
  </SecondaryButton>

  <Radio
    legend="Source"
    id="streetViewImagery"
    choices={[
      ["google", "Google Street View"],
      ["bing", "Bing Streetside"],
    ]}
    bind:value={$userSettings.streetViewImagery}
  />

  <CollapsibleCard label="Help">
    <StreetViewHelp />
  </CollapsibleCard>
{:else}
  <SecondaryButton on:click={() => (enabled = true)}>
    Enable Street View
  </SecondaryButton>
{/if}
