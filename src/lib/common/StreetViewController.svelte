<script lang="ts">
  import { colors } from "colors";
  import { CollapsibleCard, ExternalLink } from "lib/common";
  import { Radio, SecondaryButton } from "lib/govuk";
  import { getRoadLayerHelpers, LayerHelper } from "lib/maplibre";
  import type { MapMouseEvent } from "maplibre-gl";
  import { map, userSettings } from "stores";
  import cameraCursorUrl from "../../../assets/camera_cursor.svg?url";

  export let displayEnableButton: boolean;
  export let isInactive: boolean;

  let roadLayerHelpers: LayerHelper[] = [];

  export function handleMapClickEvent(e: MapMouseEvent) {
    if (isInactive) {
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

  export function enableStreetView() {
    isInactive = false;
    $map.on("click", handleMapClickEvent);
    $map.getCanvas().style.cursor = `url(${cameraCursorUrl}), auto`;
    // Create these as late as possible, so changes to basemap layers are used
    roadLayerHelpers = getRoadLayerHelpers();
    for (let helper of roadLayerHelpers) {
      helper.setProperty($map, "line-color", colors.streetview);
    }
  }

  export function disableStreetView() {
    isInactive = true;
    $map.off("click", handleMapClickEvent);
    $map.getCanvas().style.cursor = "inherit";
    for (let helper of roadLayerHelpers) {
      helper.returnToDefaultPaintValues($map);
    }
  }
</script>

{#if displayEnableButton}
  {#if isInactive}
    <SecondaryButton on:click={enableStreetView}>
      Enable Street View
    </SecondaryButton>
  {:else}
    <SecondaryButton on:click={disableStreetView}>
      Disable Street View
    </SecondaryButton>
  {/if}
{/if}
{#if !isInactive}{/if}
