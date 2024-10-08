<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
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
  import { customUrlState } from "../url";

  // TODO It'd be much simpler to have one source with both attributes
  let nameCommute = "pct_commute";
  let nameSchool = "pct_school";
  let title = "Propensity to Cycle Tool";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 50, 100, 500, 1000, 2000];

  type State = {
    show: boolean;
    tripPurpose: string;
    scenario: string;
  };
  let defaultState = {
    show: false,
    tripPurpose: nameCommute,
    scenario: "baseline",
  };
  function stringify(x: State): string | null {
    return x.show ? `${x.tripPurpose}/${x.scenario}` : null;
  }
  function parse(x: string): State {
    let [tripPurpose, scenario] = x.split("/");
    return {
      show: true,
      tripPurpose,
      scenario,
    };
  }
  let state = customUrlState("pct", defaultState, stringify, parse);

  // TODO Don't use a function and @html; do everything in Svelte?
  function tooltip(props: { [name: string]: any }): string {
    let baseline = props.baseline;
    let gov_target = props.gov_target;
    let go_dutch = props.go_dutch;

    let x = `<h2>Trip purpose: ${
      $state.tripPurpose == nameCommute ? "commuting" : "school"
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

<LayerControl name="pct" {title} bind:show={$state.show}>
  <Checkbox bind:checked={$state.show}>
    {title}
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
  {#if $state.show}
    <SequentialLegend {colorScale} {limits} />
    <Radio
      label="Trip purpose"
      choices={[
        ["pct_commute", "Commuting"],
        ["pct_school", "School"],
      ]}
      bind:value={$state.tripPurpose}
      inlineSmall
    />
    <Select
      label="Scenario"
      choices={[
        ["baseline", "Baseline (2011)"],
        ["gov_target", "Government target (2025)"],
        ["go_dutch", "Go Dutch"],
      ]}
      bind:value={$state.scenario}
    />
  {/if}
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${nameCommute}.pmtiles`}
>
  <LineLayer
    {...layerId(nameCommute)}
    sourceLayer={nameCommute}
    paint={{
      "line-color": makeColorRamp(["get", $state.scenario], limits, colorScale),
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility:
        $state.show && $state.tripPurpose == nameCommute ? "visible" : "none",
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
      "line-color": makeColorRamp(["get", $state.scenario], limits, colorScale),
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility:
        $state.show && $state.tripPurpose == nameSchool ? "visible" : "none",
    }}
  >
    <Popup let:props>
      {@html tooltip(props)}
    </Popup>
  </LineLayer>
</VectorTileSource>
