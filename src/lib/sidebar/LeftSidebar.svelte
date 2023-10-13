<script lang="ts">
  import { mode2 } from "stores";
  import type { Schema } from "types";
  import EditForm from "./EditForm.svelte";
  import ListMode from "./ListMode.svelte";

  export let schema: Schema;
</script>

{#if $mode2.mode == "list"}
  <ListMode {schema} />
{:else if $mode2.mode == "edit-form"}
  <EditForm {schema} id={$mode2.id} />
{:else if $mode2.mode == "new-point"}
  <ul>
    <li>Click to add a new point</li>
    <li>
      Press <b>Escape</b>
      to cancel
    </li>
  </ul>
{:else}
  <h1>TODO bug: {JSON.stringify($mode2)}</h1>
{/if}
