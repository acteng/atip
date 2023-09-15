<script lang="ts">
  import { circleRadius } from "colors";
  import { ExternalLink } from "lib/common";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import crossingsUrl from "../../../../assets/crossings.geojson?url";
  import PointAmenityLayerControl from "./PointAmenityLayerControl.svelte";

  const name = "crossings";

  function tooltip(feature: MapGeoJSONFeature): string {
    const crossingTypeString: string = feature.properties["crossing"];
    if (crossingTypeString === "no")
      return "Location where crossing is impossible/illegal but where there is a clear desire line to cross.";
    let result = "Crossing with the following features.";
    const initialTooltipSentence =
      initialTooltipSentences.get(crossingTypeString);
    if (initialTooltipSentence) result = initialTooltipSentence;

    return (
      result +
      `. More information can be found by clicking.`
    );
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
      "Infomral crossing where there crossing is not intended by the municipality but there is an obviously desire line",
    ],
  ]);

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    window.open(
      `http://openstreetmap.org/node/${e.detail.properties.osm_id}`,
      "_blank"
    );
  }
</script>

<PointAmenityLayerControl
  {name}
  pluralNoun="Crossings"
  {circleRadius}
  url={crossingsUrl}
  {tooltip}
  {onClick}
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:crossing"
    >
      crossing
    </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
  </p>

  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</PointAmenityLayerControl>
