<script lang="ts">
  import { prettyPrintMeters } from "lib/maplibre";
  import { filterInterventionText, filterSchemeText, schemes } from "./stores";

  export let props: { [name: string]: any };

  $: scheme = $schemes.get(props.scheme_reference)!;

  // When the user is filtering name/description by freeform text, highlight the matching pieces.
  function highlightFilter(input: string, filter: string): string {
    if (!filter) {
      return input;
    }
    return input.replace(
      new RegExp(filter, "gi"),
      (match) => `<mark>${match}</mark>`
    );
  }
</script>

<div style="max-width: 30vw;">
  <h2>
    {@html highlightFilter(props.name, $filterInterventionText)} ({props.intervention_type})
  </h2>
  {#if props.length_meters}
    <p>Length: {prettyPrintMeters(props.length_meters)}</p>
  {/if}
  {#if props.description}
    <p>{@html highlightFilter(props.description, $filterInterventionText)}</p>
  {/if}
  <hr />
  <p>
    Part of scheme: {@html highlightFilter(
      scheme.scheme_name ?? "",
      $filterSchemeText
    )} ({@html highlightFilter(props.scheme_reference, $filterSchemeText)})
  </p>
  <p>Authority or region: {scheme.browse?.authority_or_region}</p>
  <p>Capital scheme ID: {scheme.browse?.capital_scheme_id}</p>
  <p>Funding programme: {scheme.browse?.funding_programme}</p>
  {#if scheme.browse?.current_milestone}
    <p>Current milestone: {scheme.browse?.current_milestone}</p>
  {/if}
</div>
