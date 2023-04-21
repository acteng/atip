<script lang="ts">
  import type { Mode } from "../types";
  import type { Polygon } from "geojson";
  import type { Feature } from "../../../types";
  import type { PolygonTool } from "./polygon_tool";
  import { gjScheme, newFeatureId, formOpen } from "../../../stores";
  import PolygonControls from "./PolygonControls.svelte";

  const thisMode = "polygon";

  export let mode: string;
  export let changeMode: (m: Mode) => void;
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
  <PolygonControls />
{/if}
