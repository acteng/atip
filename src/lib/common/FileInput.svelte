<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { FormElement } from "govuk-svelte";

  export let label: string;
  // Called with the file contents as text
  export let loadFile: (text: string) => void;

  export let disabled = false;

  let fileInput: HTMLInputElement;

  function onChange(e: Event) {
    let reader = new FileReader();
    reader.onload = (e) => {
      loadFile(e.target!.result as string);
    };
    let files = fileInput.files!;
    reader.readAsText(files[0]);
  }

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  <input
    bind:this={fileInput}
    on:change={onChange}
    {disabled}
    class="govuk-file-upload"
    {id}
    type="file"
  />
</FormElement>
