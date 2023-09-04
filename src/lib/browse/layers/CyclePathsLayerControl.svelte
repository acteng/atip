<script lang="ts">
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "../../../stores";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "../../common";
  import { Checkbox } from "../../govuk";
  import {
    constructMatchExpression,
    hoveredToggle,
    overwriteLineLayer,
    overwritePmtilesSource,
  } from "../../maplibre";
  import { colors } from "../colors";

  let name = "cycle_paths";

  let legend = [
    ["Separated tracks", colors.cycle_paths.track],
    ["Unprotected lanes", colors.cycle_paths.lane],
    ["Shared-use (segregated)", colors.cycle_paths.shared_use_segregated],
    ["Shared-use (unsegregated)", colors.cycle_paths.shared_use_unsegregated],
  ];

  overwritePmtilesSource(
    $map,
    name,
    `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.pmtiles`
  );

  overwriteLineLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color: constructMatchExpression(
      ["get", "kind"],
      {
        track: colors.cycle_paths.track,
        lane: colors.cycle_paths.lane,
        shared_use_segregated: colors.cycle_paths.shared_use_segregated,
        shared_use_unsegregated: colors.cycle_paths.shared_use_unsegregated,
      },
      "red"
    ),
    width: [
      "interpolate",
      ["exponential", 1.6],
      ["zoom"],
      3,
      1.0,
      7,
      2.0,
      18,
      20.0,
    ],
    opacity: hoveredToggle(0.5, 1.0),
  });

  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    // @ts-ignore Write types for the feature properties
    let kind = {
      track: "Separated track",
      lane: "Unprotected lane",
      shared_use_segregated: "Shared-use (segregated)",
      shared_use_unsegregated: "Shared-use (unsegregated)",
    }[feature.properties.kind];
    // @ts-ignore Write types for the feature properties
    let direction = {
      "one-way": "&uarr;",
      "two-way": "&#8597;",
      unknown: "",
    }[feature.properties.direction];
    let width =
      feature.properties.width == "unknown"
        ? "unknown"
        : `${feature.properties.width} meters`;

    let x = `<h2>${kind}</h2>`;
    x += `<p>Direction: <b>${direction} ${feature.properties.direction}</b></p>`;
    x += `<p>Width: <b>${width}</b></p>`;
    return x;
  }

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    window.open(
      `http://openstreetmap.org/way/${e.detail.properties.osm_id}`,
      "_blank"
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  Cycle paths
  <span slot="right">
    <HelpButton>
      <p>
        This shows different types of cycle path, according to OpenStreetMap (as
        of 15 August 2023).
      </p>
      <ul>
        <li>
          <b>Separated tracks</b>
          include fully or partly segregated cycletracks alongside a carriageway,
          stepped cycletracks, and tracks off the carriageway entirely. They're also
          separated from foot traffic.
        </li>
        <li>
          <b>Unprotected lanes</b>
          are mandatory or advisory lanes on the carriageway, without any physical
          protection. They do not included shared bus lanes.
        </li>
        <li>
          <b>Shared-use</b>
          paths are split between cycle and foot traffic, and are separated from
          motor traffic somehow. There can be segregation between cyclists and pedestrians
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
      <p>
        License: <ExternalLink href="https://www.openstreetmap.org/copyright">
          Open Data Commons Open Database License
        </ExternalLink>
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  {#each legend as [label, color]}
    <div>
      <ColorLegend {color} />
      {label}
    </div>
  {/each}
{/if}

<InteractiveLayer layer={name} {tooltip} {show} clickable on:click={onClick} />
