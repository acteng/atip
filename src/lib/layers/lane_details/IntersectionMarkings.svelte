<script lang="ts">
  import Layer from "./Layer.svelte";
  import { caseHelper } from "../../../maplibre_helpers";
  import type { GeoJSON } from "geojson";

  export let gj: GeoJSON;

  let style = {
    type: "fill",
    paint: {
      "fill-color": caseHelper(
        "type",
        {
          "sidewalk corner": "#CCCCCC",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="intersection-markings" {gj} {style} />
