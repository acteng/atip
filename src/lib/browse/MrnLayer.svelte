<script lang="ts">
  import {
    overwriteLineLayer,
    overwritePmtilesSource,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    MapTooltips,
  } from "../common";
  import { Checkbox } from "../govuk";
  import { colors } from "./colors";

  let name = "mrn";
  let color = colors.mrn;

  overwritePmtilesSource(
    $map,
    name,
    `https://atip.uk/layers/v1/${name}.pmtiles`
  );

  overwriteLineLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color,
    width: 7,
  });

  let show = false;
  $: {
    if ($map.getLayer(name)) {
      $map.setLayoutProperty(name, "visibility", show ? "visible" : "none");
    }
  }

  function tooltip(props: { [name: string]: any }): string {
    let name = props.name ?? `Unknown MRN road`;
    return `<p>${name}</p>`;
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  MRN
  <span slot="right">
    <HelpButton>
      <p>
        Data from the <ExternalLink
          href="https://maps.dft.gov.uk/major-road-network/index.html"
        >
          Major Road Network
        </ExternalLink>.
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

<MapTooltips layers={[name]} contents={tooltip} />
