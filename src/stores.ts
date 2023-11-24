import type { Map } from "maplibre-gl";
import { writable, type Writable } from "svelte/store";
import { PointTool } from "./lib/draw/point/point_tool";
import { PolygonTool } from "./lib/draw/polygon/polygon_tool";
import { RouteTool } from "./lib/draw/route/route_tool";
import { emptyCollection } from "./lib/sidebar/scheme_data";
import {
  isStreetViewImagery,
  type Mode,
  type Schema,
  type SchemeCollection,
  type UserSettings,
} from "./types";

// A global singleton, containing a loaded map
// @ts-ignore TODO By construction, no components using the store should be
// mounted before this is populated.
export const map: Writable<Map> = writable(null);

// Note this must be set before gjSchemeCollection
export const schema: Writable<Schema> = writable(defaultSchema());

export const mapStyle: Writable<string> = writable("dataviz");

export const pointTool: Writable<PointTool | null> = writable(null);
export const polygonTool: Writable<PolygonTool | null> = writable(null);
// A global singleton, with the route tool loaded for the current map. It's
// null before it's loaded.
export const routeTool: Writable<RouteTool | null> = writable(null);

// TODO Should we instead store a map from ID to feature?
export const gjSchemeCollection: Writable<SchemeCollection> = writable(
  emptyCollection()
);

// scheme_references to hide
export const hideSchemes: Writable<Set<string>> = writable(new Set());

// The optional ID of a feature currently hovered from the sidebar.
export const sidebarHover: Writable<number | null> = writable(null);

export const userSettings: Writable<UserSettings> = writable(
  loadUserSettings()
);
userSettings.subscribe((value) =>
  window.localStorage.setItem("userSettings", JSON.stringify(value))
);

export const mode: Writable<Mode> = writable({ mode: "list" });

// For browse page
export const interactiveMapLayersEnabled: Writable<boolean> = writable(true);

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
export function newFeatureId(gj: SchemeCollection): number {
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
  gjSchemeCollection.update((gj) => {
    gj.features = gj.features.filter((f) => f.id != id);
    return gj;
  });
  sidebarHover.set(null);
  mode.set({ mode: "list" });
}

function loadUserSettings(): UserSettings {
  let settings = {
    streetViewImagery: "google",
    avoidDoublingBack: false,
  };

  // Be paranoid when loading from local storage, and only copy over valid items
  try {
    let x = JSON.parse(window.localStorage.getItem("userSettings") || "{}");
    if (isStreetViewImagery(x.streetViewImagery)) {
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

function defaultSchema(): Schema {
  let params = new URLSearchParams(window.location.search);
  if (params.get("schema")) {
    return params.get("schema") as Schema;
  }

  // Use the pipeline schema on that semi-permanent branch
  if (
    window.location.hostname == "acteng.github.io" &&
    window.location.pathname.startsWith("/atip/pipeline/")
  ) {
    return "pipeline";
  }

  return "v1";
}
