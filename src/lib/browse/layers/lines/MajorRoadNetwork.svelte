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
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "mrn";
  let color = colors.mrn;

  let show = false;
</script>

<Checkbox bind:checked={show}>
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
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>{props.name ?? "Unknown MRN road"}</p>
    </Popup>
  </LineLayer>
</VectorTileSource>
