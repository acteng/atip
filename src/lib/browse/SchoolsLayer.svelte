<script lang="ts">
  import {
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import { MapTooltips } from "../common";

  let source = "schools";

  overwritePmtilesSource(
    $map,
    source,
    "https://atip.uk/layers/v1/schools.pmtiles"
  );

  overwritePolygonLayer($map, {
    id: source,
    source,
    sourceLayer: source,
    color: "red",
    opacity: 0.8,
  });

  function tooltip(props: { [name: string]: any }): string {
    return props.name ?? "Unnamed school";
  }
</script>

<MapTooltips layers={["schools"]} contents={tooltip} />
