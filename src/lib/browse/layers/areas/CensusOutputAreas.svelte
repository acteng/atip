<script lang="ts">
  import { ExternalLink, HelpButton, publicResourceBaseUrl } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { makeColorRamp } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    Popup,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "census_output_areas";
  let outlineLayer = `${name}-outline`;
  let colorScale = colors.sequential_low_to_high;

  // Mutually exclusive, like a radio button
  let showHouseholdsWithCar = false;
  let showAverageCars = false;
  let showPopulationDensity = false;
  let colorBy = "";
  $: visibility = colorBy != "" ? "visible" : "none";
  $: {
    if (showHouseholdsWithCar) {
      colorBy = "percent_households_with_car";
    } else if (showAverageCars) {
      colorBy = "average_cars_per_household";
    } else if (showPopulationDensity) {
      colorBy = "population_density";
    } else {
      colorBy = "";
    }
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    let oa = e.detail.features[0].properties["OA21CD"];
    if (
      colorBy == "percent_households_with_car" ||
      colorBy == "average_cars_per_household"
    ) {
      window.open(
        `https://www.ons.gov.uk/census/maps/choropleth/housing/number-of-cars-or-vans/number-of-cars-5a/no-cars-or-vans-in-household?oa=${oa}`,
        "_blank"
      );
    } else {
      window.open(
        `https://www.ons.gov.uk/census/maps/choropleth/population/population-density/population-density/persons-per-square-kilometre?oa=${oa}`,
        "_blank"
      );
    }
  }

  // Should return 6 things (1 more than colorScale)
  function makeLimits(): number[] {
    if (colorBy == "percent_households_with_car") {
      // Equal buckets of 20%
      return [0, 20, 40, 60, 80, 100];
    } else if (colorBy == "average_cars_per_household") {
      // The max value is 2.4, so pick equal buckets
      return [0.0, 0.5, 1.0, 1.5, 2.0, 2.5];
    } else {
      // Use the same (slightly rounded) buckets as https://www.ons.gov.uk/census/maps/choropleth/population/population-density/population-density/persons-per-square-kilometre
      return [0, 4700, 13000, 33000, 94000, 1980000];
    }
  }
</script>

<Checkbox
  id="percent_households_with_car"
  bind:checked={showHouseholdsWithCar}
  on:change={() => {
    showAverageCars = false;
    showPopulationDensity = false;
  }}
>
  Percent of households with a car
  <span slot="right">
    <HelpButton>
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
      <p>
        License: <ExternalLink
          href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
        >
          Open Government License
        </ExternalLink>. Contains OS data &copy; Crown copyright and database
        right 2023.
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if colorBy == "percent_households_with_car"}
  <SequentialLegend {colorScale} limits={makeLimits()} />
{/if}

<Checkbox
  id="average_cars_per_household"
  bind:checked={showAverageCars}
  on:change={() => {
    showHouseholdsWithCar = false;
    showPopulationDensity = false;
  }}
>
  Average cars per household
  <span slot="right">
    <HelpButton>
      <p>
        Where the census counts "3 or more cars or vans", the average shown here
        assumes 3.
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
      <p>
        License: <ExternalLink
          href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
        >
          Open Government License
        </ExternalLink>. Contains OS data &copy; Crown copyright and database
        right 2023.
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if colorBy == "average_cars_per_household"}
  <SequentialLegend {colorScale} limits={makeLimits()} />
{/if}

<Checkbox
  id="population_density"
  bind:checked={showPopulationDensity}
  on:change={() => {
    showHouseholdsWithCar = false;
    showAverageCars = false;
  }}
>
  Population density
  <span slot="right">
    <HelpButton>
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
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>
{#if colorBy == "population_density"}
  <p>(people per square kilometres)</p>
  <SequentialLegend
    {colorScale}
    limits={makeLimits().map((x) => x.toLocaleString())}
  />
{/if}

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    id={name}
    sourceLayer={name}
    paint={{
      "fill-color": makeColorRamp(["get", colorBy], makeLimits(), colorScale),
      "fill-opacity": hoverStateFilter(0.5, 0.7),
    }}
    layout={{
      visibility,
    }}
    manageHoverState
    hoverCursor="pointer"
    on:click={onClick}
  >
    <Popup openOn="hover" let:features>
      {@const oa = features[0].properties["OA21CD"]}
      {@const value = features[0].properties[colorBy]}
      {#if colorBy == "percent_households_with_car"}
        <p>
          <b>{value}%</b>
          of households in {oa} have 1 or more cars
        </p>
      {:else if colorBy == "average_cars_per_household"}
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
    id={outlineLayer}
    paint={{
      "line-color": "black",
      "line-width": 0.5,
    }}
    layout={{
      visibility,
    }}
  />
</VectorTileSource>
