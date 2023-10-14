<script lang="ts">
  import { DefaultButton, SecondaryButton, WarningButton } from "lib/govuk";
  import type { MapMouseEvent } from "maplibre-gl";
  import { deleteIntervention, map, mode } from "stores";
  import { onDestroy, onMount } from "svelte";

  export let id: number;

  onMount(() => {
    $map.on("click", onClick);
  });
  onDestroy(() => {
    $map.off("click", onClick);
  });

  function onClick(e: MapMouseEvent) {
    // As long as we didn't click the feature we're editing, exit this mode
    for (let f of $map.queryRenderedFeatures(e.point, {
      layers: [
        "interventions-points",
        "interventions-lines",
        "interventions-polygons",
      ],
    })) {
      if (f.id == id) {
        return;
      }
    }
    mode.set({ mode: "list" });
  }
</script>

<DefaultButton on:click={() => mode.set({ mode: "list" })}>Save</DefaultButton>

<SecondaryButton on:click={() => mode.set({ mode: "edit-geometry", id })}>
  Edit geometry
</SecondaryButton>

<WarningButton on:click={() => deleteIntervention(id)}>Delete</WarningButton>
