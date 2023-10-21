<script lang="ts">
  import { ExternalLink, HelpButton, Popup } from "lib/common";
  import { Select, Checkbox } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import { map } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { RasterTileSource } from "maplibre-gl";
  import OsOglLicense from "../OsOglLicense.svelte";

  let source = "pollution";

  let show = false;

  let pollutant = "PM25_viridis";

  function url(): string {
    let params = new URLSearchParams({
      request: "GetMap",
      version: "1.3.0",
      format: "image/png",
      crs: "EPSG:3857",
      width: "256",
      height: "256",
      styles: "",
      layers: {
        // The year
        "NOx_viridis": "21",
        // Still the year, but off by one
        "PM25_viridis": "20",
        // The year
        "PM10_viridis": "21",
      }[pollutant],
    }).toString();
    // Don't escape the {} in the bbox, so specify it manually below
    return `https://ukair.maps.rcdo.co.uk/ukairserver/services/aq_amb_2021/${pollutant}/MapServer/WMSServer?bbox={bbox-epsg-3857}&${params}`;
  }

  // legend
  //"https://ukair.maps.rcdo.co.uk/ukairserver/services/aq_amb_2021/NOx_viridis/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=21"

  // TODO Upstream something nicer in svelte-maplibre
  onMount(() => {
    $map.addSource(source, {
      type: "raster",
      tiles: [url()],
      tileSize: 256,
    });
    $map.addLayer({
      id: "pollution-layer",
      type: "raster",
      source,
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
    $map?.removeSource(source);
  });

  $: $map.setLayoutProperty(
    "pollution-layer",
    "visibility",
    show ? "visible" : "none"
  );

  $: {
    if (pollutant) {
      //window.x = $map.getSource(source);
      //window.alert(pollutant);
      let x = $map.getSource(source);
      if (x) {
        (x as RasterTileSource).setTiles([url()]);
      }
    }
  }
</script>

<Checkbox id={source} bind:checked={show}>
  Pollution
  <span slot="right">
    <HelpButton>
      <p>TODO</p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

{#if show}
  <Select
    label="Pollutant"
    id="pollutant"
    choices={[
      ["NOx_viridis", "NO2 (Nitrogen dioxide)"],
      ["PM25_viridis", "PM2.5 (Particulate matter < 2.5 microns)"],
      ["PM10_viridis", "PM10 (Particulate matter < 10 microns)"],
    ]}
    bind:value={pollutant}
  />
{/if}
