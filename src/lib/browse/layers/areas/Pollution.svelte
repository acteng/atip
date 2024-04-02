<script lang="ts">
  import { ExternalLink, HelpButton } from "lib/common";
  import { Checkbox, Select } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import { RasterLayer, RasterTileSource } from "svelte-maplibre";
  import OsOglLicense from "../OsOglLicense.svelte";

  let show = false;
  let opacity = 50;
  let pollutant = "PM25_viridis";

  // URLs and layers found from https://uk-air.defra.gov.uk/data/wms-services
  // and QGIS
  $: info = {
    NOx_viridis: ["22", "Data for 2022"],
    PM25_viridis: ["21", "Data for 2022"],
    PM10_viridis: ["22", "Data for 2022"],
    NOxRoads_viridis: ["22", "Data for 2022"],
    PM25Roads_viridis: ["14", "Data for 2022"],
    PM10Roads_viridis: ["22", "Data for 2022"],
  }[pollutant];

  function wmsUrl(): string {
    return `https://ukair.maps.rcdo.co.uk/ukairserver/services/aq_amb_2022/${pollutant}/MapServer/WMSServer`;
  }

  function title(pollutant: string): string {
    return info![1];
  }

  function tilesUrl(pollutant: string): string {
    let params = new URLSearchParams({
      request: "GetMap",
      version: "1.3.0",
      format: "image/png",
      crs: "EPSG:3857",
      width: "256",
      height: "256",
      styles: "",
      layers: info![0],
    }).toString();
    // Don't escape the {} in the bbox, so specify it manually below
    return `${wmsUrl()}?bbox={bbox-epsg-3857}&${params}`;
  }

  function legendUrl(pollutant: string): string {
    let params = new URLSearchParams({
      request: "GetLegendGraphic",
      version: "1.3.0",
      format: "image/png",
      layer: info![0],
    }).toString();
    return `${wmsUrl()}?${params}`;
  }
</script>

<Checkbox bind:checked={show}>
  Pollution
  <span slot="right">
    <HelpButton>
      <p>
        Most layers show air quality data from <ExternalLink
          href="https://uk-air.defra.gov.uk/data/wms-services"
        >
          DEFRA
        </ExternalLink>. The measurements are annual means, in units of
        &micro;gm
        <sup>3</sup>
        . Note the particulate matter layers are not corrected for natural sources.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

{#if show}
  <Select
    label="Pollutant"
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
  <p>{title(pollutant)}</p>

  <div>
    <label>
      Opacity
      <input type="range" min="0" max="100" bind:value={opacity} />
    </label>
  </div>

  <img
    src={legendUrl(pollutant)}
    width={150}
    alt={`Legend for ${pollutant} layer`}
  />
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
