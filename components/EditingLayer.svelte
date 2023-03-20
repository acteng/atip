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
  import { gjScheme, currentlyEditing, map } from "../stores.js";

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

    // Warp to what's being edited
    // TODO This is a bit annoying when clicking on the map. Can we limit to just the sidebar?
    currentlyEditing.subscribe((id) => {
      if (id) {
        // currentlyEditing only changes when the ID changes, not
        // properties/geometry, so that this behavior isn't triggered
        // constantly
        let feature = $gjScheme.features.find((f) => f.id == id);

        // Points are weird
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
