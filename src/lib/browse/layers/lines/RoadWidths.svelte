<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
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
  import { showHideLayer } from "../url";

  let name = "road_widths";
  let title = "OS Road widths";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 5, 10, 15, 20, 100];

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <Checkbox bind:checked={$show}>
    {title}
    <span slot="right">
      <HelpButton>
        <p>
          This is average and minimum road carriageway width (in meters) from
          Ordnance Survey. The coloring shows the average width, and the line
          thickness has no meaning. Be careful interpreting the data near dual
          carriageways and crossing islands.
        </p>
        <p>Data valid as of 1 September, 2023</p>
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
  {#if $show}
    <SequentialLegend {colorScale} {limits} />
  {/if}
</LayerControl>

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
      visibility: $show ? "visible" : "none",
    }}
  >
    <Popup let:props>
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
