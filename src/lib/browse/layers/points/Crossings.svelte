<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { overwriteCircleLayer, overwritePmtilesSource } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  const name = "crossings";
  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    const crossingType = feature.properties.crossing;
    let description =
      descriptions.get(crossingType) ??
      `Crossing with unknown type (${crossingType})`;
    return `<p>${description}. Click for details.</p>`;
  }

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

  overwritePmtilesSource(
    $map,
    name,
    `${publicResourceBaseUrl()}/v1/${name}.pmtiles`
  );
  let color = colors[name];

  overwriteCircleLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color: color,
    radius: ["interpolate", ["linear"], ["zoom"], 1, 2, 8, 3, 13, 10],
  });

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    window.open(
      `http://openstreetmap.org/node/${e.detail.properties.osm_id}`,
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

<InteractiveLayer
  layer={name}
  {tooltip}
  {show}
  clickable={true}
  on:click={onClick}
/>
