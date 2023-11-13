<script lang="ts">
  import type { Feature } from "geojson";
  import { GeoJSON, MarkerLayer } from "svelte-maplibre";
  import { geocoderGj } from "./stores";

  function getNumber(feature: Feature): string {
    return feature.properties?.number;
  }
</script>

<GeoJSON data={$geocoderGj}>
  <MarkerLayer let:feature>
    <div
      style="font-size: 30px; background: white; padding: 16px; border-radius: 50%;"
    >
      {getNumber(feature)}
    </div>
  </MarkerLayer>
</GeoJSON>
