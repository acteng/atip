<script lang="ts">
  import { Checkbox } from "govuk-svelte";
  import { onDestroy } from "svelte";
  import { activeLayers, layerLegends } from "./stores";

  export let name: string;
  export let title: string;
  // This must be bound to state that controls the layer display and URL
  export let show: boolean;

  // If the layer is initially shown (from the URL state), make it active
  if (show) {
    $activeLayers.add(name);
    $activeLayers = $activeLayers;
  }

  // TODO explain the remote DOM pattern
  let contents: HTMLDivElement | null = null;

  $: if (contents) {
    layerLegends.update((l) => {
      // Initially hide the controls. Before they appear in the legend, the DOM node is mounted on the left sidebar
      // TODO Can we remove it from the DOM entirely and just store in this map instead?
      contents!.style.display = "none";
      l.set(name, contents!);
      return l;
    });
  }

  onDestroy(() => {
    layerLegends.update((l) => {
      l.delete(name);
      return l;
    });
  });

  function toggleActive() {
    activeLayers.update((l) => {
      if (l.has(name)) {
        l.delete(name);
        show = false;
      } else {
        l.add(name);
        show = true;
      }
      return l;
    });
  }
</script>

<Checkbox checked={$activeLayers.has(name)} on:change={toggleActive}>
  {title}
</Checkbox>

<div bind:this={contents}>
  <slot />
</div>
