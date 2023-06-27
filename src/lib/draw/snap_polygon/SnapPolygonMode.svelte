<script lang="ts">
  import type { Polygon } from "geojson";
  import type { FeatureWithProps } from "../../../maplibre_helpers";
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

  // While the new feature is being drawn, remember its last valid version
  let unsavedFeature: FeatureWithProps<Polygon> | null = null;

  export function start() {
    routeTool.setHandlers(eventHandler);
    routeTool.startArea();
  }

  export function stop() {
    routeTool.stop();

    // If we leave this mode without saving, still create a new feature
    if (unsavedFeature) {
      gjScheme.update((gj) => {
        unsavedFeature.id = newFeatureId(gj);
        unsavedFeature.properties.intervention_type = "area";
        gj.features.push(unsavedFeature as Feature<Polygon>);
        return gj;
      });
      unsavedFeature = null;
    }
  }

  routeTool.addEventListenerSuccess((feature) => {
    if ($currentMode == thisMode) {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "area";
        gj.features.push(feature as Feature<Polygon>);
        return gj;
      });

      unsavedFeature = null;

      changeMode("edit-attribute");
      formOpen.set(feature.id as number);
    }
  });

  routeTool.addEventListenerUpdated((feature) => {
    unsavedFeature = feature as FeatureWithProps<Polygon>;
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
