<script lang="ts">
  import { Checkbox, CheckboxGroup } from "govuk-svelte";
  import {
    ColorLegend,
    ExternalLink,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { constructMatchExpression, layerId } from "lib/maplibre";
  import type { ExpressionSpecification } from "maplibre-gl";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { customUrlState } from "../url";

  let name = "rights_of_way";
  let title = "Rights of Way";

  type State = {
    show: boolean;
    footpath: boolean;
    bridleway: boolean;
    restricted_byway: boolean;
    boat: boolean;
  };
  let keys = ["footpath", "bridleway", "restricted_byway", "boat"] as const;
  let defaultState = {
    show: false,
    footpath: true,
    bridleway: true,
    restricted_byway: true,
    boat: true,
  };
  function stringify(x: State): string | null {
    return x.show ? keys.filter((c) => x[c]).join(",") : null;
  }
  function parse(x: string): State {
    return {
      show: true,
      footpath: x.includes("footpath"),
      bridleway: x.includes("bridleway"),
      restricted_byway: x.includes("restricted_byway"),
      boat: x.includes("boat"),
    };
  }

  let state = customUrlState(name, defaultState, stringify, parse);

  let legend = [
    ["footpath", "Footpath", colors.rights_of_way.footpath],
    ["bridleway", "Bridleway", colors.rights_of_way.bridleway],
    [
      "restricted_byway",
      "Restricted byway",
      colors.rights_of_way.restricted_byway,
    ],
    ["boat", "Byway open to all traffic", colors.rights_of_way.boat],
  ] as const;

  function makeFilter(state: State): ExpressionSpecification {
    let include = keys
      .filter((l) => state[l])
      .map((k) => {
        return {
          footpath: "footpath",
          bridleway: "bridleway",
          restricted_byway: "restricted byway",
          boat: "byway open to all traffic",
        }[k];
      });
    return ["in", ["get", "kind"], ["literal", include]];
  }
</script>

<LayerControl {name} {title} bind:show={$state.show}>
  <span slot="help">
    <p>
      These public rights of way are aggregated from 137 authorities, thanks to <ExternalLink
        href="https://www.rowmaps.com"
      >
        rowmaps.com
      </ExternalLink>. The licenses for each authority may vary, but most use
      the Open Government License v3 or Creative Commons.
    </p>
    <p>This data is current as of 15 November, 2024.</p>
    <OsOglLicense />
  </span>

  <div slot="controls" style="border: 1px solid black; padding: 8px;">
    <CheckboxGroup small>
      {#each legend as [kind, label, color]}
        <Checkbox bind:checked={$state[kind]}>
          <ColorLegend {color} />
          {label}
        </Checkbox>
      {/each}
    </CheckboxGroup>
  </div>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": constructMatchExpression(
        ["get", "kind"],
        {
          footpath: colors.rights_of_way.footpath,
          bridleway: colors.rights_of_way.bridleway,
          "restricted byway": colors.rights_of_way.restricted_byway,
          "byway open to all traffic": colors.rights_of_way.boat,
        },
        "red",
      ),
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: $state.show ? "visible" : "none",
    }}
    filter={makeFilter($state)}
  >
    <Popup let:props>
      <p>{props.kind}</p>
    </Popup>
  </LineLayer>
</VectorTileSource>
