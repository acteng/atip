<script lang="ts">
  import { onDestroy } from "svelte";
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
  import { lineWidth } from "../../colors";
  import { map, gjScheme } from "../../stores";
  import { type Remote } from "comlink";
  import { type RouteInfo } from "../../worker";
  import Tooltips from "./Tooltips.svelte";
  import DiscreteLegend from "./DiscreteLegend.svelte";
  import HelpIcon from "./HelpIcon.svelte";

  export let routeInfo: Remote<RouteInfo>;
  export let id: number;

  let layer: "none" | "speed limits" = "none";
  let colors = ["#00AB4D", "#8ECA4D", "#F7BB00", "#BB0000"];
  let speedLimitSteps = [30, 40, 50];

  let source = "speed-limits";
  let speedLimitLayer = "speed-limits";
  // TODO Also draw a quantized legend
  const colorBySpeedLimit: DataDrivenPropertyValueSpecification<string> = [
    "step",
    ["get", "speed_limit"],
    colors[0],
    speedLimitSteps[0],
    colors[1],
    speedLimitSteps[1],
    colors[2],
    speedLimitSteps[2],
    colors[3],
  ];
  // NOTE! There's only ever one source and layer with this name. This component
  // (and the source and layer) will get destroyed frequently, but even if not,
  // overwriting should be safe.
  overwriteSource($map, source, emptyGeojson());
  overwriteLayer($map, {
    id: speedLimitLayer,
    source,
    ...drawLine(colorBySpeedLimit, lineWidth, 1.0),
  });

  onDestroy(() => {
    if ($map.getLayer(speedLimitLayer)) {
      $map.removeLayer(speedLimitLayer);
    }
    if ($map.getSource(source)) {
      $map.removeSource(source);
    }
  });

  // TODO Disable the button until RouteInfo is loaded and ready?
  async function changeLayer() {
    if (layer == "none") {
      // TODO We could toggle visibility, instead of recalculating everytime
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

  function tooltip(props: { [name: string]: any }): string {
    return props.speed_limit
      ? `${Math.round(props.speed_limit)} mph`
      : "Unknown";
  }
</script>

<label>
  Show details:
  <select bind:value={layer} on:change={changeLayer}>
    <option value="none">None</option>
    <option value="speed limits">Speed limits</option>
  </select>
</label>
{#if layer == "speed limits"}
  (mph)
  <HelpIcon
    contents="Data comes from OpenStreetMap, and may not always be correct. Freehand segments and off-road paths generally have no speed data."
  />
  <DiscreteLegend {colors} steps={speedLimitSteps} />
{/if}

<Tooltips layer="speed-limits" contents={tooltip} />
