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
import type {
  DataDrivenPropertyValueSpecification,
  FilterSpecification,
  LayerSpecification,
  Map,
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

// Like overwriteSource, but for PMTiles data hosted at a URL.
export function overwritePmtilesSource(map: Map, id: string, url: string) {
  cleanupSource(map, id);
  map.addSource(id, {
    type: "vector",
    url: `pmtiles://${url}`,
  });
}

function cleanupSource(map: Map, id: string) {
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

// Properties are guaranteed to exist
export type FeatureWithProps<G extends Geometry> = Feature<G> & {
  properties: { [name: string]: any };
};

// All layer IDs used with overwriteLayer must be defined here, with later
// entries drawn on top.
const layerZorder = [
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

  "edit-polygon-fill",
  "edit-polygon-lines",
  "edit-polygon-vertices",

  "draw-split-route",

  "draw-street-view",

  "speed-limits",

  "lane-polygons-layer",
  "intersection-polygons-layer",
  "lane-markings-layer",
  "intersection-markings-layer",

  // When editing a route, draw it over contextual layers like speed limits
  "route-points",
  "route-lines",
  "route-polygons",

  // Display optional layers on top of interventions
  "schools",
  "hospitals",
  "mrn",
  "parliamentary_constituencies",
  "parliamentary_constituencies-outline",
  "wards",
  "wards-outline",
  "combined_authorities",
  "combined_authorities-outline",
  "local_authority_districts",
  "local_authority_districts-outline",

  // Draw most things beneath text road labels. This is the only layer in this
  // list generated by the MapTiler basemap we use.
  "road_label",

  // Draw the inverted boundary fade on top of basemap labels
  "boundary",
];
