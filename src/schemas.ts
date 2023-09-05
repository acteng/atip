import { constructMatchExpression } from "lib/maplibre";
import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
import { colors } from "./colors";
import type { Schema } from "./types";

export function schemaTitle(schema: Schema): string {
  return {
    v1: "Scheme Design",
    v2: "Experimental Scheme Design",
    planning: "Development Planning",
    criticals: "Critical Issues",
    atf4: "ATF4 Scheme",
  }[schema];
}

// The singular form of the object (with the article) managed by this schema
export function schemaSingularNoun(schema: Schema): string {
  return {
    v1: "an intervention",
    v2: "an intervention",
    planning: "a development",
    criticals: "a critical issue",
    atf4: "an intervention",
  }[schema];
}

// The plural form of the object managed by this schema
export function schemaPluralNoun(schema: Schema): string {
  return {
    v1: "interventions",
    v2: "interventions",
    planning: "developments",
    criticals: "critical issues",
    atf4: "interventions",
  }[schema];
}

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
