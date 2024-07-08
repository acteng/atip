import type {
  DataDrivenPropertyValueSpecification,
  ExpressionSpecification,
} from "maplibre-gl";

export { getRoadLayerNames } from "./highlight_roads";
export { getStyleChoices, getStyleSpecification } from "./styles";
export { setupZorder } from "./zorder";

export {
  isPolygon,
  isLine,
  isPoint,
  emptyGeojson,
  constructMatchExpression,
  bbox,
  addLineStringEndpoints,
  layerId,
} from "scheme-sketcher-lib/maplibre";

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

export function prettyPrintMeters(x: number): string {
  if (x < 1000.0) {
    return Math.round(x) + " m";
  }
  return (x / 1000.0).toFixed(1) + "km";
}
