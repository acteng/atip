<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { ErrorMessage, FormElement, SecondaryButton } from "./";

  export let label: string;
  export let value: number | undefined;

  let id = uuidv4();

  let stringValue: string = value == undefined ? "" : prettyprint(value);
  function update(x: string) {
    value = parse(x);
  }
  $: update(stringValue);

  function parse(x: string): number | undefined {
    if (x == "") {
      return undefined;
    }
    return parseFloat(x.replaceAll(",", ""));
  }

  function validate(stringValue: string): string {
    let n = parse(stringValue);
    if (n == undefined) {
      return "";
    }
    if (isNaN(n)) {
      return "Please enter a valid number";
    }
    if (n < 0) {
      return `Please enter a positive number`;
    }
    return "";
  }

  function prettyprint(x: number): string {
    return x.toLocaleString();
  }

  function multiply() {
    stringValue = prettyprint(value! * 1_000_000);
  }

  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string
</script>

<FormElement {label} {id}>
  <ErrorMessage errorMessage={validate(stringValue)} />
  {#if value != undefined}
    <div class="govuk-hint">&#163;{prettyprint(value)}</div>
  {/if}
  <input
    type="text"
    inputmode="numeric"
    class={`govuk-input govuk-input--width-10`}
    {id}
    bind:value={stringValue}
  />
  <SecondaryButton
    on:click={multiply}
    disabled={value == undefined || value > 1000}
  >
    multiply by 1 million
  </SecondaryButton>
</FormElement>
