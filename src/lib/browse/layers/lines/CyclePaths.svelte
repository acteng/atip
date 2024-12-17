<script lang="ts">
  import { Checkbox, CheckboxGroup } from "govuk-svelte";
  import { ColorLegend, Popup, publicResourceBaseUrl } from "lib/common";
  import { constructMatchExpression, layerId } from "lib/maplibre";
  import type { ExpressionSpecification } from "maplibre-gl";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsmLicense from "../OsmLicense.svelte";
  import { customUrlState } from "../url";

  let name = "cycle_paths";
  let title = "Cycle paths";

  type State = {
    show: boolean;
    track: boolean;
    lane: boolean;
    shared_use_segregated: boolean;
    shared_use_unsegregated: boolean;
  };
  let keys = [
    "track",
    "lane",
    "shared_use_segregated",
    "shared_use_unsegregated",
  ] as const;
  let defaultState = {
    show: false,
    track: true,
    lane: true,
    shared_use_segregated: true,
    shared_use_unsegregated: true,
  };
  function stringify(x: State): string | null {
    return x.show ? keys.filter((c) => x[c]).join(",") : null;
  }
  function parse(x: string): State {
    return {
      show: true,
      track: x.includes("track"),
      lane: x.includes("lane"),
      shared_use_segregated: x.includes("shared_use_segregated"),
      shared_use_unsegregated: x.includes("shared_use_unsegregated"),
    };
  }

  let state = customUrlState(name, defaultState, stringify, parse);

  let legend = [
    ["track", "Separated tracks", colors.cycle_paths.track],
    ["lane", "Unprotected lanes", colors.cycle_paths.lane],
    [
      "shared_use_segregated",
      "Shared-use (segregated)",
      colors.cycle_paths.shared_use_segregated,
    ],
    [
      "shared_use_unsegregated",
      "Shared-use (unsegregated)",
      colors.cycle_paths.shared_use_unsegregated,
    ],
  ] as const;

  function tooltip(props: { [name: string]: any }): [string, string, string] {
    // @ts-expect-error Write types for the feature properties
    let kind = {
      track: "Separated track",
      lane: "Unprotected lane",
      shared_use_segregated: "Shared-use (segregated)",
      shared_use_unsegregated: "Shared-use (unsegregated)",
    }[props.kind];
    // @ts-expect-error Write types for the feature properties
    let direction = {
      "one-way": "&uarr;",
      "two-way": "&#8597;",
      unknown: "",
    }[props.direction];
    let width = props.width == "unknown" ? "unknown" : `${props.width} meters`;
    return [kind, `${direction} ${props.direction}`, width];
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `http://openstreetmap.org/way/${e.detail.features[0].properties!.osm_id}`,
      "_blank",
    );
  }

  function makeFilter(state: State): ExpressionSpecification {
    let include = keys.filter((l) => state[l]);
    return ["in", ["get", "kind"], ["literal", include]];
  }
</script>

<LayerControl {name} {title} bind:show={$state.show}>
  <span slot="help">
    <p>
      This shows different types of cycle path, according to OpenStreetMap (as
      of 20 October 2024).
    </p>
    <ul>
      <li>
        <b>Separated tracks</b>
        include fully or partly segregated cycletracks alongside a carriageway, stepped
        cycletracks, and tracks off the carriageway entirely. They're also separated
        from foot traffic.
      </li>
      <li>
        <b>Unprotected lanes</b>
        are mandatory or advisory lanes on the carriageway, without any physical
        protection. They do not included shared bus lanes.
      </li>
      <li>
        <b>Shared-use</b>
        paths are split between cycle and foot traffic, and are separated from motor
        traffic somehow. There can be segregation between cyclists and pedestrians
        or not.
      </li>
    </ul>
    <p>
      Note there are many known limitations with this layer. Data in
      OpenStreetMap can be missing, mapped twice, or mapped incorrectly. Our
      processing is also imperfect. You can click a segment to see full
      OpenStreetMap data. Please do report issues with the classification or
      data.
    </p>
    <OsmLicense />
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
    paint={{
      "line-color": constructMatchExpression(
        ["get", "kind"],
        {
          track: colors.cycle_paths.track,
          lane: colors.cycle_paths.lane,
          shared_use_segregated: colors.cycle_paths.shared_use_segregated,
          shared_use_unsegregated: colors.cycle_paths.shared_use_unsegregated,
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
    manageHoverState
    eventsIfTopMost
    hoverCursor="pointer"
    on:click={onClick}
  >
    <Popup let:props>
      {@const [kind, direction, width] = tooltip(props)}
      <h2>{kind}</h2>
      <p>
        Direction: <b>{@html direction}</b>
      </p>
      <p>
        Width: <b>{width}</b>
      </p>
    </Popup>
  </LineLayer>
</VectorTileSource>
