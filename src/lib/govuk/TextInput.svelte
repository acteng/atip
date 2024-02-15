<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import ErrorMessage from "./ErrorMessage.svelte";
  import FormElement from "./FormElement.svelte";

  export let label: string;
  export let value: string | undefined;
  // Show an error if input is empty
  export let required = false;

  let id = uuidv4();

  $: errorMessage =
    required && (value == undefined || value == "") ? "Required" : "";
</script>

<FormElement {label} {id}>
  <ErrorMessage {errorMessage} />
  <input type="text" class="govuk-input" {id} bind:value />
</FormElement>
