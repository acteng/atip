<script lang="ts">
  import { ExternalLink, Legend, privateResourceBaseUrl } from "lib/common";
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

  let rows = [
    ["roads", "black"],
    ["traffic calming", "#3b3b3b"],
    ["pavement", "grey"],
    ["roadside natural", "green"],
    ["paths and tracks", "brown"],
  ] as [string, string][];
</script>

<LayerControl {name} title="OS MasterMap" bind:show={$show}>
  <span slot="help">
    <p>
      This shows all polygons from the <ExternalLink
        href="https://www.ordnancesurvey.co.uk/products/os-mastermap-topography-layer"
      >
        Ordnance Survey MasterMap Topography layer
      </ExternalLink> related to roads. This is useful in conjunction with the OS
      road and pavement width layers, to see specifically where width varies.
    </p>
    <p>Data is from February 2025.</p>
    <p>
      The layer is only visible when you zoom in close to the map. Note there
      may be missing polygons near bridges.
    </p>
    <OsOglLicense />
  </span>

  <div slot="controls">
    <Legend {rows} />
  </div>
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
  />
</VectorTileSource>
