<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { matchValue } from "../../../maplibre_helpers";
  import Layer from "./Layer.svelte";

  export let gj: GeoJSON;

  let style = {
    type: "fill",
    paint: {
      "fill-color": matchValue(
        ["get", "type"],
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
