<script lang="ts">
  export let x: number;
  export let y: number;

  export let width: number;
  export let height: number;

  let moving = false;

  function onMouseDown() {
    moving = true;
  }

  function onMouseMove(e) {
    if (moving) {
      x += e.movementX;
      y += e.movementY;

      // TODO It makes the cursor offset from the dot
      x = Math.min(width, Math.max(0, x));
      y = Math.min(height, Math.max(0, y));
    }
  }

  function onMouseUp() {
    moving = false;
  }
</script>

<section
  on:mousedown={onMouseDown}
  style="left: {x}px; top: {y}px;"
  class="draggable"
>
  <slot />
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
  .draggable {
    user-select: none;
    cursor: move;
    position: absolute;
  }
</style>
