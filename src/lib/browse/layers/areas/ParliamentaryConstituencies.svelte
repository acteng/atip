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

  let name = "parliamentary_constituencies";
  let color = colors.parliamentary_constituencies;
  let outlineLayer = `${name}-outline`;

  let show = false;
  $: visibility = show ? "visible" : "none";

  function onClick(e: CustomEvent<LayerClickInfo>) {
    // There are common suffixes that don't work with the search
    let name = e.detail.features[0].properties.Name;
    name = name.replace(/ Boro Const$/, "");
    name = name.replace(/ Co Const$/, "");
    name = encodeURIComponent(name);

    // Help people find the MP for this area
    window.open(
      `https://members.parliament.uk/members/Commons?SearchText=${name}`,
      "_blank"
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Parliamentary constituencies
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://www.ordnancesurvey.co.uk/products/boundary-line"
        >
          Ordnance Survey Boundary-Line
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
      visibility,
    }}
    manageHoverState
    on:click={onClick}
    hoverCursor="pointer"
  >
    <Popup openOn="hover" let:features>
      <p>{features[0].properties.Name}</p>
    </Popup>
  </FillLayer>
  <LineLayer
    id={outlineLayer}
    sourceLayer={name}
    paint={{
      "line-color": color,
      "line-width": 5,
    }}
    layout={{
      visibility,
    }}
  />
</VectorTileSource>
