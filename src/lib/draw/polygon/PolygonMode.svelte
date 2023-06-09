<script lang="ts">
  import type { Polygon } from "geojson";
  import { newFeature } from "../../../commands";
  import { currentMode, formOpen } from "../../../stores";
  import type { Feature, Mode } from "../../../types";
  import type { EventHandler } from "../event_handler";
  import type { PolygonTool } from "./polygon_tool";
  import PolygonControls from "./PolygonControls.svelte";

  const thisMode = "free-polygon";

  export let changeMode: (m: Mode) => void;
  export let polygonTool: PolygonTool;
  export let eventHandler: EventHandler;

  export function start() {
    polygonTool.setHandlers(eventHandler);
    polygonTool.startNew();
  }
  export function stop() {
    polygonTool.stop();
  }

  polygonTool.addEventListenerSuccess((feature) => {
    if ($currentMode == thisMode) {
      feature.properties.intervention_type = "area";
      let id = newFeature(feature as Feature<Polygon>);
      changeMode("edit-attribute");
      formOpen.set(id);
    }
  });

  polygonTool.addEventListenerFailure(() => {
    if ($currentMode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if $currentMode == thisMode}
  <PolygonControls {polygonTool} />
{/if}
