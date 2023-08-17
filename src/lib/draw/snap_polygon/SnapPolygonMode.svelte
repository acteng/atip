<script lang="ts">
  import type { Polygon } from "geojson";
  import { currentMode } from "../../../stores";
  import type { Mode } from "../../../types";
  import type { FeatureWithProps } from "../../maplibre";
  import { handleUnsavedFeature, setupEventListeners } from "../common";
  import type { EventHandler } from "../event_handler";
  import type { RouteTool } from "../route/route_tool";
  import SnapPolygonControls from "./SnapPolygonControls.svelte";

  const thisMode = "snap-polygon";

  export let changeMode: (m: Mode) => void;
  export let routeTool: RouteTool;
  export let eventHandler: EventHandler;

  // While the new feature is being drawn, remember its last valid version
  let unsavedFeature: { value: FeatureWithProps<Polygon> | null } = {
    value: null,
  };

  export function start() {
    routeTool.setHandlers(eventHandler);
    routeTool.startArea();
  }

  export function stop() {
    routeTool.stop();
    handleUnsavedFeature(unsavedFeature, "area");
  }

  setupEventListeners(routeTool, unsavedFeature, "area", thisMode, changeMode);
</script>

{#if $currentMode == thisMode}
  <SnapPolygonControls {routeTool} />
{/if}
