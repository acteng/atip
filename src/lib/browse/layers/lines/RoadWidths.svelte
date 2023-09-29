<script lang="ts">
  import { ExternalLink, HelpButton, privateResourceBaseUrl } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { makeColorRamp } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    Popup,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "road_widths";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 5, 10, 15, 20, 100];

  let show = false;
  $: visibility = show ? "visible" : "none";
</script>

<Checkbox id={name} bind:checked={show}>
  OS Road widths
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
{#if show}
  <SequentialLegend {colorScale} {limits} />
{/if}

<VectorTileSource
  url={`pmtiles://${privateResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    id={name}
    sourceLayer={name}
    paint={{
      "line-color": makeColorRamp(["get", "average"], limits, colorScale),
      // TODO Try showing the actual width, in meters and not pixels
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility,
    }}
  >
    <Popup openOn="hover" let:features>
      <p>
        Average width: <b>{features[0].properties.average}</b>
        meters
      </p>
      <p>
        Minimum width: <b>{features[0].properties.minimum}</b>
        meters
      </p>
    </Popup>
  </LineLayer>
</VectorTileSource>
