<script lang="ts">
  import { Radio } from "govuk-svelte";
  import { getEmptyCrossingDetailedDesign, type Crossing } from "types";

  export let props: Crossing;

  props ||= {
    type: "",
    context: "",
    detailed_design: getEmptyCrossingDetailedDesign(),
  };
</script>

<Radio
  label="Type"
  choices={[
    ["marked_priority", "Marked Priority"],
    ["parallel_zebra", "Parallel Zebra"],
    ["ped-x", "Ped-x"],
    ["pegasus", "Pegasus"],
    ["pelican", "Pelican"],
    ["puffin", "Puffin"],
    ["sparrow", "Sparrow"],
    ["toucan", "Toucan"],
    ["uncontrolled", "Uncontrolled"],
    ["zebra", "Zebra"],
  ]}
  bind:value={props.type}
/>

<Radio
  label="Context"
  choices={[
    ["at_junction", "At a junction"],
    ["at_side_road", "At a side road"],
    ["stand_alone", "Stand-alone"],
  ]}
  bind:value={props.context}
/>

{#if props.detailed_design}
  <Radio
    label="Signalised"
    choices={[
      ["true", "Yes"],
      ["false", "No"],
    ]}
    bind:value={props.detailed_design.is_signalised}
  />
{/if}

{#each ["marked_priority", "parallel_zebra","ped-x","pegasus","pelican","puffin","sparrow", "toucan", "uncontrolled", "zebra"] as word}
 <p>{formatForDisplay(word)}</p> 
{/each}
