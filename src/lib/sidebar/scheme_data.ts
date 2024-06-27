import length from "@turf/length";
import { randomSchemeColor } from "colors";
import { schema as schemaStore } from "stores";
import { get } from "svelte/store";
import type {
  FeatureUnion,
  FundingSources,
  PipelineScheme,
  SchemeCollection,
  SchemeData,
} from "types";
import { v4 as uuidv4 } from "uuid";

// TODO This should eventually guarantee the output is a valid Scheme. Only
// some fixes are applied now.
export function backfill(json: any): SchemeCollection {
  let schema = get(schemaStore);

  let idCounter = 1;
  for (let f of json.features) {
    // Fix input from other tools where properties may be null
    f.properties ||= {
      name: "",
      // We'll set this below when json.schemes is missing
      scheme_reference: "",
      description: "",
      intervention_type: "other",
      is_coverage_polygon: false,
    };

    // Set a default for this v1 property if it's missing and not exposed by a
    // form the user can edit.
    if (schema == "pipeline" && !f.properties.intervention_type) {
      // Guess based on geometry
      f.properties.intervention_type =
        new Map([
          ["LineString", "route"],
          ["Polygon", "area"],
        ]).get(f.geometry.type) ?? "other";
    }

    // Look for any LineStrings without length_meters. Old route-snapper versions didn't fill this out.
    if (f.geometry.type == "LineString" && !f.properties.length_meters) {
      f.properties.length_meters = length(f, { units: "kilometers" }) * 1000.0;
    }

    // Always overwrite IDs, and follow what newFeatureId requires.
    f.id = idCounter++;
  }

  if (!json.schemes) {
    // This file represents a single scheme, from before mid November 2023. Create a single scheme for it
    let scheme_reference = uuidv4();
    json.schemes = {};
    json.schemes[scheme_reference] = {
      scheme_reference,
      color: randomSchemeColor(),
    };

    // Move over the optional scheme_name from the old place
    if (json.scheme_name) {
      json.schemes[scheme_reference].scheme_name = json.scheme_name;
      delete json.scheme_name;
    }

    // Some pipeline files have been created; move over attributes.
    if (json.pipeline) {
      json.schemes[scheme_reference].pipeline = json.pipeline;
      delete json.pipeline;
    }

    // Set scheme_reference for all features
    for (let f of json.features) {
      f.properties.scheme_reference = scheme_reference;
    }
  }

  for (let x of Object.values(json.schemes)) {
    let scheme = x as any;
    // Ensure every scheme has some color
    scheme.color ??= randomSchemeColor();

    // Ensure pipeline defaults are set
    if (schema == "pipeline") {
      scheme.pipeline ??= emptyPipelineScheme();
      // Any changes to PipelineScheme after 21 November 2023 must be handled here

      scheme.pipeline.development_funded ??= false;
      scheme.pipeline.construction_funded ??= false;
      scheme.pipeline.funding_sources ??= emptyFundingSources();
      // Just delete old budget fields. It's not worth the effort to map these
      // over to the new fields, since these forms haven't likely been filled
      // out yet.
      delete scheme.pipeline.budget_funded;
      delete scheme.pipeline.budget_unfunded;
      delete scheme.pipeline.funding_source;
      delete scheme.pipeline.funded;

      // Backfill fields added 14 Feburary 2024
      for (let f of json.features) {
        if (f.properties.pipeline) {
          f.properties.pipeline.development_funded ??= false;
          f.properties.pipeline.construction_funded ??= false;
          f.properties.pipeline.funding_sources ??= emptyFundingSources();

          f.properties.pipeline.status ??= "";
          f.properties.pipeline.timescale ??= "";
        }
      }
    }
  }

  return json;
}

export function emptyCollection(): SchemeCollection {
  let gj = {
    type: "FeatureCollection" as const,
    features: [],
    schemes: {},
  };
  addEmptyScheme(gj);
  return gj;
}

export function addEmptyScheme(gj: SchemeCollection) {
  let scheme_reference = uuidv4();
  const newSchemes: { [reference: string]: SchemeData } = {};
  newSchemes[scheme_reference] = {
    scheme_reference,
    color: randomSchemeColor(),
  };

  // Here we rely on the fact the string keys are traversed in insertion order (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
  Object.keys(gj.schemes).forEach((schemeRef) => {
    newSchemes[schemeRef] = gj.schemes[schemeRef];
  });
  let schema = get(schemaStore);
  if (schema == "pipeline") {
    newSchemes[scheme_reference].pipeline = emptyPipelineScheme();
  }
  gj.schemes = newSchemes;
}

export function emptyPipelineScheme(): PipelineScheme {
  return {
    scheme_type: "",
    atf4_lead_type: "",
    scheme_description: "",
    status: "",
    timescale: "",
    development_funded: false,
    construction_funded: false,
    funding_sources: emptyFundingSources(),
  };
}

export function emptyFundingSources(): FundingSources {
  return {
    atf2: false,
    atf3: false,
    atf4: false,
    atf4e: false,
    crsts: false,
    luf: false,
    other: "",
  };
}

export function interventionName(feature: FeatureUnion): string {
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

export function interventionWarning(feature: FeatureUnion): string | null {
  let schema = get(schemaStore);

  if (!feature.properties.name) {
    return "No name";
  }
  // Blank description is fine

  if (
    !new Set(["route", "area", "crossing", "other"]).has(
      feature.properties.intervention_type,
    )
  ) {
    return "No intervention type";
  }

  if (schema == "pipeline") {
    if (!feature.properties.pipeline?.accuracy) {
      return "Accuracy not specified";
    }
  }

  let unexpectedProperties = getUnexpectedProperties(feature.properties);
  if (Object.entries(unexpectedProperties).length > 0) {
    return `Extra GeoJSON properties: ${Object.keys(unexpectedProperties).join(
      ", ",
    )}`;
  }

  return null;
}

// Returns a copy of the input, with expected properties removed. Only
// unexpected ones remain.
export function getUnexpectedProperties(props: { [name: string]: any }): {
  [name: string]: any;
} {
  let schema = get(schemaStore);
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
    "scheme_reference",
  ]) {
    delete copy[key];
  }

  if (schema == "pipeline" && copy.pipeline) {
    for (let key of [
      "atf4_type",
      "accuracy",
      "is_alternative",
      "budget",
      "development_funded",
      "construction_funded",
      "funding_sources",
      "status",
      "timescale",
      "timescale_year",
      "year_published",
      "year_consulted",
    ]) {
      delete copy.pipeline[key];
    }
    if (Object.entries(copy.pipeline).length == 0) {
      delete copy.pipeline;
    }
  }

  return copy;
}
