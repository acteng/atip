<script lang="ts">
  import { emptyGeojson } from "../../maplibre_helpers";
  import { colors, lineWidth } from "../../colors";

  let layer: "none" | "speed limits" = "none";

  let source = "speed-limits";
  // TODO Also draw a quantized legend
  const colorBySpeedLimit: DataDrivenPropertyValueSpecification<string> = [
    "match",
    ["get", "type"],
    "snapped",
    "red",
    "free",
    "blue",
    "white",
  ];
  // NOTE! There's only ever one source and layer with this name. This component
  // (and the source and layer) will get destroyed frequently, but even if not,
  // overwriting should be safe.
  overwriteSource($map, source, {
    type: "geojson",
    data: emptyGeojson(),
  });
  // TODO Also tooltips on each segment?
  overwriteLayer($map, {
    id: "speed-limits",
    source,
    ...drawLine(colorBySpeedLimit, lineWidth, 1.0),
  });

  // TODO Disable the button until RouteInfo is loaded and ready?
  async function changeLayer() {
    if (layer == "none") {
      // TODO Hide something
      return;
    }

    let linestring = $gjScheme.features.find(
      (f) => f.id == id
    ) as Feature<LineString>;
    try {
      name = await routeInfo.nameForRoute(linestring);
    } catch (e) {
      window.alert(`Couldn't auto-name route: ${e}`);
    }
  }
</script>

<select bind:value={layer} on:change={changeLayer}>
  <option value="none">None</option>
  <option value="speed limits">Speed limits</option>
</select>
