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
  import { colors } from "../colors.js";
  import { emptyGeojson } from "../stores.js";
  import { gjScheme, currentlyEditing, map } from "../stores.js";

  let source = "editing";
  let lineWidth = 10;
  let circleRadius = 7;

  onMount(() => {
    $map.addSource(source, {
      type: "geojson",
      data: emptyGeojson(),
    });

    // Don't symbolize polygons or linestrings being edited. They'll have
    // draggable points rendered, making it clear anyway.
    $map.addLayer({
      id: "editing-points",
      source,
      filter: isPoint,
      // Use the same style as hovering; it's clear enough what the user is doing
      ...drawCircle(colors.hovering, 1.5 * circleRadius),
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
