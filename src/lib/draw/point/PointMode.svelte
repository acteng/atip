<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Mode } from "../types";
  import type { Point } from "geojson";
  import type { Feature } from "../../../types";
  import type { PointTool } from "./point_tool";
  import type { FeatureWithProps } from "../../../maplibre_helpers";
  import { gjScheme, newFeatureId, formOpen } from "../../../stores";
  import PointControls from "./PointControls.svelte";

  const thisMode = "point";

  export let mode: Mode;
  export let changeMode: (m: Mode) => void;
  export let pointTool: PointTool;

  export function start() {
    pointTool.start();
  }
  export function stop() {
    pointTool.stop();
  }

  pointTool.addEventListenerSuccess(onSuccess);
  pointTool.addEventListenerFailure(onFailure);

  onDestroy(() => {
    pointTool.removeEventListenerSuccess(onSuccess);
    pointTool.removeEventListenerFailure(onFailure);
  });

  function onSuccess(feature: FeatureWithProps<Point>) {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "other";
        gj.features.push(feature as Feature<Point>);
        return gj;
      });

      changeMode("edit-attribute");
      formOpen.set(feature.id as number);
    }
  }

  function onFailure() {
    if (mode == thisMode) {
      changeMode("edit-attribute");
    }
  }
</script>

{#if mode == thisMode}
  <PointControls {pointTool} editingExisting={false} />
{/if}
