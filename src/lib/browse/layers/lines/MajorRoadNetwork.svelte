<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    hoverStateFilter,
    LineLayer,
    Popup,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "mrn";
  let color = colors.mrn;

  let show = false;
  $: visibility = show ? "visible" : "none";
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Major Road Network
  <span slot="right">
    <HelpButton>
      <p>
        Data from the <ExternalLink
          href="https://maps.dft.gov.uk/major-road-network/index.html"
        >
          Major Road Network
        </ExternalLink>, as of September 2021.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    id={name}
    sourceLayer={name}
    paint={{
      "line-color": color,
      "line-width": 7,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility,
    }}
  >
    <Popup openOn="hover" let:features>
      {@const name = features[0].properties.name ?? "Unknown MRN road"}
      <p>{name}</p>
    </Popup>
  </LineLayer>
</VectorTileSource>
