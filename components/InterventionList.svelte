<script>
  import { Accordion, AccordionItem } from "carbon-components-svelte";
  import Form from "./Form.svelte";
  import { gjScheme, currentSidebarHover, currentMapHover } from "../stores.js";

  function interventionName(feature) {
    if (feature.properties.name) {
      return feature.properties.name;
    }
    var noun = feature.properties.intervention_type;
    if (noun == "other") {
      if (feature.geometry.type == "Point") {
        noun = "point";
      } else if (feature.geometry.type == "LineString") {
        noun = "line";
      } else {
        noun = "polygon";
      }
    }
    return `Untitled ${noun}`;
  }

  // TODO Not sure why we can't inline this one below
  function reset() {
    currentSidebarHover.set(null);
  }
</script>

<Accordion>
  {#each $gjScheme.features as feature, i}
    <AccordionItem
      on:mouseenter={currentSidebarHover.set(feature.id)}
      on:mouseleave={reset}
    >
      <svelte:fragment slot="title">
        {#if feature.id == $currentMapHover}
          <strong>{i + 1}) {interventionName(feature)}</strong>
        {:else}
          {i + 1}) {interventionName(feature)}
        {/if}
      </svelte:fragment>
      <Form
        id={feature.id}
        bind:name={feature.properties.name}
        bind:intervention_type={feature.properties.intervention_type}
        bind:description={feature.properties.description}
      />
    </AccordionItem>
  {/each}
</Accordion>
