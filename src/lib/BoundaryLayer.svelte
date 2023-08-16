<script lang="ts">
  import mask from "@turf/mask";
  import type { FeatureCollection, Polygon } from "geojson";
  import { getContext } from "svelte";
  import { map } from "../stores";
  import { MapLibreUtils } from "./maplibre";

  export let boundaryGeojson: FeatureCollection<Polygon>;

  const setCamera = getContext("setCamera");

  if (setCamera) {
    $map.fitBounds(MapLibreUtils.bbox(boundaryGeojson), {
      padding: 20,
      animate: false,
    });
  }

  MapLibreUtils.overwriteSource($map, "boundary", mask(boundaryGeojson));
  MapLibreUtils.overwritePolygonLayer($map, {
    id: "boundary",
    source: "boundary",
    color: "black",
    opacity: 0.5,
  });
</script>
