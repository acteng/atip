<script lang="ts">
  import length from "@turf/length";
  import { gjScheme, formOpen, mapHover, sidebarHover } from "../stores";
  import type { Scheme, Schema } from "../types";

  export let authorityName: string;
  export let schema: Schema;

  let baseFilename = authorityName;
  if (schema != "v1") {
    baseFilename += `_${schema}`;
  }

  // Strings
  let otherFiles = [];
  let browseFileIdx = 0;

  // Set up local storage sync
  let loadLocal = window.localStorage.getItem(baseFilename);
  if (loadLocal) {
    try {
      gjScheme.set(backfill(JSON.parse(loadLocal)));
    } catch (err) {
      console.log(`Failed to load from local storage: ${err}`);
    }
  }

  $: {
    if ($gjScheme) {
      console.log(`GJ changed, saving to local storage`);
      window.localStorage.setItem(
        baseFilename,
        JSON.stringify(geojsonToSave())
      );
    }
  }

  function clearAll() {
    if (
      confirm(
        "Do you want to clear the current scheme? (You should save it first!)"
      )
    ) {
      gjScheme.update((gj) => {
        // Leave origin, authority, and other foreign members alone
        delete gj.scheme_name;
        gj.features = [];
        return gj;
      });
      formOpen.set(null);
      mapHover.set(null);
      sidebarHover.set(null);
    }
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
    geojson.origin = "atip-v1";
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

  function loadFile(e) {
    otherFiles = [];
    browseFileIdx = 0;

    let first = true;
    for (let file of e.target.files) {
      let immutableFirst = first;
      const reader = new FileReader();
      // TODO No await? :(
      // TODO Should we prompt before deleting the current scheme?
      reader.onload = (e) => {
        otherFiles = [...otherFiles, e.target.result];
        if (immutableFirst) {
          try {
            gjScheme.set(backfill(JSON.parse(e.target!.result as string)));
          } catch (err) {
            window.alert(`Couldn't load scheme from a file: ${err}`);
          }
        }
      };
      reader.readAsText(file);
      first = false;
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

  function loadGeojson() {
    document.getElementById("load_geojson")!.click();
  }

  $: if (otherFiles.length > 1) {
    try {
      gjScheme.set(backfill(JSON.parse(otherFiles[browseFileIdx])));
    } catch (err) {
      console.log(`Failed to load from local storage: ${err}`);
    }
  }
</script>

<div>
  <label>
    Scheme name:
    <input type="text" bind:value={$gjScheme.scheme_name} />
  </label>
</div>

<br />

<div>
  <!-- TODO Interactive elements inside a label are apparently invalid, but this works -->
  <label>
    <input type="file" id="load_geojson" multiple on:change={loadFile} />
    <button type="button" on:click={loadGeojson}> Load from GeoJSON </button>
  </label>
  <button type="button" class="align-right" on:click={exportToGeojson}>
    Export to GeoJSON
  </button>
</div>

{#if otherFiles.length > 1}
  <div>
    <button
      type="button"
      on:click={(e) => browseFileIdx--}
      disabled={browseFileIdx == 0}>Previous</button
    >
    {browseFileIdx + 1} / {otherFiles.length}
    <button
      type="button"
      on:click={(e) => browseFileIdx++}
      disabled={browseFileIdx == otherFiles.length - 1}>Next</button
    >
  </div>
{/if}

<br />

<div>
  <span>{$gjScheme.features.length} interventions</span>
  <button
    type="button"
    class="align-right"
    on:click={clearAll}
    disabled={$gjScheme.features.length == 0}>Clear all</button
  >
</div>

<style>
  .align-right {
    float: right;
  }

  input[type="file"] {
    cursor: pointer;

    /* Make the input type=file effectively invisible, but still let browser accessibility stuff work */
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
</style>
