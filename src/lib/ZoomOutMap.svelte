<script lang="ts">
  import type { GeoJSON } from "geojson";
  import geojsonExtent from "@mapbox/geojson-extent";
  import { map } from "../stores";
  import icon from "../../assets/zoom_out_map.svg";

  export let boundaryGeojson: GeoJSON;

  function recenter() {
    $map.fitBounds(geojsonExtent(boundaryGeojson), {
      padding: 20,
      animate: true,
      duration: 500,
    });
  }
</script>

<button type="button" title="Zoom to show entire boundary" on:click={recenter}>
  <img src={icon} alt="Zoom to show entire boundary" />
</button>

<style>
  button {
    margin: 2px;
  }
</style>
