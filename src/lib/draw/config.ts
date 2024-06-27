import type { FeatureUnion } from "types";
import type { FeatureWithProps } from "lib/draw/types";
import type { LineString, Polygon, Point } from "geojson";
import { interventionName } from "lib/sidebar/scheme_data";
import { schema } from "stores";
import { get } from "svelte/store";

// The draw code should be agnostic to the feature properties that differ by
// schema. Start centralizing the logic here, so it's easy for other users to
// override.

export let cfg = {
  interventionName: (f: FeatureUnion) => {
    return interventionName(f);
  },

  newPointFeature: (f: FeatureWithProps<Point>) => {
    f.properties.intervention_type = "other";
  },

  newPolygonFeature: (f: FeatureWithProps<Polygon>) => {
    f.properties.intervention_type = "area";
    f.properties.is_coverage_polygon = false;
  },

  newLineStringFeature: (f: FeatureWithProps<LineString | Polygon>) => {
    f.properties.intervention_type = "route";
    if (f.properties.route_name) {
      if (get(schema) != "pipeline") {
        f.properties.name = f.properties.route_name;
      }
      delete f.properties.route_name;
    }
  },

  updateFeature: (
    destination: FeatureUnion,
    source: FeatureWithProps<Point | LineString | Polygon>,
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
