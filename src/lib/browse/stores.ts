import { writable, type Writable } from "svelte/store";
import type { Schemes, SchemeData } from "types";

export const schemesGj: Writable<Schemes> = writable({
  type: "FeatureCollection",
  features: [],
  schemes: {},
});
export const schemes: Writable<Map<string, SchemeData>> = writable(new Map());

export const interactiveMapLayersEnabled: Writable<boolean> = writable(true);
export const filterInterventionText: Writable<string> = writable("");
export const filterSchemeText: Writable<string> = writable("");
