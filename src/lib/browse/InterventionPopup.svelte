<script lang="ts">
  import { prettyPrintMeters } from "lib/maplibre";
  import { filterText, schemes } from "./stores";

  export let props: { [name: string]: any };

  $: scheme = $schemes.get(props.scheme_reference)!;

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
  {#if props.length_meters}
    <p>Length: {prettyPrintMeters(props.length_meters)}</p>
  {/if}
  {#if props.description}
    <p>{@html highlightFilter(props.description)}</p>
  {/if}
  <hr />
  <p>Part of scheme: {scheme.scheme_name} ({props.scheme_reference})</p>
  <p>Authority or region: {scheme.browse?.authority_or_region}</p>
  <p>Capital scheme ID: {scheme.browse?.capital_scheme_id}</p>
  <p>Funding programme: {scheme.browse?.funding_programme}</p>
  {#if scheme.browse?.current_milestone}
    <p>Current milestone: {scheme.browse?.current_milestone}</p>
  {/if}
</div>
