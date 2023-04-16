import type { Point, LineString, Polygon } from "geojson";

// This describes the full structure of the GeoJSON we manage. We constrain the
// default GeoJSON types and specify feature properties.
export interface Scheme {
  type: "FeatureCollection";
  features: FeatureUnion[];
  // Foreign members
  scheme_name?: string;
  authority?: string;
  origin?: string;
}

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
  intervention_type: "area" | "route" | "crossing" | "other";
  name: string;
  description: string;

  // For LineStrings only
  length_meters?: number;
  waypoints?: Waypoint[];

  // Temporary state, not meant to be serialized
  editing?: boolean;
  hide_while_editing?: boolean;
}

export interface Waypoint {
  lon: number;
  lat: number;
  snapped: boolean;
}
