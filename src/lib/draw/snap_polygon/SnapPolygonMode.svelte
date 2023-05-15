<script lang="ts">
  import type { Mode } from "../types";
  import type { Polygon } from "geojson";
  import type { Feature } from "../../../types";
  import type { RouteTool } from "../route/route_tool";
  import { gjScheme, newFeatureId, formOpen } from "../../../stores";
  import SnapPolygonControls from "./SnapPolygonControls.svelte";

  const thisMode = "snap-polygon";

  export let mode: Mode;
  export let changeMode: (m: Mode) => void;
  export let routeTool: RouteTool;

  export function start() {
    routeTool.startArea();
  }
  export function stop() {
    routeTool.stop();
  }

  routeTool.addEventListenerSuccessArea((feature) => {
    if (mode == thisMode) {
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
    if (mode == thisMode) {
      changeMode("edit-attribute");
    }
  });
</script>

{#if mode == thisMode}
  <SnapPolygonControls {routeTool} />
{/if}
