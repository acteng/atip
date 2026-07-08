<script lang="ts">
  import { Radio } from "govuk-svelte";
  import type { V3Intervention } from "types";
  import { infrastructureFormInformation } from "./data";

  export let intervention: V3Intervention;
  const intervention_type_options =
    infrastructureFormInformation[intervention.intervention_type].types;

  $: {
    pruneAndAddFeatures(
      intervention.properties.intervention_subtype,
      intervention.properties.context,
    );
    pruneAndAddMeasurements(
      intervention.properties.intervention_subtype,
      intervention.properties.context,
    );
  }

  function pruneAndAddFeatures(subtype: string, context: string) {}

  function pruneAndAddMeasurements(subtype: string, context: string) {}

  function getSubtypeContexts(subtype: string): string[]{
    const filteredTypeOptions = intervention_type_options.filter((type_options) => {return type_options.name === subtype});
    console.log(intervention_type_options);
    if(filteredTypeOptions.Length < 1) {
        return []
    }

    return filteredTypeOptions[0].possible_contexts.map((possible_context) => {
        return possible_context.context;
    });
  }

  function formatForDisplay(original: string): string {
    const substrings: string[] = original.split("_");
    const capitalisedSubsstrings: string[] = [];
    substrings.forEach((uncapitalised) => {
      const capitalised: string =
        uncapitalised.slice(0, 1).toUpperCase() + uncapitalised.slice(1);
      capitalisedSubsstrings.push(capitalised);
    });
    return capitalisedSubsstrings.join(" ");
  }

  const subtypes: [string, string][] = intervention_type_options.map(
    (type_options) => {
      return [type_options.name, formatForDisplay(type_options.name)];
    },
  );
  $: contexts = getSubtypeContexts(intervention.properties.intervention_subtype).map((context) => {return [context, formatForDisplay(context)]});
</script>

{JSON.stringify(intervention)}

<Radio
  label={"Intervention Subtype"}
  choices={subtypes}
  bind:value={intervention.properties.intervention_subtype}
/>
<Radio
  label={"Context"}
  choices={contexts}
  bind:value={intervention.properties.context}
/>
export let v3
{#each intervention_type_options as type_options}
  <p>{type_options.name}</p>
  <p>{JSON.stringify(type_options.measurement)}</p>
{/each}
