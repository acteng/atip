<script lang="ts">
  import {
    emptyGeojson,
    overwriteSource,
    overwriteLayer,
    drawLine,
  } from "../../maplibre_helpers";
  import type { LineString } from "geojson";
  import type {
    DataDrivenPropertyValueSpecification,
    GeoJSONSource,
  } from "maplibre-gl";
  import type { Feature } from "../../types";
  import { colors, lineWidth } from "../../colors";
  import { map, gjScheme } from "../../stores";
  import { type Remote } from "comlink";
  import { type RouteInfo } from "../../worker";
  import Tooltips from "./Tooltips.svelte";

  export let routeInfo: Remote<RouteInfo>;
  export let id: number;

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
      // TODO Hide
      ($map.getSource(source) as GeoJSONSource).setData(emptyGeojson());
      return;
    }

    let linestring = $gjScheme.features.find(
      (f) => f.id == id
    ) as Feature<LineString>;
    try {
      let gj = JSON.parse(
        await routeInfo.speedLimitForRoute(linestring.properties.waypoints)
      );
      ($map.getSource(source) as GeoJSONSource).setData(gj);
    } catch (e) {
      window.alert(`Couldn't calculate speed limits for route: ${e}`);
    }
  }
</script>

<label>
  Show details:
  <select bind:value={layer} on:change={changeLayer}>
    <option value="none">None</option>
    <option value="speed limits">Speed limits</option>
  </select>
</label>

<Tooltips layer="speed-limits" />
