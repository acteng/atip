<script lang="ts">
  import { Legend } from "lib/common";
  import { CollapsibleCard, Select } from "govuk-svelte";
  import { colorInterventionsBySchema, schemaLegend } from "schemas";
  import { map } from "stores";
  import { styleByCurrentMilestone, styleByFundingProgramme } from "./colors";

  let colorInterventionsAccordingTo = "fundingProgramme";
  let [_, legendRows] = styleByFundingProgramme();

  function changeStyle() {
    let color;
    if (colorInterventionsAccordingTo == "interventionType") {
      color = colorInterventionsBySchema("v1");
      legendRows = schemaLegend("v1");
    } else if (colorInterventionsAccordingTo == "fundingProgramme") {
      [color, legendRows] = styleByFundingProgramme();
    } else if (colorInterventionsAccordingTo == "currentMilestone") {
      [color, legendRows] = styleByCurrentMilestone();
    }
    // TODO Plumb instead of setting
    $map.setPaintProperty("interventions-points", "circle-color", color);
    $map.setPaintProperty("interventions-lines", "line-color", color);
    $map.setPaintProperty("interventions-polygons", "fill-color", color);
    $map.setPaintProperty(
      "interventions-polygons-outlines",
      "line-color",
      color,
    );
  }
</script>

<Select
  label="Color interventions"
  choices={[
    ["fundingProgramme", "By funding programme"],
    ["interventionType", "By intervention type"],
    ["currentMilestone", "By current milestone"],
  ]}
  bind:value={colorInterventionsAccordingTo}
  on:change={changeStyle}
/>

<CollapsibleCard label="Legend">
  <Legend rows={legendRows} />
</CollapsibleCard>
