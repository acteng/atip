<script lang="ts">
  import ATF4Form from "lib/forms/ATF4Form.svelte";
  import FormV1 from "lib/forms/FormV1.svelte";
  import FormV2 from "lib/forms/FormV2.svelte";
  import PlanningForm from "lib/forms/PlanningForm.svelte";
  import { ErrorMessage } from "lib/govuk";
  import { deleteIntervention, gjScheme } from "stores";
  import type { Schema } from "types";
  import { interventionName, interventionWarning } from "./scheme_data";
  import UnexpectedProperties from "./UnexpectedProperties.svelte";

  // TODO Should this just be in a store?
  export let schema: Schema;
  export let id: number;

  let feature = $gjScheme.features.find((f) => f.id == id)!;
  $: warning = interventionWarning(schema, feature);

  function onKeydown(e: KeyboardEvent) {
    if (e.key == "Delete") {
      const tag = (e.target as HTMLElement).tagName;
      // Let the delete key work in forms
      if (tag == "INPUT" || tag == "TEXTAREA") {
        return;
      }
      e.preventDefault();

      deleteIntervention(id);
      // TODO Back to list
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

<h2>Editing {interventionName(schema, feature)}</h2>
<ErrorMessage errorMessage={warning} />
{#if schema == "v1"}
  <UnexpectedProperties id={feature.id} props={feature.properties} />
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
