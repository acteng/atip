<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    LineLayer,
    Popup,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "local_authority_districts";
  let color = colors.local_authority_districts;
  let outlineLayer = `${name}-outline`;

  let show = false;
  $: visibility = show ? "visible" : "none";

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://www.ons.gov.uk/visualisations/areas/${e.detail.features[0].properties.LAD23CD}`,
      "_blank"
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Local Authority Districts
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://geoportal.statistics.gov.uk/datasets/ons::local-authority-districts-may-2023-boundaries-uk-buc/explore"
        >
          ONS Geography
        </ExternalLink>, as of May 2023.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

<GeoJSON data={`${publicResourceBaseUrl()}/v1/${name}.geojson`}>
  <FillLayer
    id={name}
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.0, 0.5),
    }}
    layout={{
      visibility,
    }}
    manageHoverState
    on:click={onClick}
    hoverCursor="pointer"
  >
    <Popup openOn="hover" let:features>
      <p>{features[0].properties.name}</p>
    </Popup>
  </FillLayer>
  <LineLayer
    id={outlineLayer}
    paint={{
      "line-color": color,
      "line-width": 2.5,
    }}
    layout={{
      visibility,
    }}
  />
</GeoJSON>
