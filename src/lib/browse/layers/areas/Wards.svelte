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
    FillLayer,
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "wards";
  let title = "Wards";
  let color = colors.wards;

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    let name = encodeURIComponent(e.detail.features[0].properties!.name);
    // Help people find the councillor for this area
    window.open(`https://www.google.com/search?q=${name}+councillor`, "_blank");
  }
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend {color} /></span>
  <span slot="help">
    <p>
      Data from <ExternalLink
        href="https://geoportal.statistics.gov.uk/datasets/ons::wards-may-2023-boundaries-uk-bgc/explore"
      >
        ONS Geography
      </ExternalLink>, as of May 2023.
    </p>
    <OsOglLicense />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.0, 0.5),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
    on:click={onClick}
    hoverCursor="pointer"
  >
    <Popup let:props>
      <p>{props.name}</p>
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId(`${name}-outline`)}
    sourceLayer={name}
    paint={{
      "line-color": color,
      "line-width": 2.5,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />
</VectorTileSource>
