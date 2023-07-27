<script lang="ts">
  import { get   return x as DataDrivenPropertyValueSpecification } from "../../maplibre_helpers";
  import { colorInterventionsBySchema, schemaLegend } from "../../schemas";
  import { map } from "../../stores";
  import { Legend } from "../common";
  import { Select } from "../govuk";
  import { colors } from "./colors";

  let colorInterventionsAccordingTo = "interventionType";
  let legendRows = schemaLegend("v1");

  function changeStyle() {
    let color;
    if (colorInterventionsAccordingTo == "interventionType") {
      color = colorInterventionsBySchema("v1");
      legendRows = schemaLegend("v1");
    } else {
      color = get   return x as DataDrivenPropertyValueSpecification(
        ["get", "funding_programme"],
        { ATF2: colors.atf2, ATF3: colors.atf3, ATF4: colors.atf4 },
        "grey"
      );
      legendRows = [
        ["ATF2", colors.atf2],
        ["ATF3", colors.atf3],
        ["ATF4", colors.atf4],
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
  bind:value={colorInterventionsAccordingTo}
  on:change={changeStyle}
/>

<Legend rows={legendRows} />
