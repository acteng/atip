import type { FeatureProps } from "scheme-sketcher-lib/draw/types";
import { type Config } from "scheme-sketcher-lib/config";
import EditFeatureForm from "./EditFeatureForm.svelte";
import EditSchemeForm from "./EditSchemeForm.svelte";
import { schema as schemaStore, mapStyle } from "stores";
import { get } from "svelte/store";
import { getRoadLayerNames, layerZorder } from "lib/maplibre";
import length from "@turf/length";
import { randomSchemeColor } from "colors";
import type {
  InterventionProps,
  Feature,
  FundingSources,
  PipelineScheme,
  Schemes,
  OurSchemeData,
} from "types";
import type { SchemeData as GenericSchemeData } from "scheme-sketcher-lib/draw/types";
import { v4 as uuidv4 } from "uuid";

export let cfg: Config<InterventionProps, OurSchemeData> = {
  interventionName,

  schemeName,

  backfill,

  initializeEmptyScheme,

  interventionWarning,

  editFeatureForm: EditFeatureForm,

  editSchemeForm: EditSchemeForm,

  newPointFeature: (f) => {
    f.properties.intervention_type = "other";
  },
  newPolygonFeature: (f) => {
    f.properties.intervention_type = "area";
    f.properties.is_coverage_polygon = false;
  },
  newLineStringFeature: (f) => {
    f.properties.intervention_type = "route";
    if (f.properties.route_name && !f.properties.name) {
      if (get(schemaStore) != "pipeline") {
        f.properties.name = f.properties.route_name;
      }
    }
    delete f.properties.route_name;
    delete f.properties.full_path;
  },

  updateFeature: (destination, source) => {
    // Only copy route_name if the user hasn't set it. It's not simple to
    // distinguish the user manually editing the name from it being auto-filled
    // previously, so be safe and don't overwrite anything. The user can always
    // use the auto-fill button explicitly.
    if (
      source.properties.route_name &&
      !destination.properties.name &&
      get(schemaStore) != "pipeline"
    ) {
      destination.properties.name = source.properties.route_name;
    }
  },

  getStreetViewRoadLayerNames: (map) => getRoadLayerNames(map, get(mapStyle)),

  layerZorder,
};

// TODO This should eventually guarantee the output is a valid Scheme. Only
// some fixes are applied now.
export function backfill(json: any): Schemes {
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
    if (
      (schema == "pipeline" || schema == "v2") &&
      !f.properties.intervention_type
    ) {
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
    } else if (schema == "v2") {
      scheme.v2 = {};
    }
  }

  return json;
}

export function initializeEmptyScheme(
  s: GenericSchemeData,
): GenericSchemeData & OurSchemeData {
  let scheme = s as GenericSchemeData & OurSchemeData;
  let schema = get(schemaStore);
  if (schema == "pipeline") {
    scheme.pipeline = emptyPipelineScheme();
  } else if (schema == "v2") {
    scheme.v2 = {};
  }
  return scheme;
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

function interventionName(feature: Feature): string {
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

export function schemeName(scheme: GenericSchemeData & OurSchemeData): string {
  return scheme.scheme_name ?? "Untitled scheme";
}

function interventionWarning(
  props: FeatureProps<InterventionProps>,
): string | null {
  let schema = get(schemaStore);

  if (!props.name) {
    return "No name";
  }
  // Blank description is fine

  if (
    !new Set(["route", "area", "crossing", "other"]).has(
      props.intervention_type,
    )
  ) {
    return "No intervention type";
  }

  if (schema == "pipeline") {
    if (!props.pipeline?.accuracy) {
      return "Accuracy not specified";
    }
  }

  let unexpectedProperties = getUnexpectedProperties(props);
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

  if (schema == "v2" && copy.v2) {
    for (let key of [
      "intervention_type",
      "for_cycling",
      "for_walking_wheeling",
      "work_type",
    ]) {
      delete copy.v2[key];
    }
    if (Object.entries(copy.v2).length == 0) {
      delete copy.v2;
    }
  }

  return copy;
}
