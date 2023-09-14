<script lang="ts">
  import { ColorLegend, HelpButton, InteractiveLayer } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { overwriteCircleLayer, overwriteSource } from "lib/maplibre";
  import { map } from "stores";
  import { colors } from "../colors";
    import type { MapGeoJSONFeature } from "maplibre-gl";

  // This name is used for multiple things:
  // - The name of a .geojson file
  // - The layer name within that file
  // - The layer name, for layerZorder
  // - A color name in colors.ts
  export let name: string;
  // Capitalized
  export let pluralNoun: string;

  export let circleRadius: number;

  export let url: string;

  export let tooltip: (feature: MapGeoJSONFeature) => string;

  // The caller must also fill in the default slot with the contents of a help modal

  // @ts-ignore TODO Also constrain name to exist in the colors type
  let color = colors[name];

  overwriteSource($map, name, url);

  overwriteCircleLayer($map, {
    id: name,
    source: name,
    color: color,
    radius: circleRadius / 2,
    // TODO Outline?
  });
  let show = false;
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  {pluralNoun}
  <span slot="right">
    <HelpButton><slot /></HelpButton>
  </span>
</Checkbox>

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />
