<script lang="ts">
  import type { GeoJSONSource } from "maplibre-gl";
  import {
    drawLine,
    isPolygon,
    isPoint,
    isLine,
    overwriteCircleLayer,
    overwriteSource,
    overwriteLayer,
    emptyGeojson,
  } from "../../maplibre_helpers";
  import { colors, lineWidth, circleRadius } from "../../colors";
  import {
    gjScheme,
    formOpen,
    mapHover,
    sidebarHover,
    map,
  } from "../../stores";

  let source = "hover";

  // Use a layer that only ever has zero or one features for hovering. I think
  // https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should be an
  // easier way to do this, but I can't make it work with the draw plugin.
  overwriteSource($map, source, emptyGeojson());

  overwriteLayer($map, {
    id: "hover-polygons",
    source,
    filter: isPolygon,
    // Outline around the polygons
    ...drawLine(colors.hovering, 0.5 * lineWidth, 1.0),
  });
  overwriteLayer($map, {
    id: "hover-lines",
    source,
    filter: isLine,
    ...drawLine(colors.hovering, 1.5 * lineWidth, 1.0),
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
