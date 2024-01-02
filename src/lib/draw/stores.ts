import { emptyCollection } from "lib/sidebar/scheme_data";
import { writable, type Writable } from "svelte/store";
import type { Mode, SchemeCollection } from "types";
import { PointTool } from "./point/point_tool";
import { PolygonTool } from "./polygon/polygon_tool";
import { RouteTool } from "./route/route_tool";

// TODO Should we instead store a map from ID to feature?
export const gjSchemeCollection: Writable<SchemeCollection> = writable(
  emptyCollection()
);

export const pointTool: Writable<PointTool | null> = writable(null);
export const polygonTool: Writable<PolygonTool | null> = writable(null);
// A global singleton, with the route tool loaded for the current map. It's
// null before it's loaded.
export const routeTool: Writable<RouteTool | null> = writable(null);

// scheme_references to hide
export const hideSchemes: Writable<Set<string>> = writable(new Set());

// The optional ID of a feature currently hovered from the sidebar.
export const sidebarHover: Writable<number | null> = writable(null);

export const mode: Writable<Mode> = writable({ mode: "list" });

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
