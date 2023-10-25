<script lang="ts">
  import { ExternalLink, HelpButton } from "lib/common";
  import { Checkbox, Select } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import { RasterLayer, RasterTileSource } from "svelte-maplibre";
  import OsOglLicense from "../OsOglLicense.svelte";

  let show = false;
  let opacity = 50;
  let pollutant = "PM25_viridis";

  // TODO Corrected for natural sources or not?

  // URLs and layers found from https://uk-air.defra.gov.uk/data/wms-services
  $: info = {
    NOx_viridis: ["aq_amb_2021", "21"],
    PM25_viridis: ["aq_amb_2021", "20"],
    PM10_viridis: ["aq_amb_2021", "21"],
    NOxRoads_viridis: ["aq_amb_2022", "22"],
    PM25Roads_viridis: ["aq_amb_2022", "14"],
    PM10Roads_viridis: ["aq_amb_2022", "21"],
  }[pollutant];
  $: wmsUrl = `https://ukair.maps.rcdo.co.uk/ukairserver/services/${info[0]}/${pollutant}/MapServer/WMSServer`;
  $: yearLayer = info[1];

  function tilesUrl(wmsUrl: string): string {
    let params = new URLSearchParams({
      request: "GetMap",
      version: "1.3.0",
      format: "image/png",
      crs: "EPSG:3857",
      width: "256",
      height: "256",
      styles: "",
      layers: yearLayer,
    }).toString();
    // Don't escape the {} in the bbox, so specify it manually below
    return `${wmsUrl}?bbox={bbox-epsg-3857}&${params}`;
  }

  function legendUrl(wmsUrl: string): string {
    let params = new URLSearchParams({
      request: "GetLegendGraphic",
      version: "1.3.0",
      format: "image/png",
      // Not plural here
      layer: yearLayer,
    }).toString();
    return `${wmsUrl}?${params}`;
  }
</script>

<Checkbox id="pollution" bind:checked={show}>
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
      ["PM25_viridis", "Background PM2.5"],
      ["PM10_viridis", "Background PM10"],
      ["NOx_viridis", "Background NOx"],
      [
        "PM25Roads_viridis",
        "Roadside PM2.5"
      ],
      ["PM10Roads_viridis", "Roadside PM10"],
      ["NOxRoads_viridis", "Roadside NOx"],
    ]}
    bind:value={pollutant}
  />
  <p>Data for <b>{yearLayer}</b></p>

  <div>
    <label>
      Opacity
      <input type="range" min="0" max="100" bind:value={opacity} />
    </label>
  </div>

  <img src={legendUrl(wmsUrl)} width={150} alt={`Legend for ${pollutant} layer`} />
{/if}

<RasterTileSource tiles={[tilesUrl(wmsUrl)]} tileSize={256}>
  <RasterLayer
    {...layerId("pollution")}
    paint={{
      "raster-opacity": opacity / 100.0,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  />
</RasterTileSource>
