import { constructMatchExpression } from "lib/maplibre";
import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
import { colors } from "./colors";
import type { Schema } from "./types";

export function colorInterventionsBySchema(
  schema: Schema
): DataDrivenPropertyValueSpecification<string> {
  if (schema == "planning") {
    return constructMatchExpression(
      ["get", "reference_type", ["get", "planning"]],
      {
        preapp: colors.preapp,
        outline: colors.outline,
        "reserved matters": colors["reserved matters"],
        "local plan": colors["local plan"],
      },
      // The fallback will be used until the user sets the reference_type
      "black"
    );
  }

  // All other schemas go by intervention type
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
  if (schema == "planning") {
    return [
      ["Preapp", colors.preapp],
      ["Outline", colors.outline],
      ["Reserved matters", colors["reserved matters"]],
      ["Local plan", colors["local plan"]],
    ];
  }
  return [
    ["Areas", colors.area],
    ["Routes", colors.route],
    ["Crossings", colors.crossing],
    ["Other", colors.other],
  ];
}
