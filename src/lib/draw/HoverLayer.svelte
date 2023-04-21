<script lang="ts">
  import type { GeoJSONSource } from "maplibre-gl";
  import {
    drawLine,
    isPolygon,
    isPoint,
    isLine,
    drawCircle,
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
  overwriteSource($map, source, {
    type: "geojson",
    data: emptyGeojson(),
  });

  // Draw polygon outlines on top of interventions-polygons
  overwriteLayer($map, {
    id: "hover-polygons",
    source,
    filter: isPolygon,
    // Outline around the polygons
    ...drawLine(colors.hovering, 0.5 * lineWidth, 1.0),
  });
  // Draw underneath lines, so the thick line looks like an outline
  overwriteLayer(
    $map,
    {
      id: "hover-lines",
      source,
      filter: isLine,
      ...drawLine(colors.hovering, 1.5 * lineWidth, 1.0),
    },
    "interventions-lines"
  );
  // Draw underneath points, so it looks like an outline
  overwriteLayer(
    $map,
    {
      id: "hover-points",
      source,
      filter: isPoint,
      ...drawCircle(colors.hovering, 1.5 * circleRadius, 1.0),
    },
    "interventions-points"
  );

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
