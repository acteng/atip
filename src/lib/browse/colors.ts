import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";

// These are specific to the browse page
export const colors = {
  education: {
    schools: "#007DBB",
    colleges: "maroon",
    universities: "navy",
  },
  hospitals: "#B73D25",
  mrn: "#781400",
  srn: "#006478",
  national_cycle_network: "#640078",
  sports_spaces: "#013220",
  parliamentary_constituencies: "#006E59",
  wards: "purple",
  combined_authorities: "cyan",
  local_authority_districts: "orange",
  local_planning_authorities: "red",
  cycle_route: "green",
  bus_route_with_lane: "#9362BA",
  bus_route_without_lane: "#C2A6D8",
  trams: "black",

  // Thanks to https://github.com/cyipt/cyipt-website/issues/23
  cycle_paths: {
    track: "#0000FF",
    lane: "#009FEF",
    shared_use_segregated: "#FF9900",
    shared_use_unsegregated: "#E7E700",
  },

  rights_of_way: {
    footpath: "red",
    bridleway: "green",
    restricted_byway: "blue",
    boat: "orange",
  },

  // Color ramp from https://www.ons.gov.uk/census/maps/choropleth
  sequential_low_to_high: [
    "#CDE594",
    "#80C6A3",
    "#1F9EB7",
    "#186290",
    "#080C54",
  ],

  // Thanks to https://ropensci.github.io/slopes/articles/roadnetworkcycling.html
  gradient_flat_to_steep: [
    "#267300",
    "#FFAA00",
    "#E60000",
    "#A80000",
    "#730000",
    "#000000",
  ],
};

// For dense line layers, make individual lines easily distinguished when
// zoomed in, but not too thick when zoomed out.
export const denseLineWidth: DataDrivenPropertyValueSpecification<number> = [
  "interpolate",
  ["exponential", 1.6],
  ["zoom"],
  3,
  1.0,
  7,
  2.0,
  18,
  20.0,
];
