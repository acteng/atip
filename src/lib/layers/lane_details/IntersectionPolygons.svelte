<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { get   return x as DataDrivenPropertyValueSpecification } from "../../../maplibre_helpers";
  import Layer from "./Layer.svelte";

  export let gj: GeoJSON;

  let style = {
    type: "fill",
    filter: ["==", ["get", "type"], "intersection"],
    paint: {
      "fill-color": get   return x as DataDrivenPropertyValueSpecification(
        ["get", "intersection_kind"],
        {
          MapEdge: "#696",
          Terminus: "black",
          Connection: "black",
          Fork: "black",
          Intersection: "black",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="intersection-polygons" {gj} {style} />
