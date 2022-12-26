<script>
  import { gjScheme, emptyGeojson } from "../stores.js";

  export let authorityName;

  function clearAll() {
    if (
      confirm(
        "Do you want to clear the current scheme? (You should save it first!)"
      )
    ) {
      gjScheme.set(emptyGeojson());
    }
  }

  function exportToGeojson() {
    const geojson = $gjScheme;
    var filename = authorityName;
    // Include the scheme name if it's set
    if (geojson["scheme_name"]) {
      filename += "_" + geojson["scheme_name"];
    }
    filename += ".geojson";
    downloadGeneratedFile(filename, JSON.stringify(geojson));
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

  function loadFile(e) {
    const reader = new FileReader();
    // TODO No await? :(
    // TODO Should we prompt before deleting the current scheme?
    reader.onload = (e) => {
      try {
        gjScheme.set(JSON.parse(e.target.result));
      } catch (err) {
        console.log(`Couldn't load from a file: ${err}`);
        window.alert(`Couldn't load scheme from a file: ${err}`);
      }
    };
    reader.readAsText(e.target.files[0]);
  }
</script>

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
