<script lang="ts">
  import type { Mode } from "../types";
  import type { Point } from "geojson";
  import type { Feature } from "../../../types";
  import type { PointTool } from "./point_tool";
  import { gjScheme, newFeatureId, formOpen } from "../../../stores";
  import PointControls from "./PointControls.svelte";

  const thisMode = "point";

  export let mode: Mode;
  export let changeMode: (m: Mode) => void;
  export let pointTool: PointTool;

  export function start() {
    pointTool.start();
  }
  export function stop() {
    pointTool.stop();
  }

  pointTool.addEventListenerSuccess((feature) => {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "other";
        gj.features.push(feature as Feature<Point>);
        return gj;
      });

      changeMode("edit-attribute");
      formOpen.set(feature.id as number);
    }
  });
  pointTool.addEventListenerFailure(() => {
    if (mode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if mode == thisMode}
  <PointControls {pointTool} editingExisting={false} />
{/if}
