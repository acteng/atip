<script lang="ts">
  import type { LineString, Polygon } from "geojson";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "lib/govuk";
  import type { FeatureWithProps } from "lib/maplibre";
  import { gjScheme, mode, newFeatureId, routeTool } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import SnapPolygonControls from "./SnapPolygonControls.svelte";

  onMount(() => {
    $routeTool!.startArea();
    $routeTool!.addEventListenerSuccess(onSuccess);
    $routeTool!.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    $routeTool!.stop();
    $routeTool!.clearEventListeners();
  });

  function onSuccess(feature: FeatureWithProps<LineString | Polygon>) {
    gjScheme.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.intervention_type = "area";
      gj.features.push(feature as Feature<Polygon>);
      return gj;
    });

    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }
</script>

<ButtonGroup>
  <DefaultButton on:click={() => $routeTool.finish()}>Finish</DefaultButton>
  <SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>
</ButtonGroup>

<SnapPolygonControls />
