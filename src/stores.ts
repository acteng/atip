import { writable, type Writable } from "svelte/store";
import { emptyGeojson } from "./maplibre_helpers";
import type { Map } from "maplibre-gl";
import type { Scheme } from "./types";

// A global singleton, containing a loaded map
// TODO | null. When we enable strictNullChecks, this'll become a problem
export const map: Writable<Map> = writable(null);

// TODO Should we instead store a map from ID to feature?
export const gjScheme: Writable<Scheme> = writable(emptyGeojson() as Scheme);

// The optional ID of a feature whose form is open on the sidebar.
// TODO Can we make a type for feature ID?
export const formOpen: Writable<number | null> = writable(null);

// The optional ID of a feature currently hovered from the map or sidebar.
export const mapHover: Writable<number | null> = writable(null);
export const sidebarHover: Writable<number | null> = writable(null);

// These act as event dispatchers, but are easier to plumb around.
export const openFromSidebar: Writable<number | null> = writable(null);

// All feature IDs must:
//
// - be unique
// - be numeric; parts of maplibre can't handle string IDs
//   (https://github.com/mapbox/mapbox-gl-js/issues/2716)
// - not be 0; some libraries treat this as a missing ID
//
// Although this implementation may appear to ID features in order (1, 2, 3,
// etc), this is NOT an invariant. Do not assume this; it will not be true as
// soon as a user deletes or reorders an intervention.
//
// NOTE! If you call this twice in a row in a `gjScheme.update` transaction
// without adding one of the new features, then this'll return the same ID
// twice!
export function newFeatureId(gj: Scheme): number {
  let ids = new Set();
  for (let f of gj.features) {
    ids.add(f.id);
  }
  // Always start with ID 1
  let id = ids.size + 1;
  while (ids.has(id)) {
    id++;
  }
  return id;
}

export function deleteIntervention(id: number) {
  console.log(`Deleting intervention ${id}`);
  gjScheme.update((gj) => {
    gj.features = gj.features.filter((f) => f.id != id);
    return gj;
  });
  formOpen.set(null);
  mapHover.set(null);
  sidebarHover.set(null);
  openFromSidebar.set(null);
}
