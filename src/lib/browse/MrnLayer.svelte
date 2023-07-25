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

  let name = "mrn";
  let color = "purple";

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
    width: 10,
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
    </HelpButton>
  </span>
</Checkbox>

<MapTooltips layers={[name]} contents={tooltip} />
