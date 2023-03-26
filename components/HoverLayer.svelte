<script>
  import { onMount } from "svelte";
  import { derived } from "svelte/store";
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
  import { gjScheme, currentSidebarHover, map } from "../stores.js";

  // TODO Does this need to be a store?
  const dontHover = derived(gjScheme, ($gj) =>
    $gj.features.some((f) => f.properties.editing)
  );

  let source = "hover";
  let lineWidth = 10;
  let circleRadius = 7;

  onMount(() => {
    // Use a layer that only ever has zero or one features for hovering. I
    // think https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should
    // be an easier way to do this, but I can't make it work with the draw
    // plugin.
    $map.addSource(source, {
      type: "geojson",
      data: emptyGeojson(),
    });

    $map.addLayer({
      id: "hover-polygons",
      source: source,
      filter: isPolygon,
      // Outline around the polygons
      // TODO Because this is underneath the draw controls, half the outline is
      // covered by the 50% opaque color
      ...drawLine(colors.hovering, lineWidth, 1.0),
    });
    $map.addLayer({
      id: "hover-lines",
      source: source,
      filter: isLine,
      // By "accident", this layer is underneath the draw controls. Draw a
      // thick line underneath, making it look like an outline.
      ...drawLine(colors.hovering, 1.5 * lineWidth, 1.0),
    });
    $map.addLayer({
      id: "hover-points",
      source: source,
      filter: isPoint,
      ...drawCircle(colors.hovering, 1.5 * circleRadius, 1.0),
    });

    // Don't show hover whenever we're editing something
    dontHover.subscribe((x) => {
      if (x) {
        currentSidebarHover.set(null);
      }
    });

    currentSidebarHover.subscribe((id) => {
      if (id && !$dontHover) {
        $map
          .getSource(source)
          .setData($gjScheme.features.find((f) => f.id == id));
      } else {
        $map.getSource(source).setData(emptyGeojson());
      }
    });
  });
</script>
