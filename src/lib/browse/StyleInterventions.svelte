<script lang="ts">
  import { matchValue } from "../../maplibre_helpers";
  import { colorInterventionsBySchema, schemaLegend } from "../../schemas";
  import { map } from "../../stores";
  import { Legend } from "../common";
  import { Select } from "../govuk";

  let colorInterventions = "interventionType";
  let legendRows = schemaLegend("v1");

  function changeStyle() {
    let color;
    if (colorInterventions == "interventionType") {
      color = colorInterventionsBySchema("v1");
      legendRows = schemaLegend("v1");
    } else {
      color = matchValue(
        ["get", "funding_programme"],
        { ATF2: "red", ATF3: "green", ATF4: "blue" },
        "grey"
      );
      legendRows = [
        ["ATF2", "red"],
        ["ATF3", "green"],
        ["ATF4", "blue"],
      ];
    }

    $map.setPaintProperty("interventions-points", "circle-color", color);
    $map.setPaintProperty("interventions-lines", "line-color", color);
    $map.setPaintProperty("interventions-polygons", "fill-color", color);
    $map.setPaintProperty(
      "interventions-polygon-outlines",
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
  bind:value={colorInterventions}
  on:change={changeStyle}
/>

<Legend rows={legendRows} />
