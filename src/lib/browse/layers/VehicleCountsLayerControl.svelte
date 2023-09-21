<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    InteractiveLayer,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    makeColorRamp,
    overwriteCircleLayer,
    overwritePmtilesSource,
  } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors } from "../colors";
  import SequentialLegend from "./SequentialLegend.svelte";

  let name = "vehicle_counts";

  let colorScale = colors.sequential_low_to_high;
  // Manual buckets for motor_vehicles_2022, which max out at 205,000
  let limits = [0, 40000, 80000, 120000, 160000, 205000];
  // Remove some because there's not much width
  let describeLimits = ["", "40k", "80k", "120k", "160k", ""];

  overwritePmtilesSource(
    $map,
    name,
    `${publicResourceBaseUrl()}/v1/${name}.pmtiles`
  );

  overwriteCircleLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color: makeColorRamp(["get", "motor_vehicles_2022"], limits, colorScale),
    opacity: 0.9,
    radius: ["interpolate", ["linear"], ["zoom"], 1, 2, 8, 3, 13, 15],
    strokeColor: "black",
    strokeWidth: 0.1,
  });

  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    let x = `<h2>${feature.properties.location}</h2>`;
    x += `<p>Total motor vehicles (2022 AADF): <b>${feature.properties.motor_vehicles_2022.toLocaleString()}</b></p>`;
    x += `<p>Total pedal cycles (2022 AADF): <b>${feature.properties.pedal_cycles_2022.toLocaleString()}</b></p>`;
    x += `<p>Count method: <b>${feature.properties.method}</b></p>`;
    return x;
  }

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    window.open(
      `https://roadtraffic.dft.gov.uk/manualcountpoints/${e.detail.properties.count_point}`,
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
      <p>
        License: <ExternalLink
          href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
        >
          Open Government License
        </ExternalLink>
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} limits={describeLimits} />
{/if}

<InteractiveLayer layer={name} {tooltip} {show} clickable on:click={onClick} />
