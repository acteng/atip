<script lang="ts">
  import { onDestroy } from "svelte";
  import { layerLegends } from "./stores";

  export let name: string;

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
</script>

<div bind:this={contents}>
  <slot />
</div>
