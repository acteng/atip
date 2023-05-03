// This file is auto-generated; do not manually edit

export interface Planning {
  name?: string;
  notes?: string;
  reference_type?: reference_type;
  size?: number;
  size_units?: size_units;
  triage?: triage;
  recommendation?: recommendation;
}

export type recommendation =
  | "No Comment"
  | "No Objection"
  | "Standing Advice"
  | "Deferral"
  | "Approve subject to conditions and/or obligations"
  | "Refusal";

export type triage = "No Comment" | "Standing Advice" | "Toolkit Assessment";

export type size_units = "number of units" | "floorspace" | "area";

export type reference_type =
  | "preapp"
  | "outline"
  | "reserved matters"
  | "local plan";
