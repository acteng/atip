<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import {
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import { CircleLayer, VectorTileSource } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";
  import { showHideLayer } from "../url";

  let name = "bus_stops";
  let title = "Bus stops";

  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 3, 10, 20, 30, 100];

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <Checkbox bind:checked={$show}>
    {title}
    <span slot="right">
      <HelpButton>
        <p>
          Data from the <ExternalLink href="https://data.bus-data.dft.gov.uk">
            Bus Open Data Service
          </ExternalLink>, as of 7 February 2024. To calculate frequency, every
          scheduled arrival time per stop is considered, grouped by day of the
          week. The total daily count is just the number of scheduled arrivals
          for a day. The peak hour frequency is the highest number of buses in
          any one hour window. That window might not lined up perfectly on the
          hour -- a peak hour might occur from 8:25 to 9:25,for example.
        </p>
        <p>
          There are known limitations with this layer, so please use caution
          when using these numbers. Some stops may not be shown at all.
          Frequency could be over- or under-counted, due to exceptions to the
          regular daily schedule of a service.
        </p>
        <OsOglLicense />
      </HelpButton>
    </span>
  </Checkbox>
  {#if $show}
    <p>Peak hourly frequency:</p>
    <SequentialLegend {colorScale} {limits} />
  {/if}
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <CircleLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "circle-color": makeColorRamp(["get", "peak"], limits, colorScale),
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        1,
        2,
        8,
        3,
        13,
        10,
      ],
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>
        Stop name: <b>{props.stop_name}</b>
      </p>
      <p>
        Peak: <b>{props.peak}</b>
        buses during the busiest hour of any day
      </p>
      <p>The peak hour is {props.peak_description}</p>
      <p>
        Total buses per day: <b>{props.total}</b>
        (for {props.total_description}, the busiest day of the week)
      </p>
    </Popup>
  </CircleLayer>
</VectorTileSource>
