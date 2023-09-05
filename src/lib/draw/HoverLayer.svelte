<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import {
    emptyGeojson,
    isLine,
    isPoint,
    isPolygon,
    overwriteCircleLayer,
    overwriteLineLayer,
    overwriteSource,
  } from "lib/maplibre";
  import type { GeoJSONSource } from "maplibre-gl";
  import {
    formOpen,
    gjScheme,
    isAToolInUse,
    map,
    mapHover,
    sidebarHover,
  } from "stores";

  // Show clickable objects on the map using the cursor
  $: {
    // Don't override what an active tool has set
    if (!$isAToolInUse) {
      $map.getCanvas().style.cursor = $mapHover ? "pointer" : "inherit";
    }
  }

  let source = "hover";

  // Use a layer that only ever has zero or one features for hovering. I think
  // https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should be an
  // easier way to do this, but I can't make it work with the draw plugin.
  overwriteSource($map, source, emptyGeojson());

  overwriteLineLayer($map, {
    id: "hover-polygons",
    source,
    filter: isPolygon,
    // Outline around the polygons
    color: colors.hovering,
    width: 0.5 * lineWidth,
  });
  overwriteLineLayer($map, {
    id: "hover-lines",
    source,
    filter: isLine,
    color: colors.hovering,
    width: 1.5 * lineWidth,
  });
  overwriteCircleLayer($map, {
    id: "hover-points",
    source,
    filter: isPoint,
    color: colors.hovering,
    radius: 1.5 * circleRadius,
  });

  // When a form is open, ignore regular map and sidebar interactions
  $: {
    let id = $formOpen || $mapHover || $sidebarHover;
    if (id != null) {
      ($map.getSource(source) as GeoJSONSource).setData(
        $gjScheme.features.find((f) => f.id == id)!
      );
    } else {
      ($map.getSource(source) as GeoJSONSource).setData(emptyGeojson());
    }
  }
</script>
