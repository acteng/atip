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
    LineLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "parliamentary_constituencies";
  let title = "Parliamentary constituencies";
  let color = colors.parliamentary_constituencies;

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    // There are common suffixes that don't work with the search
    let name = e.detail.features[0].properties!.Name;
    name = name.replace(/ Boro Const$/, "");
    name = name.replace(/ Co Const$/, "");
    name = encodeURIComponent(name);

    // Help people find the MP for this area
    window.open(
      `https://members.parliament.uk/members/Commons?SearchText=${name}`,
      "_blank",
    );
  }
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend {color} /></span>
  <span slot="help">
    <p>
      Data from <ExternalLink
        href="https://www.ordnancesurvey.co.uk/products/boundary-line"
      >
        Ordnance Survey Boundary-Line
      </ExternalLink>, as of October 2024.
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
      <p>{props.Name}</p>
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId(`${name}-outline`)}
    sourceLayer={name}
    paint={{
      "line-color": color,
      "line-width": 5,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />
</VectorTileSource>
