<script lang="ts">
  import type { GeoJSON } from "geojson";
  import icon from "../../assets/zoom_out_map.svg";
  import { bbox } from "../maplibre_helpers";
  import { map } from "../stores";
  import SecondaryButton from "./govuk/SecondaryButton.svelte";

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
