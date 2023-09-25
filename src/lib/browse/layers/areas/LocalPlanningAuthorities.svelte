<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    hoveredToggle,
    overwriteLineLayer,
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "local_planning_authorities";
  let color = colors.local_planning_authorities;
  let outlineLayer = `${name}-outline`;

  overwritePmtilesSource(
    $map,
    name,
    `${publicResourceBaseUrl()}/v1/${name}.pmtiles`
  );

  overwritePolygonLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color,
    opacity: hoveredToggle(0.5, 0.0),
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
          Note there are overlapping LPAs near Northhamptonshire. Only one
          authority name is shown when hovering. Use <ExternalLink
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
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />