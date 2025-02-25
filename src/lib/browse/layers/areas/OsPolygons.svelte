<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    Popup,
    privateResourceBaseUrl,
  } from "lib/common";
  import { constructMatchExpression, layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import LayerControl from "../LayerControl.svelte";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "osmm";

  let show = showHideLayer(name);

  let color = "grey";
</script>

<LayerControl {name} title="OS MasterMap" bind:show={$show}>
  <span slot="icon"><ColorLegend {color} /></span>
  <span slot="help">
    <p>TODO</p>
    <OsOglLicense />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${privateResourceBaseUrl()}/v1/${name}.pmtiles`}
  minzoom={16}
  maxzoom={16}
  promoteId="toid"
>
  <FillLayer
    {...layerId(name)}
    sourceLayer="topographic_area"
    paint={{
      "fill-color": constructMatchExpression(
        ["get", "style_description"],
        {
          "Road Or Track Fill": "green",
          "Roadside Manmade Fill": "blue",
          "Path Fill": "grey",
          "Traffic Calming Fill": "yellow",
        },
        "red",
      ),
      "fill-opacity": hoverStateFilter(0.8, 0.3),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
  >
    <Popup let:props>
      <p>{JSON.stringify(props)}</p>
    </Popup>
  </FillLayer>

  <LineLayer
    {...layerId(`${name}-outline`)}
    sourceLayer="topographic_area"
    paint={{
      "line-color": color,
      "line-width": 2.5,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />
</VectorTileSource>
