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
  FilterSpecification,
  LayerSpecification,
  Map,
  StyleSpecification,
} from "maplibre-gl";

// Some methods take optional params. It's an error to pass in null or undefined, so use default values from
// https://github.com/maplibre/maplibre-style-spec/blob/main/src/reference/v8.json.
const defaultColor = "#000000";
const defaultFilter = true;
const defaultOpacity = 1;

export const isPolygon: FilterSpecification = ["==", "$type", "Polygon"];
export const isLine: FilterSpecification = ["==", "$type", "LineString"];
export const isPoint: FilterSpecification = ["==", "$type", "Point"];

// This sets up a GeoJSON source. MapLibre's API isn't idempotent; you can't
// overwrite an existing source or layer. This complicates Vite's hot-reload
// feature, unless every component correctly tears down all sources and layers.
// These methods workaround that lifetime management hassle by overwriting if
// necessary. The data can be GeoJSON or a URL to a GeoJSON file.
export function overwriteSource(map: Map, id: string, data: GeoJSON | string) {
  cleanupSource(map, id);
  map.addSource(id, {
    type: "geojson",
    data,
  });
}

export function cleanupSource(map: Map, id: string) {
  if (map.getSource(id)) {
    // First remove all layers using this source
    let layers = [];
    for (let layer of map.getStyle().layers) {
      if ("source" in layer && layer.source == id) {
        layers.push(layer.id);
      }
    }
    for (let layer of layers) {
      map.removeLayer(layer);
    }

    map.removeSource(id);
  }
}

// This is an internal helper used by specialized functions for drawing
// circles, lines, and polygons. The layer.id here MUST be present in
// layerZorder.
// TODO It's exported for the LaneDetails Layer helper. Reconsider.
export function overwriteLayer(
  map: Map,
  layer: LayerSpecification & { source: string }
) {
  if (map.getLayer(layer.id)) {
    map.removeLayer(layer.id);
  }

  // layerZorder lists all layers in the desired z-order. map.addLayer takes an
  // optional beforeId, placing the new layer beneath this beforeId. Due to
  // hot-module reloading and Svelte component initialization being
  // unpredictable, we might call overwriteLayer in any order, so use beforeId
  // to guarantee we wind up in the correct order.
  //
  // Find the last layer currently in the map that should be on top of this new
  // layer.
  let beforeId;
  let found = false;
  for (let i = layerZorder.length - 1; i >= 0; i--) {
    let id = layerZorder[i];
    if (id == layer.id) {
      found = true;
      break;
    }
    if (map.getLayer(id)) {
      beforeId = id;
    }
  }
  // When adding a new layer somewhere, force the programmer to decide where it
  // should be z-ordered.
  if (!found) {
    throw new Error(`Layer ID ${layer.id} not defined in layerZorder`);
  }
  // If beforeId isn't set, we'll add the layer on top of everything else.

  map.addLayer(layer, beforeId);
}

export function overwritePolygonLayer(
  map: Map,
  params: {
    id: string;
    source: string;
    filter?: FilterSpecification;
    // For vector (non GeoJSON) sources
    sourceLayer?: string;
    color: DataDrivenPropertyValueSpecification<string>;
    opacity: DataDrivenPropertyValueSpecification<number>;
  }
) {
  let layerSpec: LayerSpecification & { source: string } = {
    id: params.id,
    source: params.source,
    filter: params.filter ?? defaultFilter,
    type: "fill",
    paint: {
      "fill-color": params.color,
      "fill-opacity": params.opacity,
    },
  };
  if (params.sourceLayer) {
    layerSpec["source-layer"] = params.sourceLayer;
  }
  overwriteLayer(map, layerSpec);
}

