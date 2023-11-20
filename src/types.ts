import type { LineString, Point, Polygon } from "geojson";

export type Schema = "v1" | "pipeline";

// This describes the full structure of the GeoJSON we manage. We constrain the
// default GeoJSON types and specify feature properties.
export interface SchemeCollection {
  type: "FeatureCollection";
  features: FeatureUnion[];
  // Foreign members
  authority?: string;
  origin?: string;
  // Keyed by scheme_reference, which doesn't change over the lifetime of the sketch tool
  schemes: { [reference: string]: SchemeData };
}

export interface SchemeData {
  // The key into SchemeCollection.schemes
  scheme_reference: string;
  scheme_name?: string;
  // For the sketch page; not important
  color: string;
  pipeline?: PipelineScheme;
  browse?: BrowseSchemeData;
}

// Every field is optional in this type, to match the reality of starting with
// a blank form. Mandatory fields are marked in the form UI. Optional string
// types are encoded as "".
export interface PipelineScheme {
  // TODO "intersection" is unclear
  scheme_type:
    | "cycling route"
    | "walking route"
    | "shared-use route"
    | "area-based scheme"
    | "intersection"
    | "";
  atf4_lead_type: ATF4Type | "";
  scheme_description: string;

  // TODO Check with DB schema
  status: "planned" | "in development" | "in construction" | "completed" | "";
  timescale: "short" | "medium" | "long" | "";
  timescale_year?: number;
  year_published?: number;
  year_consulted?: number;

  // GBP
  budget_funded?: number;
  budget_unfunded?: number;
  funding_source: "ATF2" | "ATF3" | "ATF4" | "ATF4e" | "CRSTS" | "LUF" | "";
  // TODO What about partially? How's this overlap with budget?
  funded: boolean;
}

export interface BrowseSchemeData {
  num_features: number;
  authority_or_region: string;
  capital_scheme_id: string;
  funding_programme: string;
}

export type ATF4Type =
  | "New segregated cycling facility"
  | "New junction treatment"
  | "New permanent footway"
  | "New shared use facilities"
  | "Improvements to existing route"
  | "Area-wide traffic management"
  | "Bus priority measures"
  | "Secure cycle parking"
  | "New road crossings"
  | "Restriction or reduction of car parking availability"
  | "School streets";

// TODO Can we use a wildcard type, like Feature<? extends Geometry>
export type FeatureUnion =
  | Feature<Point>
  | Feature<LineString>
  | Feature<Polygon>;

// Note we're not using Geometry and Feature types from the geojson package
export type Geometry = Point | LineString | Polygon;

export interface Feature<G extends Geometry> {
  type: "Feature";
  // Must be defined, and always > 0
  id: number;
  geometry: G;
  properties: InterventionProps;
}

export interface InterventionProps {
  // These 3 fields are v1 schema
  intervention_type: "area" | "route" | "crossing" | "other";
  // A key into SchemeCollection.schemes
  scheme_reference: string;
  name: string;
  description: string;

  // For LineStrings only
  length_meters?: number;
  // For LineStrings and Polygons only
  waypoints?: Waypoint[];
  // For polygons only
  is_coverage_polygon?: boolean;

  // The schema is v1, unless a field here is present
  pipeline?: PipelineIntervention;

  // Temporary state, not meant to be serialized
  hide_while_editing?: boolean;
}

export interface PipelineIntervention {
  atf4_type: ATF4Type | "";
  accuracy: "high" | "medium" | "low" | "";
  is_alternative: boolean;

  // TODO new / existing / upgrade existing?
  // TODO for routes, ltn120 type: fully protected, light segregation, off-carriageway, shared-use, dedicated footpath. minimum width?
}

export interface Waypoint {
  lon: number;
  lat: number;
  snapped: boolean;
}

// Remember settings from different tools
export interface UserSettings {
  // From the StreetView tool
  streetViewImagery: "google" | "bing";

  // From the Route tool
  avoidDoublingBack: boolean;
}

export function isStreetViewImagery(x: string): x is "google" | "bing" {
  return x == "google" || x == "bing";
}

export type Mode =
  | {
      mode: "list";
    }
  | {
      mode: "edit-form";
      id: number;
    }
  | {
      mode: "edit-geometry";
      id: number;
    }
  | { mode: "new-point" }
  | { mode: "new-freehand-polygon" }
  | { mode: "new-snapped-polygon" }
  | { mode: "new-route" }
  | { mode: "split-route" }
  | { mode: "set-image" }
  | { mode: "streetview" };
