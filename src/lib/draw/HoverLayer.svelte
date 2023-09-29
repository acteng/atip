<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import { emptyGeojson, isLine, isPoint, isPolygon } from "lib/maplibre";
  import {
    formOpen,
    gjScheme,
    isAToolInUse,
    map,
    mapHover,
    sidebarHover,
  } from "stores";
  import { CircleLayer, GeoJSON, LineLayer } from "svelte-maplibre";

  // Show clickable objects on the map using the cursor
  // TODO Use svelte-maplibre for this part?
  $: {
    // Don't override what an active tool has set
    if (!$isAToolInUse) {
      $map.getCanvas().style.cursor = $mapHover ? "pointer" : "inherit";
    }
  }

  // Use a layer that only ever has zero or one features for hovering. I think
  // https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should be an
  // easier way to do this, but I can't make it work with the draw plugin.
  let gj = emptyGeojson();

  // When a form is open, ignore regular map and sidebar interactions
  $: {
    let id = $formOpen || $mapHover || $sidebarHover;
    if (id != null) {
      gj = $gjScheme.features.find((f) => f.id == id)!;
    } else {
      gj = emptyGeojson();
    }
  }
</script>

<GeoJSON data={gj}>
  <LineLayer
    id="hover-polygons"
    filter={isPolygon}
    paint={{
      "line-color": colors.hovering,
      "line-width": 0.5 * lineWidth,
    }}
  />
  <LineLayer
    id="hover-lines"
    filter={isLine}
    paint={{
      "line-color": colors.hovering,
      "line-width": 1.5 * lineWidth,
    }}
  />
  <CircleLayer
    id="hover-points"
    filter={isPoint}
    paint={{
      "circle-color": colors.hovering,
      "circle-radius": 1.5 * circleRadius,
    }}
  />
</GeoJSON>
