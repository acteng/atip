<script lang="ts">
  import type { Polygon } from "geojson";
  import {
    gjSchemeCollection,
    mode,
    newFeatureId,
    polygonTool,
    getArbitrarySchemeRef,
  } from "lib/draw/stores";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "govuk-svelte";
  import type { FeatureWithProps } from "lib/draw/types";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import PolygonControls from "./PolygonControls.svelte";
  import { cfg } from "lib/draw/config";

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
      feature.properties.scheme_reference = getArbitrarySchemeRef(gj);
      cfg.newPolygonFeature(feature);
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
