<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    Popup,
    privateResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId, constructMatchExpression } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "osmm";

  let show = showHideLayer(name);

  let color = "grey";
</script>

<Checkbox bind:checked={$show}>
  OS MasterMap
  <span slot="right">
    <HelpButton>
      <p>TODO</p>
    </HelpButton>
  </span>
</Checkbox>

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
      "fill-opacity": constructMatchExpression(
        ["get", "style_description"],
        {
          "Building Fill": 0.0,
          "Natural Fill": 0.0,
          "Manmade Fill": 0.0,
          "Multi Surface Fill": 0.0,
          "Rail Bridge Fill": 0.0,
          "Rail Manmade Fill": 0.0,
          "Archway Fill": 0.0,
          "Tidal Water Fill": 0.0,
        },
        hoverStateFilter(0.8, 0.3),
      ),
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
