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
  import { backfill, getFirstSchemeOrEmptyScheme, interventionWarning } from "./scheme_data";

  export let authorityName: string;
  export let schema: Schema;
  let errorMessage = "";

  let baseFilename = authorityName;
  if (schema != "v1") {
    baseFilename += `_${schema}`;
  }

  let loaded = false;
  let displayClearAllConfirmation = false;
  let scheme = getFirstSchemeOrEmptyScheme($gjSchemeCollection);
  if(!$gjSchemeCollection.schemes){
    $gjSchemeCollection.schemes = {};
  }
  $gjSchemeCollection.schemes[scheme.scheme_name] = scheme;

  onMount(async () => {
    // Start by loading from a URL. If that's not specified, load from local storage.
    let params = new URLSearchParams(window.location.search);
    let loadUrl = params.get("geojsonUrl");
    let loadLocal = window.localStorage.getItem(baseFilename);

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
  });

  // Set up local storage sync. Don't run before onMount above is done with the initial load.
  $: {
    if (loaded && $gjSchemeCollection) {
      console.log(`GJ changed, saving to local storage`);
      window.localStorage.setItem(
        baseFilename,
        JSON.stringify(geojsonToSave())
      );
    }
  }

  function clearAll() {
    displayClearAllConfirmation = false;

    gjSchemeCollection.update((gj) => {
      // Leave origin, authority, and other foreign members alone
      scheme.scheme_name = "";
      delete scheme.pipeline;
      gj.features = [];
      return gj;
    });
    sidebarHover.set(null);
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
    var filename = baseFilename;
    geojson.authority = authorityName;
    // we could probably be more sophisticated here and set version more centrally
    geojson.origin = "atip-v2";
    // Include the scheme name if it's set
    if (Object.keys(geojson.schemes).length > 0) {
      filename += "_" + scheme.scheme_name;
    }
    filename += ".geojson";
    downloadGeneratedFile(filename, JSON.stringify(geojson, null, "  "));
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
  <CollapsibleCard label={scheme.scheme_name ?? "Untitled scheme"}>
    <TextInput label="Scheme name" bind:value={scheme.scheme_name} />

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
