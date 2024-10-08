<script lang="ts">
  import { onDestroy } from "svelte";
  import { layerLegends } from "./stores";

  export let name: string;

  // TODO explain the remote DOM pattern
  let contents: HTMLDivElement | null = null;

  $: if (contents) {
    console.log(`centrally register ${name} please`);
    layerLegends.update((l) => {
      l.set(name, contents!);
      return l;
    });
  }

  onDestroy(() => {
    console.log(`centrally unregister ${name} please`);
    layerLegends.update((l) => {
      l.delete(name);
      return l;
    });
  });
</script>

<div bind:this={contents}>
  <slot />
</div>
