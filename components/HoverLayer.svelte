<script>
  import { derived } from "svelte/store";
  import {
    drawLine,
    isPolygon,
    isPoint,
    isLine,
    drawCircle,
    drawPolygon,
    overwriteSource,
    overwriteLayer,
  } from "../maplibre_helpers.js";
  import { colors } from "../colors.js";
  import { emptyGeojson } from "../stores.js";
  import { gjScheme, currentHover, map } from "../stores.js";

  let source = "hover";
  let lineWidth = 10;
  let circleRadius = 7;

  // Use a layer that only ever has zero or one features for hovering. I think
  // https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should be an
  // easier way to do this, but I can't make it work with the draw plugin.
  overwriteSource($map, source, {
    type: "geojson",
    data: emptyGeojson(),
  });

  overwriteLayer($map, {
    id: "hover-polygons",
    source: source,
    filter: isPolygon,
    // Outline around the polygons
    // TODO Because this is underneath the draw controls, half the outline is
    // covered by the 50% opaque color
    ...drawLine(colors.hovering, lineWidth, 1.0),
  });
  overwriteLayer($map, {
    id: "hover-lines",
    source: source,
    filter: isLine,
    // By "accident", this layer is underneath the draw controls. Draw a
    // thick line underneath, making it look like an outline.
    ...drawLine(colors.hovering, 1.5 * lineWidth, 1.0),
  });
  overwriteLayer($map, {
    id: "hover-points",
    source,
    filter: isPoint,
    ...drawCircle(colors.hovering, 1.5 * circleRadius, 1.0),
  });

  currentHover.subscribe((id) => {
    if (id) {
      $map
        .getSource(source)
        .setData($gjScheme.features.find((f) => f.id == id));
    } else {
      $map.getSource(source).setData(emptyGeojson());
    }
  });
</script>
