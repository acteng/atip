<script lang="ts">
  import {
    overwriteLineLayer,
    overwritePmtilesSource,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import { ColorLegend, MapTooltips } from "../common";
  import { Checkbox } from "../govuk";

  let name = "mrn";
  let color = "purple";
  let hint = "Major Road Network";

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

<Checkbox id={name} bind:checked={show} {hint}>
  <ColorLegend {color} />
  MRN
</Checkbox>

<MapTooltips layers={[name]} contents={tooltip} />
