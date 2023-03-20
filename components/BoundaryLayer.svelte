<script>
  import geojsonExtent from "@mapbox/geojson-extent";
  import mask from "@turf/mask";
  import { drawPolygon } from "../style.js";
  import { onMount, getContext } from "svelte";
  import { map } from "../stores.js";

  export let boundaryGeojson;

  const setCamera = getContext("setCamera");

  onMount(() => {
    if (setCamera) {
      $map.fitBounds(geojsonExtent(boundaryGeojson), {
        padding: 20,
        animate: false,
      });
    }

    $map.addSource("boundary", {
      type: "geojson",
      data: mask(boundaryGeojson),
    });
    $map.addLayer({
      id: "boundary",
      source: "boundary",
      ...drawPolygon("black", 0.5),
    });
  });
</script>
