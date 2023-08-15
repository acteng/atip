<script lang="ts">
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import {
    hoveredToggle,
    overwriteLineLayer,
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../../maplibre_helpers";
  import { map } from "../../../stores";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "../../common";
  import { Checkbox } from "../../govuk";
  import { colors } from "../colors";

  let name = "local_planning_authorities";
  let color = colors.local_planning_authorities;
  let outlineLayer = `${name}-outline`;

  overwritePmtilesSource(
    $map,
    name,
    `https://atip.uk/layers/v1/${name}.pmtiles`
  );

  overwritePolygonLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color,
    opacity: hoveredToggle(0.5, 0.1),
  });
  overwriteLineLayer($map, {
    id: outlineLayer,
    source: name,
    sourceLayer: name,
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

  // TODO Note there are overlapping features. InteractiveLayer only plumbs
  // back one result, so the tooltip may be incomplete.
  function tooltip(feature: MapGeoJSONFeature): string {
    return `<p>${feature.properties.name}</p>`;
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Local Planning Authorities
  <span slot="right">
    <HelpButton>
      <p>
        LPAs may be a <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/local-authority"
        >
          local authority
        </ExternalLink>, <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/national-park-authority"
        >
          national park authorit
        </ExternalLink>y, or <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/development-corporation"
        >
          development corporation
        </ExternalLink>.
      </p>
      <p>
        <strong>
          Note there are overlapping LPAs near Northhamptonshire, shown in a
          darker shade. Only one authority name is shown when hovering. Use <ExternalLink
            href="https://www.planning.data.gov.uk/map/?dataset=local-planning-authority"
          >
            this map
          </ExternalLink> to get more details.
        </strong>
      </p>
      <p>
        Data from ONS Geography via <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/local-planning-authority"
        >
          planning.data.gov.uk
        </ExternalLink>, as of November 2022.
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

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />
