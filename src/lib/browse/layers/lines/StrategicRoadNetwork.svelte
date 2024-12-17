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
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "srn";
  let title = "Strategic Road Network";
  let color = colors.srn;

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend {color} /></span>
  <span slot="help">
    <p>
      Data from <ExternalLink
        href="https://osdatahub.os.uk/downloads/open/OpenRoads"
      >
        OS Open Roads
      </ExternalLink>, as of December 2023. The SRN is equivalent to trunk
      roads.
    </p>
    <OsOglLicense />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": color,
      "line-width": 7,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>{props.name ?? "Unknown SRN road"}</p>
    </Popup>
  </LineLayer>
</VectorTileSource>
