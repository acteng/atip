<script lang="ts">
  import FormElement from "./FormElement.svelte";

  export let label: string;
  export let value: string;

  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string
</script>

<FormElement {label} id={label}>
  <input type="text" class="govuk-input" id={label} bind:value />
</FormElement>
