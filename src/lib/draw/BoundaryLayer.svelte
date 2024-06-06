<script lang="ts">
  import mask from "@turf/mask";
  import type { FeatureCollection, MultiPolygon, Polygon } from "geojson";
  import { bbox, layerId } from "lib/maplibre";
  import { map } from "stores";
  import { getContext } from "svelte";
  import { FillLayer, GeoJSON } from "svelte-maplibre";

  export let boundaryGeojson: FeatureCollection<Polygon | MultiPolygon>;

  // If the URL didn't initially have a viewport set, fit the boundary
  if (getContext("setCamera")) {
    $map.fitBounds(bbox(boundaryGeojson), {
      padding: 20,
      animate: false,
    });
  }
</script>

<GeoJSON data={mask(boundaryGeojson)}>
  <FillLayer
    {...layerId("boundary")}
    paint={{
      "fill-color": "black",
      "fill-opacity": 0.5,
    }}
  />
</GeoJSON>
