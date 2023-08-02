<script lang="ts">
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import {
    hoveredToggle,
    overwriteLineLayer,
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import {
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "../common";
  import { Checkbox, Select } from "../govuk";
  import { colors } from "./colors";

  let name = "census_output_areas";
  let outlineLayer = `${name}-outline`;

  let colorBy = "percent_households_without_car";
  let colorScale = colors.sequential_low_to_high;
  let limits = makeLimits();

  overwritePmtilesSource(
    $map,
    name,
    `https://atip.uk/layers/v1/${name}.pmtiles`
  );

  overwritePolygonLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color: makeColorRamp(),
    opacity: hoveredToggle(0.5, 0.9),
  });
  overwriteLineLayer($map, {
    id: outlineLayer,
    source: name,
    sourceLayer: name,
    color: "black",
    width: 0.5,
  });

  let show = false;
  // InteractiveLayer manages the polygon layer, but we also need to control the outline
  $: {
    if ($map.getLayer(outlineLayer)) {
      $map.setLayoutProperty(
        outlineLayer,
        "visibility",
        show ? "visible" : "none"
      );
    }
  }

  function tooltip(feature: MapGeoJSONFeature): string {
    let oa = feature.properties["OA21CD"];
    let value = feature.properties[colorBy];
    if (colorBy == "percent_households_without_car") {
      return `<p>${value}% of households in ${oa} don't have a car</p>`;
    } else if (colorBy == "average_cars_per_household") {
      return `<p>Households in ${oa} have an average of ${value} cars</p>`;
    } else {
      return `<p>There are ${value} people per square kilometre in ${oa}</p>`;
    }
  }

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    let oa = e.detail.properties["OA21CD"];
    if (
      colorBy == "percent_households_without_car" ||
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
  function makeLimits() {
    if (colorBy == "percent_households_without_car") {
      return [0, 20, 40, 60, 80, 100];
    } else if (colorBy == "average_cars_per_household") {
      // TODO Figure it out
      return [0.0, 0.5, 1.0, 1.5, 2.0, 2.5];
    } else {
      // TODO Figure it out
      return [100, 200, 300, 400, 500, 600];
    }
  }

  function makeColorRamp(): any[] {
    let fillColor = ["step", ["get", colorBy]];
    for (let i = 1; i < limits.length; i++) {
      fillColor.push(colorScale[i - 1]);
      fillColor.push(limits[i]);
    }
    // If we have data greater than the upper limit, then this fallback color
    // is used. It's effectively a bug -- the limits need to be set correctly.
    fillColor.push("red");
    console.log(fillColor);
    return fillColor;
  }

  function changeStyle() {
    limits = makeLimits();
    $map.setPaintProperty(name, "fill-color", makeColorRamp());
  }
</script>

<Checkbox id={name} bind:checked={show}>
  Census Output Areas
  <span slot="right">
    <HelpButton>
      <p>TODO!</p>
    </HelpButton>
  </span>
</Checkbox>

{#if show}
  <div style="display: flex">
    {#each colorScale as color}
      <span style="background: {color}; width: 100%; border: 1px solid black;">
        &nbsp;
      </span>
    {/each}
  </div>
  <div style="display: flex; justify-content: space-between;">
    {#each limits as limit}
      <span>{limit}</span>
    {/each}
  </div>

  <Select
    label="OA color by"
    id="colorBy"
    choices={[
      ["percent_households_without_car", "Percent of households without a car"],
      ["average_cars_per_household", "Average cars per household"],
      ["pop_density", "Population density (people per square kilometres)"],
    ]}
    bind:value={colorBy}
    on:change={changeStyle}
  />
{/if}

<InteractiveLayer layer={name} {tooltip} {show} on:click={onClick} />
