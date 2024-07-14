import { type Config } from "scheme-sketcher-lib/config";
import {
  interventionName,
  schemeName,
  backfill,
  interventionWarning,
  initializeEmptyScheme,
} from "./scheme_data";
import EditFeatureForm from "./EditFeatureForm.svelte";
import EditSchemeForm from "./EditSchemeForm.svelte";
import { schema, mapStyle } from "stores";
import { get } from "svelte/store";
import { getRoadLayerNames, layerZorder } from "lib/maplibre";
import type { InterventionProps, OurSchemeData } from "types";

export let cfg: Config<InterventionProps, OurSchemeData> = {
  interventionName,

  schemeName,

  backfill,

  initializeEmptyScheme,

  interventionWarning,

  editFeatureForm: EditFeatureForm,

  editSchemeForm: EditSchemeForm,

  newPointFeature: (f) => {
    f.properties.intervention_type = "other";
  },
  newPolygonFeature: (f) => {
    f.properties.intervention_type = "area";
    f.properties.is_coverage_polygon = false;
  },
  newLineStringFeature: (f) => {
    f.properties.intervention_type = "route";
    if (f.properties.route_name) {
      if (get(schema) != "pipeline") {
        f.properties.name = f.properties.route_name;
      }
      delete f.properties.route_name;
    }
  },

  updateFeature: (destination, source) => {
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

  maptilerApiKey: import.meta.env.VITE_MAPTILER_API_KEY,

  getStreetViewRoadLayerNames: (map) => getRoadLayerNames(map, get(mapStyle)),

  layerZorder,
};
