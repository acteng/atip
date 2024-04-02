<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId, constructMatchExpression } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "road_noise";

  let colorScale = colors.sequential_low_to_high;

  let show = false;
</script>

<Checkbox bind:checked={show}>
  Road noise
  <span slot="right">
    <HelpButton>
      <p>
        This is the LAeq,16h dataset showing annual average noise levels in
        units of decibels for the 16-hour period between 7am and 11pm. Only
        roads in areas with at least 100,000 people are included.
      </p>
      <p>
        Data from June 2019, produced by <ExternalLink
          href="https://environment.data.gov.uk/dataset/b9c6bf30-a02d-4378-94a0-2982de1bef86"
        >
          DEFRA
        </ExternalLink>. See there for methodology details
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} limits={["55", "60", "65", "70", "75", ">"]} />
{/if}

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "fill-color": constructMatchExpression(
        ["get", "noiseclass"],
        {
          "55.0-59.9": colorScale[0],
          "60.0-64.9": colorScale[1],
          "65.0-69.9": colorScale[2],
          "70.0-74.9": colorScale[3],
          ">=75.0": colorScale[4],
        },
        "red",
      ),
      "fill-opacity": hoverStateFilter(0.5, 0.7),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>{props.noiseclass} dB</p>
    </Popup>
  </FillLayer>
</VectorTileSource>
