<script lang="ts">
  interface Cancelable {
    cancel(): void;
  }

  export let tool: Cancelable;

  // The escape key isn't registered at all for keypress, so use keydown
  // TODO And this callback doesn't seem to work at all until clicking
  // somewhere after this component is mounted
  function onKeyDown(e: KeyboardEvent) {
    if (e.key == "Escape") {
      tool.cancel();
      e.preventDefault();
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />
