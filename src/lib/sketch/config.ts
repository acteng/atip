import { cfg } from "scheme-sketcher-lib/config";
import {
  interventionName,
  schemeName,
  backfill,
  interventionWarning,
  initializeEmptyScheme,
} from "./scheme_data";
import EditFeatureForm from "./EditFeatureForm.svelte";
import EditSchemeForm from "./EditSchemeForm.svelte";
import type {
  FeatureWithAnyProps,
  FeatureWithID,
} from "scheme-sketcher-lib/draw/types";
import type { LineString, Polygon, Point } from "geojson";
import { schema, mapStyle } from "stores";
import { get } from "svelte/store";
import {
  emptyCollection,
  gjSchemeCollection,
} from "scheme-sketcher-lib/draw/stores";
import { getRoadLayerNames } from "lib/maplibre";

export function setupSchemeSketcher() {
  cfg.interventionName = interventionName;
  cfg.schemeName = schemeName;
  cfg.initializeEmptyScheme = initializeEmptyScheme;
  cfg.backfill = backfill;
  cfg.interventionWarning = interventionWarning;
  cfg.editFeatureForm = EditFeatureForm;
  cfg.editSchemeForm = EditSchemeForm;

  cfg.newPointFeature = (f: FeatureWithID<Point>) => {
    f.properties.intervention_type = "other";
  };

  cfg.newPolygonFeature = (f: FeatureWithID<Polygon>) => {
    f.properties.intervention_type = "area";
    f.properties.is_coverage_polygon = false;
  };

  cfg.newLineStringFeature = (f: FeatureWithID<LineString>) => {
    f.properties.intervention_type = "route";
    if (f.properties.route_name) {
      if (get(schema) != "pipeline") {
        f.properties.name = f.properties.route_name;
      }
      delete f.properties.route_name;
    }
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

  cfg.maptilerApiKey = import.meta.env.VITE_MAPTILER_API_KEY;
  cfg.getStreetViewRoadLayerNames = (map) =>
    getRoadLayerNames(map, get(mapStyle));

  // TODO Hack. gjSchemeCollection is initialized before this function is called. Sanity check that it's empty, then call it again to invoke initializeEmptyScheme.
  let gj = get(gjSchemeCollection);
  if (Object.values(gj.schemes).length == 1 && gj.features.length == 0) {
    gjSchemeCollection.set(emptyCollection());
  }
}
