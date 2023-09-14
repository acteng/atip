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
    let result = "Crossing with the following features: ";
    const initialTooltipSentence = initialTooltipSentences.get(crossingTypeString)
    if(initialTooltipSentence) result = initialTooltipSentence
    if(crossingTypeString === "traffic_signals" || feature.properties["crossing:signals"] === "yes") {
        result = augmentWithTrafficSignalFeatures(result, feature)
    }

    return result;
  }

  const initialTooltipSentences: Map<string, string> = new Map<string, string>([
    ["traffic_signals", "Signalised crossing with the following features: "],
    ["marked", "Crossing with no traffic signals and the following features: "],
    ["uncontrolled", "Crossing with no traffic signals and the following features: "],
    ["unmarked", "Crossing with no markings or signals and the following features: "],
    ["zebra", "Zebra crossing with the following the features: "],
    ["island", "Crossing with an island and the following features: "],
    ["informal", "Infomral crossing where there crossing is not intended by the municipality but there is an obviously desire line: "],
  ]);

  const kerbFeatureStrings: Map<string, string> = new Map<string, string>([
    ["yes", "Signalised crossing with the following features: "],
    ["no", "Crossing with no traffic signals and the following features: "],
    ["raised", "Crossing with no traffic signals and the following features: "],
    ["regular", "Crossing with no markings or signals and the following features: "],
    ["rolled", "Zebra crossing with the following the features: "],
    ["lower", "Crossing with an island and the following features: "],
    ["flush", "Infomral crossing where there crossing is not intended by the municipality but there is an obviously desire line: "],
  ]);

  const tactilePavingStrings: Map<string, string> = new Map<string, string>([
    ["yes", "tactile paving to indicate to hard-of-sight users that there is a crossing, "],
    ["no", "no tacticle paving to indicate to hard-of-sight users that there is a crossing, "],
  ]);

  function augmentWithTrafficSignalFeatures(tooltipSoFar:string, feature:MapGeoJSONFeature) {
    const withoutSound = feature.properties["traffic_signals:sound"] === "yes" ? "": "out"; 
    return tooltipSoFar + `traffic signals with${withoutSound} sound`;
  }
</script>

<PointAmenityLayerControl
  {name}
  pluralNoun="Crossings"
  {circleRadius}
  url={crossingsUrl}
  {tooltip}
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:crossing"
    >
      railway station
    </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
  </p>

  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</PointAmenityLayerControl>
