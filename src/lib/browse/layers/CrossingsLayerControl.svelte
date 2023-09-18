<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { overwriteCircleLayer, overwritePmtilesSource } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors } from "../colors";

  const name = "crossings";
  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    const crossingTypeString = feature.properties.crossing;
    if (crossingTypeString === "no")
      return "Location where crossing is impossible/illegal but where there is a clear desire line to cross.";
    let result = "Crossing with the following features.";
    const initialTooltipSentence =
      initialTooltipSentences.get(crossingTypeString);
    if (initialTooltipSentence) result = initialTooltipSentence;

    return `<p>${result}. Click for details.</p>`;
  }

  const initialTooltipSentences: Map<string, string> = new Map<string, string>([
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
    `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.pmtiles`
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

      <p>
        License: <ExternalLink href="https://www.openstreetmap.org/copyright">
          Open Data Commons Open Database License
        </ExternalLink>
      </p>
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
