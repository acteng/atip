<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    CircleLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "crossings";
  let color = colors.crossings;

  let show = false;

  function tooltip(props: { [name: string]: any }): string {
    const descriptions: Map<string, string> = new Map([
      [
        "no",
        "Location where crossing is impossible/illegal but where there is a clear desire line to cross",
      ],
      ["traffic_signals", "Signalised crossing"],
      ["marked", "Crossing with no traffic signals"],
      ["uncontrolled", "Crossing with no traffic signals"],
      ["unmarked", "Crossing with no markings or signals"],
      ["zebra", "Zebra crossing"],
      ["island", "Crossing with an island"],
      [
        "informal",
        "Informal crossing with an obvious desire line, but no official infrastructure to support it",
      ],
    ]);

    return (
      descriptions.get(props.crossing) ??
      `Unknown crossing type (${props.crossing})`
    );
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `http://openstreetmap.org/node/${
        e.detail.features[0].properties!.osm_id
      }`,
      "_blank"
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
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

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <CircleLayer
    id={name}
    sourceLayer={name}
    paint={{
      "circle-color": color,
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
    on:click={onClick}
  >
    <Popup let:props>
      <p>{tooltip(props)}</p>
    </Popup>
  </CircleLayer>
</VectorTileSource>
