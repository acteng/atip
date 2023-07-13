<script lang="ts">
  import FormElement from "./FormElement.svelte";

  export let label: string;
  export let value: string;
  export let rows: number = 5;

  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string
</script>

<FormElement {label} id={label}>
  <textarea class="govuk-textarea" id={label} {rows} bind:value />
</FormElement>
