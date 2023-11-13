import type { FeatureCollection } from "@maptiler/geocoding-control/types";
import { emptyGeojson } from "lib/maplibre";
import { writable, type Writable } from "svelte/store";

// This is necessary to communicate between components nested under the sidebar and map
export const geocoderGj: Writable<FeatureCollection> = writable(
  emptyGeojson() as FeatureCollection
);
