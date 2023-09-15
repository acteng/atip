<script lang="ts">
  import { circleRadius } from "colors";
  import { ExternalLink } from "lib/common";
  import { overwriteCircleLayer, overwriteSource } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors } from "../colors";
  import PointAmenityLayerControl from "./PointAmenityLayerControl.svelte";

  const name = "railway_stations";
  const url = `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.geojson`;

  overwriteSource($map, name, url);
  let color = colors[name];

  overwriteCircleLayer($map, {
    id: name,
    source: name,
    color: color,
    radius: circleRadius / 2,
    // TODO Outline?
  });

  function tooltip(feature: MapGeoJSONFeature): string {
    let name = feature.properties.name ?? "Unnamed railway station";
    return `<p>${name}</p>`;
  }
</script>

<PointAmenityLayerControl
  {name}
  pluralNoun="Railway stations"
  {circleRadius}
  {tooltip}
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:railway%3Dstation"
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
