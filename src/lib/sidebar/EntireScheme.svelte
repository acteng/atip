<script lang="ts">
  import { CollapsibleCard, FileInput, Modal } from "lib/common";
  import {
    ButtonGroup,
    ErrorMessage,
    SecondaryButton,
    TextInput,
    WarningButton,
  } from "lib/govuk";
  import { gjSchemeCollection, mode, sidebarHover } from "stores";
  import { onMount } from "svelte";
  import type { Schema, SchemeCollection } from "types";
  import PipelineSchemeForm from "./PipelineSchemeForm.svelte";
  import {
    backfill,
    emptyCollection,
    getArbitraryScheme,
    interventionWarning,
  } from "./scheme_data";

  export let authorityName: string;
  export let schema: Schema;
  let errorMessage = "";

  let filename = authorityName;
  if (schema != "v1") {
    filename += `_${schema}`;
  }

  let loaded = false;
  let displayClearAllConfirmation = false;

  // TODO Temporary. The UI will change to manage multiple schemes.
  let arbitrarySchemeName: string | undefined;
  $: updateSchemeName(arbitrarySchemeName);
  function updateSchemeName(scheme_name: string | undefined) {
    if (scheme_name) {
      getArbitraryScheme($gjSchemeCollection).scheme_name = scheme_name;
      $gjSchemeCollection = $gjSchemeCollection;
    }
  }

  onMount(async () => {
    // Start by loading from a URL. If that's not specified, load from local storage.
    let params = new URLSearchParams(window.location.search);
    let loadUrl = params.get("geojsonUrl");
    let loadLocal = window.localStorage.getItem(filename);

    if (loadUrl) {
      console.log(`Loading GeoJSON from ${loadUrl}`);
      try {
        let resp = await fetch(loadUrl);
        let body = await resp.text();
        gjSchemeCollection.set(backfill(JSON.parse(body)));
      } catch (err) {
        console.log(`Failed to load from URL: ${err}`);
      }
    } else if (loadLocal) {
      try {
        gjSchemeCollection.set(backfill(JSON.parse(loadLocal)));
      } catch (err) {
        console.log(`Failed to load from local storage: ${err}`);
      }
    }
    loaded = true;
    arbitrarySchemeName = getArbitraryScheme($gjSchemeCollection).scheme_name;
  });

  // Set up local storage sync. Don't run before onMount above is done with the initial load.
  $: {
    if (loaded && $gjSchemeCollection) {
      console.log(`GJ changed, saving to local storage`);
      window.localStorage.setItem(filename, JSON.stringify(geojsonToSave()));
    }
  }

  function clearAll() {
    displayClearAllConfirmation = false;

    gjSchemeCollection.update((gj) => {
      let newGj = emptyCollection();
      // Preserve some foreign members
      newGj.origin = gj.origin;
      newGj.authority = gj.authority;
      return newGj;
    });
    sidebarHover.set(null);
    arbitrarySchemeName = undefined;
  }

  // Remove the hide_while_editing property hack
  function geojsonToSave(): SchemeCollection {
    const copy = JSON.parse(JSON.stringify($gjSchemeCollection));
    for (let feature of copy.features) {
      delete feature.properties.hide_while_editing;
    }
    return copy;
  }

  function exportToGeojson() {
    let geojson = geojsonToSave();
    geojson.authority = authorityName;
    // we could probably be more sophisticated here and set version more centrally
    geojson.origin = "atip-v2";
    // Don't include any scheme name in the filename. There could be multiple
    // schemes in one file, and better for people to get used to consistent
    // filenames with only authority and schema.
    downloadGeneratedFile(
      `${filename}.geojson`,
      JSON.stringify(geojson, null, "  ")
    );
  }

  function downloadGeneratedFile(filename: string, textInput: string) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(textInput)
    );
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function loadFile(text: string) {
    try {
      // TODO Should we prompt before deleting the current scheme?
      gjSchemeCollection.set(backfill(JSON.parse(text)));
      arbitrarySchemeName = getArbitraryScheme($gjSchemeCollection).scheme_name;
      errorMessage = "";
    } catch (err) {
      errorMessage = `Couldn't load scheme from a file: ${err}`;
    }
  }

  $: numErrors = $gjSchemeCollection.features.filter(
    (f) => interventionWarning(schema, f) != null
  ).length;
</script>

{#if $mode.mode == "list"}
  <CollapsibleCard label={arbitrarySchemeName ?? "Untitled scheme"}>
    <TextInput label="Scheme name" bind:value={arbitrarySchemeName} />

    <ErrorMessage {errorMessage} />

    <FileInput label="Load from GeoJSON" id="load-geojson" {loadFile} />

    <SecondaryButton on:click={exportToGeojson}>
      Export to GeoJSON
    </SecondaryButton>

    <div>
      <WarningButton
        on:click={() => (displayClearAllConfirmation = true)}
        disabled={$gjSchemeCollection.features.length == 0}
      >
        Start new scheme
      </WarningButton>
    </div>
    <Modal
      title="Would you like to clear your work?"
      bind:open={displayClearAllConfirmation}
      displayEscapeButton={false}
    >
      <p>This will delete all your drawn interventions.</p>
      <ButtonGroup>
        <WarningButton on:click={clearAll}>Clear all work</WarningButton>
        <SecondaryButton on:click={() => (displayClearAllConfirmation = false)}>
          Cancel
        </SecondaryButton>
      </ButtonGroup>
    </Modal>
  </CollapsibleCard>
  {#if schema == "pipeline"}
    <PipelineSchemeForm />
  {/if}

  {#if numErrors == 1}
    <ErrorMessage
      errorMessage="There's a problem with one intervention below"
    />
  {:else if numErrors > 0}
    <ErrorMessage
      errorMessage="There's a problem with {numErrors} interventions below"
    />
  {/if}
{/if}
