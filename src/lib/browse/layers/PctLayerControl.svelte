<script lang="ts">
  import { ExternalLink, HelpButton, InteractiveLayer } from "lib/common";
  import { Checkbox, Radio, Select } from "lib/govuk";
  import {
    hoveredToggle,
    makeColorRamp,
    overwriteLineLayer,
    overwritePmtilesSource,
  } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors, denseLineWidth } from "../colors";
  import SequentialLegend from "./SequentialLegend.svelte";

  // TODO It'd be much simpler to have one source with both attributes
  let nameCommute = "pct_commute";
  let nameSchool = "pct_school";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 50, 100, 500, 1000, 2000];

  let tripPurpose = nameCommute;
  let scenario = "baseline";

  for (let name of [nameCommute, nameSchool]) {
    overwritePmtilesSource(
      $map,
      name,
      `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.pmtiles`
    );
    overwriteLineLayer($map, {
      id: name,
      source: name,
      sourceLayer: name,
      color: makeColorRamp(["get", scenario], limits, colorScale),
      width: denseLineWidth,
      opacity: hoveredToggle(0.5, 1.0),
    });
  }

  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    let baseline = feature.properties.baseline;
    let gov_target = feature.properties.gov_target;
    let go_dutch = feature.properties.go_dutch;

    let x = `<h2>Trip purpose: ${
      tripPurpose == nameCommute ? "commuting" : "school"
    }</h2>`;
    x += `<p>Baseline (2011): <b>${baseline.toLocaleString()}</b></p>`;
    if (baseline == 0) {
      x += `<p>Government target (2025): <b>${gov_target.toLocaleString()}</b></p>`;
      x += `<p>Go Dutch: <b>${go_dutch.toLocaleString()}</b></p>`;
    } else {
      let multiplier_gov_target = (gov_target / baseline).toFixed(1);
      let multiplier_go_dutch = (go_dutch / baseline).toFixed(1);
      x += `<p>Government target (2025): ${gov_target.toLocaleString()} (<b>${multiplier_gov_target}x</b> of baseline)</p>`;
      x += `<p>Go Dutch: ${go_dutch.toLocaleString()} (<b>${multiplier_go_dutch}x</b> of baseline)</p>`;
    }
    return x;
  }

  function changeStyle() {
    $map.setPaintProperty(
      tripPurpose,
      "line-color",
      makeColorRamp(["get", scenario], limits, colorScale)
    );
  }
</script>

<Checkbox id={nameCommute} bind:checked={show}>
  Propensity to Cycle Tool
  <span slot="right">
    <HelpButton>
      <p>
        The PCT shows roads where more cycling levels are predicted to increase,
        given different assumptions about investments. The layer shows counts
        for commuting to work or school.
      </p>
      <p>
        See <ExternalLink href="https://www.pct.bike">
          the PCT website
        </ExternalLink> and <ExternalLink
          href="https://www.jtlu.org/index.php/jtlu/article/view/862"
        >
          2017 journal article
        </ExternalLink> for details on methodology and data sources.
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} {limits} />
  <Radio
    legend="Trip purpose"
    id="tripPurpose"
    choices={[
      ["pct_commute", "Commuting"],
      ["pct_school", "School"],
    ]}
    bind:value={tripPurpose}
    on:change={changeStyle}
    inlineSmall
  />
  <Select
    label="Scenario"
    id="scenario"
    choices={[
      ["baseline", "Baseline (2011)"],
      ["gov_target", "Government target (2025)"],
      ["go_dutch", "Go Dutch"],
    ]}
    bind:value={scenario}
    on:change={changeStyle}
  />
{/if}

<InteractiveLayer
  layer={nameCommute}
  {tooltip}
  show={show && tripPurpose == nameCommute}
  clickable={false}
/>
<InteractiveLayer
  layer={nameSchool}
  {tooltip}
  show={show && tripPurpose == nameSchool}
  clickable={false}
/>
