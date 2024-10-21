<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import {
    ColorLegend,
    ExternalLink,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { layerId } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "bus_routes";
  let title = "Bus routes";

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend color={colors.bus_route_with_lane} /></span>
  <span slot="help">
    <p>
      This shows all roads with at least one bus route crossing them. It also
      shows whether the road has a bus lane or not.
    </p>
    <p>
      Note this data is from OpenStreetMap (as of 20 October 2024), not <ExternalLink
        href="https://gtfs.org"
      >
        GTFS
      </ExternalLink>, and doesn't include which routes are run or the frequency
      of service.
    </p>
    <OsmLicense />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "line-color": [
        "case",
        ["boolean", ["get", "has_bus_lane"], false],
        colors.bus_route_with_lane,
        colors.bus_route_without_lane,
      ],
      "line-width": 5,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      {#if props.has_bus_lane}
        <p>
          At least one bus route crosses here, with a bus lane in one or more
          directions
        </p>
      {:else}
        <p>At least one bus route crosses here, without any bus lanes</p>
      {/if}
    </Popup>
  </LineLayer>
</VectorTileSource>
