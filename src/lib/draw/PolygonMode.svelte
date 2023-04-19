<script lang="ts">
  import type { Polygon } from "geojson";
  import type { Feature } from "../../types";
  import type { PolygonTool } from "./polygon_tool";
  import { gjScheme, newFeatureId, formOpen } from "../../stores";

  const thisMode = "polygon";

  export let mode: string;
  export let changeMode: (m: string) => void;
  export let polygonTool: PolygonTool;

  export function start() {
    polygonTool.startNew();
  }
  export function stop() {
    polygonTool.stop();
  }

  polygonTool.addEventListener((feature) => {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "area";
        gj.features.push(feature as Feature<Polygon>);
        return gj;
      });

      changeMode("edit-attribute");
      formOpen.set(feature.id as number);
    }
  });
</script>

{#if mode == thisMode}
  <p>
    Click the map to add a vertex, or click a vertex to delete it. Press <strong
      >Enter</strong
    > to finish. Drag a vertex or the polygon to move.
  </p>
{/if}
