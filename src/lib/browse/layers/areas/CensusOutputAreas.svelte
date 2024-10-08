<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox, Radio } from "govuk-svelte";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";
  import { customUrlState } from "../url";
  import LayerControl from "../LayerControl.svelte";

  let name = "census_output_areas";
  let colorScale = colors.sequential_low_to_high;

  type State = {
    show: boolean;
    kind: string;
  };
  let defaultState = {
    show: false,
    kind: "percent_households_with_car",
  };
  function stringify(x: State): string | null {
    return x.show ? x.kind : null;
  }
  function parse(x: string): State {
    return {
      show: true,
      kind: x,
    };
  }
  let state = customUrlState(name, defaultState, stringify, parse);

  function onClick(e: CustomEvent<LayerClickInfo>) {
    let oa = e.detail.features[0].properties!["OA21CD"];
    if (
      $state.kind == "percent_households_with_car" ||
      $state.kind == "average_cars_per_household"
    ) {
      window.open(
        `https://www.ons.gov.uk/census/maps/choropleth/housing/number-of-cars-or-vans/number-of-cars-5a/no-cars-or-vans-in-household?oa=${oa}`,
        "_blank",
      );
    } else {
      window.open(
        `https://www.ons.gov.uk/census/maps/choropleth/population/population-density/population-density/persons-per-square-kilometre?oa=${oa}`,
        "_blank",
      );
    }
  }

  // Should return 6 things (1 more than colorScale)
  function makeLimits(kind: string): number[] {
    if (kind == "percent_households_with_car") {
      // Equal buckets of 20%
      return [0, 20, 40, 60, 80, 100];
    } else if (kind == "average_cars_per_household") {
      // The max value is 2.4, so pick equal buckets
      return [0.0, 0.5, 1.0, 1.5, 2.0, 2.5];
    } else {
      // Use the same (slightly rounded) buckets as https://www.ons.gov.uk/census/maps/choropleth/population/population-density/population-density/persons-per-square-kilometre
      return [0, 4700, 13000, 33000, 94000, 1980000];
    }
  }
</script>

<LayerControl {name} title="2021 census" bind:show={$state.show}>
  <Checkbox bind:checked={$state.show}>
    2021 census
    <span slot="right">
      <HelpButton>
        {#if $state.kind == "percent_households_with_car"}
          <p>
            Car/van availability data is from the 2021 census, via <ExternalLink
              href="https://www.nomisweb.co.uk/sources/census_2021_bulk"
            >
              NOMIS TS045
            </ExternalLink>. Output area boundaries from <ExternalLink
              href="https://geoportal.statistics.gov.uk/datasets/ons::output-areas-2021-boundaries-ew-bgc/explore"
            >
              ONS Geography
            </ExternalLink>.
          </p>
        {:else if $state.kind == "average_cars_per_household"}
          <p>
            Where the census counts "3 or more cars or vans", the average shown
            here assumes 3.
          </p>
          <p>
            Car/van availability data is from the 2021 census, via <ExternalLink
              href="https://www.nomisweb.co.uk/sources/census_2021_bulk"
            >
              NOMIS TS045
            </ExternalLink>. Output area boundaries from <ExternalLink
              href="https://geoportal.statistics.gov.uk/datasets/ons::output-areas-2021-boundaries-ew-bgc/explore"
            >
              ONS Geography
            </ExternalLink>.
          </p>
        {:else}
          <p>
            Population density data is from the 2021 census, via <ExternalLink
              href="https://www.nomisweb.co.uk/sources/census_2021_bulk"
            >
              NOMIS TS006
            </ExternalLink>. Output area boundaries from <ExternalLink
              href="https://geoportal.statistics.gov.uk/datasets/ons::output-areas-2021-boundaries-ew-bgc/explore"
            >
              ONS Geography
            </ExternalLink>.
          </p>
        {/if}
        <OsOglLicense />
      </HelpButton>
    </span>
  </Checkbox>

  <Radio
    label="Dataset"
    choices={[
      ["percent_households_with_car", "Percent of households with a car"],
      ["average_cars_per_household", "Average cars per household"],
      ["population_density", "Population density"],
    ]}
    bind:value={$state.kind}
  />

  {#if $state.kind == "percent_households_with_car"}
    <SequentialLegend {colorScale} limits={makeLimits($state.kind)} />
  {:else if $state.kind == "average_cars_per_household"}
    <SequentialLegend {colorScale} limits={makeLimits($state.kind)} />
  {:else if $state.kind == "population_density"}
    <p>(people per square kilometres)</p>
    <SequentialLegend
      {colorScale}
      limits={makeLimits($state.kind).map((x) => x.toLocaleString())}
    />
  {/if}
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "fill-color": makeColorRamp(
        ["get", $state.kind],
        makeLimits($state.kind),
        colorScale,
      ),
      "fill-opacity": hoverStateFilter(0.5, 0.7),
    }}
    layout={{
      visibility: $state.show ? "visible" : "none",
    }}
    eventsIfTopMost
    manageHoverState
    hoverCursor="pointer"
    on:click={onClick}
  >
    <Popup let:props>
      {@const oa = props["OA21CD"]}
      {@const value = props[$state.kind]}
      {#if $state.kind == "percent_households_with_car"}
        <p>
          <b>{value}%</b>
          of households in {oa} have 1 or more cars
        </p>
      {:else if $state.kind == "average_cars_per_household"}
        <p>
          Households in {oa} have an average of
          <b>{value}</b>
          cars
        </p>
      {:else}
        <p>
          There are <b>{value.toLocaleString()}</b>
          people per square kilometre in {oa}
        </p>
      {/if}
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId(`${name}-outline`)}
    sourceLayer={name}
    paint={{
      "line-color": "black",
      "line-width": 0.5,
    }}
    layout={{
      visibility: $state.show ? "visible" : "none",
    }}
  />
</VectorTileSource>
