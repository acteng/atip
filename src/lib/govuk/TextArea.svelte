<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { ErrorMessage, FormElement } from "./";

  export let label: string;
  export let value: string;
  export let rows: number = 5;
  export let errorMessage = "";

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  <ErrorMessage {errorMessage} />
  <textarea class="govuk-textarea" {id} {rows} bind:value />
</FormElement>
