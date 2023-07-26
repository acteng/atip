<script lang="ts">
  import {
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import { ColorLegend, HelpButton, MapTooltips } from "../common";
  import { Checkbox } from "../govuk";
  import { colors } from "./colors";

  // This name is used for multiple things:
  // - The name of a .pmtiles file
  // - The layer name within that file
  // - The layer name, for layerZorder
  // - A color name in colors.ts
  export let name: string;
  // Uncapitalized
  export let singularNoun: string;
  // Capitalized
  export let pluralNoun: string;

  // The caller must also fill in the default slot with the contents of a help modal

  // @ts-ignore TODO Also constrain name to exist in the colors type
  let color = colors[name];

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
    opacity: 0.8,
  });

  let show = false;
  $: {
    if ($map.getLayer(name)) {
      $map.setLayoutProperty(name, "visibility", show ? "visible" : "none");
    }
  }

  function tooltip(props: { [name: string]: any }): string {
    let name = props.name ?? `Unnamed ${singularNoun}`;
    return `<p>${name}</p>`;
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  {pluralNoun}
  <span slot="right">
    <HelpButton><slot /></HelpButton>
  </span>
</Checkbox>

<MapTooltips layers={[name]} contents={tooltip} />
