<script lang="ts">
  import { randomSchemeColor } from "colors";
  import { FileInput } from "lib/common";
  import { ErrorMessage, SecondaryButton } from "lib/govuk";
  import { gjSchemeCollection } from "stores";
  import { v4 as uuidv4 } from "uuid";
  import PerSchemeControls from "./PerSchemeControls.svelte";
  import { backfill } from "./scheme_data";

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

  function moveSchemeInList(scheme_reference: string, direction: number) {
    return function () {
      const currentSchemeOrder = JSON.parse(
        JSON.stringify(Object.keys($gjSchemeCollection.schemes))
      );
      const currentIndex = currentSchemeOrder.indexOf(scheme_reference);
      if (
        currentIndex + direction >= 0 &&
        currentIndex + direction < currentSchemeOrder.length
      ) {
        const newSchemeOrder = swapArrayValues(
          currentSchemeOrder,
          currentIndex,
          currentIndex + direction
        );
        const newSchemesObject = getReorderedSchemesObject(
          newSchemeOrder,
          $gjSchemeCollection.schemes
        );
        $gjSchemeCollection.schemes = newSchemesObject;
        $gjSchemeCollection = $gjSchemeCollection;
      }
    };
  }

  function swapArrayValues(
    array: any[],
    firstIndex: number,
    secondIndex: number
  ) {
    const firstValue = array[firstIndex];
    const secondValue = array[secondIndex];
    array[secondIndex] = firstValue;
    array[firstIndex] = secondValue;

    return array;
  }

  function getReorderedSchemesObject(
    newSchemeOrder: string[],
    currentSchemesObject: { [reference: string]: any }
  ) {
    const result: { [reference: string]: any } = {};
    newSchemeOrder.forEach((scheme_reference) => {
      result[scheme_reference] = currentSchemesObject[scheme_reference];
    });

    return result;
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

<hr />

{#each Object.keys($gjSchemeCollection.schemes) as scheme_reference}
  <PerSchemeControls {scheme_reference}>
    {#if Object.keys($gjSchemeCollection.schemes).length > 1}
      <SecondaryButton on:click={moveSchemeInList(scheme_reference, -1)}>
        Move Up
      </SecondaryButton>
      <SecondaryButton on:click={moveSchemeInList(scheme_reference, 1)}>
        Move Down
      </SecondaryButton>
    {/if}
  </PerSchemeControls>
  <hr />
{/each}
