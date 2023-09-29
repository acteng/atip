<script lang="ts">
  import { ExternalLink, HelpButton, publicResourceBaseUrl } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { makeColorRamp } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    Popup,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "imd";
  let outlineLayer = `${name}-outline`;

  let colorScale = colors.sequential_low_to_high;
  // The deciles are [1, 10]. The 5 colors cover two each.
  let limits = [0, 2, 4, 6, 8, 10];

  let show = false;
  $: visibility = show ? "visible" : "none";
</script>

<Checkbox id={name} bind:checked={show}>
  Indices of Multiple Deprivation
  <span slot="right">
    <HelpButton>
      <p>
        The 2019 English IMD scores come from <ExternalLink
          href="https://data-communities.opendata.arcgis.com/datasets/communities::indices-of-multiple-deprivation-imd-2019-1/explore"
        >
          DLUCH GIS
        </ExternalLink>. Note the LSOAs identified are from the 2011 census. A
        detailed breakdown of the score across different categories can be found <ExternalLink
          href="http://dclgapps.communities.gov.uk/imd/iod_index.html"
        >
          here
        </ExternalLink>.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} limits={["Least deprived", "Most deprived"]} />
{/if}

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    id={name}
    paint={{
      // Decile 1 is the most deprived, but we want to invert for the color scale
      "fill-color": makeColorRamp(
        ["-", 10, ["get", "decile"]],
        limits,
        colorScale
      ),
      "fill-opacity": hoverStateFilter(0.5, 0.7),
    }}
    layout={{
      visibility,
    }}
    manageHoverState
  >
    <Popup openOn="hover" let:features>
      {@const props = features[0].properties}
      <p>
        {props.LSOA11CD} has an IMD score of
        <b>{props.score}</b>
      </p>
      <p>
        Rank: <b>{props.rank.toLocaleString()}</b>
        / 32,844 LSOAs
      </p>
    </Popup>
  </FillLayer>
  <LineLayer
    id={outlineLayer}
    paint={{
      "line-color": "black",
      "line-width": 0.5,
    }}
    layout={{
      visibility,
    }}
  />
</VectorTileSource>
