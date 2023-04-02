<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import { onDestroy } from "svelte";
  import { map, gjScheme, newFeatureId } from "../../stores.js";

  export let mode;
  let drawControls;

  // When mode changes, make the controls appear or disappear
  $: {
    if (mode == "point") {
      start();
    } else {
      stop();
    }
  }

  onDestroy(stop);

  function start() {
    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        point: true,
      },
    });
    $map.addControl(drawControls);
    drawControls.changeMode("draw_point");
    // mapbox-gl-draw inserts a button to control modes; destroy it
    let elements = document.getElementsByClassName(
      "mapboxgl-ctrl-group mapboxgl-ctrl"
    );
    // We're modifying the HTMLCollection while we iterate over it, so be careful
    while (elements.length > 0) {
      elements[0].remove();
    }

    $map.on("draw.create", (e) => {
      // Assume there's exactly 1 feature
      const feature = e.features[0];

      gjScheme.update((gj) => {
        feature.properties.intervention_type = "other";
        feature.id = newFeatureId(gj);
        gj.features.push(feature);
        return gj;
      });

      // TODO setCurrentlyEditing to this new thing
      mode = "select";
    });
  }

  function stop() {
    if (drawControls) {
      $map.removeControl(drawControls);
      drawControls = null;
    }
  }
</script>

{#if mode == "point"}
  <p>Click the map to draw a new point</p>
{/if}
