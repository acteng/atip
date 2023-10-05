import length from "@turf/length";
import type { FeatureUnion, Schema, Scheme } from "types";

// TODO This should eventually guarantee the output is a valid Scheme. Only
// some fixes are applied now.
export function backfill(json: Scheme) {
  let idCounter = 1;
  for (let f of json.features) {
    // Fix input from other tools where properties may be null
    f.properties ||= {
      name: "",
      description: "",
      intervention_type: "other",
    };

    // Look for any LineStrings without length_meters. Old route-snapper versions didn't fill this out.
    if (f.geometry.type == "LineString" && !f.properties.length_meters) {
      f.properties.length_meters = length(f, { units: "kilometers" }) * 1000.0;
    }

    // Always overwrite IDs, and follow what newFeatureId requires.
    f.id = idCounter++;
  }

  return json;
}

export function interventionName(
  schema: Schema,
  feature: FeatureUnion
): string {
  if (schema == "planning") {
    return feature.properties.planning?.name || "Untitled polygon";
  }
  if (schema == "v2") {
    // TODO Revisit auto-generated enum types
    return (
      // @ts-ignore
      feature.properties.v2?.Route?.name ||
      // @ts-ignore
      feature.properties.v2?.Crossing?.name ||
      "Untitled intervention"
    );
  }
  if (schema == "atf4") {
    return feature.properties.atf4?.name || "Untitled intervention";
  }

  if (feature.properties.name) {
    return feature.properties.name;
  }
  var noun: string = feature.properties.intervention_type;
  if (noun == "other") {
    if (feature.geometry.type == "Point") {
      noun = "point";
    } else if (feature.geometry.type == "LineString") {
      noun = "line";
    } else {
      noun = "polygon";
    }
  }
  return `Untitled ${noun}`;
}

export function interventionWarning(
  schema: Schema,
  feature: FeatureUnion
): string | null {
  if (schema != "v1") {
    return null;
  }
  if (!feature.properties.name) {
    return "No name";
  }

  return null;
}
