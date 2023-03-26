<script>
  import { onMount } from "svelte";
  import geojsonExtent from "@mapbox/geojson-extent";
  import {
    drawLine,
    isPolygon,
    isPoint,
    isLine,
    drawCircle,
    drawPolygon,
  } from "../style.js";
  import { emptyGeojson } from "../stores.js";
  import { gjScheme, openFromSidebar, map } from "../stores.js";

  let source = "editing";
  let color = "red";
  let lineWidth = 10;
  let circleRadius = 7;

  onMount(() => {
    $map.addSource(source, {
      type: "geojson",
      data: emptyGeojson(),
    });

    $map.addLayer({
      id: "editing-polygons",
      source: source,
      filter: isPolygon,
      ...drawPolygon(color, 0.5),
    });
    $map.addLayer({
      id: "editing-lines",
      source: source,
      filter: isLine,
      ...drawLine(color, 1.5 * lineWidth),
    });
    $map.addLayer({
      id: "editing-points",
      source: source,
      filter: isPoint,
      ...drawCircle(color, 1.5 * circleRadius),
    });

    gjScheme.subscribe((gj) => {
      $map
        .getSource(source)
        .setData(
          gj.features.find((f) => f.properties.editing) || emptyGeojson()
        );
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
  });
</script>
