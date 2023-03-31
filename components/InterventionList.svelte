<script>
  import { Accordion, AccordionItem } from "carbon-components-svelte";
  import Form from "./Form.svelte";
  import {
    gjScheme,
    currentHover,
    currentlyEditing,
    openFromSidebar,
  } from "../stores.js";

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
    currentHover.set(null);
  }

  function startEditing(id) {
    // Always set this to null first, to force subscribers to see the update.
    // It's possible to open something from the sidebar, close it (by clicking
    // on the map or using the sidebar), then reopen the same thing.
    openFromSidebar.set(null);
    openFromSidebar.set(id);

    // Remove the editing property from everything else, so that the Accordion is hidden
    for (let f of $gjScheme.features) {
      if (f.properties.editing && f.id != id) {
        delete f.properties.editing;
        return;
      }
    }
  }

  function onKeydown(e) {
    const id = $currentlyEditing;
    if (e.key == "Delete") {
      const tag = e.originalTarget.tagName;
      // Let the delete key work in forms
      if (tag != "CANVAS" && tag != "BODY") {
        return;
      }
      e.preventDefault();

      gjScheme.update((gj) => {
        gj.features = gj.features.filter((f) => f.id != id);
        return gj;
      });
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

<Accordion>
  {#each $gjScheme.features as feature, i}
    <AccordionItem
      bind:open={feature.properties.editing}
      on:click={startEditing(feature.id)}
      on:mouseenter={currentHover.set(feature.id)}
      on:mouseleave={reset}
    >
      <svelte:fragment slot="title">
        {#if feature.id == $currentHover}
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
        length_meters={feature.properties.length_meters}
      />
    </AccordionItem>
  {/each}
</Accordion>
