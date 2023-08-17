<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { constructMatchExpression } from "../../maplibre";
  import Layer from "./Layer.svelte";

  export let gj: GeoJSON;

  let style = {
    type: "fill",
    paint: {
      "fill-color": constructMatchExpression(
        ["get", "type"],
        // TODO Generate TS types from osm2streets
        {
          Driving: "black",
          Parking: "#333333",
          Sidewalk: "#CCCCCC",
          Shoulder: "#CCCCCC",
          Biking: "#0F7D4B",
          Bus: "#BE4A4C",
          SharedLeftTurn: "black",
          Construction: "#FF6D00",
          LightRail: "#844204",
          Footway: "#DDDDE8",
          SharedUse: "#E5E1BB",
          // This is the only type used currently
          "Buffer(Planters)": "#555555",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="lane-polygons" {gj} {style} />
