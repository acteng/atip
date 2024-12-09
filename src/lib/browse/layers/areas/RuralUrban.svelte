<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import {
    ExternalLink,
    Popup,
    publicResourceBaseUrl,
    Legend,
  } from "lib/common";
  import { layerId, constructMatchExpression } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "ruc";
  let longName = "rural_urban_classification";
  let title = "Rural Urban Classification";

  let show = showHideLayer(name);

  let colors = {
    "Urban major conurbation": "#fe2200",
    "Urban minor conurbation": "#ff6f00",
    "Urban city and town": "#ffa602",
    "Urban city and town in a sparse setting": "#ffe400",
    "Rural hamlets and isolated dwellings": "#e5f5e0",
    "Rural hamlets and isolated dwellings in a sparse setting": "#a1d99b",
    "Rural town and fringe": "#d6e601",
    "Rural town and fringe in a sparse setting": "#8cb503",
    "Rural village": "#4a8a02",
    "Rural village in a sparse setting": "#006100",
  };
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="help">
    <p>
      The 2011 Rural Urban Classification distinguishes four urban and six rural
      categories. The data comes from <ExternalLink
        href="https://www.gov.uk/government/collections/rural-urban-classification"
      >
        DEFRA
      </ExternalLink>. Note this is data from 2011.
    </p>
    <OsOglLicense />
  </span>
  <span slot="controls">
    <Legend rows={Object.entries(colors)} />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${longName}.pmtiles`}
>
  <FillLayer
    {...layerId(name)}
    sourceLayer={longName}
    paint={{
      "fill-color": constructMatchExpression(["get", "RUC11"], colors, "cyan"),
      "fill-opacity": hoverStateFilter(0.5, 0.7),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>
        {props.OA11CD} is {props.RUC11.startsWith("U") ? "an" : "a"}
        <b>{props.RUC11}</b>
      </p>
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId(`${name}-outline`)}
    sourceLayer={longName}
    paint={{
      "line-color": "black",
      "line-width": 0.5,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />
</VectorTileSource>
