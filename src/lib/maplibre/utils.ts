// Helpers for https://maplibre.org/maplibre-gl-js-docs/style-spec/
import turfBbox from "@turf/bbox";
import type {
  Feature,
  FeatureCollection,
  GeoJSON,
  Geometry,
  Point,
  Position,
} from "geojson";
import { appVersion, privateResourceBaseUrl } from "lib/common";
import type {
  DataDrivenPropertyValueSpecification,
  ExpressionSpecification,
  StyleSpecification,
} from "maplibre-gl";

export const isPolygon: ExpressionSpecification = [
  "==",
  ["geometry-type"],
  "Polygon",
];
export const isLine: ExpressionSpecification = [
  "==",
  ["geometry-type"],
  "LineString",
];
export const isMultiLine: ExpressionSpecification = [
  "==",
  ["geometry-type"],
  "MultiLineString",
];
export const isPoint: ExpressionSpecification = [
  "==",
  ["geometry-type"],
  "Point",
];
export const isNotCoveragePolygon: ExpressionSpecification = [
  "!=",
  ["get", "is_coverage_polygon"],
  true,
];
export const isCoveragePolygon: ExpressionSpecification = [
  "==",
  ["get", "is_coverage_polygon"],
  true,
];

export function emptyGeojson(): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: [],
  };
}

export function pointFeature(pt: Position): FeatureWithProps<Point> {
  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Point",
      coordinates: setPrecision(pt),
    },
  };
}

// Per https://datatracker.ietf.org/doc/html/rfc7946#section-11.2, 6 decimal
// places (10cm) is plenty of precision
export function setPrecision(pt: Position): Position {
  return [Math.round(pt[0] * 10e6) / 10e6, Math.round(pt[1] * 10e6) / 10e6];
}

// Helper for https://maplibre.org/maplibre-style-spec/expressions/#match.
// Gets one feature property, uses a map to match a key to a value, and
// includes a fallback if no keys match.
export function constructMatchExpression<OutputType>(
  getter: any[],
  map: { [name: string]: OutputType },
  fallback: OutputType
): DataDrivenPropertyValueSpecification<OutputType> {
  let x: any[] = ["match", getter];
  for (let [key, value] of Object.entries(map)) {
    x.push(key);
    x.push(value);
  }
  x.push(fallback);
  return x as DataDrivenPropertyValueSpecification<OutputType>;
}

// Helper for https://maplibre.org/maplibre-style-spec/expressions/#step.
export function makeColorRamp(
  input: DataDrivenPropertyValueSpecification<number>,
  limits: number[],
  colorScale: string[]
): DataDrivenPropertyValueSpecification<string> {
  let step: any[] = ["step", input];
  for (let i = 1; i < limits.length; i++) {
    step.push(colorScale[i - 1]);
    step.push(limits[i]);
  }
  // Repeat the last color. The upper limit is exclusive, meaning a value
  // exactly equal to it will use this fallback. For things like percentages,
  // we want to set 100 as the cap.
  step.push(colorScale[colorScale.length - 1]);
  return step as DataDrivenPropertyValueSpecification<string>;
}

// Suitable for passing to map.fitBounds. Work around https://github.com/Turfjs/turf/issues/1807.
export function bbox(gj: GeoJSON): [number, number, number, number] {
  return turfBbox(gj) as [number, number, number, number];
}

export function prettyPrintMeters(x: number): string {
  if (x < 1000.0) {
    return Math.round(x) + " m";
  }
  return (x / 1000.0).toFixed(1) + "km";
}

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
  ]);
}

export async function getStyleSpecification(
  style: string
): Promise<string | StyleSpecification> {
  // MapTiler vector styles
  if (style == "streets" || style == "hybrid" || style == "dataviz") {
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

// Returns all the input features, additionally with a new point for every
// LineString endpoint, with an endpoint=true property.
export function addLineStringEndpoints(
  input: FeatureCollection
): FeatureCollection {
  let copy = JSON.parse(JSON.stringify(input));
  // Add points for the ends of every LineString
  let endpoints = [];
  for (let f of copy.features) {
    if (f.geometry.type == "LineString" && !f.properties.hide_while_editing) {
      for (let pt of [
        f.geometry.coordinates[0],
        f.geometry.coordinates[f.geometry.coordinates.length - 1],
      ]) {
        endpoints.push({
          type: "Feature",
          properties: {
            endpoint: true,
          },
          geometry: {
            type: "Point",
            coordinates: pt,
          },
        });
      }
    }
  }
  copy.features = copy.features.concat(endpoints);
  return copy;
}

// Properties are guaranteed to exist
export type FeatureWithProps<G extends Geometry> = Feature<G> & {
  properties: { [name: string]: any };
};
