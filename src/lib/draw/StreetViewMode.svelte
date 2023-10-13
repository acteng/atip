<script lang="ts">
  import { colors } from "colors";
  import { DefaultButton } from "lib/govuk";
  import { getRoadLayerHelpers, LayerHelper } from "lib/maplibre";
  import type { MapMouseEvent } from "maplibre-gl";
  import { map, mode, userSettings } from "stores";
  import { onDestroy, onMount } from "svelte";
  import cameraCursorUrl from "../../../assets/camera_cursor.svg?url";

  let roadLayerHelpers: LayerHelper[] = [];

  onMount(() => {
    $map.on("click", onClick);
    $map.getCanvas().style.cursor = `url(${cameraCursorUrl}), auto`;
    // Create these as late as possible, so changes to basemap layers are used
    roadLayerHelpers = getRoadLayerHelpers();
    for (let helper of roadLayerHelpers) {
      helper.setProperty($map, "line-color", colors.streetview);
    }
  });
  onDestroy(() => {
    $map.off("click", onClick);
    $map.getCanvas().style.cursor = "inherit";
    for (let helper of roadLayerHelpers) {
      helper.returnToDefaultPaintValues($map);
    }
  });

  function onClick(e: MapMouseEvent) {
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
</script>

<DefaultButton on:click={() => mode.set({ mode: "list" })}>
  Finish
</DefaultButton>
