<script lang="ts">
  import { ExternalLink, Popup, publicResourceBaseUrl } from "lib/common";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    SymbolLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import chevron from "../../../../../assets/chevron.png?url";
  import { colors, denseLineWidth } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsmLicense from "../OsmLicense.svelte";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";
  import { showHideLayer } from "../url";

  let name = "gradient";
  let title = "Gradients";
  let colorScale = colors.gradient_flat_to_steep;
  let limits = [0, 3, 5, 8, 10, 20, 100];

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="help">
    <p>
      This layer shows the steepness of roads, with the arrows pointing uphill.
      You have to zoom in to see all roads.
    </p>
    <p>
      Note the gradient may be incorrect near bridges and tunnels, depending on
      the underlying Digital Elevation Model used.
    </p>
    <p>
      This layer is built from <ExternalLink
        href="https://www.ordnancesurvey.co.uk/products/os-terrain-50"
      >
        OS Terrain 50
      </ExternalLink> and roads from OpenStreetMap. The data is valid as of 18 February
      2024.
    </p>
    <OsOglLicense />
    <OsmLicense />
  </span>
  <span slot="controls">
    <SequentialLegend {colorScale} {limits} />
    <p>
      <img src={chevron} alt="arrow" />
      Arrows point uphill
    </p>
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    manageHoverState
    paint={{
      "line-color": makeColorRamp(
        ["/", ["abs", ["get", "gradient"]], 100],
        limits,
        colorScale,
      ),
      // TODO Try showing the actual width, in meters and not pixels
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>
        Gradient: <b>{Math.abs(props.gradient) / 100}</b>
        &percnt;
      </p>
    </Popup>
  </LineLayer>

  <SymbolLayer
    {...layerId(name + "_arrows")}
    sourceLayer={name}
    minzoom={12}
    filter={[">", ["abs", ["get", "gradient"]], 300]}
    layout={{
      "icon-image": "chevron",
      "icon-size": 1.0,
      "symbol-placement": "line",
      "symbol-spacing": 50,
      "icon-allow-overlap": true,
      "icon-rotate": ["case", ["<", ["get", "gradient"], 0], 180, 0],
      visibility: $show ? "visible" : "none",
    }}
  />
</VectorTileSource>
