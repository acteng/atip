<script lang="ts">
  import geojsonExtent from "@mapbox/geojson-extent";
  import {
    map,
    gjScheme,
    mapHover,
    openFromSidebar,
    formOpen,
  } from "../../stores";

  const thisMode = "edit-attribute";

  // TODO Just tell us if we're the current mode or not, actually...
  export let mode: string;
  export let changeMode: (string) => void;

  export function start() {}
  export function stop() {
    formOpen.set(null);
  }

  // Calculate hover
  $map.on("mousemove", (e) => {
    if (mode == thisMode) {
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
      mapHover.set(newHoverId);
    }
  });
  $map.on("mouseout", () => {
    if (mode == thisMode) {
      mapHover.set(null);
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
        formOpen.set(results[0].id as number);
      } else {
        formOpen.set(null);
      }
    }
  });

  openFromSidebar.subscribe((id) => {
    if (id) {
      // When the user starts editing something from the sidebar, warp to what's
      // being edited. (Don't do this when clicking the object on the map.)
      let feature = $gjScheme.features.find((f) => f.id == id);

      // Extent of points is defined in a weird way, special-case it
      if (feature.geometry.type == "Point") {
        $map.flyTo({
          center: feature.geometry.coordinates as [number, number],
        });
      } else {
        $map.fitBounds(geojsonExtent(feature), {
          padding: 200,
          animate: true,
          duration: 500,
        });
      }

      // Interrupt any other mode and switch to this one. No need to
      // touch formOpen.
      changeMode(thisMode);
    }
  });
</script>

{#if mode == thisMode}
  <p>Click an intervention to fill out its attributes</p>
{/if}
