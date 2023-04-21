<script lang="ts">
  export let editingExisting: boolean;
</script>

{#if editingExisting}
  <p>Click to move the point here</p>
{:else}
  <p>Click to add a new point</p>
{/if}
