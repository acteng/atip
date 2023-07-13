<script lang="ts">
  import FormElement from "../govuk/FormElement.svelte";

  export let label: string;
  // This must be unique in the page
  export let id: string;
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
