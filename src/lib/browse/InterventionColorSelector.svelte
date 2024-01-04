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
    } else {
      let set: Set<string> = new Set();
      for (let x of $schemes.values()) {
        if (x.browse?.funding_programme) {
          set.add(x.browse.funding_programme);
        }
      }
      let programmes: string[] = Array.from(set);
      programmes.sort();

      legendRows = [];
      let colorMapping: { [key: string]: string } = {};
      let i = 0;
      for (let x of programmes) {
        let color =
          colors.funding_programmes[i++ % colors.funding_programmes.length];
        colorMapping[x] = color;
        legendRows.push([x, color]);
      }

      color = constructMatchExpression(
        ["get", "funding_programme"],
        colorMapping,
        "grey"
      );
      legendRows = legendRows;
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
</script>

<Select
  label="Color interventions"
  id="colorInterventions"
  choices={[
    ["interventionType", "By intervention type"],
    ["fundingProgramme", "By funding programme"],
  ]}
  bind:value={colorInterventionsAccordingTo}
  on:change={changeStyle}
/>

<Legend rows={legendRows} />
