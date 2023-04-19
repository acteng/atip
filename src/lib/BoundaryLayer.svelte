<script lang="ts">
  import type { FeatureCollection, Polygon } from "geojson";
  import mask from "@turf/mask";
  import {
    drawPolygon,
    overwriteSource,
    overwriteLayer,
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

  overwriteSource($map, "boundary", {
    type: "geojson",
    data: mask(boundaryGeojson),
  });
  overwriteLayer($map, {
    id: "boundary",
    source: "boundary",
    ...drawPolygon("black", 0.5),
  });
</script>
