<script lang="ts">
  import type { Point } from "geojson";
  import {
    gjSchemeCollection,
    mode,
    newFeatureId,
    pointTool,
    getArbitrarySchemeRef,
  } from "lib/draw/stores";
  import { SecondaryButton } from "govuk-svelte";
  import type { FeatureWithProps } from "lib/draw/types";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import PointControls from "./PointControls.svelte";
  import { cfg } from "lib/draw/config";

  onMount(() => {
    $pointTool!.start();
    $pointTool!.addEventListenerSuccess(onSuccess);
    $pointTool!.addEventListenerFailure(onFailure);
  });
  onDestroy(() => {
    $pointTool!.stop();
    $pointTool!.clearEventListeners();
  });

  function onSuccess(feature: FeatureWithProps<Point>) {
    gjSchemeCollection.update((gj) => {
      feature.id = newFeatureId(gj);
      feature.properties.scheme_reference = getArbitrarySchemeRef(gj);
      cfg.newPointFeature(feature);
      gj.features.push(feature as Feature<Point>);
      return gj;
    });

    mode.set({ mode: "edit-form", id: feature.id as number });
  }

  function onFailure() {
    mode.set({ mode: "list" });
  }
</script>

<SecondaryButton on:click={onFailure}>Cancel</SecondaryButton>

<PointControls editingExisting={false} />
