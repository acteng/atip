<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Popup,
    privateResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
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
        This shows the average and minimum pavement width (in meters) from
        Ordnance Survey. Because the shape of pavement may vary along a road,
        both average and minimum are reported. Measurements may be available for
        the left side of the road, the right, or both. The coloring shows the
        larger of the two average widths, and the line thickness has no meaning.
        Hover over a line to see if there's pavement on one or both sides of the
        road. (You won't be able to distinguish left and right though; use the
        OS Road basemap instead.)
      </p>
      <p>
        Note these measurements are difficult to interpret near dual
        carriageways (shown as parallel lines).
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
      "line-color": makeColorRamp(
        [
          "max",
          ["number", ["get", "left_average"], 0],
          ["number", ["get", "right_average"], 0],
        ],
        limits,
        colorScale,
      ),
      // TODO Try showing the actual width, in meters and not pixels
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      {#if props.left_average}
        <p>
          Left side of the road: <b>{props.left_average}</b>
          m average,
          <b>{props.left_minimum}</b>
          m minimum
        </p>
      {:else}
        <p>Left side of the road: no pavement</p>
      {/if}

      {#if props.right_average}
        <p>
          Right side of the road: <b>{props.right_average}</b>
          m average,
          <b>{props.right_minimum}</b>
          m minimum
        </p>
      {:else}
        <p>Right side of the road: no pavement</p>
      {/if}
    </Popup>
  </LineLayer>
</VectorTileSource>
