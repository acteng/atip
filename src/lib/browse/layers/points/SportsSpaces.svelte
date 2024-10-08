<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import {
    ColorLegend,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import { showHideLayer } from "../url";
  import { ExternalLink } from "lib/common";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "sports_spaces";

  let show = showHideLayer(name);
</script>

<LayerControl {name}>
  <Checkbox bind:checked={$show}>
    <ColorLegend color={colors.sports_spaces} />
    Sports spaces
    <span slot="right">
      <HelpButton>
        <p>
          This shows <ExternalLink
            href="https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dpitch"
          >
            sports pitches
          </ExternalLink> and <ExternalLink
            href="https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dsports_centre"
          >
            sports centres
          </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
        </p>
        <OsmLicense />
      </HelpButton>
    </span>
  </Checkbox>
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
