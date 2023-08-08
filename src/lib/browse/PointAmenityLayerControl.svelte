<script lang="ts">
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import {
    overwriteCircleLayer,
    overwriteSource,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import { ColorLegend, HelpButton, InteractiveLayer } from "../common";
  import { Checkbox } from "../govuk";
  import { colors } from "./colors";

  // This name is used for multiple things:
  // - The name of a .geojson file
  // - The layer name within that file
  // - The layer name, for layerZorder
  // - A color name in colors.ts
  export let name: string;
  // Uncapitalized
  export let singularNoun: string;
  // Capitalized
  export let pluralNoun: string;

  export let circleRadius: number;

  // The caller must also fill in the default slot with the contents of a help modal

  // @ts-ignore TODO Also constrain name to exist in the colors type
  let color = colors[name];

  overwriteSource($map, name, `https://atip.uk/layers/v1/${name}.geojson`);

  overwriteCircleLayer($map, {
    id: name,
    source: name,
    color: color,
    radius: circleRadius / 2,
    // TODO Outline?
  });
  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    let name = feature.properties.name ?? `Unnamed ${singularNoun}`;
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

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />
