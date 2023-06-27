<script lang="ts">
  import type { Polygon } from "geojson";
  import {
    currentMode,
    formOpen,
    gjScheme,
    newFeatureId,
  } from "../../../stores";
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

  routeTool.addEventListenerSuccess((feature) => {
    if ($currentMode == thisMode) {
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

  routeTool.addEventListenerFailure(() => {
    if ($currentMode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if $currentMode == thisMode}
  <SnapPolygonControls {routeTool} />
{/if}
