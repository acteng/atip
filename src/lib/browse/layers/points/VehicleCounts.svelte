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
  import {
    CircleLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";
  import { showHideLayer } from "../url";

  let name = "vehicle_counts";

  let colorScale = colors.sequential_low_to_high;
  // Manual buckets for motor_vehicles, which max out at 205,000
  let limits = [0, 40000, 80000, 120000, 160000, 205000];
  // Remove some because there's not much width
  let describeLimits = ["", "40k", "80k", "120k", "160k", ""];

  let show = showHideLayer(name);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://roadtraffic.dft.gov.uk/manualcountpoints/${
        e.detail.features[0].properties!.count_point
      }`,
      "_blank",
    );
  }
</script>

<LayerControl {name}>
  <Checkbox bind:checked={$show}>
    Vehicle counts
    <span slot="right">
      <HelpButton>
        <p>
          AADF (annual average daily flow) data from <ExternalLink
            href="https://roadtraffic.dft.gov.uk/downloads"
          >
            DfT road statistics
          </ExternalLink>. This counts the total daily number of vehicles
          traveling past a count point (in both directions) on an average day of
          the year. Data from the latest year available is shown. See <ExternalLink
            href="https://storage.googleapis.com/dft-statistics/road-traffic/all-traffic-data-metadata.pdf"
          >
            methodology
          </ExternalLink> for details and caveats about the measurements.
        </p>
        <p>
          The colors show motor vehicles AADF, not pedal cycles. The outline is
          thicker when the latest data is a manual or automatic count, and
          thinner when it's an estimate from previous years or nearby counters.
          Click a point for full data.
        </p>
        <OsOglLicense />
      </HelpButton>
    </span>
  </Checkbox>
  {#if $show}
    <SequentialLegend {colorScale} limits={describeLimits} />
  {/if}
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <CircleLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "circle-color": makeColorRamp(
        ["get", "motor_vehicles"],
        limits,
        colorScale,
      ),
      "circle-opacity": 0.9,
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        1,
        2,
        8,
        3,
        13,
        15,
      ],
      "circle-stroke-color": "black",
      "circle-stroke-width": [
        "case",
        [
          "in",
          ["get", "method"],
          ["literal", ["Manual count", "Automatic counter"]],
        ],
        1.5,
        0.1,
      ],
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
    on:click={onClick}
  >
    <Popup let:props>
      <h2>{props.location}</h2>
      <p>
        Total motor vehicles ({props.year} AADF):
        <b>
          {props.motor_vehicles.toLocaleString()}
        </b>
      </p>
      <p>
        Total pedal cycles ({props.year} AADF):
        <b>
          {props.pedal_cycles.toLocaleString()}
        </b>
      </p>
      <p>
        Count method: <b>{props.method}</b>
      </p>
    </Popup>
  </CircleLayer>
</VectorTileSource>
