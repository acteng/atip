// Dummy functions just used for documentation below.
let browse = (x: string) => x;
let sketch = (x: string) => x;

let maptilerStreets = (x: string) => x;
let maptilerSatellite = (x: string) => x;
let maptilerDataviz = (x: string) => x;
let maptilerZoomstack = (x: string) => x;
// OS Road/Light/Outdoor, Bluesky, Google
let rasterBasemaps = (x: string) => x;

// All layer IDs used with layerId must be defined here, with later entries
// drawn on top.
//
// This list covers all pages and basemaps. We should maybe split it. In the
// meantime, the page or basemap is at least identified.
export let layerZorder = [
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
  browse("ruc"),
  browse("ruc-outline"),
  browse("pollution"),
  browse("road_noise"),
  browse("osmm"),
  browse("user_data_polygons"),
  browse("user_data_polygons-outline"),

  // Then optional linear layers
  browse("mrn"),
  browse("srn"),
  browse("bus_routes"),
  browse("cycle_routes"),
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
  browse("rights_of_way"),
  browse("user_data_lines"),

  // Then small point/polygon layers on top
  browse("education"),
  browse("hospitals"),
  browse("sports_spaces"),
  browse("railway_stations"),
  browse("cycle_parking"),
  browse("crossings-lines"),
  browse("crossings-points"),
  browse("vehicle_counts"),
  browse("stats19"),
  browse("bus_stops"),
  browse("user_data_points"),

  // Polygons are bigger than lines, which're bigger than points. When geometry
  // overlaps, put the smaller thing on top
  sketch("interventions-coverage-polygons-outlines"),
  sketch("interventions-polygons"),
  sketch("interventions-polygons-outlines"),
  // This is an outline, so draw on top
  sketch("hover-polygons"),

  browse("atf-interventions-polygons"),
  browse("lcwip-interventions-polygons"),
  browse("local-interventions-polygons"),
  browse("atf-interventions-polygons-outlines"),
  browse("lcwip-interventions-polygons-outlines"),
  browse("local-interventions-polygons-outlines"),

  // The hover effect thickens, so draw beneath
  sketch("hover-lines"),
  sketch("interventions-lines"),
  sketch("interventions-lines-endpoints"),

  browse("atf-interventions-lines"),
  browse("lcwip-interventions-lines"),
  browse("local-interventions-lines"),
  browse("atf-interventions-lines-endpoints"),
  browse("lcwip-interventions-lines-endpoints"),
  browse("local-interventions-lines-endpoints"),

  sketch("hover-points"),
  sketch("interventions-points"),

  browse("atf-interventions-points"),
  browse("lcwip-interventions-points"),
  browse("local-interventions-points"),

  // Problem points are one layer that should display on top of scheme data
  browse("problems"),

  sketch("draw-split-route"),

  // Draw most things beneath text road labels. These IDs come from the
  // MapTiler basemap, and there are different ones for each basemap. Note for
  // OS raster basemaps, we draw everything on top of the rasters.
  maptilerStreets("road_label"),
  maptilerZoomstack(maptilerSatellite(maptilerDataviz("Road labels"))),

  // Draw the inverted boundary fade on top of basemap labels
  sketch("boundary"),
  browse("measurement-line"),

  // TODO This might look nicer lower
  sketch("georeferenced-image"),

  browse("cover-interactive-layers"),
];
