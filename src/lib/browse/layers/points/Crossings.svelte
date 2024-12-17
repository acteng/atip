<script lang="ts">
  import {
    ExternalLink,
    Legend,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import {
    constructMatchExpression,
    isLine,
    isPoint,
    layerId,
  } from "lib/maplibre";
  import {
    CircleLayer,
    LineLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import LayerControl from "../LayerControl.svelte";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "crossings";
  let title = "Crossings";

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://www.openstreetmap.org/${e.detail.features[0].properties!.osm}`,
      "_blank",
    );
  }

  let legend: [string, string][] = [
    ["Zebra", "#66C5CC"],
    ["Parallel", "#F6CF71"],
    ["Pelican", "#F89C74"],
    ["Puffin", "#DCB0F2"],
    ["Toucan", "#87C55F"],
    ["Pegasus", "#9EB9F3"],
    ["Uncontrolled", "#FE88B1"],
    ["Signalised", "#C9DB74"],
    ["Unknown", "red"],
  ];
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="help">
    <p>
      This shows <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Key:crossing"
      >
        crossing
      </ExternalLink> data from OpenStreetMap (as of 5 January 2025).
    </p>
    <OsmLicense />
  </span>
  <div slot="controls">
    <Legend rows={legend} />
  </div>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId("crossings-lines")}
    sourceLayer={name}
    filter={isLine}
    paint={{
      "line-color": constructMatchExpression(
        ["get", "class"],
        Object.fromEntries(legend),
        "red",
      ),
      "line-width": 3,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
    on:click={onClick}
  >
    <Popup let:props>
      <p>{props.class || "Unknown"} crossing</p>
    </Popup>
  </LineLayer>

  <CircleLayer
    {...layerId("crossings-points")}
    sourceLayer={name}
    filter={isPoint}
    paint={{
      "circle-color": constructMatchExpression(
        ["get", "class"],
        Object.fromEntries(legend),
        "red",
      ),
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        1,
        2,
        8,
        3,
        13,
        10,
      ],
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
    on:click={onClick}
  >
    <Popup let:props>
      <p>{props.class || "Unknown"} crossing</p>
    </Popup>
  </CircleLayer>
</VectorTileSource>
