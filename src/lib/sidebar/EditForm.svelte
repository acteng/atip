<script lang="ts">
  import ATF4Form from "lib/forms/ATF4Form.svelte";
  import FormV1 from "lib/forms/FormV1.svelte";
  import FormV2 from "lib/forms/FormV2.svelte";
  import PlanningForm from "lib/forms/PlanningForm.svelte";
  import {
    ButtonGroup,
    DefaultButton,
    ErrorMessage,
    SecondaryButton,
    WarningButton,
  } from "lib/govuk";
  import type { MapMouseEvent } from "maplibre-gl";
  import { deleteIntervention, gjScheme, map, mode } from "stores";
  import { onDestroy, onMount } from "svelte";
  import type { FeatureUnion, Schema } from "types";
  import { interventionName, interventionWarning } from "./scheme_data";
  import UnexpectedProperties from "./UnexpectedProperties.svelte";

  // TODO Should this just be in a store?
  export let schema: Schema;
  export let id: number;

  let feature = $gjScheme.features.find((f) => f.id == id)!;
  $: warning = interventionWarning(schema, feature);

  // Because of how properties are bound individually, updates to $gjScheme aren't seen. Force them.
  function featureUpdated(feature: FeatureUnion) {
    $gjScheme = $gjScheme;
  }
  $: featureUpdated(feature);

  onMount(() => {
    $map.on("click", onClick);
  });
  onDestroy(() => {
    $map.off("click", onClick);
  });

  function onClick(e: MapMouseEvent) {
    // As long as we didn't click the feature we're editing, exit this mode
    for (let f of $map.queryRenderedFeatures(e.point, {
      layers: [
        "interventions-points",
        "interventions-lines",
        "interventions-polygons",
      ],
    })) {
      if (f.id == id) {
        return;
      }
    }
    mode.set({ mode: "list" });
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key == "Escape") {
      e.stopPropagation();
      mode.set({ mode: "list" });
      return;
    }

    if (e.key == "Delete") {
      const tag = (e.target as HTMLElement).tagName;
      // Let the delete key work in forms
      if (tag == "INPUT" || tag == "TEXTAREA") {
        return;
      }
      e.stopPropagation();

      deleteIntervention(id);
    }

    if (e.key == "e") {
      const tag = (e.target as HTMLElement).tagName;
      // Don't interrupt forms
      if (tag == "INPUT" || tag == "TEXTAREA") {
        return;
      }
      e.stopPropagation();

      mode.set({ mode: "edit-geometry", id });
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

<h2>Editing {interventionName(schema, feature)}</h2>

<ButtonGroup>
  <DefaultButton on:click={() => mode.set({ mode: "list" })}>
    Save
  </DefaultButton>
  <SecondaryButton on:click={() => mode.set({ mode: "edit-geometry", id })}>
    Edit geometry
  </SecondaryButton>
  <WarningButton on:click={() => deleteIntervention(id)}>Delete</WarningButton>
</ButtonGroup>

<ErrorMessage errorMessage={warning} />
{#if schema == "v1"}
  <UnexpectedProperties id={feature.id} props={feature.properties} />
  <FormV1
    id={feature.id}
    bind:props={feature.properties}
  />
{:else if schema == "v2"}
  <FormV2 bind:props={feature.properties} />
{:else if schema == "planning"}
  <PlanningForm bind:props={feature.properties} />
{:else if schema == "atf4"}
  <ATF4Form bind:props={feature.properties} />
{/if}
