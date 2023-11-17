<script lang="ts">
  import { randomSchemeColor } from "colors";
  import { FileInput } from "lib/common";
  import { ErrorMessage, SecondaryButton } from "lib/govuk";
  import { gjSchemeCollection } from "stores";
  import type { Schema } from "types";
  import { v4 as uuidv4 } from "uuid";
  import PerSchemeControls from "./PerSchemeControls.svelte";
  import { backfill, interventionWarning } from "./scheme_data";

  export let schema: Schema;

  // TODO Per scheme?
  $: numErrors = $gjSchemeCollection.features.filter(
    (f) => interventionWarning(schema, f) != null
  ).length;

  function newBlankScheme() {
    let scheme_reference = uuidv4();
    $gjSchemeCollection.schemes[scheme_reference] = {
      scheme_reference,
      color: randomSchemeColor(),
    };
    $gjSchemeCollection = $gjSchemeCollection;
  }

  let errorFromFile = "";
  function mergeSchemesFromFile(text: string) {
    try {
      let gj = backfill(JSON.parse(text));
      // Ignore if authority doesn't match -- might be merging in from a smaller area

      for (let scheme of Object.values(gj.schemes)) {
        if (scheme.scheme_reference in $gjSchemeCollection.schemes) {
          throw new Error(
            "The file you're loading seems to contain duplicate data. Are you merging in the same file accidentally?"
          );
        }
        $gjSchemeCollection.schemes[scheme.scheme_reference] = scheme;
      }
      $gjSchemeCollection.features = $gjSchemeCollection.features.concat(
        gj.features
      );

      $gjSchemeCollection = $gjSchemeCollection;
      errorFromFile = "";
    } catch (err) {
      errorFromFile = `Couldn't load scheme from a file: ${err}`;
    }
  }
</script>

<SecondaryButton on:click={newBlankScheme}>
  Add new blank scheme
</SecondaryButton>
<FileInput
  label="Add scheme from file"
  id="merge-file"
  loadFile={mergeSchemesFromFile}
/>
<ErrorMessage errorMessage={errorFromFile} />

{#each Object.keys($gjSchemeCollection.schemes) as scheme_reference}
  <PerSchemeControls {schema} {scheme_reference} />
{/each}

{#if numErrors == 1}
  <ErrorMessage errorMessage="There's a problem with one intervention below" />
{:else if numErrors > 0}
  <ErrorMessage
    errorMessage="There's a problem with {numErrors} interventions below"
  />
{/if}
