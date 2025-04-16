import { writable, type Writable } from "svelte/store";
import type { Schemes } from "types";

// There are three variations -- ATF, LCWIP, and local (any schema)

// TODO Bundle this into one type, so it's easier to plumb around
export const atfSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterAtfInterventionText: Writable<string> = writable("");
export const filterAtfSchemeText: Writable<string> = writable("");

export const finalInspectionsSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterFinalInspectionsInterventionText: Writable<string> =
  writable("");
export const filterFinalInspectionsSchemeText: Writable<string> = writable("");

export const lcwipSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterLcwipInterventionText: Writable<string> = writable("");
export const filterLcwipSchemeText: Writable<string> = writable("");

export const localSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterLocalInterventionText: Writable<string> = writable("");
export const filterLocalSchemeText: Writable<string> = writable("");
