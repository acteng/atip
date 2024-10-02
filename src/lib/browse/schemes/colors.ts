import { constructMatchExpression } from "lib/maplibre";
import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
import { fundingProgrammesForColouringAndFiltering } from "./data";
import { colors } from "../colors";

export function styleByFundingProgramme(): [
  DataDrivenPropertyValueSpecification<string>,
  [string, string][],
] {
  let [colorMapping, legendRows] = getColorMappingAndLegend(
    fundingProgrammesForColouringAndFiltering,
    colors.funding_programmes,
  );

  let color = constructMatchExpression(
    ["get", "funding_programme"],
    colorMapping,
    "grey",
  );
  return [color, legendRows];
}

export function styleByCurrentMilestone(): [
  DataDrivenPropertyValueSpecification<string>,
  [string, string][],
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
    colors.current_milestone,
  );

  let color = constructMatchExpression(
    ["get", "current_milestone"],
    colorMapping,
    "grey",
  );
  return [color, legendRows];
}

function getColorMappingAndLegend(
  keys: string[],
  colorList: string[],
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
