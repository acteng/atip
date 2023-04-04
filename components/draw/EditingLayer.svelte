<script>
  import geojsonExtent from "@mapbox/geojson-extent";
  import { gjScheme, openFromSidebar, map } from "../../stores.js";

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
