<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { GeoJSON } from "geojson";
  import { map } from "../../../stores";
  import { overwriteSource, overwriteLayer } from "../../../maplibre_helpers";

  // This component manages a source with exactly one layer. Both are torn down
  // when this component is destroyed.
  // TODO Move to common and use more widely?
  export let source: string;
  export let gj: GeoJSON;
  export let style;

  let layer = `${source}-layer`;

  overwriteSource($map, source, gj);
  overwriteLayer($map, {
    id: layer,
    source,
    ...style,
  });

  onDestroy(() => {
    if ($map.getLayer(layer)) {
      $map.removeLayer(layer);
    }
    if ($map.getSource(source)) {
      $map.removeSource(source);
    }
  });
</script>
