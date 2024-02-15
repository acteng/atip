<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Legend,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { constructMatchExpression, layerId } from "lib/maplibre";
  import {
    CircleLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "crossings";

  let show = false;

  function tooltip(props: { [name: string]: any }): string {
    let descriptions: Record<string, string> = {
      no: "Location where crossing is impossible/illegal but where there is a clear desire line to cross",
      traffic_signals: "Signalised crossing",
      marked: "Crossing with no traffic signals",
      uncontrolled: "Crossing with no traffic signals",
      unmarked: "Crossing with no markings or signals",
      zebra: "Zebra crossing",
      island: "Crossing with an island",
      informal:
        "Informal crossing with an obvious desire line, but no official infrastructure to support it",
    };
    return (
      descriptions[props.crossing] ??
      `Unknown crossing type (${props.crossing})`
    );
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `http://openstreetmap.org/node/${
        e.detail.features[0].properties!.osm_id
      }`,
      "_blank",
    );
  }

  let legend: [string, string][] = [
    ["Signalized", colors.signalized_crossing],
    ["Other", colors.other_crossing],
  ];
</script>

<Checkbox bind:checked={show}>
  Crossings
  <span slot="right">
    <HelpButton>
      <p>
        This shows <ExternalLink
          href="https://wiki.openstreetmap.org/wiki/Key:crossing"
        >
          crossing
        </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
      </p>
      <OsmLicense />
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <Legend rows={legend} />
{/if}

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <CircleLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "circle-color": constructMatchExpression(
        ["get", "crossing"],
        {
          traffic_signals: colors.signalized_crossing,
        },
        colors.other_crossing,
      ),
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        1,
        2,
        8,
        3,
        13,
        10,
      ],
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
    on:click={onClick}
  >
    <Popup let:props>
      <p>{tooltip(props)}</p>
    </Popup>
  </CircleLayer>
</VectorTileSource>
