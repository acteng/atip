import {
  writable,
  derived,
  get,
  type Writable,
  type Readable,
} from "svelte/store";
import type { FeatureCollection } from "geojson";
import { emptyGeojson } from "./maplibre_helpers";
import type { Map } from "maplibre-gl";

// A global singleton, containing a loaded map
// TODO | null. When we enable strictNullChecks, this'll become a problem
export const map: Writable<Map> = writable(null);

// This describes the full structure of the GeoJSON we manage. It's mostly a
// FeatureCollection with some foreign members. TODO Get really specific about
// the Feature properties
export interface Scheme extends FeatureCollection {
  scheme_name?: string;
}

// TODO Should we instead store a map from ID to feature?
// TODO Plus the foreign members we add in
export const gjScheme: Writable<Scheme> = writable(emptyGeojson());

// The optional ID of a feature currently hovered from the sidebar or map. When
// an intervention is open and being edited, hovering is fixed to it.
// TODO Can we make a type for feature ID?
export const currentHover: Writable<number | null> = writable(null);

// This acts as an event dispatcher, but is easier to plumb around. It either
// has a feature ID or null.
export const openFromSidebar: Writable<number | null> = writable(null);

// The ID of whatever object's attributes are being edited
export const currentlyEditing: Readable<number | null> = derived(
  gjScheme,
  ($gj) => {
    let f = $gj.features.find((f) => f.properties.editing);
    if (f) {
      return f.id as number;
    } else {
      return null;
    }
  }
);

// TODO This is a bit of a hack; it muddies up the GeoJSON we save. But for the
// accordion to work, we have to bind something simple like this.
// id may be null, meaning we're not editing anything
export function setCurrentlyEditing(id: number | null) {
  // Don't cause spurious updates
  if (get(currentlyEditing) == id) {
    return;
  }

  gjScheme.update((gj) => {
    for (let f of gj.features) {
      if (f.id == id) {
        f.properties.editing = true;
      } else {
        delete f.properties.editing;
      }
    }
    return gj;
  });
  // While we're editing, hover is pinned to this
  currentHover.set(id);
}

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
export function newFeatureId(gj): number {
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
