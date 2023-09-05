<script lang="ts">
  import { ExternalLink, HelpButton, InteractiveLayer } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    hoveredToggle,
    makeColorRamp,
    overwriteLineLayer,
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors } from "../colors";
  import SequentialLegend from "./SequentialLegend.svelte";

  let name = "imd";
  let outlineLayer = `${name}-outline`;

  let colorScale = colors.sequential_low_to_high;
  // The deciles are [1, 10]. The 5 colors cover two each.
  let limits = [0, 2, 4, 6, 8, 10];

  overwritePmtilesSource(
    $map,
    name,
    `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.pmtiles`
  );

  overwritePolygonLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    // Decile 1 is the most deprived, but we want to invert for the color scale
    color: makeColorRamp(["-", 10, ["get", "decile"]], limits, colorScale),
    opacity: hoveredToggle(0.5, 0.7),
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
    return (
      `<p>${feature.properties.LSOA11CD} has an IMD score of <b>${feature.properties.score}</b></p>` +
      `<p>Rank: <b>${feature.properties.rank.toLocaleString()}</b> / 32,844 LSOAs</p>`
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  Indices of Multiple Deprivation
  <span slot="right">
    <HelpButton>
      <p>
        The 2019 English IMD scores come from <ExternalLink
          href="https://data-communities.opendata.arcgis.com/datasets/communities::indices-of-multiple-deprivation-imd-2019-1/explore"
        >
          DLUCH GIS
        </ExternalLink>. Note the LSOAs identified are from the 2011 census. A
        detailed breakdown of the score across different categories can be found <ExternalLink
          href="http://dclgapps.communities.gov.uk/imd/iod_index.html"
        >
          here
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
{#if show}
  <SequentialLegend {colorScale} limits={["Least deprived", "Most deprived"]} />
{/if}

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />
