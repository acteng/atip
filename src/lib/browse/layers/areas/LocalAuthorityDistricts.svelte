<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import {
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    LineLayer,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "local_authority_districts";
  let color = colors.local_authority_districts;

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://www.ons.gov.uk/visualisations/areas/${
        e.detail.features[0].properties!.LAD23CD
      }`,
      "_blank",
    );
  }
</script>

<Checkbox bind:checked={$show}>
  <ColorLegend {color} />
  Local Authority Districts
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://geoportal.statistics.gov.uk/maps/79a4e87783be4b6bbb96ddad6dda52a3"
        >
          ONS Geography
        </ExternalLink>, as of January 2024.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

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
