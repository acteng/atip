import { writable, type Writable } from "svelte/store";
import type { Schemes } from "types";

// There are four variations -- main and local ATF and LCWIP schemes

// TODO Bundle this into one type, so it's easier to plumb around
export const mainAtfSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterMainAtfInterventionText: Writable<string> = writable("");
export const filterMainAtfSchemeText: Writable<string> = writable("");

export const mainLcwipSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterMainLcwipInterventionText: Writable<string> = writable("");
export const filterMainLcwipSchemeText: Writable<string> = writable("");

export const localAtfSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterLocalAtfInterventionText: Writable<string> = writable("");
export const filterLocalAtfSchemeText: Writable<string> = writable("");

export const localLcwipSchemes: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const filterLocalLcwipInterventionText: Writable<string> = writable("");
export const filterLocalLcwipSchemeText: Writable<string> = writable("");
