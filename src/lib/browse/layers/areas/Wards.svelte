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
    hoverStateFilter,
    LineLayer,
    Popup,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "wards";
  let color = colors.wards;
  let outlineLayer = `${name}-outline`;

  let show = false;

  function onClick(e: CustomEvent<LayerClickInfo>) {
    let name = encodeURIComponent(e.detail.features[0].properties!.name);
    // Help people find the councillor for this area
    window.open(`https://www.google.com/search?q=${name}+councillor`, "_blank");
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Wards
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://geoportal.statistics.gov.uk/datasets/ons::wards-may-2023-boundaries-uk-bgc/explore"
        >
          ONS Geography
        </ExternalLink>, as of May 2023.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    id={name}
    sourceLayer={name}
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
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
    sourceLayer={name}
    paint={{
      "line-color": color,
      "line-width": 2.5,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  />
</VectorTileSource>
