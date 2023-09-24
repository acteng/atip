<script lang="ts">
  import type { Feature } from "geojson";
  import {
    ColorLegend,
    HelpButton,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { constructMatchExpression } from "lib/maplibre";
  import {
    VectorTileSource,
    hoverStateFilter,
    LineLayer,
    Popup,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "cycle_paths";

  let legend = [
    ["Separated tracks", colors.cycle_paths.track],
    ["Unprotected lanes", colors.cycle_paths.lane],
    ["Shared-use (segregated)", colors.cycle_paths.shared_use_segregated],
    ["Shared-use (unsegregated)", colors.cycle_paths.shared_use_unsegregated],
  ];

  let show = false;
  $: visibility = show ? "visible" : "none";

  function tooltip(feature: Feature): [string, string, string] {
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
    return [kind, `${direction} ${feature.properties.direction}`, width];
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `http://openstreetmap.org/way/${e.detail.features[0].properties.osm_id}`,
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
      <OsmLicense />
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

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    id={name}
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
        "red"
      ),
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility,
    }}
    hoverCursor="pointer"
    on:click={onClick}
  >
    <Popup openOn="hover" let:features>
      {@const [kind, direction, width] = tooltip(features[0])}
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
