<script lang="ts">
  import { Legend } from "lib/common";
  import { Select } from "lib/govuk";
  import { constructMatchExpression } from "lib/maplibre";
  import { colorInterventionsBySchema, schemaLegend } from "schemas";
  import { map } from "stores";
  import { colors } from "./colors";
  import { schemes } from "./stores";

  let colorInterventionsAccordingTo = "interventionType";
  let legendRows = schemaLegend("v1");

  function changeStyle() {
    let color;
    if (colorInterventionsAccordingTo == "interventionType") {
      color = colorInterventionsBySchema("v1");
      legendRows = schemaLegend("v1");
    } else if (colorInterventionsAccordingTo == "fundingProgramme") {
      color = styleByFundingProgramme();
    } else if (colorInterventionsAccordingTo == "currentMilestone") {
      color = styleByCurrentMilestone();
    }
    // TODO Plumb instead of setting
    $map.setPaintProperty("interventions-points", "circle-color", color);
    $map.setPaintProperty("interventions-lines", "line-color", color);
    $map.setPaintProperty("interventions-polygons", "fill-color", color);
    $map.setPaintProperty(
      "interventions-polygons-outlines",
      "line-color",
      color
    );
  }

  function styleByFundingProgramme() {
    let set: Set<string> = new Set();
    for (let x of $schemes.values()) {
      if (x.browse?.funding_programme) {
        set.add(x.browse.funding_programme);
      }
    }
    let programmes: string[] = Array.from(set);
    programmes.sort();

    let [colorMapping, returnedLegendRows] = getColorMappingAndLegend(programmes, colors.funding_programmes);

    let color = constructMatchExpression(
      ["get", "funding_programme"],
      colorMapping,
      "grey"
    );
    legendRows = returnedLegendRows;
    return color;
  }

  function styleByCurrentMilestone() {
    let stageGates = [
      "removed",
      "no data",
      "not progressed",
      "preliminary design completed",
      "feasability design completed",
      "detailed design completed",
      "consruction started",
      "construction completed",
    ];

    let [colorMapping, returnedLegendRows] = getColorMappingAndLegend(stageGates, colors.current_milestone);

    let color = constructMatchExpression(
      ["get", "current_milestone"],
      colorMapping,
      "grey"
    );
    legendRows = returnedLegendRows;
    return color;
  }

  function getColorMappingAndLegend(keys: string[], colorList: string[]): [{ [key: string]: string }, [string, string][]] {
    let legendRows: [string, string][] = [];
    let colorMapping: { [key: string]: string } = {};
    let i = 0;
    for (let x of keys) {
      let color =
        colorList[i++ % colorList.length];
      colorMapping[x] = color;
      legendRows.push([x, color]);
    }

    return [colorMapping, legendRows];
  }

</script>

<Select
  label="Color interventions"
  id="colorInterventions"
  choices={[
    ["interventionType", "By intervention type"],
    ["fundingProgramme", "By funding programme"],
    ["currentMilestone", "By current milestone"],
  ]}
  bind:value={colorInterventionsAccordingTo}
  on:change={changeStyle}
/>

<Legend rows={legendRows} />
