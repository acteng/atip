<script lang="ts">
  import type { Point } from "geojson";
  import type { Feature, Mode } from "../../../types";
  import type { EventHandler } from "../types";
  import type { PointTool } from "./point_tool";
  import {
    gjScheme,
    newFeatureId,
    formOpen,
    currentMode,
  } from "../../../stores";
  import PointControls from "./PointControls.svelte";

  const thisMode = "point";

  export let changeMode: (m: Mode) => void;
  export let pointTool: PointTool;
  export let eventHandler: EventHandler;

  export function start() {
    pointTool.setHandlers(eventHandler);
    pointTool.start();
  }
  export function stop() {
    pointTool.stop();
  }

  pointTool.addEventListenerSuccess((feature) => {
    if ($currentMode == thisMode) {
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
    if ($currentMode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if $currentMode == thisMode}
  <PointControls {pointTool} editingExisting={false} />
{/if}
