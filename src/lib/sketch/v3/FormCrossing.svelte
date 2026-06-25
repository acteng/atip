<script lang="ts">
  import {
    Radio,
  } from "govuk-svelte";
  import type { Crossing, } from "types";

  export let props: Crossing;

  props ||= {

  };

  $: {
    if(props.stage === "detailed-design") {
        props.detailed_design ||= {

        }
    }
  }
</script>

<Radio
  label="Type"
  choices={[
    ["marked_priority", "Marked Priority"], ["parallel_zebra", "Parallel Zebra"], ["ped-x", "Ped-x"],["pegasus", "Pegasus"],["pelican", "Pelican"], ["puffin", "Puffin"], ["sparrow", "Sparrow"]
    ,["toucan", "Toucan"], ["uncontrolled", "Uncontrolled"], ["zebra", "Zebra"],
  ]}
  bind:value={props.type}
/>

<Radio
  label="Location"
  choices={[
    ["at-junction", "At a junction"],
    ["at-side-road", "At a side road"],
    ["stand-alone", "Stand-alone"],
  ]}
  bind:value={props.location}
/>

<Radio
  label="Signalised"
  choices={[
    ["true", "Yes"],
    ["false", "No"],
  ]}
  bind:value={props.signalised}
/>

<Radio
  label="Design Stage"
  choices={[
    ["early", "Early Design"],
    ["detailed-design", "Detailed Design"],
  ]}
  bind:value={props.stage}
/>

{#if props.stage === "detailed-design" && props.detailed_design}
<Radio
  label="Pedestrian Priority"
  choices={[
    ["true", "Yes"],
    ["false", "No"],
  ]}
  bind:value={props.detailed_design.pedestrian_priority}
/>   
{/if}
