export type Field = Struct | Enum | NumberInput | OneLineTextInput;
export type EnumCase = Field | string;

export interface Struct {
  name: string;
  members: Field[];
}

export interface Enum {
  name: string;
  oneOf: EnumCase[];
}

export interface NumberInput {
  name: string;
  type: "number" | string; // TODO The | string is a lie, TS is failing for some reason
}

export interface OneLineTextInput {
  name: string;
  type: "one-liner";
}
