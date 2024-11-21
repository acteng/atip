import type {
  Schemes as GenericSchemes,
  SchemeData as GenericSchemeData,
  FeatureWithID,
} from "scheme-sketcher-lib/draw/types";

export type Schema = "v1" | "pipeline" | "v2";

// This describes the full structure of the GeoJSON we manage. We constrain the
// default GeoJSON types and specify feature properties.
export interface Schemes
  extends GenericSchemes<InterventionProps, OurSchemeData> {
  // Foreign members
  authority?: string;
  origin?: string;
  notes?: string[];
}

// TODO Naming
export interface OurSchemeData {
  scheme_name?: string;
  pipeline?: PipelineScheme;
  v2?: V2Scheme;
  browse?: BrowseSchemeData;
}

export type SchemeData = GenericSchemeData & OurSchemeData;
export type Feature = FeatureWithID<InterventionProps>;

// Every field is optional in this type, to match the reality of starting with
// a blank form. Mandatory fields are marked in the form UI. Optional string
// types are encoded as "".
export interface PipelineScheme extends PipelineBudget, PipelineTiming {
  // TODO "intersection" is unclear
  scheme_type:
    | "cycling route"
    | "walking route"
    | "shared-use route"
    | "cycling and walking route"
    | "area-based scheme"
    | "intersection"
    | "";
  atf4_lead_type: PipelineType | "";
  scheme_description: string;
}

// Empty as a marker for detecting v2 and for future possible additions
export interface V2Scheme {}

export interface PipelineBudget {
  // GBP
  budget?: number;
  development_funded: boolean;
  construction_funded: boolean;
  funding_sources: FundingSources;
}

export interface PipelineTiming {
  // TODO Check with DB schema
  status:
    | "aspiration"
    | "planned"
    | "in development"
    | "in construction"
    | "completed"
    | "";
  timescale: "short" | "medium" | "long" | "";
  timescale_year?: number;
  year_published?: number;
  year_consulted?: number;
}

export interface FundingSources {
  atf2: boolean;
  atf3: boolean;
  atf4: boolean;
  atf4e: boolean;
  crsts: boolean;
  luf: boolean;
  // Can be blank
  other: string;
}

export interface BrowseSchemeData {
  authority_or_region: string;
  capital_scheme_id?: string;
  funding_programme?: string;
  current_milestone?: string;
  // If this scheme was imported from local storage, track the original filename
  local_filename?: string;
}

export type PipelineType =
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
  | "School streets"
  | "Quiet mixed traffic streets"
  | "Traffic free routes"
  | "Not specified in LCWIP";

export interface InterventionProps {
  // These 3 fields are v1 schema
  intervention_type: "area" | "route" | "crossing" | "other";
  name: string;
  description: string;

  // For polygons only
  is_coverage_polygon?: boolean;

  // The schema is v1, unless a field here is present
  pipeline?: PipelineIntervention;
  v2?: V2Intervention;
}

export interface PipelineIntervention extends PipelineBudget, PipelineTiming {
  atf4_type: PipelineType | "";
  accuracy: "high" | "medium" | "low" | "";
  is_alternative: boolean;

  // TODO new / existing / upgrade existing?
  // TODO for routes, ltn120 type: fully protected, light segregation, off-carriageway, shared-use, dedicated footpath. minimum width?
}

export interface V2Intervention {
  intervention_type:
    | "area"
    | "route"
    | "crossing"
    | "modal filter"
    | "junction treatment"
    | "other"
    | "";
  intended_uses: "cycling" | "walking_wheeling" | "all" | "";
  work_type: "new" | "improvement" | "existing" | "";
}
