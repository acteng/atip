import { map as mapStore } from "stores";
import { get } from "svelte/store";

interface LayerProps {
  id: string;
  beforeId: string | undefined;
}

// Use this helper for every svelte-maplibre layer component. It sets the layer
// ID, beforeId (for z-ordering between layers), and defaults to only using the
// top-most layer for hovering/clicking.
export function layerId(layerId: string): LayerProps {
  return {
    id: layerId,
    beforeId: getBeforeId(layerId),
  };
}

// Calculates the beforeId for adding a layer. Due to hot-module reloading and
// Svelte component initialization order being unpredictable, callers might add
// layers in any order. Use beforeId to guarantee the layers wind up in an
// explicitly defined order.
function getBeforeId(layerId: string): string | undefined {
  let map = get(mapStore);
  if (!map) {
    console.warn(
      `getBeforeId(${layerId}) called before map is ready. Z-ordering may be incorrect.`,
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

// Dummy functions just used for documentation below.
let browse = (x: string) => x;
let sketch = (x: string) => x;
let criticalEntry = (x: string) => x;

let maptilerStreets = (x: string) => x;
let maptilerSatellite = (x: string) => x;
let maptilerDataviz = (x: string) => x;
let maptilerZoomstack = (x: string) => x;
// OS Road/Light/Outdoor and Bluesky
let rasterBasemaps = (x: string) => x;

// All layer IDs used with layerId must be defined here, with later entries
// drawn on top.
//
// This list covers all pages and basemaps. We should maybe split it. In the
// meantime, the page or basemap is at least identified.
const layerZorder = [
  rasterBasemaps("raster-basemap"),

  // Display optional layers in the browse page below interventions. Start with
  // polygons that cover most of the map.
  browse("parliamentary_constituencies"),
  browse("parliamentary_constituencies-outline"),
  browse("wards"),
  browse("wards-outline"),
  browse("combined_authorities"),
  browse("combined_authorities-outline"),
  browse("local_authority_districts"),
  browse("local_authority_districts-outline"),
  browse("local_planning_authorities"),
  browse("local_planning_authorities-outline"),
  browse("census_output_areas"),
  browse("census_output_areas-outline"),
  browse("imd"),
  browse("imd-outline"),
  browse("pollution"),
  browse("road_noise"),
  // Then optional linear layers
  browse("mrn"),
  browse("bus_routes"),
  browse("trams"),
  browse("national_cycle_network"),
  browse("cycle_paths"),
  browse("pct_commute"),
  browse("pct_school"),
  browse("road_widths"),
  browse("road_speeds"),
  browse("pavement_widths"),
  browse("gradient"),
  browse("gradient_arrows"),
  // Then small point/polygon layers on top
  browse("education"),
  browse("hospitals"),
  browse("sports_spaces"),
  browse("railway_stations"),
  browse("cycle_parking"),
  browse("crossings"),
  browse("vehicle_counts"),
  browse("stats19"),
  browse("bus_stops"),

  // Polygons are bigger than lines, which're bigger than points. When geometry
  // overlaps, put the smaller thing on top
  sketch("interventions-coverage-polygons-outlines"),
  sketch(browse("interventions-polygons")),
  sketch(browse("interventions-polygons-outlines")),
  // This is an outline, so draw on top
  sketch("hover-polygons"),

  // The hover effect thickens, so draw beneath
  sketch("hover-lines"),
  sketch(browse("interventions-lines")),
  sketch(browse("interventions-lines-endpoints")),

  sketch("hover-points"),
  sketch(browse("interventions-points")),

  // Criticals are one layer that should display on top of scheme data
  browse("criticals-clusters"),
  browse("criticals-counts"),
  browse("criticals-points"),

  sketch("edit-polygon-fill"),
  sketch("edit-polygon-lines"),
  sketch("edit-polygon-vertices"),

  sketch("draw-split-route"),

  sketch("route-points"),
  sketch("route-lines"),
  sketch("route-polygons"),

  // Draw most things beneath text road labels. These IDs come from the
  // MapTiler basemap, and there are different ones for each basemap. Note for
  // OS raster basemaps, we draw everything on top of the rasters.
  maptilerStreets("road_label"),
  maptilerZoomstack(maptilerSatellite(maptilerDataviz("Road labels"))),

  // Draw the inverted boundary fade on top of basemap labels
  sketch("boundary"),
  browse(criticalEntry("measurement-line")),

  // TODO This might look nicer lower
  sketch("georeferenced-image"),

  browse("cover-interactive-layers"),
];
