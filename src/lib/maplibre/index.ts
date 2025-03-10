import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
import { layerId as libraryLayerId } from "scheme-sketcher-lib/maplibre";
import { layerZorder } from "./zorder";

export { getRoadLayerNames } from "./highlight_roads";
export { getStyleChoices, getStyleSpecification } from "./styles";
// TODO Syntax to do both isn't working?
export { layerZorder } from "./zorder";

export {
  isPolygon,
  isLine,
  isPoint,
  emptyGeojson,
  constructMatchExpression,
  bbox,
  addLineStringEndpoints,
} from "scheme-sketcher-lib/maplibre";

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

// Wrap the scheme-sketcher-lib version by declaring the fixed config here
export function layerId(layerId: string): {
  id: string;
  beforeId: string | undefined;
} {
  let cfg = { layerZorder: layerZorder };
  return libraryLayerId(cfg, layerId);
}
