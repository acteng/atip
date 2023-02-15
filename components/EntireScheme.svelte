<script>
  import { gjScheme, emptyGeojson } from "../stores.js";

  export let authorityName;

  // Set up local storage sync
  let loadLocal = window.localStorage.getItem(authorityName);
  if (loadLocal) {
    try {
      gjScheme.set(JSON.parse(loadLocal));
    } catch (err) {
      console.log(`Failed to load from local storage: ${err}`);
    }
  }
  gjScheme.subscribe(() =>
    window.localStorage.setItem(authorityName, JSON.stringify(geojsonToSave()))
  );

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
    }
  }

  // Remove the editing property hack
  function geojsonToSave() {
    const copy = JSON.parse(JSON.stringify($gjScheme));
    for (let feature of copy.features) {
      delete feature.properties.editing;
    }
    return copy;
  }

  function exportToGeojson() {
    let geojson = geojsonToSave();
    var filename = authorityName;
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

  function downloadGeneratedFile(filename, textInput) {
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

  function checkOrigin(geojson) {
    if (geojson.hasOwnProperty("origin")) {
      let origin = geojson.origin;
      return origin.startsWith("atip-");
    } else {
      return geojson.hasOwnProperty("authority");
    }
  }

  function loadFile(e) {
    const reader = new FileReader();
    // TODO No await? :(
    // TODO Should we prompt before deleting the current scheme?
    reader.onload = (e) => {
      try {
        let result = JSON.parse(e.target.result);

        // check for origin or authority foreign member to confirm atip generated
        if (checkOrigin(result)) {
          gjScheme.set(result);
        } else {
          window.alert(
            `Non-ATIP based geojson uploaded. Please try again with an ATIP generated file.`
          );
        }
      } catch (err) {
        window.alert(`Couldn't load scheme from a file: ${err}`);
      }
    };
    reader.readAsText(e.target.files[0]);
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
    <input type="file" id="load_geojson" on:change={loadFile} />
    <button
      type="button"
      onclick="document.getElementById('load_geojson').click();"
    >
      Load from GeoJSON
    </button>
  </label>
  <button type="button" class="align-right" on:click={exportToGeojson}>
    Export to GeoJSON
  </button>
</div>

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
