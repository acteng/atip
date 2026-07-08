import type {
  FeatureWithID,
  SchemeData as GenericSchemeData,
  Schemes as GenericSchemes,
} from "scheme-sketcher-lib/draw/types";

export type Schema = "v1" | "pipeline" | "v2" | "v3";

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
export interface V2Scheme { }

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
  sketch_source?:
  | "ATF assessment"
  | "LCWIP mapping"
  | "Final inspection sketches";
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
  v3?: V3Intervention;
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

export interface V3Intervention {
  intervention_type:
  | "area"
  | "route"
  | "crossing"
  | "modal filter"
  | "junction treatment"
  | "other"
  | "";
  properties: V3InterventionProps;
}

export interface V3InterventionProps {
  intervention_subtype: string;
  context: string;
  measurements: Measurement[];
  features: InfrastructureFeature[];
}

export interface Measurement {
  name: string;
  unit: string;
  value: number;
}

export interface InfrastructureFeature {
  name: string;
  value: string;
}

export interface CrossingDetailedDesign {
  is_signalised: "yes" | "no" | "";
  pedestrians_have_priority_over_traffic: "yes" | "no" | "";
  cyclists_have_priority_over_traffic: "yes" | "no" | "";
  has_pedestrian_refuge: "yes" | "no" | "";
  setback_from_junction: "fully_setback" | "not_setback" | "partially_setback" | "";
  has_raised_table: "yes" | "no" | "";
  has_buildout: "yes" | "no" | "";
  has_detectors_to_hold_traffic: "yes" | "no" | "";
  has_tactile_paving: "yes" | "no" | "";
  has_dropped_kerbs: "yes" | "no" | "";
  safe_to_cross_indicated_by_visual_aids: "yes" | "no" | "";
  safe_to_cross_indicated_by_audio: "yes" | "no" | "";
  safe_to_cross_indicated_by_rotating_cone: "yes" | "no" | "";
  includes_place_making_pocket_park: "yes" | "no" | "";
  includes_place_making_social_space: "yes" | "no" | "";
  includes_place_making_greening: "yes" | "no" | "";
  includes_place_making_community_garden: "yes" | "no" | "";
  includes_place_making_wayfinding: "yes" | "no" | "";
  includes_place_making_art: "yes" | "no" | "";
  includes_place_making_landscaping: "yes" | "no" | "";
  includes_place_making_other: "yes" | "no" | "";
  junction_has_tight_radii: "yes" | "no" | "";
  permitted_movements_at_side_road_junctions: "entry_and_exit" | "entry_only" | "exit_only" | "";
  is_continuous_footway: "yes" | "no" | "";
  fulfils_single_movement_desire_line: "yes" | "no" | "";
  fulfils_routing_desire: "yes" | "no" | "";
  provides_connection_to_bus_stop: "yes" | "no" | "";
}

export function getEmptyCrossingDetailedDesign(): CrossingDetailedDesign {
  return {
    is_signalised: "",
    pedestrians_have_priority_over_traffic: "",
    cyclists_have_priority_over_traffic: "",
    has_pedestrian_refuge: "",
    setback_from_junction: "",
    has_raised_table: "",
    has_buildout: "",
    has_detectors_to_hold_traffic: "",
    has_tactile_paving: "",
    has_dropped_kerbs: "",
    safe_to_cross_indicated_by_visual_aids: "",
    safe_to_cross_indicated_by_audio: "",
    safe_to_cross_indicated_by_rotating_cone: "",
    includes_place_making_pocket_park: "",
    includes_place_making_social_space: "",
    includes_place_making_greening: "",
    includes_place_making_community_garden: "",
    includes_place_making_wayfinding: "",
    includes_place_making_art: "",
    includes_place_making_landscaping: "",
    includes_place_making_other: "",
    junction_has_tight_radii: "",
    permitted_movements_at_side_road_junctions: "",
    is_continuous_footway: "",
    fulfils_single_movement_desire_line: "",
    fulfils_routing_desire: "",
    provides_connection_to_bus_stop: "",
  }
}