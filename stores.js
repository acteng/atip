import { writable } from "svelte/store";

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
