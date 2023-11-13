<script lang="ts">
  import { SecondaryButton } from "lib/govuk";
  import { routeTool } from "stores";
  import { undoLength } from "../route/stores";

  function undo() {
    $routeTool!.undo();
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
    the map to add points
  </li>
  <li>
    <b>Click and drag</b>
    any point to move it
  </li>
  <li>
    <b>Click</b>
    a waypoint to delete it
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
