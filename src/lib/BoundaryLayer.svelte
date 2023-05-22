<script lang="ts">
  import type { FeatureCollection, Polygon } from "geojson";
  import mask from "@turf/mask";
  import {
    overwriteSource,
    overwritePolygonLayer,
    bbox,
  } from "../maplibre_helpers";
  import { getContext } from "svelte";
  import { map } from "../stores";

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
    source: "boundary",
    layer: "boundary",
    color: "black",
    opacity: 0.5,
  });
</script>
