<script lang="ts">
  import { WarningIcon } from "lib/common";
  import { SecondaryButton } from "lib/govuk";
  import { gjScheme, mode2 } from "stores";
  import type { Schema } from "types";
  import { interventionName, interventionWarning } from "./scheme_data";

  export let schema: Schema;
</script>

{#each $gjScheme.features as feature, i (feature.id)}
  {@const warning = interventionWarning(schema, feature)}
  <div><SecondaryButton on:click={() => mode2.set({ mode: "edit-form", id: feature.id })}>
    {#if warning}
      <WarningIcon text={warning} />
    {/if}
    {i + 1}) {interventionName(schema, feature)}
  </SecondaryButton></div>
{/each}
