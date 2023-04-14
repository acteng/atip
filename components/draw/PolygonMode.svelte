<script>
  import { gjScheme, newFeatureId, setCurrentlyEditing } from "../../stores.js";

  const thisMode = "polygon";

  export let mode;
  export let changeMode;
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
      setCurrentlyEditing(feature.id);
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
