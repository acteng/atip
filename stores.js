import { writable, derived } from "svelte/store";

export const gjScheme = writable(emptyGeojson());
export const currentSidebarHover = writable(null);
export const currentMapHover = writable(null);

// TODO Should we store a map from ID to feature?
// TODO DrawControls will partly own state. Do we have to listen for every geometry change?
// TODO Should we attempt to keep properties in DrawControls or not?

export function emptyGeojson() {
  return {
    type: "FeatureCollection",
    features: [],
  };
}

// The ID of whatever's being edited
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
}
export function clearCurrentlyEditing() {
  gjScheme.update((gj) => {
    gj.features.forEach((f) => {
      delete f.properties.editing;
    });
    return gj;
  });
}

/* Thinking through the flow of state...
 *
 * 1) new object drawn
 * - selectionchange event
 * - update the store
 * - sidebar rerenders
 * - drawcontrols rerenders? (is it smart enough to diff and realize it shouldn't?)
 *
 * 2) form property modified
 *
 * 3) delete button clicked
 *
 * 4) geometry modified through draw controls
 */
