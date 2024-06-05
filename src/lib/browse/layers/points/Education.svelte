<script lang="ts">
  import {
    ColorLegend,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox, CheckboxGroup } from "govuk-svelte";
  import { constructMatchExpression, layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    VectorTileSource,
    type ExpressionSpecification,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";
  import { customUrl } from "../url";

  let name = "education";

  type State = {
    group: boolean;
    school: boolean;
    college: boolean;
    university: boolean;
  };
  let keys = ["school", "college", "university"] as const;
  let defaultState = {
    group: false,
    school: true,
    college: true,
    university: true,
  };
  function stringify(x: State): string | null {
    if (!x.group) {
      return null;
    }
    return keys.filter((c) => x[c]).join(",");
  }
  function parse(result: string): State {
    return {
      group: true,
      school: result.includes("school"),
      college: result.includes("college"),
      university: result.includes("university"),
    };
  }

  let state = customUrl(name, defaultState, stringify, parse);

  function makeFilter(state: State): ExpressionSpecification {
    let include = keys.filter((l) => state[l]);
    return ["in", ["get", "type"], ["literal", include]];
  }
</script>

<Checkbox bind:checked={$state.group}>
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
{#if $state.group}
  <div style="border: 1px solid black; padding: 8px;">
    <CheckboxGroup>
      <Checkbox bind:checked={$state.school}>
        <ColorLegend color={colors.education.schools} />
        Schools
      </Checkbox>
      <Checkbox bind:checked={$state.college}>
        <ColorLegend color={colors.education.colleges} />
        Colleges
      </Checkbox>
      <Checkbox bind:checked={$state.university}>
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
      visibility: $state.group ? "visible" : "none",
    }}
    filter={makeFilter($state)}
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
