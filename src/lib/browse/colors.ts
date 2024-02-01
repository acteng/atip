import { constructMatchExpression } from "lib/maplibre";
import { type DataDrivenPropertyValueSpecification } from "maplibre-gl";
import { fundingProgrammesForColouringAndFiltering } from "./data";

// These are specific to the browse page
export const colors = {
  schools: "#007DBB",
  hospitals: "#B73D25",
  mrn: "#006478",
  national_cycle_network: "#640078",
  sports_spaces: "#013220",
  railway_stations: "#A52A2A",
  parliamentary_constituencies: "#006E59",
  wards: "purple",
  combined_authorities: "cyan",
  local_authority_districts: "orange",
  local_planning_authorities: "red",
  bus_route_with_lane: "#9362BA",
  bus_route_without_lane: "#C2A6D8",
  cycle_parking: "black",
  crossings: "green",

  // Thanks to https://github.com/cyipt/cyipt-website/issues/23
  cycle_paths: {
    track: "#0000FF",
    lane: "#009FEF",
    shared_use_segregated: "#FF9900",
    shared_use_unsegregated: "#E7E700",
  },

  // Color ramp from https://www.ons.gov.uk/census/maps/choropleth
  sequential_low_to_high: [
    "#CDE594",
    "#80C6A3",
    "#1F9EB7",
    "#186290",
    "#080C54",
  ],

  // A qualitative set from colorbrewer2.org
  funding_programmes: [
    "#66c2a5",
    "#fc8d62",
    "#8da0cb",
    "#e78ac3",
    "#a6d854",
    "#ffd92f",
    "grey",
  ],

  current_milestone: [
    "grey",
    "grey",
    "red",
    "red",
    "#fbb862",
    "#eddc76",
    "#dafd9d",
    "#76c384",
    "#488f31",
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

export function styleByFundingProgramme(): [
  DataDrivenPropertyValueSpecification<string>,
  [string, string][]
] {
  let [colorMapping, legendRows] = getColorMappingAndLegend(
    fundingProgrammesForColouringAndFiltering,
    colors.funding_programmes
  );

  let color = constructMatchExpression(
    ["get", "funding_programme"],
    colorMapping,
    "grey"
  );
  return [color, legendRows];
}

export function styleByCurrentMilestone(): [
  DataDrivenPropertyValueSpecification<string>,
  [string, string][]
] {
  let stageGates = [
    "removed",
    "no data",
    "not progressed",
    "superseded",
    "preliminary design completed",
    "feasability design completed",
    "detailed design completed",
    "consruction started",
    "construction completed",
  ];

  let [colorMapping, legendRows] = getColorMappingAndLegend(
    stageGates,
    colors.current_milestone
  );

  let color = constructMatchExpression(
    ["get", "current_milestone"],
    colorMapping,
    "grey"
  );
  return [color, legendRows];
}

function getColorMappingAndLegend(
  keys: string[],
  colorList: string[]
): [{ [key: string]: string }, [string, string][]] {
  let legendRows: [string, string][] = [];
  let colorMapping: { [key: string]: string } = {};
  let i = 0;
  for (let x of keys) {
    let color = colorList[i++ % colorList.length];
    colorMapping[x] = color;
    legendRows.push([x, color]);
  }

  return [colorMapping, legendRows];
}
