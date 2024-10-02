import { writable, type Writable } from "svelte/store";
import type { Schemes, SchemeData } from "types";

// TODO Bundle this into one type, so it's easier to plumb around
export const atfSchemesGj: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const atfSchemes: Writable<Map<string, SchemeData>> = writable(
  new Map(),
);
export const filterAtfInterventionText: Writable<string> = writable("");
export const filterAtfSchemeText: Writable<string> = writable("");

export const lcwipSchemesGj: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const lcwipSchemes: Writable<Map<string, SchemeData>> = writable(
  new Map(),
);
export const filterLcwipInterventionText: Writable<string> = writable("");
export const filterLcwipSchemeText: Writable<string> = writable("");
