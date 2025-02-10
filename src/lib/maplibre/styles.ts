import { appVersion, privateResourceBaseUrl } from "lib/common";
import type { StyleSpecification } from "maplibre-gl";
import { attribution as attributionStore, googleKeys } from "./attribution";

export function getStyleChoices(): [string, string][] {
  let choices: [string, string][] = [];

  if (appVersion() == "Private (development)") {
    choices = choices.concat([
      ["google", "Google satellite"],
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
    ["openstreetmap", "OpenStreetMap"],
  ]);
}

export async function getStyleSpecification(
  style: string,
): Promise<string | StyleSpecification> {
  googleKeys.set(null);

  // MapTiler vector styles
  if (
    style == "streets" ||
    style == "hybrid" ||
    style == "dataviz" ||
    style == "uk-openzoomstack-light" ||
    style == "openstreetmap"
  ) {
    // For backwards compatibility, map the old URL query parameter to the new URL
    let styleName = style == "streets" ? "streets-v2" : style;

    attributionStore.set("&copy; MapTiler &copy; OpenStreetMap contributors");
    return `https://api.maptiler.com/maps/${styleName}/style.json?key=${
      import.meta.env.VITE_MAPTILER_API_KEY
    }`;
  }

  let resp = await fetch(`${privateResourceBaseUrl()}/api_keys.json`);
  let apiKeys = await resp.json();

  let tiles;
  let attribution;

  if (style == "google") {
    let apiKey = apiKeys.google;
    let sessionKey = await getGoogleSessionKey(apiKey);

    tiles = `https://tile.googleapis.com/v1/2dtiles/{z}/{x}/{y}?session=${sessionKey}&key=${apiKey}`;
    attribution = "Google (attributions loading)";
    googleKeys.set([apiKey, sessionKey]);
  } else if (style == "bluesky") {
    // TODO Consider adding as an extra source underneath labels, or mixed with some opacity
    tiles = `https://ogc.apps.midgard.airbusds-cint.com/apgb/wmts/rest/apgb:AP-12CM5-GB-LATEST/default/EPSG-3857/EPSG:3857:{z}/{y}/{x}?GUID=${apiKeys.bluesky}&format=image/png&TRANSPARENT=FALSE,`;
    attribution = "Bluesky";
  } else {
    tiles = `https://api.os.uk/maps/raster/v1/zxy/${style}_3857/{z}/{x}/{y}.png?key=${apiKeys.ordnance_survey}`;
    attribution =
      "Contains OS data &copy; Crown copyright and database rights 2023";
  }
  attributionStore.set(attribution);

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

async function getGoogleSessionKey(apiKey: string): Promise<string> {
  // See https://developers.google.com/maps/documentation/tile/session_tokens
  // These expire two weeks after being requested, so unless somebody has a tab open longer than that without refreshing, we don't need to bother with re-fetching
  try {
    let resp = await fetch(
      `https://tile.googleapis.com/v1/createSession?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          mapType: "satellite",
          language: "en-GB",
          region: "GB",
        }),
      },
    );
    let json = await resp.json();
    if ("session" in json) {
      return json.session;
    }
    console.error(
      `Couldn't get Google tile session key: ${JSON.stringify(json)}`,
    );
    return "";
  } catch (err) {
    console.error(`Couldn't get Google tile session key: ${err}`);
    return "";
  }
}
