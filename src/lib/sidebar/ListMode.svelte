<script lang="ts">
  import { Legend, WarningIcon } from "lib/common";
  import { bbox } from "lib/maplibre";
  import { schemaLegend } from "schemas";
  import { gjScheme, map, mode, sidebarHover } from "stores";
  import { onDestroy } from "svelte";
  import type { Schema } from "types";
  import { interventionName, interventionWarning } from "./scheme_data";

  export let schema: Schema;

  function edit(e: MouseEvent, id: number) {
    // Use <a> for buttons. Disable the href behavior.
    e.preventDefault();

    // When the user starts editing something from the sidebar, warp to what's
    // being edited. (Don't do this when clicking the object on the map.)
    let feature = $gjScheme.features.find((f) => f.id == id)!;

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

<ol class="govuk-list govuk-list--number">
  {#each $gjScheme.features as feature (feature.id)}
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

<Legend rows={schemaLegend(schema)} />
