<script lang="ts">
  import type { Polygon } from "geojson";
  import type { FeatureWithProps } from "lib/maplibre";
  import { currentMode } from "stores";
  import type { Mode } from "types";
  import { handleUnsavedFeature, setupEventListeners } from "../common";
  import type { EventHandler } from "../event_handler";
  import type { PolygonTool } from "./polygon_tool";
  import PolygonControls from "./PolygonControls.svelte";

  const thisMode = "free-polygon";

  export let changeMode: (m: Mode) => void;
  export let polygonTool: PolygonTool;
  export let eventHandler: EventHandler;

  // While the new feature is being drawn, remember its last valid version
  let unsavedFeature: { value: FeatureWithProps<Polygon> | null } = {
    value: null,
  };

  export function start() {
    polygonTool.setHandlers(eventHandler);
    polygonTool.startNew();
  }
  export function stop() {
    polygonTool.stop();
    handleUnsavedFeature(unsavedFeature, "area");
  }

  setupEventListeners(
    polygonTool,
    unsavedFeature,
    "area",
    thisMode,
    changeMode
  );
</script>

{#if $currentMode == thisMode}
  <PolygonControls {polygonTool} />
{/if}
