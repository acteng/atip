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
          "center line": "yellow",
          "lane separator": "white",
          "lane arrow": "white",
          "buffer edge": "white",
          "buffer stripe": "white",
          "vehicle stop line": "white",
          "bike stop line": "green",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="lane-markings" {gj} {style} />
