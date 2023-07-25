<script lang="ts">
  import {
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import { ColorLegend, MapTooltips } from "../common";
  import { Checkbox } from "../govuk";

  // This name is used for multiple things:
  // - The name of a .pmtiles file
  // - The layer name within that file
  // - The layer name, for layerZorder
  export let name: string;
  // Uncapitalized
  export let singularNoun: string;
  // Capitalized
  export let pluralNoun: string;
  export let color: string;
  export let hint: string;

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

<Checkbox id={name} bind:checked={show} {hint}>
  <ColorLegend {color} />
  {pluralNoun}
</Checkbox>

<MapTooltips layers={[name]} contents={tooltip} />
