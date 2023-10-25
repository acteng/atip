<script lang="ts">
  import { ExternalLink, HelpButton } from "lib/common";
  import { Checkbox, Select } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import { RasterLayer, RasterTileSource } from "svelte-maplibre";
  import OsOglLicense from "../OsOglLicense.svelte";

  let show = false;
  let opacity = 50;
  let pollutant = "PM25_viridis";

  // URLs and layers found from https://uk-air.defra.gov.uk/data/wms-services and QGIS
  $: info = {
    NOx_viridis: ["aq_amb_2022", "22", "2022"],
    PM25_viridis: ["aq_amb_2022", "21", "2022"], // TODO really?
    PM10_viridis: ["aq_amb_2022", "22", "2022"],
    NOxRoads_viridis: ["aq_amb_2022", "22", "2022"],
    PM25Roads_viridis: ["aq_amb_2022", "14", "2022"],
    PM10Roads_viridis: ["aq_amb_2022", "22", "2022"],
  }[pollutant];
  $: wmsUrl = `https://ukair.maps.rcdo.co.uk/ukairserver/services/${
    info![0]
  }/${pollutant}/MapServer/WMSServer`;

  function year(): string {
    return info![2];
  }

  function tilesUrl(wmsUrl: string): string {
    let params = new URLSearchParams({
      request: "GetMap",
      version: "1.3.0",
      format: "image/png",
      crs: "EPSG:3857",
      width: "256",
      height: "256",
      styles: "",
      layers: info![1],
    }).toString();
    // Don't escape the {} in the bbox, so specify it manually below
    return `${wmsUrl}?bbox={bbox-epsg-3857}&${params}`;
  }

  function legendUrl(wmsUrl: string): string {
    let params = new URLSearchParams({
      request: "GetLegendGraphic",
      version: "1.3.0",
      format: "image/png",
      layer: info![1],
    }).toString();
    return `${wmsUrl}?${params}`;
  }
</script>

<Checkbox id="pollution" bind:checked={show}>
  Pollution
  <span slot="right">
    <HelpButton>
      These layers show air quality data from <ExternalLink
        href="https://uk-air.defra.gov.uk/data/wms-services"
      >
        DEFRA
      </ExternalLink>. The measurements are annual means, in units of &micro;gm
      <sup>3</sup>
      . Note the particulate matter layers are not corrected for natural sources.
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
      ["PM25Roads_viridis", "Roadside PM2.5"],
      ["PM10Roads_viridis", "Roadside PM10"],
      ["NOxRoads_viridis", "Roadside NOx"],
    ]}
    bind:value={pollutant}
  />
  <p>
    Data for {year()}
  </p>

  <div>
    <label>
      Opacity
      <input type="range" min="0" max="100" bind:value={opacity} />
    </label>
  </div>

  <img
    src={legendUrl(wmsUrl)}
    width={150}
    alt={`Legend for ${pollutant} layer`}
  />
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
