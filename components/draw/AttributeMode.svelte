<script>
  import geojsonExtent from "@mapbox/geojson-extent";
  import {
    map,
    gjScheme,
    currentHover,
    currentlyEditing,
    setCurrentlyEditing,
    openFromSidebar,
  } from "../../stores.js";

  const thisMode = "edit-attribute";

  // TODO Just tell us if we're the current mode or not, actually...
  export let mode;

  export function start() {}
  export function stop() {
    setCurrentlyEditing(null);
  }

  // Calculate hover
  $map.on("mousemove", (e) => {
    if (mode == thisMode && $currentlyEditing == null) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      // TODO ? syntax
      var newHoverId = null;
      if (results.length > 0) {
        newHoverId = results[0].id;
      }
      currentHover.set(newHoverId);
    }
  });
  $map.on("mouseout", () => {
    if (mode == thisMode && $currentlyEditing == null) {
      currentHover.set(null);
    }
  });

  // Handle clicking the hovered feature
  $map.on("click", (e) => {
    if (mode == thisMode) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      if (results.length > 0) {
        setCurrentlyEditing(results[0].id);
      } else {
        setCurrentlyEditing(null);
      }
    }
  });

  // When the user starts editing something from the sidebar, warp to what's
  // being edited. (Don't do this when clicking the object on the map.)
  openFromSidebar.subscribe((id) => {
    if (mode == thisMode && id) {
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

{#if mode == thisMode}
  <p>Click an intervention to fill out its attributes</p>
{/if}
