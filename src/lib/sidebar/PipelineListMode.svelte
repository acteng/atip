<script lang="ts">
  import { DefaultButton } from "lib/govuk";
  import { gjScheme } from "stores";
  import type { Scheme } from "types";
  import EntireSubscheme from "./EntireSubscheme.svelte";

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
  <DefaultButton on:click={addSubscheme}>Add Subscheme</DefaultButton>
  {#each $gjScheme.subschemes as subscheme}
    <EntireSubscheme
      {subscheme}
      {getSubschemeNameUpdater}
      superscheme={$gjScheme}
    />
  {/each}
{/if}
