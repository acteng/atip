<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import { onDestroy } from "svelte";
  import { map, gjScheme, newFeatureId } from "../../stores.js";

  export let mode;
  // "point" or "polygon"
  export let type;
  let drawControls;

  // When mode changes, make the controls appear or disappear
  $: {
    if (mode == type) {
      start();
    } else {
      stop();
    }
  }

  onDestroy(stop);

  $map.on("draw.create", (e) => {
    // Be careful; this callback fires for the other PointOrPolygonMode instance!
    if (mode == type) {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      gjScheme.update((gj) => {
        feature.properties.intervention_type =
          type == "point" ? "other" : "area";
        feature.id = newFeatureId(gj);
        gj.features.push(feature);
        return gj;
      });

      // TODO setCurrentlyEditing to this new thing
      mode = "select";
    }
  });

  function start() {
    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        point: type == "point",
        polygon: type == "polygon",
      },
    });
    $map.addControl(drawControls);
    drawControls.changeMode(`draw_${type}`);
    // mapbox-gl-draw inserts a button to control modes; destroy it
    let elements = document.getElementsByClassName(
      "mapboxgl-ctrl-group mapboxgl-ctrl"
    );
    // We're modifying the HTMLCollection while we iterate over it, so be careful
    while (elements.length > 0) {
      elements[0].remove();
    }
  }

  function stop() {
    if (drawControls) {
      $map.removeControl(drawControls);
      drawControls = null;
    }
  }
</script>

{#if mode == "point" && type == mode}
  <p>Click the map to draw a new point</p>
{:else if mode == "polygon" && type == mode}
  <p>
    Click the map to add a vertex. Click the last vertex or press <strong
      >Enter</strong
    > to finish.
  </p>
{/if}
