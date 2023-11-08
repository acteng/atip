<script lang="ts">
  // For integer inputs only
  import ErrorMessage from "./ErrorMessage.svelte";
  import FormElement from "./FormElement.svelte";

  export let label: string;
  export let value: number | undefined;
  export let width: number;
  // Inclusive
  export let min: number | undefined = undefined;
  export let max: number | undefined = undefined;

  let stringValue: string | undefined = value?.toString();

  function parse() {
    value = stringValue == undefined ? undefined : parseInt(stringValue, 10);
  }

  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string

  function validate(stringValue: string | undefined): string {
    if (stringValue == "" || stringValue == undefined) {
      return "";
    }
    if (stringValue.includes(".")) {
      return "Please enter a number without decimals";
    }
    // parseInt allows trailing letters
    let n = Number(stringValue);
    if (isNaN(n)) {
      return "Please enter a valid number";
    }
    if (min != undefined && n < min) {
      return `Please enter a number that's at least ${min};`;
    }
    if (max != undefined && n > max) {
      return `Please enter a number that's at most ${max};`;
    }
    return "";
  }
</script>

<FormElement {label} id={label}>
  <ErrorMessage errorMessage={validate(stringValue)} />
  <input
    type="text"
    inputmode="numeric"
    class={`govuk-input govuk-input--width-${width}`}
    id={label}
    bind:value={stringValue}
    on:change={parse}
  />
</FormElement>
