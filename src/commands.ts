import { gjScheme, newFeatureId } from "./stores";
import type { FeatureUnion } from "./types";

// Global state! This _is_ a singleton, but probably manage this differently
// TODO Reset when we clear / load a file
// TODO How expensive is it to keep this?

let commands = [];

type Command =
  | {
      kind: "new";
      feature: FeatureUnion;
    }
  | {
      kind: "edit";
      id: number;
      // TODO "new", "before", "after" are all reserved words, and "newFeature" is a method here!
      fOld: FeatureUnion;
      fNew: FeatureUnion;
    }
  | {
      kind: "delete";
      id: number;
      feature: FeatureUnion;
    };

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

  commands.push({ kind: "new", feature: JSON.parse(JSON.stringify(feature)) });

  return id;
}

// Modifies one feature by ID. Returns true if the feature was found, false if not.
export function editFeature(
  id: number,
  command: (feature: FeatureUnion) => void
): boolean {
  let ok;
  let fOld;
  let fNew;
  gjScheme.update((gj) => {
    let feature = gj.features.find((f) => f.id == id);
    if (feature) {
      fOld = JSON.parse(JSON.stringify(feature));
      command(feature);
      fNew = JSON.parse(JSON.stringify(feature));
      ok = true;
    } else {
      ok = false;
    }
    return gj;
  });

  if (ok) {
    commands.push({
      kind: "edit",
      fOld,
      fNew,
    });
  }

  return ok;
}

// Returns true if the feature was found, false if not
export function deleteFeature(id: number): boolean {
  let ok;
  let feature;
  gjScheme.update((gj) => {
    let len = gj.features.length;
    feature = gj.features.find((f) => f.id == id);
    gj.features = gj.features.filter((f) => f.id != id);
    ok = len - 1 == gj.features.length;
    return gj;
  });

  if (ok) {
    commands.push({ kind: "delete", feature });
  }

  return ok;
}

// TODO can we capture form edits?
