<script lang="ts">
  import Layer from "./Layer.svelte";
  import { caseHelper } from "../../../maplibre_helpers";
  import type { GeoJSON } from "geojson";

  export let gj: GeoJSON;

  let style = {
    type: "fill",
    filter: ["==", ["get", "type"], "intersection"],
    paint: {
      "fill-color": caseHelper(
        "intersection_kind",
        {
          Connection: "#666",
          Intersection: "#966",
          Terminus: "#999",
          MapEdge: "#696",
        },
        "#666"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="intersection-polygons" {gj} {style} />
