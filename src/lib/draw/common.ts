import type { LineString, Polygon } from "geojson";
import type { FeatureWithProps } from "lib/maplibre";
import { currentMode, formOpen, gjScheme, newFeatureId } from "stores";
import { get } from "svelte/store";
import type { FeatureUnion, Mode } from "types";

interface Tool {
  addEventListenerSuccess(
    callback: (f: FeatureWithProps<LineString | Polygon>) => void
  ): void;
  addEventListenerUpdated(
    callback: (f: FeatureWithProps<LineString | Polygon>) => void
  ): void;
  addEventListenerFailure(callback: () => void): void;
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
        if (feature.properties.route_name) {
          feature.properties.name = feature.properties.route_name;
          delete feature.properties.route_name;
        }
        gj.features.push(feature as FeatureUnion);
        return gj;
      });

      unsavedFeature.value = null;

      changeMode("edit-attribute");
      formOpen.set(feature.id as number);
    }
  });

  tool.addEventListenerUpdated((feature) => {
    if (get(currentMode) == thisMode) {
      unsavedFeature.value = feature as FeatureWithProps<LineString | Polygon>;
    }
  });

  tool.addEventListenerFailure(() => {
    if (get(currentMode) == thisMode) {
      unsavedFeature.value = null;
      changeMode("edit-attribute");
    }
  });
}

// If a user leaves a mode after drawing something valid but not saving, save it anyway.
export function handleUnsavedFeature(
  unsavedFeature: { value: FeatureWithProps<LineString | Polygon> | null },
  intervention_type: "area" | "route" | "crossing" | "other"
) {
  if (unsavedFeature.value) {
    gjScheme.update((gj) => {
      let feature = unsavedFeature.value!;
      feature.id = newFeatureId(gj);
      feature.properties.intervention_type = intervention_type;
      if (feature.properties.route_name) {
        feature.properties.name = feature.properties.route_name;
        delete feature.properties.route_name;
      }
      gj.features.push(feature as FeatureUnion);
      return gj;
    });
    unsavedFeature.value = null;
  }
}
