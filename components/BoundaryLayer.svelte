<script>
  import geojsonExtent from "@mapbox/geojson-extent";
  import mask from "@turf/mask";
  import {
    drawPolygon,
    overwriteSource,
    overwriteLayer,
  } from "../maplibre_helpers.js";
  import { getContext } from "svelte";
  import { map } from "../stores.js";

  export let boundaryGeojson;

  const setCamera = getContext("setCamera");

  if (setCamera) {
    $map.fitBounds(geojsonExtent(boundaryGeojson), {
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
