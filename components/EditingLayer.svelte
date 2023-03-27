<script>
  import geojsonExtent from "@mapbox/geojson-extent";
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
  import { gjScheme, openFromSidebar, map } from "../stores.js";

  let source = "editing";
  let lineWidth = 10;
  let circleRadius = 7;

  overwriteSource($map, source, {
    type: "geojson",
    data: emptyGeojson(),
  });

  // Don't symbolize polygons or linestrings being edited. They'll have
  // draggable points rendered, making it clear anyway.
  overwriteLayer($map, {
    id: "editing-points",
    source,
    filter: isPoint,
    // Use the same style as hovering; it's clear enough what the user is doing
    ...drawCircle(colors.hovering, 1.5 * circleRadius),
  });

  gjScheme.subscribe((gj) => {
    $map
      .getSource(source)
      .setData(gj.features.find((f) => f.properties.editing) || emptyGeojson());
  });

  // When the user starts editing something from the sidebar, warp to what's
  // being edited. (Don't do this when clicking the object on the map.)
  openFromSidebar.subscribe((id) => {
    if (id) {
      let feature = $gjScheme.features.find((f) => f.id == id);

      // Extent of points is defined in a weird way, special-case it
      if (feature.geometry.type == "Point") {
        $map.flyTo({ center: feature.geometry.coordinates });
      } else {
        $map.fitBounds(geojsonExtent(feature), {
          padding: 200,
          animate: true,
          duration: 500,
        });
      }
    }
  });
</script>
