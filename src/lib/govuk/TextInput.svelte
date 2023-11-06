<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FormElement from "./FormElement.svelte";

  export let label: string;
  export let value: string | undefined;
  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string

  const dispatch = createEventDispatcher();

  function forwardEvent(e: any) {
    dispatch("change", e.target.value);
  }
</script>

<FormElement {label} id={label}>
  <input
    type="text"
    class="govuk-input"
    id={label}
    bind:value
    on:change={forwardEvent}
  />
</FormElement>
