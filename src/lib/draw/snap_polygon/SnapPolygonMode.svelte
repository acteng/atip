<script lang="ts">
  import type { LineString, Polygon } from "geojson";
  import {
    gjSchemeCollection,
    mode,
    newFeatureId,
    routeTool,
    getArbitrarySchemeRef,
  } from "lib/draw/stores";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "govuk-svelte";
  import type { FeatureWithProps } from "lib/draw/types";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import SnapPolygonControls from "./SnapPolygonControls.svelte";
  import { cfg } from "lib/draw/config";

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
    gjSchemeCollection.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.scheme_reference = getArbitrarySchemeRef(gj);
      // We did startArea, so we know it's a Polygon
      let polygonFeature = feature as Feature<Polygon>;
      cfg.newPolygonFeature(polygonFeature);
      gj.features.push(polygonFeature);
      return gj;
    });

    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }

  function finish() {
    $routeTool!.finish();
  }
</script>

<ButtonGroup>
  <DefaultButton on:click={finish}>Finish</DefaultButton>
  <SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>
</ButtonGroup>

<SnapPolygonControls />
