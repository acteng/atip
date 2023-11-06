<script lang="ts">
  import { Legend } from "lib/common";
  import { schemaLegend } from "schemas";
  import { gjScheme, sidebarHover } from "stores";
  import { onDestroy } from "svelte";
  import type { Schema } from "types";
  import ListedIntervention from "./ListedIntervention.svelte";
  import PipelineListMode from "./PipelineListMode.svelte";
  import { interventionWarning } from "./scheme_data";

  export let schema: Schema;

  onDestroy(() => {
    sidebarHover.set(null);
  });
</script>

{#if schema !== "pipeline"}
  <ol class="govuk-list govuk-list--number">
    {#each $gjScheme.features as feature (feature.id)}
      {@const warning = interventionWarning(schema, feature)}
      <ListedIntervention {feature} {schema} {warning} />
    {/each}
  </ol>
{:else}
  <PipelineListMode />
{/if}

<Legend rows={schemaLegend(schema)} />
