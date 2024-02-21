<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox, Radio, Select } from "govuk-svelte";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import SequentialLegend from "../SequentialLegend.svelte";

  // TODO It'd be much simpler to have one source with both attributes
  let nameCommute = "pct_commute";
  let nameSchool = "pct_school";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 50, 100, 500, 1000, 2000];

  let tripPurpose = nameCommute;
  let scenario = "baseline";

  let show = false;

  // TODO Don't use a function and @html; do everything in Svelte?
  function tooltip(props: { [name: string]: any }): string {
    let baseline = props.baseline;
    let gov_target = props.gov_target;
    let go_dutch = props.go_dutch;

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
</script>

<Checkbox bind:checked={show}>
  Propensity to Cycle Tool
  <span slot="right">
    <HelpButton>
      <p>
        The PCT shows major links on the transport network on which there is
        high latent demand for cycling under scenarios of change, based on the
        "fastest" routes from CycleStreets. Counts approximate daily rush hour
        traffic levels.
      </p>
      <p>
        Note this layer uses 2011 census data and outdated OpenStreetMap data.
        Please use this layer with caution.
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
    choices={[
      ["pct_commute", "Commuting"],
      ["pct_school", "School"],
    ]}
    bind:value={tripPurpose}
    inlineSmall
  />
  <Select
    label="Scenario"
    choices={[
      ["baseline", "Baseline (2011)"],
      ["gov_target", "Government target (2025)"],
      ["go_dutch", "Go Dutch"],
    ]}
    bind:value={scenario}
  />
{/if}

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${nameCommute}.pmtiles`}
>
  <LineLayer
    {...layerId(nameCommute)}
    sourceLayer={nameCommute}
    paint={{
      "line-color": makeColorRamp(["get", scenario], limits, colorScale),
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show && tripPurpose == nameCommute ? "visible" : "none",
    }}
  >
    <Popup let:props>
      {@html tooltip(props)}
    </Popup>
  </LineLayer>
</VectorTileSource>
<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${nameSchool}.pmtiles`}
>
  <LineLayer
    {...layerId(nameSchool)}
    sourceLayer={nameSchool}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": makeColorRamp(["get", scenario], limits, colorScale),
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show && tripPurpose == nameSchool ? "visible" : "none",
    }}
  >
    <Popup let:props>
      {@html tooltip(props)}
    </Popup>
  </LineLayer>
</VectorTileSource>
