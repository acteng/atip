<script lang="ts">
  import type { Feature } from "geojson";
  import { ColorLegend, HelpButton, publicResourceBaseUrl } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    FillLayer,
    hoverStateFilter,
    Popup,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";

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

  let show = false;

  function tooltip(feature: Feature): string {
    return feature.properties.name ?? `Unnamed ${singularNoun}`;
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  {pluralNoun}
  <span slot="right">
    <HelpButton><slot /></HelpButton>
  </span>
</Checkbox>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    id={name}
    sourceLayer={name}
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.7, 1.0),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    manageHoverState
  >
    <Popup openOn="hover" let:features>
      <p>{tooltip(features[0])}</p>
    </Popup>
  </FillLayer>
</VectorTileSource>
