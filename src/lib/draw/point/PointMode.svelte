<script lang="ts">
  import type { Point } from "geojson";
  import { newFeature } from "../../../commands";
  import { currentMode, formOpen } from "../../../stores";
  import type { Feature, Mode } from "../../../types";
  import type { EventHandler } from "../event_handler";
  import type { PointTool } from "./point_tool";
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
      feature.properties.intervention_type = "other";
      let id = newFeature(feature as Feature<Point>);
      changeMode("edit-attribute");
      formOpen.set(id);
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
