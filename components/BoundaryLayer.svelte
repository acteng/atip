<script>
  import authoritiesUrl from "../authorities.geojson?url";
  import geojsonExtent from "@mapbox/geojson-extent";
  import mask from "@turf/mask";
  import { drawPolygon } from "../style.js";
  import { onMount, getContext } from "svelte";

  export let authorityName;

  const { getMap, setCamera } = getContext("map");

  onMount(async () => {
    const boundaryGeojson = await loadBoundary(authorityName);

    const map = getMap();

    if (setCamera) {
      map.fitBounds(geojsonExtent(boundaryGeojson), {
        padding: 20,
        animate: false,
      });
    }

    map.addSource("boundary", {
      type: "geojson",
      data: mask(boundaryGeojson),
    });
    map.addLayer({
      id: "boundary",
      source: "boundary",
      ...drawPolygon("black", 0.5),
    });
  });

  async function loadBoundary(authority) {
    const resp = await fetch(authoritiesUrl);
    const body = await resp.text();
    const geojson = JSON.parse(body);
    geojson.features = geojson.features.filter(
      (feature) => feature.properties.name == authority
    );
    return geojson;
  }
</script>
