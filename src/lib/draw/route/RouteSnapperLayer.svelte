<script lang="ts">
  import type { Feature } from "geojson";
  import { Popup } from "lib/common";
  import {
    constructMatchExpression,
    isLine,
    isPoint,
    isPolygon,
    layerId,
  } from "lib/maplibre";
  import { userSettings } from "stores";
  import {
    CircleLayer,
    FillLayer,
    GeoJSON,
    LineLayer,
    MarkerLayer,
  } from "svelte-maplibre";
  import { geocoderGj, routeToolGj } from "./stores";

  const circleRadiusPixels = 10;

  function getNumber(feature: Feature): string {
    return feature.properties?.number;
  }
</script>

<GeoJSON data={$routeToolGj}>
  <CircleLayer
    {...layerId("route-points")}
    filter={isPoint}
    paint={{
      "circle-color": constructMatchExpression(
        ["get", "type"],
        {
          "snapped-waypoint": "red",
          "free-waypoint": "blue",
        },
        "black"
      ),
      "circle-opacity": ["case", ["has", "hovered"], 0.5, 1.0],
      "circle-radius": constructMatchExpression(
        ["get", "type"],
        { node: circleRadiusPixels / 2.0 },
        circleRadiusPixels
      ),
    }}
  >
    <Popup let:props>
      {#if $userSettings.routeSnapperTooltips && props.name}
        {props.name}
      {/if}
    </Popup>
  </CircleLayer>
  <LineLayer
    {...layerId("route-lines")}
    filter={isLine}
    paint={{
      "line-color": ["case", ["get", "snapped"], "red", "blue"],
      "line-width": 2.5,
    }}
  />
  <FillLayer
    {...layerId("route-polygons")}
    filter={isPolygon}
    paint={{
      "fill-color": "black",
      "fill-opacity": 0.5,
    }}
  />
</GeoJSON>

<GeoJSON data={$geocoderGj}>
  <MarkerLayer let:feature>
    <div
      style="font-size: 30px; background: white; padding: 16px; border-radius: 50%;"
    >
      {getNumber(feature)}
    </div>
  </MarkerLayer>
</GeoJSON>
