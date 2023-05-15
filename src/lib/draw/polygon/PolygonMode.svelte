<script lang="ts">
  import type { Mode } from "../types";
  import type { Polygon } from "geojson";
  import type { Feature } from "../../../types";
  import type { PolygonTool } from "./polygon_tool";
  import { gjScheme, newFeatureId, formOpen } from "../../../stores";
  import PolygonControls from "./PolygonControls.svelte";

  const thisMode = "free-polygon";

  export let mode: Mode;
  export let changeMode: (m: Mode) => void;
  export let polygonTool: PolygonTool;

  export function start() {
    polygonTool.startNew();
  }
  export function stop() {
    polygonTool.stop();
  }

  polygonTool.addEventListenerSuccess((feature) => {
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
  polygonTool.addEventListenerFailure(() => {
    if (mode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if mode == thisMode}
  <PolygonControls {polygonTool} />
{/if}
