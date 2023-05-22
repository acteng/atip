// Helpers for https://maplibre.org/maplibre-gl-js-docs/style-spec/
import type {
  Map,
  DataDrivenPropertyValueSpecification,
  FilterSpecification,
} from "maplibre-gl";
import type { GeoJSON, FeatureCollection, Feature, Geometry } from "geojson";
import turfBbox from "@turf/bbox";

export const isPolygon: FilterSpecification = ["==", "$type", "Polygon"];
export const isLine: FilterSpecification = ["==", "$type", "LineString"];
export const isPoint: FilterSpecification = ["==", "$type", "Point"];

export function drawLine(
  color: DataDrivenPropertyValueSpecification<string>,
  width: DataDrivenPropertyValueSpecification<number>,
  opacity: DataDrivenPropertyValueSpecification<number> = 1.0
) {
  return {
    type: "line",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": color,
      "line-width": width,
      "line-opacity": opacity,
    },
  };
}

// This sets up a GeoJSON source. MapLibre's API isn't idempotent; you can't
// overwrite an existing source or layer. This complicates Vite's hot-reload
// feature, unless every component correctly tears down all sources and layers.
// These methods workaround that lifetime management hassle by overwriting if
// necessary.
export function overwriteSource(map: Map, id: string, data: GeoJSON) {
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
  map.addSource(id, {
    type: "geojson",
    data,
  });
}

// The layer.id here MUST be present in layerZorder.
export function overwriteLayer(map: Map, layer) {
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
    color: DataDrivenPropertyValueSpecification<string>;
    opacity: DataDrivenPropertyValueSpecification<number>;
  }
) {
  overwriteLayer(map, {
    id: params.id,
    source: params.source,
    filter: params.filter,
    type: "fill",
    paint: {
      "fill-color": params.color,
      "fill-opacity": params.opacity,
    },
  });
}

export function overwriteCircleLayer(
  map: Map,
  params: {
    id: string;
    source: string;
    filter?: FilterSpecification;
    color: DataDrivenPropertyValueSpecification<string>;
    radius: DataDrivenPropertyValueSpecification<number>;
    opacity?: DataDrivenPropertyValueSpecification<number>;
  }
) {
  overwriteLayer(map, {
    id: params.id,
    source: params.source,
    filter: params.filter,
    type: "circle",
    paint: {
      "circle-radius": params.radius,
      "circle-color": params.color,
      "circle-opacity": params.opacity || 1.0,
    },
  });
}

export function emptyGeojson(): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: [],
  };
}

// Suitable for passing to map.fitBounds. Work around https://github.com/Turfjs/turf/issues/1807.
export function bbox(gj: GeoJSON): [number, number, number, number] {
  return turfBbox(gj) as [number, number, number, number];
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
  // This is an outline, so draw on top
  "hover-polygons",

  // The hover effect thickens, so draw beneath
  "hover-lines",
  "interventions-lines",
  "interventions-lines-endpoints",

  "hover-points",
  "interventions-points",

  "edit-point-mode",

  "edit-polygon-fill",
  "edit-polygon-lines",
  "edit-polygon-vertices",

  "route-points",
  "route-lines",
  "route-polygons",

  "draw-split-route",

  "speed-limits",

  // Draw most things beneath text road labels. This is the only layer in this
  // list generated by the MapTiler basemap we use.
  "road_label",

  // Draw the inverted boundary fade on top of basemap labels
  "boundary",
];
