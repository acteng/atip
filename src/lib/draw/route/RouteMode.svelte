<script lang="ts">
  import type { LineString, Polygon } from "geojson";
  import {
    gjSchemeCollection,
    mode,
    newFeatureId,
    routeTool,
  } from "lib/draw/stores";
  import { ButtonGroup, DefaultButton, SecondaryButton } from "lib/govuk";
  import type { FeatureWithProps } from "lib/maplibre";
  import { getArbitraryScheme } from "lib/sidebar/scheme_data";
  import { schema } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { Feature } from "types";
  import RouteControls from "./RouteControls.svelte";

  onMount(() => {
    $routeTool!.startRoute();
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
      feature.properties.scheme_reference =
        getArbitraryScheme(gj).scheme_reference;
      feature.properties.intervention_type = "route";
      if (feature.properties.route_name) {
        if ($schema != "pipeline") {
          feature.properties.name = feature.properties.route_name;
        }
        delete feature.properties.route_name;
      }
      gj.features.push(feature as Feature<LineString>);
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

<RouteControls extendRoute />
