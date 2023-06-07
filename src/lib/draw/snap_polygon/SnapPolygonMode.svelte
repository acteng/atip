<script lang="ts">
  import type { Polygon } from "geojson";
  import type { EventHandler, Feature, Mode } from "../../../types";
  import type { RouteTool } from "../route/route_tool";
  import {
    gjScheme,
    newFeatureId,
    formOpen,
    currentMode,
  } from "../../../stores";
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
    gjScheme.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.intervention_type = "area";
      gj.features.push(feature as Feature<Polygon>);
      return gj;
    });

    changeMode("edit-attribute");
    formOpen.set(feature.id as number);
  });

  routeTool.addEventListenerFailure(() => {
    changeMode("edit-attribute");
  });
</script>

{#if $currentMode == thisMode}
  <SnapPolygonControls {routeTool} />
{/if}
