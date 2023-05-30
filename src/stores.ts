import { writable, type Writable } from "svelte/store";
import { emptyGeojson } from "./maplibre_helpers";
import type { Map } from "maplibre-gl";
import type { Scheme, UserSettings } from "./types";
import { type Remote } from "comlink";
import { type RouteInfo } from "./worker";

// A global singleton, containing a loaded map
// TODO | null. When we enable strictNullChecks, this'll become a problem
export const map: Writable<Map> = writable(null);

// A global singleton, with a RouteInfo web worker. It's null before it's loaded.
export const routeInfo: Writable<Remote<RouteInfo> | null> = writable(null);

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

export const userSettings: Writable<UserSettings> = writable(
  loadUserSettings()
);
userSettings.subscribe((value) =>
  window.localStorage.setItem("userSettings", JSON.stringify(value))
);

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

function loadUserSettings(): UserSettings {
  let settings = {
    streetViewImagery: "google",
    avoidDoublingBack: false,
  };

  // Be paranoid when loading from local storage, and only copy over valid items
  try {
    let x = JSON.parse(window.localStorage.getItem("userSettings") || "{}");
    if (x.streetViewImagery == "google" || x.streetViewImagery == "bing") {
      settings.streetViewImagery = x.streetViewImagery;
    }
    if (typeof x.avoidDoublingBack == "boolean") {
      settings.avoidDoublingBack = x.avoidDoublingBack;
    }
  } catch (error) {
    console.log(`Couldn't parse userSettings from local storage: ${error}`);
  }
  // The cast is necessary, because of streetViewImagery looking like just a string
  return settings as UserSettings;
}
