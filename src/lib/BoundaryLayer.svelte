<script lang="ts">
  import mask from "@turf/mask";
  import type { FeatureCollection, Polygon } from "geojson";
  import { getContext } from "svelte";
  import {
    bbox,
    overwritePolygonLayer,
    overwriteSource,
  } from "../maplibre_helpers";
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
    id: "boundary",
    source: "boundary",
    color: "black",
    opacity: 0.5,
  });
</script>
