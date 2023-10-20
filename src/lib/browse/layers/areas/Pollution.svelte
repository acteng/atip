<script lang="ts">
  import { ExternalLink, HelpButton, Popup } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "pollution";

  let show = false;

  // legend
  //"https://ukair.maps.rcdo.co.uk/ukairserver/services/aq_amb_2021/NOx_viridis/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=21"

  onMount(() => {
    $map.addSource(name, {
      type: "raster",
      tiles: [
        "https://ukair.maps.rcdo.co.uk/ukairserver/services/aq_amb_2021/NOx_viridis/MapServer/WMSServer?request=GetMap&version=1.3.0&format=image/png&crs=EPSG:3857&width=256&height=256&styles=&bbox={bbox-epsg-3857}&layers=21",
      ],
      tileSize: 256,
    });
    $map.addLayer({
      id: "pollution-layer",
      type: "raster",
      source: name,
      paint: {
        "raster-opacity": 0.5,
      },
      layout: {
        visibility: "none",
      },
    });
  });
  onDestroy(() => {
    $map?.removeLayer("pollution-layer");
    $map?.removeSource(name);
  });

  $: $map.setLayoutProperty(
    "pollution-layer",
    "visibility",
    show ? "visible" : "none"
  );
</script>

<Checkbox id={name} bind:checked={show}>
  Pollution
  <span slot="right">
    <HelpButton>
      <p>TODO</p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>
