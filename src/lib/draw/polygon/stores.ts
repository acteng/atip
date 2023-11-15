import type { GeoJSON } from "geojson";
import { emptyGeojson } from "lib/maplibre";
import { writable, type Writable } from "svelte/store";

// These are necessary to communicate between components nested under the sidebar and map

export const polygonToolGj: Writable<GeoJSON> = writable(emptyGeojson());
export const undoLength: Writable<number> = writable(0);
