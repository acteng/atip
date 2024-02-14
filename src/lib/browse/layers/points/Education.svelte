<script lang="ts">
  import {
    ColorLegend,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox, CheckboxGroup } from "lib/govuk";
  import { constructMatchExpression, layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    VectorTileSource,
    type ExpressionSpecification,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let showGroup = false;
  let name = "education";

  const showLayer: { [name: string]: boolean } = {
    school: true,
    college: true,
    university: true,
  };
  function makeFilter(showLayer: {
    [name: string]: boolean;
  }): ExpressionSpecification {
    let include = Object.keys(showLayer).filter((l) => showLayer[l]);
    return ["in", ["get", "type"], ["literal", include]];
  }
</script>

<Checkbox id={"education"} bind:checked={showGroup}>
  Education
  <span slot="right">
    <HelpButton>
      <p>
        This shows different places of education according to OpenStreetMap (as
        of 07 February 2024).
      </p>
      <OsmLicense />
    </HelpButton>
  </span>
</Checkbox>
{#if showGroup}
  <div style="border: 1px solid black; padding: 8px;">
    <CheckboxGroup>
      <Checkbox id={"school"} bind:checked={showLayer.school}>
        <ColorLegend color={colors.education.schools} />
        Schools
      </Checkbox>
      <Checkbox id={"college"} bind:checked={showLayer.college}>
        <ColorLegend color={colors.education.colleges} />
        Colleges
      </Checkbox>
      <Checkbox id={"university"} bind:checked={showLayer.university}>
        <ColorLegend color={colors.education.universities} />
        Universities
      </Checkbox>
    </CheckboxGroup>
  </div>
{/if}

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "fill-color": constructMatchExpression(
        ["get", "type"],
        {
          school: colors.education.schools,
          college: colors.education.colleges,
          university: colors.education.universities,
        },
        "grey",
      ),
      "fill-opacity": hoverStateFilter(0.7, 1.0),
    }}
    layout={{
      visibility: showGroup ? "visible" : "none",
    }}
    filter={makeFilter(showLayer)}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>
        {props.name ?? `Unnamed institution`}
      </p>
    </Popup>
  </FillLayer>
</VectorTileSource>
