<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { SecondaryButton } from "govuk-svelte";
  import { bbox } from "lib/maplibre";
  import { map } from "stores";
  import icon from "../../../assets/zoom_out_map.svg";

  export let boundaryGeojson: GeoJSON;

  function recenter() {
    $map.fitBounds(bbox(boundaryGeojson), {
      padding: 20,
      animate: true,
      duration: 500,
    });
  }
</script>

<SecondaryButton title="Zoom to show entire boundary" on:click={recenter}>
  <img src={icon} alt="Zoom to show entire boundary" />
</SecondaryButton>
