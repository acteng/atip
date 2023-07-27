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
          "sidewalk corner": "#CCCCCC",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="intersection-markings" {gj} {style} />
