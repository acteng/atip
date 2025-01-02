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
    GeoJSON,
    hoverStateFilter,
    LineLayer,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "combined_authorities";
  let title = "Combined authorities";
  let color = colors.combined_authorities;

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://www.ons.gov.uk/visualisations/areas/${
        e.detail.features[0].properties!.CAUTH24CD
      }`,
      "_blank",
    );
  }
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend {color} /></span>
  <span slot="help">
    <p>
      Data from <ExternalLink
        href="https://geoportal.statistics.gov.uk/datasets/8369f71423ba474ebdbac60a539b53c8_0/explore"
      >
        ONS Geography
      </ExternalLink>, as of May 2024.
    </p>
    <OsOglLicense />
  </span>
</LayerControl>

<GeoJSON data={`${publicResourceBaseUrl()}/v1/${name}.geojson`}>
  <FillLayer
    {...layerId(name)}
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
    paint={{
      "line-color": color,
      "line-width": 2.5,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />
</GeoJSON>
