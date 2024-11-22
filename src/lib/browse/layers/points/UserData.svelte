<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import { layerId } from "lib/maplibre";
  import {
    hoverStateFilter,
    FillLayer,
    LineLayer,
    CircleLayer,
    GeoJSON,
  } from "svelte-maplibre";
  import { showHideLayer } from "../url";
  import { FileInput } from "govuk-svelte";
  import UserDataPopup from "./UserDataPopup.svelte";

  let name = "user_data";
  let title = "Your own GeoJSON file";

  let show = showHideLayer(name);

  let data = {
    type: "FeatureCollection" as const,
    features: [],
  };

  function loadFile(filename: string, text: string) {
    try {
      data = JSON.parse(text);
    } catch (err) {
      window.alert(`Couldn't load ${filename} -- is it GeoJSON? ${err}`);
    }
  }
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="help">
    <p>This is your own GeoJSON file.</p>
  </span>

  <div slot="controls" style="border: 1px solid black; padding: 8px;">
    <FileInput label="Load your own GeoJSON file" onLoad={loadFile} />
    <p><i>Note this file doesn't leave your computer; it's not uploaded anywhere</i></p>
    <p>Currently showing {data.features.length.toLocaleString()} features</p>
  </div>
</LayerControl>

<GeoJSON {data} generateId>
  <FillLayer
    {...layerId("user_data_polygons")}
    manageHoverState
    filter={["==", ["geometry-type"], "Polygon"]}
    paint={{
      "fill-color": "blue",
      "fill-opacity": hoverStateFilter(0.5, 1.0),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
  >
    <UserDataPopup />
  </FillLayer>
  <LineLayer
    {...layerId("user_data_polygons-outline")}
    paint={{
      "line-color": "black",
      "line-width": 2.5,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />

  <LineLayer
    {...layerId("user_data_lines")}
    manageHoverState
    filter={["==", ["geometry-type"], "LineString"]}
    paint={{
      "line-color": "green",
      "line-width": hoverStateFilter(3, 5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
  >
    <UserDataPopup />
  </LineLayer>

  <CircleLayer
    {...layerId("user_data_points")}
    manageHoverState
    filter={["==", ["geometry-type"], "Point"]}
    paint={{
      "circle-color": "red",
      "circle-radius": hoverStateFilter(3, 5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
  >
    <UserDataPopup />
  </CircleLayer>
</GeoJSON>