export function overwriteCircleLayer(
  map: Map,
  params: {
    id: string;
    source: string;
    filter?: FilterSpecification;
    // For vector (non GeoJSON) sources
    sourceLayer?: string;
    color?: DataDrivenPropertyValueSpecification<string>;
    radius: DataDrivenPropertyValueSpecification<number>;
    opacity?: DataDrivenPropertyValueSpecification<number>;
    strokeColor?: DataDrivenPropertyValueSpecification<string>;
    strokeWidth?: DataDrivenPropertyValueSpecification<number>;
  }
) {
  let layerSpec: LayerSpecification & { source: string } = {
    id: params.id,
    source: params.source,
    filter: params.filter ?? defaultFilter,
    type: "circle",
    paint: {
      "circle-radius": params.radius,
      "circle-color": params.color ?? defaultColor,
      "circle-opacity": params.opacity ?? defaultOpacity,
      "circle-stroke-color": params.strokeColor ?? defaultColor,
      "circle-stroke-width": params.strokeWidth ?? 0,
    },
  };
  if (params.sourceLayer) {
    layerSpec["source-layer"] = params.sourceLayer;
  }
  overwriteLayer(map, layerSpec);
}

export function overwriteLineLayer(
  map: Map,
  params: {
    id: string;
    source: string;
    filter?: FilterSpecification;
    // For vector (non GeoJSON) sources
    sourceLayer?: string;
    color: DataDrivenPropertyValueSpecification<string>;
    width: DataDrivenPropertyValueSpecification<number>;
    opacity?: DataDrivenPropertyValueSpecification<number>;
  }
) {
  let layerSpec: LayerSpecification & { source: string } = {
    id: params.id,
    source: params.source,
    filter: params.filter ?? defaultFilter,
    type: "line",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": params.color,
      "line-width": params.width,
      "line-opacity": params.opacity ?? defaultOpacity,
    },
  };
  if (params.sourceLayer) {
    layerSpec["source-layer"] = params.sourceLayer;
  }
  overwriteLayer(map, layerSpec);
}

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

// Returns hoveredValue when the feature is hovered on, and defaultValue
// otherwise. Use with InteractiveLayer.
export function hoveredToggle<Type>(
  hoveredValue: Type,
  defaultValue: Type
): DataDrivenPropertyValueSpecification<Type> {
  return [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    hoveredValue,
    defaultValue,
  ] as DataDrivenPropertyValueSpecification<Type>;
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

// Properties are guaranteed to exist
export type FeatureWithProps<G extends Geometry> = Feature<G> & {
  properties: { [name: string]: any };
};

// All layer IDs used with overwriteLayer must be defined here, with later
// entries drawn on top.
const layerZorder = [
  // Display optional layers in the browse page below interventions. Start with
  // polygons that cover most of the map.
  "parliamentary_constituencies",
  "parliamentary_constituencies-outline",
  "wards",
  "wards-outline",
  "combined_authorities",
  "combined_authorities-outline",
  "local_authority_districts",
  "local_authority_districts-outline",
  "local_planning_authorities",
  "local_planning_authorities-outline",
  "census_output_areas",
  "census_output_areas-outline",
  "imd",
  "imd-outline",
  // Then smaller optional layers on top
  "schools",
  "hospitals",
  "sports_spaces",
  "mrn",
  "bus_routes",
  "railway_stations",
  "cycle_parking",
  "crossings",
  "cycle_paths",
  "vehicle_counts",
  "pct_commute",
  "pct_school",
  "road_widths",
  "road_speeds",

  // Polygons are bigger than lines, which're bigger than points. When geometry
  // overlaps, put the smaller thing on top
  "interventions-polygons",
  "interventions-polygon-outlines",
  // This is an outline, so draw on top
  "hover-polygons",

  // The hover effect thickens, so draw beneath
  "hover-lines",
  "interventions-lines",
  "interventions-lines-endpoints",

  "hover-points",
  "interventions-points",

  // Criticals are one layer that should display on top of scheme data
  "criticals-clusters",
  "criticals-counts",
  "criticals-points",

  "edit-polygon-fill",
  "edit-polygon-lines",
  "edit-polygon-vertices",

  "draw-split-route",

  "draw-street-view",

  "route-points",
  "route-lines",
  "route-polygons",

  // Draw most things beneath text road labels. These IDs come from the
  // MapTiler basemap, and there are different ones for each basemap. Note for
  // OS raster basemaps, we draw everything on top of the rasters.
  "road_label",
  "Road labels",

  // Draw the inverted boundary fade on top of basemap labels
  "boundary",
  "measurement-line",
];
