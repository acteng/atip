<script lang="ts">
  import type { FeatureUnion } from "../types";
  import Form from "./Form.svelte";
  import PlanningForm from "./PlanningForm.svelte";
  import AccordionItem from "./AccordionItem.svelte";
  import { gjScheme, formOpen, deleteIntervention } from "../stores";

  export let planningMode: boolean;

  function interventionName(feature: FeatureUnion): string {
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
    {#if planningMode}
      <PlanningForm id={feature.id} bind:allProperties={feature.properties} />
    {:else}
      <Form
        id={feature.id}
        bind:name={feature.properties.name}
        bind:intervention_type={feature.properties.intervention_type}
        bind:description={feature.properties.description}
        length_meters={feature.properties.length_meters}
      />
    {/if}
  </AccordionItem>
{/each}
