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
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    LineLayer,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "combined_authorities";
  let color = colors.combined_authorities;

  let show = false;

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://www.ons.gov.uk/visualisations/areas/${
        e.detail.features[0].properties!.CAUTH22CD
      }`,
      "_blank",
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Combined authorities
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://geoportal.statistics.gov.uk/datasets/ons::combined-authorities-december-2022-boundaries-en-buc/explore"
        >
          ONS Geography
        </ExternalLink>, as of December 2022.
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
      visibility: show ? "visible" : "none",
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
      visibility: show ? "visible" : "none",
    }}
  />
</GeoJSON>
