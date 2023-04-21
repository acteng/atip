// Helpers for https://maplibre.org/maplibre-gl-js-docs/style-spec/
import type {
  Map,
  DataDrivenPropertyValueSpecification,
  SourceSpecification,
} from "maplibre-gl";
import type { GeoJSON, FeatureCollection } from "geojson";
import turfBbox from "@turf/bbox";

const roundedLine = {
  "line-cap": "round",
  "line-join": "round",
};

export const isPolygon = ["==", "$type", "Polygon"];
export const isLine = ["==", "$type", "LineString"];
export const isPoint = ["==", "$type", "Point"];

export function drawLine(
  color: DataDrivenPropertyValueSpecification<string>,
  width: DataDrivenPropertyValueSpecification<number>,
  opacity: DataDrivenPropertyValueSpecification<number> = 1.0
) {
  return {
    type: "line",
    layout: roundedLine,
    paint: {
      "line-color": color,
      "line-width": width,
      "line-opacity": opacity,
    },
  };
}

export function drawPolygon(
  color: DataDrivenPropertyValueSpecification<string>,
  opacity: DataDrivenPropertyValueSpecification<number>
) {
  return {
    type: "fill",
    paint: {
      "fill-color": color,
      "fill-opacity": opacity,
    },
  };
}

export function drawCircle(
  color: DataDrivenPropertyValueSpecification<string>,
  radius: DataDrivenPropertyValueSpecification<number>,
  opacity: DataDrivenPropertyValueSpecification<number> = 1.0
) {
  return {
    type: "circle",
    paint: {
      "circle-radius": radius,
      "circle-color": color,
      "circle-opacity": opacity,
    },
  };
}

// MapLibre's API isn't idempotent; you can't overwrite an existing source or
// layer. This complicates Vite's hot-reload feature, unless every component
// correctly tears down all sources and layers. These methods workaround that
// lifetime management hassle by overwriting if necessary.
export function overwriteSource(
  map: Map,
  id: string,
  source: SourceSpecification
) {
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
  map.addSource(id, source);
}

export function overwriteLayer(
  map: Map,
  layer,
  beforeId: string | undefined = undefined
) {
  if (map.getLayer(layer.id)) {
    map.removeLayer(layer.id);
  }
  // If we want this layer to appear below another, and the other layer doesn't
  // exist yet, we don't need to do anything; it'll naturally be ordered
  // beneath.
  if (beforeId && !map.getLayer(beforeId)) {
    beforeId = undefined;
  }
  map.addLayer(layer, beforeId);
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
