// These types describe ATIP's bespoke JSON format for defining schemas.

// A Field is one property collected by form about an intervention
export type Field =
  | Struct
  | Enum
  | NumberInput
  | OneLineTextInput
  | TextboxInput
  | CheckboxInput;

// A Struct has multiple sub-fields
export interface Struct {
  name: string;
  description?: string;
  members: Field[];
}

// An Enum expresses exactly one case must be set
export interface Enum {
  name: string;
  description?: string;
  oneOf: EnumCase[];
}
// Each EnumCase is either itself a Field, or it's a simple string case
export type EnumCase = Field | BarewordEnumCase | SimpleEnumCase;
type BarewordEnumCase = string;
export interface SimpleEnumCase {
  value: string;
  description?: string;
}

// NumberInput specifies a numeric property
export interface NumberInput {
  name: string;
  description?: string;
  type: "number" | string; // TODO The | string isn't true; TS inference is failing for some reason
}

// OneLineTextInput specifies a text property that should appear as a one-line text box
export interface OneLineTextInput {
  name: string;
  description?: string;
  type: "one-liner";
}

// TextboxInput specifies a text property that should appear as a multi-line text box
export interface TextboxInput {
  name: string;
  description?: string;
  type: "textbox";
}

// CheckboxInput specifies a boolean property
export interface CheckboxInput {
  name: string;
  description?: string;
  type: "checkbox";
}

export function isStruct(x: Field): x is Struct {
  return "members" in x;
}
export function isEnum(x: Field): x is Enum {
  return "oneOf" in x;
}
export function isBarewordEnumCase(x: EnumCase): x is BarewordEnumCase {
  return typeof x == "string";
}
export function isSimpleEnumCase(x: EnumCase): x is SimpleEnumCase {
  return typeof x == "object" && "value" in x;
}
export function isNumber(x: Field): x is NumberInput {
  return "type" in x && x.type == "number";
}
export function isOneLiner(x: Field): x is OneLineTextInput {
  return "type" in x && x.type == "one-liner";
}
export function isTextbox(x: Field): x is TextboxInput {
  return "type" in x && x.type == "textbox";
}
export function isCheckbox(x: Field): x is CheckboxInput {
  return "type" in x && x.type == "checkbox";
}
