<script lang="ts">
  import { gjScheme, newFeatureId, formOpen } from "../../stores";

  const thisMode = "polygon";

  export let mode: string;
  export let changeMode: (string) => void;
  export let polygonTool;

  export function start() {
    polygonTool.startNew();
  }
  export function stop() {
    polygonTool.stop();
  }

  polygonTool.addEventListener((feature) => {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = "area";
        gj.features.push(feature);
        return gj;
      });

      changeMode("edit-attribute");
      formOpen.set(feature.id);
    }
  });
</script>

{#if mode == thisMode}
  <p>
    Click the map to add a vertex, or click a vertex to delete it. Press <strong
      >Enter</strong
    > to finish. Drag a vertex or the polygon to move.
  </p>
{/if}
