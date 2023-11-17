<script lang="ts">
  import type { Polygon } from "geojson";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "lib/govuk";
  import type { FeatureWithProps } from "lib/maplibre";
  import { getArbitraryScheme } from "lib/sidebar/scheme_data";
  import { gjSchemeCollection, mode, newFeatureId, polygonTool } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import PolygonControls from "./PolygonControls.svelte";

  onMount(() => {
    $polygonTool!.startNew();
    $polygonTool!.addEventListenerSuccess(onSuccess);
    $polygonTool!.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    $polygonTool!.stop();
    $polygonTool!.clearEventListeners();
  });

  function onSuccess(feature: FeatureWithProps<Polygon>) {
    gjSchemeCollection.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.scheme_reference =
        getArbitraryScheme(gj).scheme_reference;
      feature.properties.intervention_type = "area";
      feature.properties.is_coverage_polygon = false;
      gj.features.push(feature as Feature<Polygon>);
      return gj;
    });

    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }

  function finish() {
    $polygonTool!.finish();
  }
</script>

<ButtonGroup>
  <DefaultButton on:click={finish}>Finish</DefaultButton>
  <SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>
</ButtonGroup>

<PolygonControls />
