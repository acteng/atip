<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import { ExternalLink, Popup, privateResourceBaseUrl } from "lib/common";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import SequentialLegend from "../SequentialLegend.svelte";
  import { showHideLayer } from "../url";

  let name = "pavement_widths";
  let title = "OS Pavement widths";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 2, 4, 6, 8, 13];

  let show = showHideLayer(name);

  function direction(angle: number): string {
    // 0 degrees is directly north. Split 360 into 8 pieces: 45 degrees. Shift
    // everything by 45/2, so that north counts as [-45/2, 45/2].
    // The input is [-90, 360 + 90]
    let idx = Math.floor(((angle + 45 / 2) % 360) / 45);
    return ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"][idx];
  }

  // Returns HTML
  function directionLabel(angle: number): string {
    return `${direction(angle)} <span style="display: inline-block; rotate: ${angle}deg">⬆</span>`;
  }
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="help">
    <p>
      This shows the average and minimum pavement width (in meters) from
      Ordnance Survey. Because the shape of pavement may vary along a road, both
      average and minimum are reported. Measurements may be available for the
      left side of the road, the right, or both. The coloring shows the larger
      of the two average widths, and the line thickness has no meaning. Hover
      over a line to see if there's pavement on one or both sides of the road.
      (You won't be able to distinguish left and right though; use the OS Road
      basemap instead.)
    </p>
    <p>
      Note these measurements are difficult to interpret near dual carriageways
      (shown as parallel lines).
    </p>
    <p>Data valid as of 1 January, 2024</p>
    <p>
      License: Contains OS data &copy; Crown copyright and database right 2023.
      Made available under the <ExternalLink
        href="https://www.ordnancesurvey.co.uk/documents/licensing/psga-member-licence.pdf"
      >
        Public Sector Geospatial Agreement
      </ExternalLink>.
    </p>
  </span>
  <span slot="controls">
    <SequentialLegend {colorScale} {limits} />
  </span>
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
      visibility: $show ? "visible" : "none",
    }}
  >
    <Popup let:props openOn="hover">
      {#each [[props.left_average, props.left_minimum, -90], [props.right_average, props.right_minimum, 90]] as [avg, min, offset]}
        {#if avg}
          <p>
            {@html directionLabel(props.angle + offset)} side of the road:
            <b>{avg}</b>
            m average,
            <b>{min}</b>
            m minimum
          </p>
        {:else}
          <p>
            {@html directionLabel(props.angle + offset)} side of the road: no pavement
          </p>
        {/if}
      {/each}
    </Popup>
  </LineLayer>
</VectorTileSource>
