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

  let name = "wards";
  let color = colors.wards;
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

  function tooltip(feature: MapGeoJSONFeature): string {
    return `<p>${feature.properties.name}</p>`;
  }

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    let name = encodeURIComponent(e.detail.properties.name);
    // Help people find the councillor for this area
    window.open(`https://www.google.com/search?q=${name}+councillor`, "_blank");
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Wards
  <span slot="right">
    <HelpButton>
      <p>
        Data from <ExternalLink
          href="https://geoportal.statistics.gov.uk/datasets/ons::wards-may-2023-boundaries-uk-bgc/explore"
        >
          ONS Geography
        </ExternalLink>, as of May 2023.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

<InteractiveLayer layer={name} {tooltip} {show} clickable on:click={onClick} />