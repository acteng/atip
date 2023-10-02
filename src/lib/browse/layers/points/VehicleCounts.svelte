<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import {
    CircleLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "vehicle_counts";

  let colorScale = colors.sequential_low_to_high;
  // Manual buckets for motor_vehicles_2022, which max out at 205,000
  let limits = [0, 40000, 80000, 120000, 160000, 205000];
  // Remove some because there's not much width
  let describeLimits = ["", "40k", "80k", "120k", "160k", ""];

  let show = false;

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.open(
      `https://roadtraffic.dft.gov.uk/manualcountpoints/${
        e.detail.features[0].properties!.count_point
      }`,
      "_blank"
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  Vehicle counts
  <span slot="right">
    <HelpButton>
      <p>
        2022 AADF (annual average daily flow) data from <ExternalLink
          href="https://roadtraffic.dft.gov.uk/downloads"
        >
          DfT road statistics
        </ExternalLink>. This counts the total daily number of vehicles
        traveling past a count point (in both directions) on an average day of
        the year. See <ExternalLink
          href="https://storage.googleapis.com/dft-statistics/road-traffic/all-traffic-data-metadata.pdf"
        >
          methodology
        </ExternalLink> for details and caveats about the measurements.
      </p>
      <p>
        The colors show motor vehicles AADF, not pedal cycles. Click a point for
        full data.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} limits={describeLimits} />
{/if}

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <CircleLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "circle-color": makeColorRamp(
        ["get", "motor_vehicles_2022"],
        limits,
        colorScale
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
      "circle-stroke-width": 0.1,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    on:click={onClick}
  >
    <Popup let:props>
      <h2>{props.location}</h2>
      <p>
        Total motor vehicles (2022 AADF): <b>
          {props.motor_vehicles_2022.toLocaleString()}
        </b>
      </p>
      <p>
        Total pedal cycles (2022 AADF): <b>
          {props.pedal_cycles_2022.toLocaleString()}
        </b>
      </p>
      <p>
        Count method: <b>{props.method}</b>
      </p>
    </Popup>
  </CircleLayer>
</VectorTileSource>
