<script lang="ts">
  import { Legend } from "lib/common";
  import { ErrorMessage, SecondaryButton } from "lib/govuk";
  import { schemaLegend } from "schemas";
  import { gjSchemeCollection } from "stores";
  import type { Schema } from "types";
  import { v4 as uuidv4 } from "uuid";
  import PerSchemeControls from "./PerSchemeControls.svelte";
  import { interventionWarning } from "./scheme_data";

  export let schema: Schema;

  // TODO Per scheme?
  $: numErrors = $gjSchemeCollection.features.filter(
    (f) => interventionWarning(schema, f) != null
  ).length;

  function newScheme() {
    let scheme_reference = uuidv4();
    $gjSchemeCollection.schemes[scheme_reference] = {
      scheme_reference,
    };
    $gjSchemeCollection = $gjSchemeCollection;
  }
</script>

<SecondaryButton on:click={newScheme}>Add new scheme</SecondaryButton>

{#each Object.keys($gjSchemeCollection.schemes) as scheme_reference}
  <PerSchemeControls {schema} {scheme_reference} />
{/each}

{#if numErrors == 1}
  <ErrorMessage errorMessage="There's a problem with one intervention below" />
{:else if numErrors > 0}
  <ErrorMessage
    errorMessage="There's a problem with {numErrors} interventions below"
  />
{/if}

<Legend rows={schemaLegend(schema)} />
