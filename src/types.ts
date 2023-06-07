import type { Point, LineString, Polygon } from "geojson";
import type { Intervention } from "./schemas/v2";
import type { Planning } from "./schemas/planning";
import type { CriticalIssue } from "./schemas/criticals";

export type Schema = "v1" | "v2" | "planning" | "criticals";

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
  // These 3 fields are v1 schema
  intervention_type: "area" | "route" | "crossing" | "other";
  name: string;
  description: string;

  // For LineStrings only
  length_meters?: number;
  waypoints?: Waypoint[];

  // TODO Hack. If these're filled out, ignore the schema above.
  planning?: Planning;
  v2?: Intervention;
  criticals?: CriticalIssue;

  // Temporary state, not meant to be serialized
  hide_while_editing?: boolean;
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
  | "edit-attribute"
  | "edit-geometry"
  | "route"
  | "point"
  | "free-polygon"
  | "snap-polygon"
  | "split-route"
  | "street-view";

export const MapEvents = ["click", "dblclick", "mousemove", "mousedown", "mouseup", "mouseout", "dragstart"];

export type MapEvent = typeof MapEvents[number];

export const DocumentEvents = ["click", "keyPress", "keyUp", "keyDown"];

export type DocumentEvent = typeof DocumentEvents[number];

export interface EventHandler {
  mapHandlers: {
    click: Function,
    dblclick: Function,
    mousemove: Function,
    mousedown: Function,
    mouseup: Function,
    mouseout: Function,
    dragstart: Function,
  },
  documentHandlers: {
    click: Function,
    keyPress: Function,
    keyUp: Function,
    keyDown: Function,
  },
}
