<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { get   return x as DataDrivenPropertyValueSpecification } from "../../../maplibre_helpers";
  import Layer from "./Layer.svelte";

  export let gj: GeoJSON;

  let style = {
    type: "fill",
    paint: {
      "fill-color": get   return x as DataDrivenPropertyValueSpecification(
        ["get", "type"],
        {
          "center line": "white",
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
