import { constructMatchExpression } from "lib/maplibre";
import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
import { colors } from "./colors";
import type { Schema } from "./types";

export function colorInterventionsBySchema(
  schema: Schema
): DataDrivenPropertyValueSpecification<string> {
  return constructMatchExpression(
    ["get", "intervention_type"],
    {
      area: colors.area,
      route: colors.route,
      crossing: colors.crossing,
      other: colors.other,
    },
    // The fallback white should never be used in practice
    "white"
  );
}

// Produce input for the Legend component
export function schemaLegend(schema: Schema): [string, string][] {
  return [
    ["Areas", colors.area],
    ["Routes", colors.route],
    ["Crossings", colors.crossing],
    ["Other", colors.other],
  ];
}
