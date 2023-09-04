<script lang="ts">
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "../../../stores";
  import { ColorLegend, HelpButton, InteractiveLayer } from "../../common";
  import { Checkbox } from "../../govuk";
  import {
    hoveredToggle,
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../maplibre";
  import { colors } from "../colors";

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
    `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.pmtiles`
  );

  overwritePolygonLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color,
    opacity: hoveredToggle(1.0, 0.7),
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
