<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import { drawControlsStyle } from "../style.js";
  import { onMount, getContext } from "svelte";

  import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
  // Do this second to override some stuff
  // TODO Embed it here instead
  import "../css/map_controls.css";

  const { getMap } = getContext("map");

  let drawControls;

  onMount(async () => {
    const map = getMap();

    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        point: true,
        polygon: true,
      },
      styles: drawControlsStyle,
    });
    map.addControl(drawControls);
  });
</script>
