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

  // TODO Combo em, also with a title?
  $: urlBase = {
    NOx_viridis: "aq_amb_2021",
    NOxRoads_viridis: "aq_amb_2022",
    PM25_viridis: "aq_amb_2021",
    PM25Roads_viridis: "aq_amb_2022",
    PM10_viridis: "aq_amb_2021",
    PM10Roads_viridis: "aq_amb_2022",
  }[pollutant];
  $: yearLayer = {
    NOx_viridis: "21",
    NOxRoads_viridis: "22",
    PM25_viridis: "20",
    PM25Roads_viridis: "14",
    PM10_viridis: "21",
    PM10Roads_viridis: "21",
  }[pollutant];

  function tilesUrl(pollutant: string): string {
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
    return `https://ukair.maps.rcdo.co.uk/ukairserver/services/${urlBase}/${pollutant}/MapServer/WMSServer?bbox={bbox-epsg-3857}&${params}`;
  }

  // TODO Refactor
  function legendUrl(pollutant: string): string {
    let params = new URLSearchParams({
      request: "GetLegendGraphic",
      version: "1.3.0",
      format: "image/png",
      // Not plural here
      layer: yearLayer,
    }).toString();
    return `https://ukair.maps.rcdo.co.uk/ukairserver/services/${urlBase}/${pollutant}/MapServer/WMSServer?${params}`;
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
      ["NOx_viridis", "Background NOx (Oxides of nitrogen)"],
      ["NOxRoads_viridis", "Roadside NOx (Oxides of nitrogen)"],
      ["PM25_viridis", "Background PM2.5 (Particulate matter < 2.5 microns)"],
      [
        "PM25Roads_viridis",
        "Roadside PM2.5 (Particulate matter < 2.5 microns)",
      ],
      ["PM10_viridis", "Background PM10 (Particulate matter < 10 microns)"],
      ["PM10Roads_viridis", "Roadside PM10 (Particulate matter < 10 microns)"],
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
