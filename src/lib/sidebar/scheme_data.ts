import length from "@turf/length";
import type { FeatureUnion, PipelineScheme, Schema, SchemeCollection, SchemeData } from "types";
import { v4 as uuidv4 } from "uuid";

// TODO This should eventually guarantee the output is a valid Scheme. Only
// some fixes are applied now.
export function backfill(json: SchemeCollection) {
  let idCounter = 1;
  for (let f of json.features) {
    // Fix input from other tools where properties may be null
    f.properties ||= {
      name: "",
      description: "",
      intervention_type: "other",
      is_coverage_polygon: false,
    };

    // Look for any LineStrings without length_meters. Old route-snapper versions didn't fill this out.
    if (f.geometry.type == "LineString" && !f.properties.length_meters) {
      f.properties.length_meters = length(f, { units: "kilometers" }) * 1000.0;
    }

    // Always overwrite IDs, and follow what newFeatureId requires.
    f.id = idCounter++;
  }
  const uuid = uuidv4();
  json.schemes = json.schemes || {
    uuid: getEmptySchemeData(uuid),
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
  // Only worry about some schemas for now.
  if (schema != "v1" && schema != "pipeline") {
    return null;
  }

  if (!feature.properties.name) {
    return "No name";
  }
  // Blank description is fine

  if (
    !new Set(["route", "area", "crossing", "other"]).has(
      feature.properties.intervention_type
    )
  ) {
    return "No intervention type";
  }

  let unexpectedProperties = getUnexpectedProperties(
    feature.properties,
    schema
  );
  if (Object.entries(unexpectedProperties).length > 0) {
    return `Extra GeoJSON properties: ${Object.keys(unexpectedProperties).join(
      ", "
    )}`;
  }

  return null;
}

// Returns a copy of the input, with expected properties removed. Only
// unexpected ones remain.
export function getUnexpectedProperties(
  props: { [name: string]: any },
  schema: Schema
): {
  [name: string]: any;
} {
  let copy = JSON.parse(JSON.stringify(props));

  // For all schemas
  for (let key of [
    "name",
    "description",
    "intervention_type",
    "length_meters",
    "waypoints",
    "hide_while_editing",
    "is_coverage_polygon",
  ]) {
    delete copy[key];
  }

  if (schema == "pipeline" && copy.pipeline) {
    for (let key of ["atf4_type", "accuracy", "is_alternative"]) {
      delete copy.pipeline[key];
    }
    if (Object.entries(copy.pipeline).length == 0) {
      delete copy.pipeline;
    }
  }

  return copy;
}

export function getFirstSchemeOrEmptyScheme(schemeCollection: SchemeCollection): SchemeData {
  if (schemeCollection.schemes != undefined) {
    const schemeReferences = Object.keys(schemeCollection.schemes);
    if (schemeReferences.length > 0) {
      return schemeCollection.schemes[schemeReferences[0]];
    }
  }
  return getEmptySchemeData(uuidv4());
}

function getEmptySchemeData(reference: string, name?: string): SchemeData {
  return {
    scheme_name: name || "Unnamed Scheme",
    scheme_reference: reference,
  }
}

function getEmptyPipelineObject(): PipelineScheme {
  return {
    scheme_type: "",
    scheme_description: "",
    atf4_lead_type: "",
    status: "",
    timescale: "",
    funding_source: "",
    funded: false,
  }
}