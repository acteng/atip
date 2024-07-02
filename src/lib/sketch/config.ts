import { cfg } from "scheme-sketcher-lib/config";
import {
  interventionName,
  schemeName,
  backfill,
  interventionWarning,
} from "./scheme_data";
import EditFeatureForm from "./EditFeatureForm.svelte";
import type { FeatureWithAnyProps } from "scheme-sketcher-lib/draw/types";
import type { Feature, LineString, Polygon, Point } from "geojson";
import { schema } from "stores";
import { get } from "svelte/store";
import type { FeatureUnion } from "types";
import {
  gjSchemeCollection,
  newFeatureId,
  getArbitrarySchemeRef,
} from "scheme-sketcher-lib/draw/stores";

export function setupSchemeSketcher() {
  cfg.interventionName = interventionName;
  cfg.schemeName = schemeName;
  cfg.backfill = backfill;
  cfg.interventionWarning = interventionWarning;
  cfg.editFeatureForm = EditFeatureForm;

  cfg.newPointFeature = (f: Feature<Point>) => {
    gjSchemeCollection.update((gj) => {
      f.id = newFeatureId(gj);
      f.properties ||= {};
      f.properties.scheme_reference = getArbitrarySchemeRef(gj);
      f.properties.intervention_type = "other";
      // Typecast safe because we've established the invariants above
      gj.features.push(f as FeatureUnion);
      return gj;
    });
  };

  cfg.newPolygonFeature = (f: Feature<Polygon>) => {
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
  };

  cfg.newLineStringFeature = (f: Feature<LineString>) => {
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
  };

  cfg.updateFeature = (
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
  };
}
