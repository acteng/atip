<script lang="ts">
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
</script>

<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload">{label}</label>
  <input
    bind:this={fileInput}
    on:change={onChange}
    {disabled}
    class="govuk-file-upload"
    id="file-upload"
    name="file-upload"
    type="file"
  />
</div>
