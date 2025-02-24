<script lang="ts">
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
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "cycle_routes";
  let title = "Cycle routes";

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `http://openstreetmap.org/relation/${e.detail.features[0].properties!.osm_relation}`,
      "_blank",
    );
  }
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend color={colors.cycle_route} /></span>
  <span slot="help">
    <p>
      This shows all cycle routes, according to <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Tag:route%3Dbicycle"
      >
        OpenStreetMap
      </ExternalLink> (as of 20 October 2024). The quality of the route or infrastructure
      along it is not shown here. Not all routes are official, named routes -- click
      one to see more information.
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
      "line-color": hoverStateFilter(colors.cycle_route, "red"),
      "line-width": 8,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
    hoverCursor="pointer"
    on:click={onClick}
  >
    <Popup let:props>{props.name || "untitled route"}</Popup>
  </LineLayer>
</VectorTileSource>
