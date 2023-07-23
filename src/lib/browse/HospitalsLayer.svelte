<script lang="ts">
  import {
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import { MapTooltips } from "../common";

  let source = "hospitals";

  overwritePmtilesSource(
    $map,
    source,
    "https://atip.uk/layers/v1/hospitals.pmtiles"
  );

  overwritePolygonLayer($map, {
    id: source,
    source,
    sourceLayer: source,
    color: "blue",
    opacity: 0.8,
  });

  function tooltip(props: { [name: string]: any }): string {
    return props.name ?? "Unnamed hospital";
  }
</script>

<MapTooltips layers={["hospitals"]} contents={tooltip} />
