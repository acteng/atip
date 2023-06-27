<script lang="ts">
  import type { Polygon } from "geojson";
  import type { FeatureWithProps } from "../../../maplibre_helpers";
  import { currentMode, gjScheme, newFeatureId } from "../../../stores";
  import type { Feature, Mode } from "../../../types";
  import { setupEventListeners } from "../common";
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

    // If we leave this mode without saving, still create a new feature
    if (unsavedFeature.value) {
      gjScheme.update((gj) => {
        let feature = unsavedFeature.value;
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "area";
        gj.features.push(feature as Feature<Polygon>);
        return gj;
      });
      unsavedFeature.value = null;
    }
  }

  setupEventListeners(routeTool, unsavedFeature, "area", thisMode, changeMode);
</script>

{#if $currentMode == thisMode}
  <SnapPolygonControls {routeTool} />
{/if}
