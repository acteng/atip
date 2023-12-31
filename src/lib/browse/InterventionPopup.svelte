<script lang="ts">
  import { prettyPrintMeters } from "lib/maplibre";
  import { filterText } from "./stores";

  export let props: { [name: string]: any };

  // When the user is filtering name/description by freeform text, highlight the matching pieces.
  function highlightFilter(input: string): string {
    if (!$filterText) {
      return input;
    }
    return input.replace(
      new RegExp($filterText, "gi"),
      (match) => `<mark>${match}</mark>`
    );
  }
</script>

<div style="max-width: 30vw;">
  <h2>{@html highlightFilter(props.name)} ({props.intervention_type})</h2>
  <p>Scheme reference: {props.scheme_reference}</p>
  {#if props.length_meters}
    <p>Length: {prettyPrintMeters(props.length_meters)}</p>
  {/if}
  {#if props.description}
    <p>{@html highlightFilter(props.description)}</p>
  {/if}
</div>
