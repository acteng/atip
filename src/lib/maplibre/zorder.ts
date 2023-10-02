import { map as mapStore } from "stores";
import { get } from "svelte/store";

interface LayerProps {
  id: string;
  beforeId: string | undefined;
  eventsIfTopMost: boolean;
}

// Use this helper for every svelte-maplibre layer component. It sets the layer
// ID, beforeId (for z-ordering between layers), and defaults to only using the
// top-most layer for hovering/clicking.
export function layerId(layerId: string): LayerProps {
  return {
    id: layerId,
    beforeId: getBeforeId(layerId),
    eventsIfTopMost: true,
  };
}

// Calculates the beforeId for adding a layer. Due to hot-module reloading and
// Svelte component initialization order being unpredictable, callers might add
// layers in any order. Use beforeId to guarantee the layers wind up in an
// explicitly defined order.
export function getBeforeId(layerId: string): string | undefined {
  let map = get(mapStore);
  if (!map) {
    console.warn(
      `getBeforeId(${layerId}) called before map is ready. Z-ordering may be incorrect.`
    );
    return undefined;
  }

  // Find the last layer currently in the map that should be on top of this new
  // layer.
  let beforeId = undefined;
  let found = false;
  for (let i = layerZorder.length - 1; i >= 0; i--) {
    let id = layerZorder[i];
    if (id == layerId) {
      found = true;
      break;
    }
    if (map.getLayer(id)) {
      beforeId = id;
    }
  }
  // When adding a new layer somewhere, force the programmer to decide where it
  // should be z-ordered.
  if (!found) {
    throw new Error(`Layer ID ${layerId} not defined in layerZorder`);
  }
  // If beforeId isn't set, we'll add the layer on top of everything else.
  return beforeId;
}

// All layer IDs used with overwriteLayer must be defined here, with later
// entries drawn on top.
//
// This list covers all pages. We should maybe split it.
const layerZorder = [
  // Display optional layers in the browse page below interventions. Start with
  // polygons that cover most of the map.
  "parliamentary_constituencies",
  "parliamentary_constituencies-outline",
  "wards",
  "wards-outline",
  "combined_authorities",
  "combined_authorities-outline",
  "local_authority_districts",
  "local_authority_districts-outline",
  "local_planning_authorities",
  "local_planning_authorities-outline",
  "census_output_areas",
  "census_output_areas-outline",
  "imd",
  "imd-outline",
  // Then optional linear layers
  "mrn",
  "bus_routes",
  "cycle_paths",
  "pct_commute",
  "pct_school",
  "road_widths",
  "road_speeds",
  // Then small point/polygon layers on top
  "schools",
  "hospitals",
  "sports_spaces",
  "railway_stations",
  "cycle_parking",
  "crossings",
  "vehicle_counts",

  // Polygons are bigger than lines, which're bigger than points. When geometry
  // overlaps, put the smaller thing on top
  "interventions-polygons",
  "interventions-polygons-outlines",
  // This is an outline, so draw on top
  "hover-polygons",

  // The hover effect thickens, so draw beneath
  "hover-lines",
  "interventions-lines",
  "interventions-lines-endpoints",

  "hover-points",
  "interventions-points",

  // Criticals are one layer that should display on top of scheme data
  "criticals-clusters",
  "criticals-counts",
  "criticals-points",

  "edit-polygon-fill",
  "edit-polygon-lines",
  "edit-polygon-vertices",

  "draw-split-route",

  "draw-street-view",

  "route-points",
  "route-lines",
  "route-polygons",

  // Draw most things beneath text road labels. These IDs come from the
  // MapTiler basemap, and there are different ones for each basemap. Note for
  // OS raster basemaps, we draw everything on top of the rasters.
  "road_label",
  "Road labels",

  // Draw the inverted boundary fade on top of basemap labels
  "boundary",
  "measurement-line",
];
