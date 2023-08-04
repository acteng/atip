<script lang="ts">
  import type { FeatureCollection } from "@turf/helpers";
  import { hoveredToggle } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import { ExternalLink } from "../common";
  import PointAmenityLayerControl from "./PointAmenityLayerControl.svelte";
  import { getRailwayStationsGeoJson } from "./railway_geojson_data_getter";

  const name = "railwayStations";

  const addRailwayLayer = (data: FeatureCollection) => {
    let source = name;
    let layer = name;
    $map.addSource(source, {
      type: "geojson",
      data: data,
      generateId: true,
    });
    $map.addLayer({
      id: layer,
      source: source,
      type: "fill",
      paint: {
        "fill-color": "rgb(200, 100, 240)",
        "fill-outline-color": "rgb(200, 100, 240)",
        "fill-opacity": hoveredToggle(0.8, 0.4),
      },
    });
  };

  getRailwayStationsGeoJson().then(addRailwayLayer);
</script>

<PointAmenityLayerControl
  name={name}
  singularNoun="railway station"
  pluralNoun="Railway stations"
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:railway%3Dstation"
    >
      railway station
    </ExternalLink> data from OpenStreetMap.
  </p>

  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</PointAmenityLayerControl>
