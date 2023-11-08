<script lang="ts">
  import ErrorMessage from "./ErrorMessage.svelte";
  import FormElement from "./FormElement.svelte";

  export let label: string;
  export let value: string | undefined;
  // Show an error if input is empty
  export let required = false;

  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string

  $: errorMessage =
    required && (value == undefined || value == "") ? "Required" : "";
</script>

<FormElement {label} id={label}>
  <ErrorMessage {errorMessage} />
  <input type="text" class="govuk-input" id={label} bind:value />
</FormElement>
