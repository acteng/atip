import length from "@turf/length";
import { randomSchemeColor } from "colors";
import { schema as schemaStore } from "stores";
import { get } from "svelte/store";
import type { FeatureUnion, SchemeCollection, SchemeData } from "types";
import type { FeatureUnion, PipelineBudget, PipelineTimescale, SchemeCollection, SchemeData } from "types";
import { v4 as uuidv4 } from "uuid";

// TODO This should eventually guarantee the output is a valid Scheme. Only
// some fixes are applied now.
export function backfill(json: SchemeCollection) {
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
    // @ts-ignore handling old format
    if (json.scheme_name) {
      // @ts-ignore handling old format
      json.schemes[scheme_reference].scheme_name = json.scheme_name;
      // @ts-ignore handling old format
      delete json.scheme_name;
    }

    // Some pipeline files have been created; move over attributes.
    // @ts-ignore handling old format
    if (json.pipeline) {
      // @ts-ignore handling old format
      json.schemes[scheme_reference].pipeline = json.pipeline;
      // @ts-ignore handling old format
      delete json.pipeline;
    }

    // Set scheme_reference for all features
    for (let f of json.features) {
      f.properties.scheme_reference = scheme_reference;
    }
  }

  // Ensure every scheme has some color
  for (let scheme of Object.values(json.schemes)) {
    scheme.color ||= randomSchemeColor();
  }

  return json;
}

export function emptyCollection(): SchemeCollection {
  let scheme_reference = uuidv4();
  let schemes: { [reference: string]: SchemeData } = {};
  schemes[scheme_reference] = {
    scheme_reference,
    color: randomSchemeColor(),
  };
  return {
    type: "FeatureCollection",
    features: [],
    schemes,
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

  let unexpectedProperties = getUnexpectedProperties(feature.properties);
  if (Object.entries(unexpectedProperties).length > 0) {
    return `Extra GeoJSON properties: ${Object.keys(unexpectedProperties).join(
      ", "
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
    for (let key of ["atf4_type", "accuracy", "is_alternative"]) {
      delete copy.pipeline[key];
    }
    if (Object.entries(copy.pipeline).length == 0) {
      delete copy.pipeline;
    }
  }

  return copy;
}

// TODO Remove when the UI can manage multiple schemes. This function only
// makes sense when there's one scheme in the collection.
export function getArbitraryScheme(
  schemeCollection: SchemeCollection
): SchemeData {
  return Object.values(schemeCollection.schemes)[0];
}

export function getRectifiedPipelineSchemeWithSuggestedValues(scheme:SchemeData, features: FeatureUnion[]):SchemeData {
    let newPipeline = (scheme.pipeline ||= {
      scheme_type: "",
      scheme_timescale: { status: "", timescale: "" },
      atf4_lead_type: "",
      scheme_description: "",
      scheme_budget: {
        funding_source: "",
        development_funded: false,
        construction_funded: false,
      },
    });

    const schemeFeatures: FeatureUnion[] = features.filter(
      (feature) => {
        return feature.properties.scheme_reference === scheme?.scheme_reference;
      }
    );
    newPipeline.scheme_timescale = getTimescale(
      scheme.pipeline.scheme_timescale,
      schemeFeatures
    );
    newPipeline.scheme_budget = getBudget(scheme.pipeline.scheme_budget, schemeFeatures);

    scheme.pipeline = newPipeline;

    return scheme;
}

  function getTimescale(
    timescaleDetails: any,
    features: FeatureUnion[]
  ): PipelineTimescale {
    const result = {
      status: timescaleDetails.status || "",
      timescale: timescaleDetails.timescale,
      timescale_year: timescaleDetails.timescale_year,
      year_published: timescaleDetails.year_published,
      year_consulted: timescaleDetails.year_consulted,
    };
    if (
      (result.timescale === "" || result.timescale === undefined) &&
      features.length > 0
    ) {
      console.log;
      result.timescale =
        features.reduce(maxTimescale).properties.pipeline
          ?.intervention_timescale.timescale || "";
    }

    return result;
  }

  function getBudget(
    budgetDetails: any,
    features: FeatureUnion[]
  ): PipelineBudget {
    const result = {
      cost: budgetDetails.cost,
      development_funded: budgetDetails.development_funded,
      construction_funded: budgetDetails.construction_funded,
      funding_source: budgetDetails.funding_source || "",
    };

    if (result.cost === undefined && features.length > 0) {
      result.cost = features
        .map((feature) => {
          return feature.properties.pipeline?.cost || 0;
        })
        .reduce((partialSum, a) => partialSum + a, 0);
    }

    return result;
  }

  function maxTimescale(
    thisFeature: FeatureUnion,
    thatFeature: FeatureUnion
  ): FeatureUnion {
    const thisTimescale =
      thisFeature.properties.pipeline?.intervention_timescale.timescale || "";
    const thatTimescale =
      thatFeature.properties.pipeline?.intervention_timescale.timescale || "";
    const permittedStrings = ["short", "medium", "long"];
    const thisTimescaleIsValid = permittedStrings.indexOf(thisTimescale) !== -1;
    const thatTimescaleIsValid = permittedStrings.indexOf(thatTimescale) !== -1;
    const turnToNumber = (timescaleString: string) => {
      if (timescaleString === "short") return 1;
      if (timescaleString === "medium") return 2;
      return 3;
    };

    if (!thatTimescaleIsValid) {
      return thisFeature;
    }
    if (!thisTimescaleIsValid) {
      return thatFeature;
    }

    return turnToNumber(thisTimescale) - turnToNumber(thatTimescale) < 0
      ? thatFeature
      : thisFeature;
  }
