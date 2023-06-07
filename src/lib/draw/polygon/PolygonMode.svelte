<script lang="ts">
  import type { Polygon } from "geojson";
  import type { EventHandler, Feature, Mode } from "../../../types";
  import type { PolygonTool } from "./polygon_tool";
  import { gjScheme, newFeatureId, formOpen, currentMode} from "../../../stores";
  import PolygonControls from "./PolygonControls.svelte";

  const thisMode = "free-polygon";

  export let changeMode: (m: Mode) => void;
  export let polygonTool: PolygonTool;
  export let eventHandler: EventHandler;

  export function start() {
    polygonTool.startNew();
  }
  export function stop() {
    polygonTool.stop();
  }

  polygonTool.addEventListenerSuccess((feature) => {
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
  polygonTool.addEventListenerFailure(() => {
    if ($currentMode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if $currentMode == thisMode}
  <PolygonControls {polygonTool} />
{/if}
