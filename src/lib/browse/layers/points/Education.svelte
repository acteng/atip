<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import { ColorLegend, Popup, publicResourceBaseUrl } from "lib/common";
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
  import { customUrlState } from "../url";

  let name = "education";
  let title = "Education";

  type State = {
    show: boolean;
    school: boolean;
    college: boolean;
    university: boolean;
  };
  let keys = ["school", "college", "university"] as const;
  let defaultState = {
    show: false,
    school: true,
    college: true,
    university: true,
  };
  function stringify(x: State): string | null {
    return x.show ? keys.filter((c) => x[c]).join(",") : null;
  }
  function parse(x: string): State {
    return {
      show: true,
      school: x.includes("school"),
      college: x.includes("college"),
      university: x.includes("university"),
    };
  }

  let state = customUrlState(name, defaultState, stringify, parse);

  function makeFilter(state: State): ExpressionSpecification {
    let include = keys.filter((l) => state[l]);
    return ["in", ["get", "type"], ["literal", include]];
  }
</script>

<LayerControl {name} {title} bind:show={$state.show}>
  <span slot="help">
    <p>
      This shows different places of education according to OpenStreetMap (as of
      07 February 2024).
    </p>
    <OsmLicense />
  </span>

  <div slot="controls" style="border: 1px solid black; padding: 8px;">
    <CheckboxGroup small>
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
</LayerControl>

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
      visibility: $state.show ? "visible" : "none",
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
