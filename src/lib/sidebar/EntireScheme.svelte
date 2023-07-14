<script lang="ts">
  import length from "@turf/length";
  import { onMount } from "svelte";
  import {
    formOpen,
    gjScheme,
    isAToolInUse,
    mapHover,
    openFromSidebar,
    sidebarHover,
  } from "../../stores";
  import { schemaPluralNoun, type Schema, type Scheme } from "../../types";
  import ConfirmationModal from "../common/ConfirmationModal.svelte";
  import FileInput from "../common/FileInput.svelte";
  import ErrorMessage from "../govuk/ErrorMessage.svelte";
  import SecondaryButton from "../govuk/SecondaryButton.svelte";
  import TextInput from "../govuk/TextInput.svelte";
  import WarningButton from "../govuk/WarningButton.svelte";

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

  // TODO This should eventually guarantee the output is a valid Scheme. Only
  // some fixes are applied now.
  function backfill(json: Scheme) {
    let idCounter = 1;
    for (let f of json.features) {
      // Fix input from other tools where properties may be null
      f.properties ||= {
        name: "",
        description: "",
        intervention_type: "other",
      };

      // Look for any LineStrings without length_meters. Old route-snapper versions didn't fill this out.
      if (f.geometry.type == "LineString" && !f.properties.length_meters) {
        f.properties.length_meters =
          length(f, { units: "kilometers" }) * 1000.0;
      }

      // Always overwrite IDs, and follow what newFeatureId requires.
      f.id = idCounter++;
    }

    return json;
  }
</script>

<TextInput label="Scheme name" bind:value={$gjScheme.scheme_name} />

{#if errorMessage}
  <ErrorMessage {errorMessage} />
{/if}

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
    >Clear all</WarningButton
  >
</div>
<ConfirmationModal
  bind:open={displayClearAllConfirmation}
  title={"Would you like to clear your work?"}
  message={"This will delete all your drawn interventions."}
  on:cancelAction={cancelClearAll}
  on:confirmAction={clearAll}
/>

{#if $isAToolInUse}
  <p>
    Finish drawing on the map and/or select "Edit attributes" to use these
    options.
  </p>
{/if}
