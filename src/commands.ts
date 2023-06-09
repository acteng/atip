import { gjScheme, newFeatureId } from "./stores";
import type { FeatureUnion } from "./types";

// Not tracked here yet:
// - When we clear everything
// - When we load a file
// - TODO split route
// - TODO editing forms

// Creates a new feature, returning the ID assigned. The input feature shouldn't set id.
export function newFeature(feature: FeatureUnion): number {
  let id;
  gjScheme.update((gj) => {
    id = newFeatureId(gj);
    feature.id = id;
    gj.features.push(feature);
    return gj;
  });
  return id;
}

// Modifies one feature by ID. Returns true if the feature was found, false if not.
export function editFeature(
  id: number,
  command: (feature: FeatureUnion) => void
): boolean {
  let ok;
  gjScheme.update((gj) => {
    let feature = gj.features.find((f) => f.id == id);
    if (feature) {
      command(feature);
      ok = true;
    } else {
      ok = false;
    }
    return gj;
  });
  return ok;
}

// Returns true if the feature was found, false if not
export function deleteFeature(id: number): boolean {
  let ok;
  gjScheme.update((gj) => {
	  let len = gj.features.length;
	      gj.features = gj.features.filter((f) => f.id != id);
	      ok = len - 1 == gj.features.length;
	      return gj;
  });
  return ok;
}

// TODO can we capture form edits?
