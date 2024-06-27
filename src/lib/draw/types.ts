import type { Feature, Geometry } from "geojson";

export type Mode =
  | {
      mode: "list";
    }
  | {
      mode: "edit-form";
      id: number;
    }
  | {
      mode: "edit-geometry";
      id: number;
    }
  | { mode: "new-point" }
  | { mode: "new-freehand-polygon" }
  | { mode: "new-snapped-polygon" }
  | { mode: "new-route" }
  | { mode: "split-route" }
  | { mode: "set-image" }
  | { mode: "streetview" };

// Properties are guaranteed to exist, but can be anything, so TS is mostly disabled
// TODO Remove, probably
export type FeatureWithProps<G extends Geometry> = Feature<G> & {
  properties: { [name: string]: any };
};
