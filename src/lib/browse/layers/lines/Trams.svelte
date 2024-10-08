<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import { ColorLegend, HelpButton, publicResourceBaseUrl } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "trams";
  let title = "Trams";

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `http://openstreetmap.org/way/${e.detail.features[0].properties!.osm_id}`,
      "_blank",
    );
  }
</script>

<LayerControl {name} {title} bind:show={$show}>
  <Checkbox bind:checked={$show}>
    <ColorLegend color={colors.trams} />
    {title}
    <span slot="right">
      <HelpButton>
        <p>
          This shows all trams and light rail lines, according to OpenStreetMap
          (as of 7 February 2024). When these are close to a scheme,
          interactions between the modes must be designed carefully.
        </p>
        <OsmLicense />
      </HelpButton>
    </span>
  </Checkbox>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "line-color": colors.trams,
      "line-width": 5,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
    hoverCursor="pointer"
    on:click={onClick}
  />
</VectorTileSource>
