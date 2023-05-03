<script lang="ts">
  import type { FeatureUnion, Schema } from "../types";
  import FormV1 from "./forms/FormV1.svelte";
  import FormV2 from "./forms/FormV2.svelte";
  import PlanningForm from "./forms/PlanningForm.svelte";
  import AccordionItem from "./AccordionItem.svelte";
  import { gjScheme, formOpen, deleteIntervention } from "../stores";

  export let schema: Schema;

  function interventionName(feature: FeatureUnion): string {
    if (schema == "planning") {
      return feature.properties.planning?.name || "Untitled polygon";
    }

    if (feature.properties.name) {
      return feature.properties.name;
    }
    var noun: string = feature.properties.intervention_type;
    if (noun == "other") {
      if (feature.geometry.type == "Point") {
        noun = "point";
      } else if (feature.geometry.type == "LineString") {
        noun = "line";
      } else {
        noun = "polygon";
      }
    }
    return `Untitled ${noun}`;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key == "Delete") {
      const tag = (e.target as HTMLElement).tagName;
      // Let the delete key work in forms
      if (tag == "INPUT" || tag == "TEXTAREA") {
        return;
      }
      e.preventDefault();

      const id = $formOpen;
      if (id) {
        deleteIntervention(id);
      }
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

{#each $gjScheme.features as feature, i (feature.id)}
  <AccordionItem
    id={feature.id}
    label={i + 1 + ") " + interventionName(feature)}
  >
    {#if schema == "v1"}
      <FormV1
        bind:name={feature.properties.name}
        bind:intervention_type={feature.properties.intervention_type}
        bind:description={feature.properties.description}
        length_meters={feature.properties.length_meters}
      />
    {:else if schema == "v2"}
      <FormV2 bind:props={feature.properties} />
    {:else if schema == "planning"}
      <PlanningForm bind:props={feature.properties} />
    {/if}

    <br />
    <br />
    <div style="display: flex; justify-content: space-between">
      <button type="button" on:click={() => deleteIntervention(feature.id)}
        >Delete</button
      >
      <button type="button" on:click={() => formOpen.set(null)}>Save</button>
    </div>
  </AccordionItem>
{/each}
