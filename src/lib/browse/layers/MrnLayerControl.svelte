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
  } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors } from "../colors";

  let name = "mrn";
  let color = colors.mrn;

  overwritePmtilesSource(
    $map,
    name,
    `${publicResourceBaseUrl()}/v1/${name}.pmtiles`
  );

  overwriteLineLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color,
    width: 7,
    opacity: hoveredToggle(0.5, 1.0),
  });

  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    let name = feature.properties.name ?? `Unknown MRN road`;
    return `<p>${name}</p>`;
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Major Road Network
  <span slot="right">
    <HelpButton>
      <p>
        Data from the <ExternalLink
          href="https://maps.dft.gov.uk/major-road-network/index.html"
        >
          Major Road Network
        </ExternalLink>, as of September 2021.
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

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />
