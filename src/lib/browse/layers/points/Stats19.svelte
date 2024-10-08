<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import {
    ExternalLink,
    HelpButton,
    Legend,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox, CheckboxGroup } from "govuk-svelte";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import type { ExpressionSpecification } from "maplibre-gl";
  import {
    CircleLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { customUrlState } from "../url";

  let name = "stats19";
  let title = "Stats19";

  type State = {
    show: boolean;
    pedestrians: boolean;
    cyclists: boolean;
    horseRiders: boolean;
    other: boolean;
    minYear: number;
    maxYear: number;
  };
  let keys = ["pedestrians", "cyclists", "horseRiders", "other"] as const;
  let defaultState = {
    show: false,
    pedestrians: true,
    cyclists: true,
    horseRiders: true,
    other: false,
    minYear: 2017,
    maxYear: 2022,
  };
  function stringify(x: State): string | null {
    if (!x.show) {
      return null;
    }
    let bools = keys.filter((c) => x[c]).join(",");
    return `${bools}/${x.minYear}/${x.maxYear}`;
  }
  function parse(x: string): State {
    let [bools, minYear, maxYear] = x.split("/");
    return {
      show: true,
      pedestrians: bools.includes("pedestrians"),
      cyclists: bools.includes("cyclists"),
      horseRiders: bools.includes("horseRiders"),
      other: bools.includes("other"),
      minYear: parseInt(minYear),
      maxYear: parseInt(maxYear),
    };
  }

  let state = customUrlState(name, defaultState, stringify, parse);

  $: filter = makeFilter(
    $state.minYear,
    $state.maxYear,
    $state.pedestrians,
    $state.cyclists,
    $state.horseRiders,
    $state.other,
  );
  function makeFilter(
    _a: number,
    _b: number,
    _c: boolean,
    _d: boolean,
    _e: boolean,
    _f: boolean,
  ): ExpressionSpecification {
    let includeTypes: ExpressionSpecification = ["any"];
    if ($state.pedestrians) {
      includeTypes.push(["get", "pedestrian"]);
    }
    if ($state.cyclists) {
      includeTypes.push(["get", "cyclist"]);
    }
    if ($state.horseRiders) {
      includeTypes.push(["get", "horse_rider"]);
    }
    if ($state.other) {
      includeTypes.push(["get", "other"]);
    }

    return [
      "all",
      [">=", ["get", "year"], $state.minYear],
      ["<=", ["get", "year"], $state.maxYear],
      includeTypes,
    ];
  }

  function casualtyTypes(props: { [name: string]: any }): string {
    let list = [];
    if (props.pedestrian) {
      list.push("pedestrian");
    }
    if (props.cyclist) {
      list.push("cyclist");
    }
    if (props.horse_rider) {
      list.push("horse rider");
    }
    if (props.other) {
      list.push("other");
    }
    return list.join(", ");
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://www.cyclestreets.net/collisions/reports/${
        e.detail.features[0].properties!.accident_index
      }`,
      "_blank",
    );
  }

  // From
  // https://data.dft.gov.uk/road-accidents-safety-data/dft-road-casualty-statistics-road-safety-open-dataset-data-guide-2023.xlsx.
  // The "not a pedestrian", "data missing", and "unknown" cases are filtered out
  // upstream.
  let pedestrianLocation: { [name: number]: string } = {
    1: "Crossing on pedestrian crossing facility",
    2: "Crossing in zig-zag approach lines",
    3: "Crossing in zig-zag exit lines",
    4: "Crossing elsewhere within 50m. of pedestrian crossing",
    5: "In carriageway, crossing elsewhere",
    6: "On footway or verge",
    7: "On refuge, central island or central reservation",
    8: "In centre of carriageway - not on refuge, island or central reservation",
    9: "In carriageway, not crossing",
  };
  let pedestrianMovement: { [name: number]: string } = {
    1: "Crossing from driver's nearside",
    2: "Crossing from nearside - masked by parked or stationary vehicle",
    3: "Crossing from driver's offside",
    4: "Crossing from offside - masked by parked or stationary vehicle",
    5: "In carriageway, stationary - not crossing (standing or playing)",
    6: "In carriageway, stationary - not crossing (standing or playing - masked by parked or stationary vehicle)",
    7: "Walking along in carriageway, facing traffic",
    8: "Walking along in carriageway, back to traffic",
  };
  let severity: { [name: number]: string } = {
    1: "Fatal",
    2: "Serious",
    3: "Slight",
  };

  let fatalColor = colors.sequential_low_to_high[4];
  let seriousColor = colors.sequential_low_to_high[2];
  let slightColor = colors.sequential_low_to_high[0];
  let severityLegend: [string, string][] = [
    ["Fatal", fatalColor],
    ["Serious", seriousColor],
    ["Slight", slightColor],
  ];
</script>

<LayerControl {name} {title} bind:show={$state.show}>
  <Checkbox bind:checked={$state.show}>
    {title}
    <span slot="right">
      <HelpButton>
        <p>
          This layer shows collisions recorded in the <ExternalLink
            href="https://www.data.gov.uk/dataset/cb7ae6f0-4be6-4935-9277-47e5ce24a11f/road-safety-data"
          >
            DfT stats19
          </ExternalLink> dataset. Please note these limitations:
        </p>
        <ul>
          <li>Only collisions between 2017 and 2022 are included</li>
          <li>
            This tool is intended to be used at high-zoom levels, while
            inspecting a scheme or development area. Not all points are shown at
            lower zoom levels. Do not use this to look for trends across a city
            or region scale.
          </li>
          <li>
            Approximately 150 collisions from the source data aren't included,
            due to problems with the recorded location
          </li>
          <li>The "pedestrians" category also include mobility scooters</li>
          <li>
            All limitations <ExternalLink
              href="https://www.gov.uk/guidance/road-accident-and-safety-statistics-guidance"
            >
              documented by DfT
            </ExternalLink> also apply. Not all collisions or near misses are reported.
            There's nuance with the severity categories.
          </li>
        </ul>
        <p>
          You can click a point to open the full report, thanks to CycleStreets.
        </p>
        <OsOglLicense />
      </HelpButton>
    </span>
  </Checkbox>
  {#if $state.show}
    <div style="border: 1px solid black; padding: 8px;">
      <CheckboxGroup small>
        <Checkbox bind:checked={$state.pedestrians}>Pedestrians</Checkbox>
        <Checkbox bind:checked={$state.cyclists}>Cyclists</Checkbox>
        <Checkbox bind:checked={$state.horseRiders}>Horse riders</Checkbox>
        <Checkbox bind:checked={$state.other}>Other</Checkbox>
      </CheckboxGroup>
      <div>
        Filter years:
        <input
          type="number"
          min={2017}
          max={2022}
          bind:value={$state.minYear}
        />
        -
        <input
          type="number"
          min={2017}
          max={2022}
          bind:value={$state.maxYear}
        />
      </div>
      <Legend rows={severityLegend} />
    </div>
  {/if}
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <CircleLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "circle-color": makeColorRamp(
        ["get", "severity"],
        [1, 2, 3],
        [fatalColor, seriousColor, slightColor],
      ),
      "circle-opacity": 0.9,
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        1,
        2,
        8,
        3,
        13,
        15,
      ],
      "circle-stroke-color": "black",
      "circle-stroke-width": 0.1,
    }}
    {filter}
    layout={{
      visibility: $state.show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
    on:click={onClick}
  >
    <Popup let:props>
      <p>
        Year: <b>{props.year}</b>
      </p>
      <p>
        Severity: <b>{severity[props.severity]}</b>
      </p>
      <p>
        Casualties: <b>{casualtyTypes(props)}</b>
      </p>
      {#if props.pedestrian_location}
        <p>
          Pedestrian location: <b>
            {pedestrianLocation[props.pedestrian_location]}
          </b>
        </p>
      {/if}
      {#if props.pedestrian_movement}
        <p>
          Pedestrian movement: <b>
            {pedestrianMovement[props.pedestrian_movement]}
          </b>
        </p>
      {/if}
      <p>Click to open full report in CycleStreets</p>
    </Popup>
  </CircleLayer>
</VectorTileSource>

<style>
  input {
    width: 4em;
  }
</style>
