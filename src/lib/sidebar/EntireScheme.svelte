<script lang="ts">
  import { ConfirmationModal, FileInput } from "lib/common";
  import {
    ErrorMessage,
    SecondaryButton,
    TextInput,
    WarningButton,
  } from "lib/govuk";
  import { schemaPluralNoun } from "schemas";
  import {
    formOpen,
    gjScheme,
    isAToolInUse,
    mapHover,
    openFromSidebar,
    sidebarHover,
  } from "stores";
  import { onMount } from "svelte";
  import type { Schema, Scheme } from "types";
  import { backfill, interventionWarning } from "./scheme_data";

  export let authorityName: string;
  export let schema: Schema;
  let errorMessage = "";

  let baseFilename = authorityName;
  if (schema != "v1") {
    baseFilename += `_${schema}`;
  }

  let loaded = false;
  let displayClearAllConfirmation = false;

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
        gjScheme.set(backfill(JSON.parse(body)));
      } catch (err) {
        console.log(`Failed to load from URL: ${err}`);
      }
    } else if (loadLocal) {
      try {
        gjScheme.set(backfill(JSON.parse(loadLocal)));
      } catch (err) {
        console.log(`Failed to load from local storage: ${err}`);
      }
    }
    loaded = true;
  });

  // Set up local storage sync. Don't run before onMount above is done with the initial load.
  $: {
    if (loaded && $gjScheme) {
      console.log(`GJ changed, saving to local storage`);
      window.localStorage.setItem(
        baseFilename,
        JSON.stringify(geojsonToSave())
      );
    }
  }

  function openClearAllDialogue() {
    displayClearAllConfirmation = true;
  }

  function cancelClearAll() {
    displayClearAllConfirmation = false;
  }

  function clearAll() {
    displayClearAllConfirmation = false;

    gjScheme.update((gj) => {
      // Leave origin, authority, and other foreign members alone
      delete gj.scheme_name;
      gj.features = [];
      return gj;
    });
    formOpen.set(null);
    mapHover.set(null);
    sidebarHover.set(null);
    openFromSidebar.set(null);
  }

  // Remove the hide_while_editing property hack
  function geojsonToSave(): Scheme {
    const copy = JSON.parse(JSON.stringify($gjScheme));
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
    if (geojson["scheme_name"]) {
      filename += "_" + geojson["scheme_name"];
    }
    filename += ".txt";
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
      gjScheme.set(backfill(JSON.parse(text)));
    } catch (err) {
      errorMessage = `Couldn't load scheme from a file: ${err}`;
    }
  }

  $: numErrors = $gjScheme.features.filter(
    (f) => interventionWarning(schema, f) != null
  ).length;
</script>

<TextInput label="Scheme name" bind:value={$gjScheme.scheme_name} />

<ErrorMessage {errorMessage} />

<FileInput
  label="Load from GeoJSON"
  id="load-geojson"
  disabled={$isAToolInUse}
  {loadFile}
/>

<SecondaryButton on:click={exportToGeojson} disabled={$isAToolInUse}>
  Export to GeoJSON
</SecondaryButton>

<div style="display: flex; justify-content: space-between">
  <p>{$gjScheme.features.length} {schemaPluralNoun(schema)}</p>
  <WarningButton
    on:click={openClearAllDialogue}
    disabled={$gjScheme.features.length == 0 || $isAToolInUse}
  >
    Clear all
  </WarningButton>
</div>
<ConfirmationModal
  bind:open={displayClearAllConfirmation}
  title={"Would you like to clear your work?"}
  message={"This will delete all your drawn interventions."}
  on:cancelAction={cancelClearAll}
  on:confirmAction={clearAll}
/>
{#if numErrors == 1}
  <ErrorMessage errorMessage="There's a problem with one intervention below" />
{:else if numErrors > 0}
  <ErrorMessage
    errorMessage="There's a problem with {numErrors} interventions below"
  />
{/if}

{#if $isAToolInUse}
  <p>
    Finish drawing on the map and/or select "Edit attributes" to use these
    options.
  </p>
{/if}
