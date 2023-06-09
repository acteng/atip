<script lang="ts">
  import type { Polygon } from "geojson";
  import { newFeature } from "../../../commands";
  import { currentMode, formOpen } from "../../../stores";
  import type { Feature, Mode } from "../../../types";
  import type { EventHandler } from "../event_handler";
  import type { RouteTool } from "../route/route_tool";
  import SnapPolygonControls from "./SnapPolygonControls.svelte";

  const thisMode = "snap-polygon";

  export let changeMode: (m: Mode) => void;
  export let routeTool: RouteTool;
  export let eventHandler: EventHandler;

  export function start() {
    routeTool.setHandlers(eventHandler);
    routeTool.startArea();
  }

  export function stop() {
    routeTool.stop();
  }

  routeTool.addEventListenerSuccessArea((feature) => {
    if ($currentMode == thisMode) {
      feature.properties.intervention_type = "area";
      let id = newFeature(feature as Feature<Polygon>);
      changeMode("edit-attribute");
      formOpen.set(id);
    }
  });

  routeTool.addEventListenerFailure(() => {
    if ($currentMode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if $currentMode == thisMode}
  <SnapPolygonControls {routeTool} />
{/if}
