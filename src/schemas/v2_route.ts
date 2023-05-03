export interface Route {
  name?: string;
  RouteType?: RouteType;
  Users?: Users;
}

export type Users =
  | "Footpath"
  | "Cyclepath"
  | "SharedUseNoSeparation"
  | SharedUseWithSeparation;

export interface SharedUseWithSeparation {
  width_footpath?: number;
  width_cyclepath?: number;
}

export type RouteType = OnRoad | OffRoad;

export type OffRoad = "ThroughPark" | "CanalTowpath";

export interface OnRoad {
  Type?: Type;
  SourceOfSpace?: SourceOfSpace;
}

export type SourceOfSpace =
  | "ReallocateEntireLane"
  | "RoadDiet"
  | "PavementDiet"
  | "ReallocateVerge";

export type Type =
  | "FullSeparation"
  | "Stepped"
  | "PartSeparation"
  | "MandatoryLane"
  | "AdvisoryLane"
  | NoSeparation;

export type NoSeparation = "TrafficCalming" | "ModalFilters" | "LowSpeed";
