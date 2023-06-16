// This file is auto-generated; do not manually edit

export type Intervention = { Route: Route } | { Crossing: Crossing } | {};

export interface Crossing {
  name?: string;
  description?: string;
  CrossingType?: CrossingType;
  MatchesDesireLine?: boolean;
  MotorTrafficFlow?: MotorTrafficFlow;
  MotorTrafficSpeed?: MotorTrafficSpeed;
}

export type MotorTrafficSpeed = "> 30 mph" | "20 - 30 mph" | "< 20 mph";

export type MotorTrafficFlow = "> 8000" | "3000 - 8000" | "< 3000";

export type CrossingType =
  | "Zebra"
  | { Signalised: Signalised }
  | "SchoolCrossing"
  | "Refuge"
  | { GradeSeparated: GradeSeparated };

export interface GradeSeparated {
  GradeSeparatedType?: GradeSeparatedType;
  AccessRamp?: boolean;
  Steps?: boolean;
}

export type GradeSeparatedType = "Bridge" | "Tunnel";

export interface Signalised {
  SignalisedCrossingType?: SignalisedCrossingType;
  CrossingActivation?: CrossingActivation;
  MaxTimeWaitingForGreen?: number;
  GreenDuration?: number;
}

export type CrossingActivation = "PressButton" | "InductionLoop" | "FixedTimer";

export type SignalisedCrossingType = "Puffin" | "Toucan" | "Pegasus";

export interface Route {
  name?: string;
  description?: string;
  RouteType?: RouteType;
  Users?: Users;
}

export type Users =
  | "Footpath"
  | "Cyclepath"
  | "SharedUseNoSeparation"
  | { SharedUseWithSeparation: SharedUseWithSeparation };

export interface SharedUseWithSeparation {
  width_footpath?: number;
  width_cyclepath?: number;
}

export type RouteType = { OnRoad: OnRoad } | { OffRoad: OffRoad };

export type OffRoad = "ThroughPark" | "CanalTowpath";

export interface OnRoad {
  OnRoadType?: OnRoadType;
  SourceOfSpace?: SourceOfSpace;
}

export type SourceOfSpace =
  | "ReallocateEntireLane"
  | "RoadDiet"
  | "PavementDiet"
  | "ReallocateVerge";

export type OnRoadType =
  | "FullSeparation"
  | "Stepped"
  | "PartSeparation"
  | "MandatoryLane"
  | "AdvisoryLane"
  | { NoSeparation: NoSeparation };

export type NoSeparation = "TrafficCalming" | "ModalFilters" | "LowSpeed";
