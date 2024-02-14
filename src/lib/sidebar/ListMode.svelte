<script lang="ts">
  import { FileInput } from "lib/common";
  import { gjSchemeCollection } from "lib/draw/stores";
  import { ErrorMessage, SecondaryButton } from "lib/govuk";
  import PerSchemeControls from "./PerSchemeControls.svelte";
  import { addEmptyScheme, backfill } from "./scheme_data";

  function newBlankScheme() {
    addEmptyScheme($gjSchemeCollection);
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
            "The file you're loading seems to contain duplicate data. Are you merging in the same file accidentally?",
          );
        }
        $gjSchemeCollection.schemes[scheme.scheme_reference] = scheme;
      }
      $gjSchemeCollection.features = $gjSchemeCollection.features.concat(
        gj.features,
      );

      // Make sure every feature ID is unique. It's fine to change existing
      // features, since no tool can be open and holding an ID.
      let i = 1;
      $gjSchemeCollection.features.forEach((feature) => {
        feature.id = i++;
      });

      $gjSchemeCollection = $gjSchemeCollection;
      errorFromFile = "";
    } catch (err) {
      errorFromFile = `Couldn't load scheme from a file: ${err}`;
    }
  }

  function moveSchemeInList(scheme_reference: string, direction: number) {
    const currentSchemeOrder = JSON.parse(
      JSON.stringify(Object.keys($gjSchemeCollection.schemes)),
    );
    const currentIndex = currentSchemeOrder.indexOf(scheme_reference);
    if (
      currentIndex + direction >= 0 &&
      currentIndex + direction < currentSchemeOrder.length
    ) {
      swapArrayValuesInPlace(
        currentSchemeOrder,
        currentIndex,
        currentIndex + direction,
      );
      const newSchemesObject = getReorderedSchemesObject(
        currentSchemeOrder,
        $gjSchemeCollection.schemes,
      );
      $gjSchemeCollection.schemes = newSchemesObject;
      $gjSchemeCollection = $gjSchemeCollection;
    }
  }

  function swapArrayValuesInPlace(
    array: any[],
    firstIndex: number,
    secondIndex: number,
  ) {
    [array[firstIndex], array[secondIndex]] = [
      array[secondIndex],
      array[firstIndex],
    ];
  }

  function getReorderedSchemesObject(
    newSchemeOrder: string[],
    currentSchemesObject: { [reference: string]: any },
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

{#each Object.keys($gjSchemeCollection.schemes) as scheme_reference, i (scheme_reference)}
  <PerSchemeControls {scheme_reference}>
    {#if Object.keys($gjSchemeCollection.schemes).length > 1}
      <SecondaryButton
        on:click={() => moveSchemeInList(scheme_reference, -1)}
        disabled={i == 0}
      >
        Move up
      </SecondaryButton>
      <SecondaryButton
        on:click={() => moveSchemeInList(scheme_reference, 1)}
        disabled={i == Object.keys($gjSchemeCollection.schemes).length - 1}
      >
        Move down
      </SecondaryButton>
    {/if}
  </PerSchemeControls>
  <hr />
{/each}
