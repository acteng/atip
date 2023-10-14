<script lang="ts">
  import { DefaultButton, SecondaryButton, WarningButton } from "lib/govuk";
  import { deleteIntervention, map, mode } from "stores";
  import { onDestroy, onMount } from "svelte";

  onMount(() => {
    $map.on("click", onClick);
  });
  onDestroy(() => {
    $map.off("click", onClick);
  });

  function onClick(e) {
    // As long as we didn't click the feature we're editing, exit this mode
    for (let f of $map.queryRenderedFeatures(e.point, {
      layers: [
        "interventions-points",
        "interventions-lines",
        "interventions-polygons",
      ],
    })) {
      if (f.id == $mode.id) {
        return;
      }
    }
    mode.set({ mode: "list" });
  }
</script>

<DefaultButton on:click={() => mode.set({ mode: "list" })}>Save</DefaultButton>

<SecondaryButton
  on:click={() => mode.set({ mode: "edit-geometry", id: $mode.id })}
>
  Edit geometry
</SecondaryButton>

<WarningButton on:click={() => deleteIntervention($mode.id)}>
  Delete
</WarningButton>
