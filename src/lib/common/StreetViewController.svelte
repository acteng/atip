<script lang="ts">
  import { colors } from "colors";
  import { CollapsibleCard, ExternalLink } from "lib/common";
  import { Radio, SecondaryButton } from "lib/govuk";
  import { getRoadLayerHelpers } from "lib/maplibre";
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
{#if !isInactive}
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
    <ul>
      <li>
        <b>Click</b>
        on the map to open a new tab with a 3rd-party imagery provider
      </li>
      <li>
        Press <b>Escape</b>
        to exit this mode
      </li>
      <li>
        Cursor by <ExternalLink
          href="https://icon-icons.com/icon/screenshot-cursor-camera/100181"
        >
          Luc Chaissac
        </ExternalLink>
      </li>
    </ul>
  </CollapsibleCard>
{/if}
