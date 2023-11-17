<script lang="ts">
  import { WarningIcon } from "lib/common";
  import { bbox } from "lib/maplibre";
  import { gjSchemeCollection, map, mode, sidebarHover } from "stores";
  import { onDestroy } from "svelte";
  import type { Schema } from "types";
  import GenericSchemeForm from "./GenericSchemeForm.svelte";
  import PipelineSchemeForm from "./PipelineSchemeForm.svelte";
  import { interventionName, interventionWarning } from "./scheme_data";

  export let schema: Schema;
  export let scheme_reference: string;

  function edit(e: MouseEvent, id: number) {
    // Use <a> for buttons. Disable the href behavior.
    e.preventDefault();

    // When the user starts editing something from the sidebar, warp to what's
    // being edited. (Don't do this when clicking the object on the map.)
    let feature = $gjSchemeCollection.features.find((f) => f.id == id)!;

    // Padding around a point looks odd; special case it by keeping the current zoom
    if (feature.geometry.type == "Point") {
      $map.flyTo({
        center: feature.geometry.coordinates as [number, number],
        duration: 500,
      });
    } else {
      $map.fitBounds(bbox(feature), {
        padding: 200,
        duration: 500,
      });
    }

    mode.set({ mode: "edit-form", id });
  }

  function unhover(id: number) {
    sidebarHover.update((current) => {
      if (current == id) {
        return null;
      }
      return current;
    });
  }

  onDestroy(() => {
    sidebarHover.set(null);
  });
</script>

<h3>
  {$gjSchemeCollection.schemes[scheme_reference].scheme_name ??
    "Untitled scheme"}
</h3>
{#if schema == "pipeline"}
  <PipelineSchemeForm {scheme_reference} />
{:else}
  <GenericSchemeForm {scheme_reference} />
{/if}

<ol class="govuk-list govuk-list--number">
  {#each $gjSchemeCollection.features.filter((f) => f.properties.scheme_reference == scheme_reference) as feature (feature.id)}
    {@const warning = interventionWarning(schema, feature)}
    <li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        href="#"
        on:click={(e) => edit(e, feature.id)}
        on:mouseenter={() => sidebarHover.set(feature.id)}
        on:mouseleave={() => unhover(feature.id)}
      >
        {#if warning}
          <WarningIcon text={warning} />
        {/if}
        {interventionName(schema, feature)}
      </a>
    </li>
  {/each}
</ol>
