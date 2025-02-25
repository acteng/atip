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
          "Road Or Track Fill": "black",
          "Traffic Calming Fill": "#3b3b3b",
          "Roadside Manmade Fill": "grey",
          "Roadside Natural Fill": "green",
          "Path Fill": "brown",
          "Track Fill": "brown",
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
      <p>{props.style_description}</p>
    </Popup>
  </FillLayer>
</VectorTileSource>
