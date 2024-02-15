<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Popup,
    privateResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "pavement_widths";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 2, 4, 6, 8, 13];

  let show = false;
</script>

<Checkbox bind:checked={show}>
  OS Pavement widths
  <span slot="right">
    <HelpButton>
      <p>
        This is average and minimum pavement width (in meters) from Ordnance
        Survey. The coloring shows the average width, and the line thickness has
        no meaning. Hover over a line to see if there's pavement on one or both
        sides of the road. (You won't be able to distinguish left and right
        though; use the OS Road basemap instead.)
      </p>
      <p>Data valid as of 1 January, 2024</p>
      <p>
        License: Contains OS data &copy; Crown copyright and database right
        2023. Made available under the <ExternalLink
          href="https://www.ordnancesurvey.co.uk/documents/licensing/psga-member-licence.pdf"
        >
          Public Sector Geospatial Agreement
        </ExternalLink>.
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} {limits} />
{/if}

<VectorTileSource
  url={`pmtiles://${privateResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": makeColorRamp(["get", "average"], limits, colorScale),
      // TODO Try showing the actual width, in meters and not pixels
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>
        Side of the road: <b>{props.side}</b>
      </p>
      <p>
        Average width: <b>{props.average}</b>
        meters
      </p>
      <p>
        Minimum width: <b>{props.minimum}</b>
        meters
      </p>
    </Popup>
  </LineLayer>
</VectorTileSource>
