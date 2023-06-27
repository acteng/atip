import type { LineString, Polygon } from "geojson";
import { get } from "svelte/store";
import type { FeatureWithProps } from "../../maplibre_helpers";
import { currentMode, formOpen, gjScheme, newFeatureId } from "../../stores";
import type { FeatureUnion, Mode } from "../../types";

interface Tool {
  addEventListenerSuccess(
    callback: (f: FeatureWithProps<LineString | Polygon>) => void
  );
  addEventListenerUpdated(
    callback: (f: FeatureWithProps<LineString | Polygon>) => void
  );
  addEventListenerFailure(callback: () => void);
}

// unsavedFeature is nested in an object, so pass-by-reference works
export function setupEventListeners(
  tool: Tool,
  unsavedFeature: { value: FeatureWithProps<LineString | Polygon> | null },
  intervention_type: "area" | "route" | "crossing" | "other",
  thisMode: Mode,
  changeMode: (m: Mode) => void
) {
  tool.addEventListenerSuccess((feature) => {
    if (get(currentMode) == thisMode) {
      gjScheme.update((gj) => {
        feature.id = newFeatureId(gj);
        feature.properties.intervention_type = intervention_type;
        gj.features.push(feature as FeatureUnion);
        return gj;
      });

      unsavedFeature.value = null;

      changeMode("edit-attribute");
      formOpen.set(feature.id as number);
    }
  });

  tool.addEventListenerUpdated((feature) => {
    unsavedFeature.value = feature as FeatureWithProps<LineString | Polygon>;
  });

  tool.addEventListenerFailure(() => {
    if (get(currentMode) == thisMode) {
      unsavedFeature.value = null;
      changeMode("edit-attribute");
    }
  });
}
