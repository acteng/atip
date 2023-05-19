<script lang="ts">
  import { onMount, onDestroy } from "svelte";
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
  import MapTooltips from "../common/MapTooltips.svelte";
  import DiscreteLegend from "../common/DiscreteLegend.svelte";
  import HelpIcon from "../common/HelpIcon.svelte";

  export let routeInfo: Remote<RouteInfo>;
  // Show along a route if specified, or show all otherwise
  export let id: number | undefined;

  let colors = ["#00AB4D", "#8ECA4D", "#F7BB00", "#BB0000", "#470000"];
  // This'll never get displayed; its opacity will be set to 0 later
  let unknown = "white";

  let source = "speed-limits";
  let layer = "speed-limits";
  const color: DataDrivenPropertyValueSpecification<string> = [
    "case",
    ["<", ["get", "speed_limit"], 20],
    colors[0],
    ["==", ["get", "speed_limit"], 20],
    colors[1],
    ["==", ["get", "speed_limit"], 30],
    colors[2],
    ["==", ["get", "speed_limit"], 40],
    colors[3],
    [">=", ["get", "speed_limit"], 50],
    colors[4],
    unknown,
  ];

  // Repeat the cases above, changing opacity to 0 for unknown
  let normalOpacity = 0.8;
  const opacity: DataDrivenPropertyValueSpecification<number> = [
    "case",
    ["<", ["get", "speed_limit"], 20],
    normalOpacity,
    ["==", ["get", "speed_limit"], 20],
    normalOpacity,
    ["==", ["get", "speed_limit"], 30],
    normalOpacity,
    ["==", ["get", "speed_limit"], 40],
    normalOpacity,
    [">=", ["get", "speed_limit"], 50],
    normalOpacity,
    0.0,
  ];

  // NOTE! There's only ever one source and layer with this name. This component
  // (and the source and layer) will get destroyed frequently, but even if not,
  // overwriting should be safe.
  overwriteSource($map, source, emptyGeojson());
  overwriteLayer($map, {
    id: layer,
    source,
    ...drawLine(color, lineWidth, opacity),
  });

  onMount(async () => {
    try {
      if (id) {
        let linestring = $gjScheme.features.find(
          (f) => f.id == id
        ) as Feature<LineString>;
        let gj = JSON.parse(
          await routeInfo.speedLimitForRoute(linestring.properties.waypoints)
        );
        ($map.getSource(source) as GeoJSONSource).setData(gj);
      } else {
        let gj = JSON.parse(await routeInfo.allSpeedLimits());
        ($map.getSource(source) as GeoJSONSource).setData(gj);
      }
    } catch (e) {
      window.alert(`Couldn't calculate speed limits for route: ${e}`);
    }
  });

  onDestroy(() => {
    if ($map.getLayer(layer)) {
      $map.removeLayer(layer);
    }
    if ($map.getSource(source)) {
      $map.removeSource(source);
    }
  });

  function tooltip(props: { [name: string]: any }): string {
    return props.speed_limit
      ? `${Math.round(props.speed_limit)} mph`
      : "Unknown";
  }
</script>

(mph)
<HelpIcon
  contents="Data comes from OpenStreetMap, and may not always be correct. Unexpected values are treated as unknown. Freehand route segments and off-road paths generally have no speed data."
/>
<DiscreteLegend {colors} labels={["< 20", "20", "30", "40", ">= 50"]} />

<MapTooltips layer="speed-limits" contents={tooltip} />
