<script lang="ts">
  import { ExternalLink, HelpButton } from "lib/common";
  import { Checkbox, Select } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import { RasterLayer, RasterTileSource } from "svelte-maplibre";
  import OsOglLicense from "../OsOglLicense.svelte";

  let show = false;
  let opacity = 50;

  let pollutant = "PM25_viridis";

  function tilesUrl(pollutant: string): string {
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
        NOx_viridis: "21",
        // Still the year, but off by one
        PM25_viridis: "20",
        // The year
        PM10_viridis: "21",
      }[pollutant],
    }).toString();
    // Don't escape the {} in the bbox, so specify it manually below
    return `https://ukair.maps.rcdo.co.uk/ukairserver/services/aq_amb_2021/${pollutant}/MapServer/WMSServer?bbox={bbox-epsg-3857}&${params}`;
  }

  // TODO Refactor
  function legendUrl(pollutant: string): string {
    let params = new URLSearchParams({
      request: "GetLegendGraphic",
      version: "1.3.0",
      format: "image/png",
      // Not plural here
      layer: {
        // The year
        NOx_viridis: "21",
        // Still the year, but off by one
        PM25_viridis: "20",
        // The year
        PM10_viridis: "21",
      }[pollutant],
    }).toString();
    return `https://ukair.maps.rcdo.co.uk/ukairserver/services/aq_amb_2021/${pollutant}/MapServer/WMSServer?${params}`;
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
      ["NOx_viridis", "NO2 (Nitrogen dioxide)"],
      ["PM25_viridis", "PM2.5 (Particulate matter < 2.5 microns)"],
      ["PM10_viridis", "PM10 (Particulate matter < 10 microns)"],
    ]}
    bind:value={pollutant}
  />

  <div>
    <label>
      Opacity
      <input type="range" min="0" max="100" bind:value={opacity} />
    </label>
  </div>

  <img src={legendUrl(pollutant)} />
{/if}

<RasterTileSource tiles={[tilesUrl(pollutant)]} tileSize={256}>
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
