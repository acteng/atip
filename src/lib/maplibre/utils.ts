// Helpers for https://maplibre.org/maplibre-gl-js-docs/style-spec/
import turfBbox from "@turf/bbox";
import type { FeatureCollection, GeoJSON } from "geojson";
import type {
  DataDrivenPropertyValueSpecification,
  ExpressionSpecification,
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

// Helper for https://maplibre.org/maplibre-style-spec/expressions/#match.
// Gets one feature property, uses a map to match a key to a value, and
// includes a fallback if no keys match.
export function constructMatchExpression<OutputType>(
  getter: any[],
  map: { [name: string]: OutputType },
  fallback: OutputType,
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
  colorScale: string[],
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

// Returns all the input features, additionally with a new point for every
// LineString endpoint, with an endpoint=true property. Note this drops any
// foreign members on the input, and that it reuses object references of the
// input for performance, rather than making a defensive deep copy.
export function addLineStringEndpoints(
  input: FeatureCollection,
): FeatureCollection {
  let output: FeatureCollection = {
    type: "FeatureCollection",
    features: [],
  };
  // Add points for the ends of every LineString
  for (let f of input.features) {
    output.features.push(f);

    if (f.geometry.type == "LineString" && !f.properties?.hide_while_editing) {
      for (let pt of [
        f.geometry.coordinates[0],
        f.geometry.coordinates[f.geometry.coordinates.length - 1],
      ]) {
        output.features.push({
          type: "Feature",
          properties: {
            endpoint: true,
            scheme_reference: f.properties?.scheme_reference,
          },
          geometry: {
            type: "Point",
            coordinates: pt,
          },
        });
      }
    }
  }
  return output;
}
