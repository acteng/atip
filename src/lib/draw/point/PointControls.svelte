<script lang="ts">
  export let editingExisting: boolean;
</script>

<ul>
  {#if editingExisting}
    <li>Click to move the point here</li>
  {:else}
    <li>Click to add a new point</li>
  {/if}
  <li>
    Press <b>Escape</b>
    to cancel
  </li>
</ul>
