import type { FeatureUnion } from "types";
import {
  newFeatureId,
  getArbitrarySchemeRef,
  gjSchemeCollection,
} from "lib/draw/stores";
import type { FeatureWithAnyProps } from "lib/draw/types";
import type { Feature, LineString, Polygon, Point } from "geojson";
import { interventionName } from "lib/sidebar/scheme_data";
import { schema } from "stores";
import { get } from "svelte/store";

// The draw code should be agnostic to the feature properties that differ by
// schema. Start centralizing the logic here, so it's easy for other users to
// override.

// TODO As an alternate idea, users could implement a custom Svelte store with methods for doing these things

export let cfg = {
  interventionName: (f: FeatureWithAnyProps) => {
    return interventionName(f as FeatureUnion);
  },

  newPointFeature: (f: Feature<Point>) => {
    gjSchemeCollection.update((gj) => {
      f.id = newFeatureId(gj);
      f.properties ||= {};
      f.properties.scheme_reference = getArbitrarySchemeRef(gj);
      f.properties.intervention_type = "other";
      // Typecast safe because we've established the invariants above
      gj.features.push(f as FeatureUnion);
      return gj;
    });
  },

  newPolygonFeature: (f: Feature<Polygon>) => {
    gjSchemeCollection.update((gj) => {
      f.id = newFeatureId(gj);
      f.properties ||= {};
      f.properties.scheme_reference = getArbitrarySchemeRef(gj);
      f.properties.intervention_type = "area";
      f.properties.is_coverage_polygon = false;
      // Typecast safe because we've established the invariants above
      gj.features.push(f as FeatureUnion);
      return gj;
    });
  },

  newLineStringFeature: (f: Feature<LineString>) => {
    gjSchemeCollection.update((gj) => {
      f.id = newFeatureId(gj);
      f.properties ||= {};
      f.properties.scheme_reference = getArbitrarySchemeRef(gj);
      f.properties.intervention_type = "route";
      if (f.properties.route_name) {
        if (get(schema) != "pipeline") {
          f.properties.name = f.properties.route_name;
        }
        delete f.properties.route_name;
      }
      // Typecast safe because we've established the invariants above
      gj.features.push(f as FeatureUnion);
      return gj;
    });
  },

  updateFeature: (
    destination: FeatureWithAnyProps,
    source: FeatureWithAnyProps,
  ) => {
    // Only copy route_name if the user hasn't set it. It's not simple to
    // distinguish the user manually editing the name from it being auto-filled
    // previously, so be safe and don't overwrite anything. The user can always
    // use the auto-fill button explicitly.
    if (
      source.properties.route_name &&
      !destination.properties.name &&
      get(schema) != "pipeline"
    ) {
      destination.properties.name = source.properties.route_name;
    }
  },
};
