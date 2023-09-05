<script lang="ts">
  import mask from "@turf/mask";
  import type { FeatureCollection, Polygon } from "geojson";
  import { bbox, overwritePolygonLayer, overwriteSource } from "lib/maplibre";
  import { map } from "stores";
  import { getContext } from "svelte";

  export let boundaryGeojson: FeatureCollection<Polygon>;

  const setCamera = getContext("setCamera");

  if (setCamera) {
    $map.fitBounds(bbox(boundaryGeojson), {
      padding: 20,
      animate: false,
    });
  }

  overwriteSource($map, "boundary", mask(boundaryGeojson));
  overwritePolygonLayer($map, {
    id: "boundary",
    source: "boundary",
    color: "black",
    opacity: 0.5,
  });
</script>
