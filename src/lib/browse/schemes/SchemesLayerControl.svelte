<script lang="ts">
  import { Select } from "govuk-svelte";
  import { Legend } from "lib/common";
  import { WarningIcon } from "scheme-sketcher-lib/common";
  import type { Writable } from "svelte/store";
  import type { Schemes } from "types";
  import LayerControl from "../layers/LayerControl.svelte";
  import type { SchemeTypeDetails } from "./data";
  import Filters from "./Filters.svelte";

  export let details: SchemeTypeDetails;
  console.log(`details - ${JSON.stringify(details)}`);
  console.log(details);
  console.log(`name - ${details.name}`);
  export let show: boolean;
  export let schemes: Writable<Schemes>;
  console.log(schemes);
  export let filterSchemeText: string;
  export let filterInterventionText: string;
</script>

{#if Object.entries($schemes.schemes).length > 0}
  <LayerControl name={details.name} title={details.title} {show}>
    <span slot="help">
      <p>
        <WarningIcon text="Scheme data caveats" />Please note there are data
        quality caveats for all scheme data:
      </p>
      <ul>
        {#each $schemes.notes ?? [] as note}
          <li><p>{note}</p></li>
        {/each}
      </ul>
    </span>

    <div slot="controls" style="border: 1px solid black; padding: 8px;">
      <Filters
        source="ATF"
        bind:schemesGj={$schemes}
        bind:filterSchemeText={filterInterventionText}
        bind:filterInterventionText={filterSchemeText}
      />

      <Select
        label="Colour interventions"
        choices={[
          ["fundingProgramme", "By funding programme"],
          ["interventionType", "By intervention type"],
          ["currentMilestone", "By current milestone"],
        ]}
        bind:value={details.style}
      />
      <Legend rows={details.legend} />
    </div>
  </LayerControl>
{/if}
