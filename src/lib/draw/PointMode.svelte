<script lang="ts">
  import type { Point } from "geojson";
  import type { Feature } from "../../types";
  import type { PointTool } from "./point_tool";
  import { gjScheme, newFeatureId, formOpen } from "../../stores";

  const thisMode = "point";

  export let mode: string;
  export let changeMode: (m: string) => void;
  export let pointTool: PointTool;

  export function start() {
    pointTool.start();
  }
  export function stop() {
    pointTool.stop();
  }

  pointTool.addEventListener((feature) => {
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
</script>

{#if mode == thisMode}
  <p>Click to add a new point</p>
{/if}
