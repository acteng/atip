<script lang="ts">
  import type { MapMouseEvent } from "maplibre-gl";
  import cameraCursorUrl from "../../../assets/camera_cursor.svg?url";
  import { map, userSettings } from "../../stores";
  import { Radio } from "../govuk";
  import SecondaryButton from "../govuk/SecondaryButton.svelte";
  import { getRoadLayerHelpers, type LayerHelper } from "../maplibre";
  import CollapsibleCard from "./CollapsibleCard.svelte";

  export let displayEnableButton: boolean = false;
  export let escapeKeyExits: boolean = false;
  const roadLayerHelpers: Array<LayerHelper> = getRoadLayerHelpers();
  export let isInactive: boolean;

  export const handleMapClickEvent = (e: MapMouseEvent) => {
    if (!isInactive) {
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
  };

  export function enableStreetView() {
    isInactive = false;
    $map.on("click", handleMapClickEvent);
    const cursorStyle = `url(${cameraCursorUrl}), auto`;
    console.log(cursorStyle);
    $map.getCanvas().style.cursor = cursorStyle;
    roadLayerHelpers.forEach((roadLayerHelper) => {
      roadLayerHelper.setProperty($map, "line-color", "blue");
    });
  }

  export function disableStreetView() {
    isInactive = true;
    $map.off("click", handleMapClickEvent);
    $map.getCanvas().style.cursor = "inherit";
    roadLayerHelpers.forEach((roadLayerHelper) => {
      roadLayerHelper.returnToDefaultPaintValues($map);
    });
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

      {#if escapeKeyExits}
        <li>
          Press <b>Escape</b>
          to exit this mode
        </li>
      {/if}
      <li>
        Cursor by <a
          href="https://icon-icons.com/icon/screenshot-cursor-camera/100181"
        >
          Luc Chaissac
        </a>
      </li>
    </ul>
  </CollapsibleCard>
{/if}
