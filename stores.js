import { writable, derived } from "svelte/store";

// A global singleton, containing a loaded map
export const map = writable(null);

// TODO Should we instead store a map from ID to feature?
export const gjScheme = writable(emptyGeojson());

// The optional ID of a feature currently hovered from the sidebar or map. When
// an intervention is open and being edited, hovering is fixed to it.
export const currentHover = writable(null);

// This acts as an event dispatcher, but is easier to plumb around. It either
// has a feature ID or null.
export const openFromSidebar = writable(null);

export function emptyGeojson() {
  return {
    type: "FeatureCollection",
    features: [],
  };
}

// The ID of whatever object's attributes are being edited
export const currentlyEditing = derived(gjScheme, ($gj) => {
  let f = $gj.features.find((f) => f.properties.editing);
  if (f) {
    return f.id;
  } else {
    return null;
  }
});

// TODO This is a bit of a hack; it muddies up the GeoJSON we save. But for the
// accordion to work, we have to bind something simple like this.
// id may be null, meaning we're not editing anything
export function setCurrentlyEditing(id) {
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
// - not be 0; mapbox-gl-draw treats this as a missing ID
//
// Although this implementation may appear to ID features in order (1, 2, 3,
// etc), this is NOT an invariant. Do not assume this; it will not be true as
// soon as a user deletes or reorders an intervention.
export function newFeatureId(gj) {
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
