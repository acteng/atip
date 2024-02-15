<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "bus_routes";

  let show = false;
</script>

<Checkbox bind:checked={show}>
  <ColorLegend color={colors.bus_route_with_lane} />
  Bus routes
  <span slot="right">
    <HelpButton>
      <p>
        This shows all roads with at least one bus route crossing them. It also
        shows whether the road has a bus lane or not.
      </p>
      <p>
        Note this data is from OpenStreetMap (as of 9 August 2023), not <ExternalLink
          href="https://gtfs.org"
        >
          GTFS
        </ExternalLink>, and doesn't include which routes are run or the
        frequency of service.
      </p>
      <OsmLicense />
    </HelpButton>
  </span>
</Checkbox>

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
      visibility: show ? "visible" : "none",
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
