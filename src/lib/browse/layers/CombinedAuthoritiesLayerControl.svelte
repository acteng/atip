<script lang="ts">
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "../../../stores";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "../../common";
  import { Checkbox } from "../../govuk";
  import {
    hoveredToggle,
    overwriteLineLayer,
    overwritePolygonLayer,
    overwriteSource,
  } from "../../maplibre";
  import { colors } from "../colors";

  let name = "combined_authorities";
  let color = colors.combined_authorities;
  let outlineLayer = `${name}-outline`;

  overwriteSource(
    $map,
    name,
    `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.geojson`
  );

  overwritePolygonLayer($map, {
    id: name,
    source: name,
    color,
    opacity: hoveredToggle(0.5, 0.1),
  });
  overwriteLineLayer($map, {
    id: outlineLayer,
    source: name,
    color,
    width: 2.5,
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
    return `<p>${feature.properties.name}</p>`;
  }

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    window.open(
      `https://www.ons.gov.uk/visualisations/areas/${e.detail.properties.CAUTH22CD}`,
      "_blank"
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Combined authorities
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://geoportal.statistics.gov.uk/datasets/ons::combined-authorities-december-2022-boundaries-en-buc/explore"
        >
          ONS Geography
        </ExternalLink>, as of December 2022.
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

<InteractiveLayer layer={name} {tooltip} {show} clickable on:click={onClick} />
