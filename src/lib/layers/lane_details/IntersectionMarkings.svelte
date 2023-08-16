<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { MapLibreUtils } from "../../maplibre";
  import Layer from "./Layer.svelte";

  export let gj: GeoJSON;

  let style = {
    type: "fill",
    paint: {
      "fill-color": MapLibreUtils.constructMatchExpression(
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
