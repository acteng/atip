<script lang="ts">
  import { ErrorMessage, FormElement } from "./";

  export let label: string;
  export let value: string;
  export let rows: number = 5;
  export let errorMessage = "";

  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string
</script>

<FormElement {label} id={label}>
  <ErrorMessage {errorMessage} />
  <textarea class="govuk-textarea" id={label} {rows} bind:value />
</FormElement>
