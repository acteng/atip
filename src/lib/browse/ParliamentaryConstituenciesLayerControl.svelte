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
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "../common";
  import { Checkbox } from "../govuk";
  import { colors } from "./colors";

  let name = "parliamentary_constituencies";
  let color = colors.parliamentary_constituencies;
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
    width: 5,
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
    return `<p>${feature.properties.Name}</p>`;
  }

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    // There are common suffixes that don't work with the search
    let name = e.detail.properties.Name;
    name = name.replace(/ Boro Const$/, "");
    name = name.replace(/ Co Const$/, "");
    name = encodeURIComponent(name);

    // Help people find the MP for this area
    window.open(
      `https://members.parliament.uk/members/Commons?SearchText=${name}`,
      "_blank"
    );
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Parliamentary constituencies
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://www.ordnancesurvey.co.uk/products/boundary-line"
        >
          Ordnance Survey Boundary-Line
        </ExternalLink>, as of May 2023.
      </p>
      <p>
        License: <ExternalLink
          href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
        >
          Open Government License
        </ExternalLink>
      </p>
    </HelpButton>
  </span>
</Checkbox>

<InteractiveLayer layer={name} {tooltip} {show} clickable on:click={onClick} />
