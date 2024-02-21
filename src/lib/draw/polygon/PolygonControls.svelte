<script lang="ts">
  import { polygonTool } from "lib/draw/stores";
  import { SecondaryButton } from "govuk-svelte";
  import { undoLength } from "./stores";

  function undo() {
    $polygonTool!.undo();
  }
</script>

<SecondaryButton disabled={$undoLength == 0} on:click={undo}>
  {#if $undoLength == 0}
    Undo
  {:else}
    Undo ({$undoLength})
  {/if}
</SecondaryButton>

<ul>
  <li>
    <b>Click</b>
    the map to add a vertex
  </li>
  <li>
    <b>Click</b>
    a vertex to delete it
  </li>
  <li>
    <b>Drag</b>
    a vertex or the polygon to move it
  </li>
  <li>
    Press <b>Control+Z</b>
    to undo your last change
  </li>
  <li>
    Press <b>Enter</b>
    or
    <b>double click</b>
    to finish
  </li>
  <li>
    Press <b>Escape</b>
    to cancel
  </li>
</ul>
