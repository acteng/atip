import type { FeatureCollection } from "@maptiler/geocoding-control/types";
import { emptyGeojson } from "lib/maplibre";
import { writable, type Writable } from "svelte/store";

// These are necessary to communicate between components nested under the sidebar and map

export const geocoderGj: Writable<FeatureCollection> = writable(
  emptyGeojson() as FeatureCollection
);
export const snapMode: Writable<boolean> = writable(true);
export const undoLength: Writable<number> = writable(0);
