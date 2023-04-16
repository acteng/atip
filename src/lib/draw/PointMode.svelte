<script lang="ts">
  import { gjScheme, newFeatureId, setCurrentlyEditing } from "../../stores";

  const thisMode = "point";

  export let mode: string;
  export let changeMode: (string) => void;
  export let pointTool;

  export function start() {
    pointTool.start();
  }
  export function stop() {
    pointTool.stop();
  }

  pointTool.addEventListener((feature) => {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "other";
        gj.features.push(feature);
        return gj;
      });

      changeMode("edit-attribute");
      setCurrentlyEditing(feature.id);
    }
  });
</script>

{#if mode == thisMode}
  <p>Click to add a new point</p>
{/if}
