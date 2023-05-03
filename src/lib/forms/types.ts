// These types describe ATIP's bespoke JSON format for defining schemas.

// A Field is one property collected by form about an intervention
export type Field = Struct | Enum | NumberInput | OneLineTextInput;

// A Struct has multiple sub-fields
export interface Struct {
  name: string;
  members: Field[];
}

// An Enum expresses exactly one case must be set
export interface Enum {
  name: string;
  oneOf: EnumCase[];
}
// Each EnumCase is either itself a Field, or it's a simple string case
export type EnumCase = Field | string;

// NumberInput specifies a numeric property
export interface NumberInput {
  name: string;
  type: "number" | string; // TODO The | string isn't true; TS inference is failing for some reason
}

// OneLineTextInput specifies a text property that should appear as a one-line text box
export interface OneLineTextInput {
  name: string;
  type: "one-liner";
}
