import { appVersion, privateResourceBaseUrl } from "lib/common";
import type { StyleSpecification } from "maplibre-gl";

export function getStyleChoices(): [string, string][] {
  let choices: [string, string][] = [];

  if (appVersion() == "Private (development)") {
    choices = choices.concat([
      ["Road", "OS Road"],
      ["Light", "OS Light"],
      ["Outdoor", "OS Outdoor"],
      ["bluesky", "Bluesky Satellite (12.5cm)"],
    ]);
  }
  return choices.concat([
    ["streets", "MapTiler Streets"],
    ["hybrid", "MapTiler Satellite"],
    ["dataviz", "MapTiler Dataviz"],
    ["uk-openzoomstack-light", "OS Open Zoomstack"],
  ]);
}

export async function getStyleSpecification(
  style: string,
): Promise<string | StyleSpecification> {
  // MapTiler vector styles
  if (
    style == "streets" ||
    style == "hybrid" ||
    style == "dataviz" ||
    style == "uk-openzoomstack-light"
  ) {
    return `https://api.maptiler.com/maps/${style}/style.json?key=${
      import.meta.env.VITE_MAPTILER_API_KEY
    }`;
  }

  let resp = await fetch(`${privateResourceBaseUrl()}/api_keys.json`);
  let apiKeys = await resp.json();

  let tiles;
  let attribution;
  if (style == "bluesky") {
    // TODO Consider adding as an extra source underneath labels, or mixed with some opacity
    tiles = `https://ogc.apps.midgard.airbusds-cint.com/apgb/wmts/rest/apgb:AP-12CM5-GB-LATEST/default/EPSG-3857/EPSG:3857:{z}/{y}/{x}?GUID=${apiKeys.bluesky}&format=image/png&TRANSPARENT=FALSE,`;
    attribution = "Bluesky";
  } else {
    tiles = `https://api.os.uk/maps/raster/v1/zxy/${style}_3857/{z}/{x}/{y}.png?key=${apiKeys.ordnance_survey}`;
    attribution =
      "Contains OS data &copy; Crown copyright and database rights 2023";
  }

  return {
    version: 8,
    sources: {
      "raster-tiles": {
        type: "raster",
        tiles: [tiles],
        tileSize: 256,
        attribution,
      },
    },
    layers: [
      {
        id: "raster-basemap",
        type: "raster",
        source: "raster-tiles",
      },
    ],
    // Raster basemaps don't include glyphs; use the MapTiler ones
    glyphs: `https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=${
      import.meta.env.VITE_MAPTILER_API_KEY
    }`,
  };
}
