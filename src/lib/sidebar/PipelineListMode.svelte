<script lang="ts">
  import { DefaultButton } from "lib/govuk";
  import { gjScheme } from "stores";
  import type { Scheme } from "types";
  import ListedIntervention from "./ListedIntervention.svelte";
  import PipelineSchemeDetails from "./PipelineSchemeDetails.svelte";
  import { interventionWarning } from "./scheme_data";

  function addSubscheme() {
    gjScheme.update((gj: any) => {
      const id = getLowestUnusedId(gj);
      gj.subschemes.push({
        id,
        name: `Unnamed Scheme ${id}`,
      });
      return gj;
    });
  }

  function getLowestUnusedId(gj: Scheme) {
    let result = 0;
    let foundToBeUnused = false;
    while (gj.subschemes && !foundToBeUnused) {
      if (
        gj.subschemes.filter((subscheme) => {
          return subscheme.id === result;
        }).length === 0
      ) {
        foundToBeUnused = true;
      } else {
        result++;
      }
    }
    return result;
  }

  function getSubschemeNameUpdater(originalSchemeName: string): Function {
    return (schemeNameChangeEvent: any) => {
      const newSchemeName = schemeNameChangeEvent.detail;
      $gjScheme.subschemes = $gjScheme.subschemes?.map((subscheme) => {
        if (subscheme.name === originalSchemeName) {
          subscheme.name = newSchemeName;
          return subscheme;
        }
        return subscheme;
      });
      gjScheme.set($gjScheme);
    };
  }
</script>

{#if $gjScheme.subschemes}
  <h2>Subschemes</h2>
  <DefaultButton on:click={addSubscheme}>Add Scheme</DefaultButton>
  {#each $gjScheme.subschemes as subscheme}
    <PipelineSchemeDetails {subscheme} {getSubschemeNameUpdater} />
    <ul style="margin-left: l5px">
      {#each $gjScheme.features.filter((feature) => feature.properties.pipeline?.schemeId === subscheme.id) as feature}
        {@const warning = interventionWarning("pipeline", feature)}
        <ListedIntervention {feature} schema={"pipeline"} {warning} />
      {/each}
    </ul>
  {/each}
{/if}
