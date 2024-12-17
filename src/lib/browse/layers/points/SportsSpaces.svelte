<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "sports_spaces";
  let title = "Sports spaces";

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend color={colors.sports_spaces} /></span>
  <span slot="help">
    <p>
      This shows <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dpitch"
      >
        sports pitches
      </ExternalLink> and <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dsports_centre"
      >
        sports centres
      </ExternalLink> data from OpenStreetMap (as of 20 October 2024).
    </p>
    <OsmLicense />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "fill-color": colors.sports_spaces,
      "fill-opacity": hoverStateFilter(0.7, 1.0),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>{props.name ?? "Unnamed sports space"}</p>
    </Popup>
  </FillLayer>
</VectorTileSource>
