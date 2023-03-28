<script>
  import centroid from "@turf/centroid";
  import { Popup } from "maplibre-gl";
  import { gjScheme, currentMapHover, map } from "../stores.js";
  import { interventionName, prettyPrintMeters } from "../interventions.js";

  let popup = new Popup({
    closeButton: false,
    closeOnClick: false,
  });

  currentMapHover.subscribe((id) => {
    if (id) {
      let f = $gjScheme.features.find((f) => f.id == id);
      console.log(`hi ${JSON.stringify(anchorPoint(f))}`);

      popup.setLngLat(anchorPoint(f)).setHTML(contents(f)).addTo($map);
    } else {
      popup.remove();
    }
  });

  function anchorPoint(feature) {
    // TODO For a long route, what should we do? What if the anchor is
    // off-screen? We should try to be near the mouse, since we're hovering
    return centroid(feature.geometry).geometry.coordinates;
  }

  function contents(f) {
    let html = `<h3>${interventionName(f)}</h3>`;
    if (f.properties.length_meters) {
      html += `<p><strong>Length</strong>: ${prettyPrintMeters(
        f.properties.length_meters
      )}</p>`;
    }
    if (f.properties.description) {
      html += `<p><strong>Description</strong>: ${f.properties.description}</p>`;
    }
    return html;
  }

  // TODO remove onDestroy
</script>
