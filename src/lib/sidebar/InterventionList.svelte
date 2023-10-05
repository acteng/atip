<script lang="ts">
  import ATF4Form from "lib/forms/ATF4Form.svelte";
  import FormV1 from "lib/forms/FormV1.svelte";
  import FormV2 from "lib/forms/FormV2.svelte";
  import PlanningForm from "lib/forms/PlanningForm.svelte";
  import { ErrorMessage, SecondaryButton, WarningButton } from "lib/govuk";
  import { deleteIntervention, formOpen, gjScheme } from "stores";
  import type { Schema } from "types";
  import AccordionItem from "./AccordionItem.svelte";
  import { interventionName, interventionWarning } from "./scheme_data";
  import UnexpectedProperties from "./UnexpectedProperties.svelte";

  export let schema: Schema;

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
  {@const warning = interventionWarning(schema, feature)}
  <AccordionItem
    id={feature.id}
    label={i + 1 + ") " + interventionName(schema, feature)}
    {warning}
  >
    <ErrorMessage errorMessage={warning} />
    {#if schema == "v1"}
      <UnexpectedProperties id={feature.id} props={structuredClone(feature)} />
      <FormV1
        id={feature.id}
        bind:name={feature.properties.name}
        bind:intervention_type={feature.properties.intervention_type}
        bind:description={feature.properties.description}
        length_meters={feature.properties.length_meters}
      />
    {:else if schema == "v2"}
      <FormV2 bind:props={feature.properties} />
    {:else if schema == "planning"}
      <PlanningForm bind:props={feature.properties} />
    {:else if schema == "atf4"}
      <ATF4Form bind:props={feature.properties} />
    {/if}

    <br />
    <br />
    <div style="display: flex; justify-content: space-between">
      <WarningButton on:click={() => deleteIntervention(feature.id)}>
        Delete
      </WarningButton>
      <SecondaryButton on:click={() => formOpen.set(null)}>
        Save
      </SecondaryButton>
    </div>
  </AccordionItem>
{/each}
