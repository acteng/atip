<script lang="ts">
  import { onMount } from "svelte";
  import type { FeatureCollection } from "geojson";
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { bbox } from "../maplibre_helpers";
  import About from "../lib/sidebar/About.svelte";
  import FileInput from "../lib/common/FileInput.svelte";
  import type { Schema } from "../types";

  import authoritiesUrl from "../../assets/authorities.geojson?url";

  let showAbout = false;

  let inputValue: string;
  let dataList: HTMLDataListElement;
  let authoritySet: Set<string> = new Set();

  $: validEntry = authoritySet.has(inputValue);

  onMount(async () => {
    let source = "boundary";
    let layer = "boundary-layer";

    const resp = await fetch(authoritiesUrl);
    const body = await resp.text();
    const json: FeatureCollection = JSON.parse(body);
    for (let feature of json.features) {
      let option = document.createElement("option");
      option.value = feature.properties!.name;
      dataList.appendChild(option);
      authoritySet.add(feature.properties!.name);
    }

    // Only show TAs, not LADs, in the map
    json.features = json.features.filter((f) => f.properties!.level == "TA");

    let map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo",
    });

    let hoverId: number | null = null;
    function unhover() {
      if (hoverId !== null) {
        map.setFeatureState({ source, id: hoverId }, { hover: false });
      }
    }

    map.on("load", function () {
      map.fitBounds(bbox(json), {
        padding: 20,
        animate: false,
      });

      map.addSource(source, {
        type: "geojson",
        data: json,
        generateId: true,
      });
      map.addLayer({
        id: layer,
        source: source,
        type: "fill",
        paint: {
          "fill-color": "rgb(200, 100, 240)",
          "fill-outline-color": "rgb(200, 100, 240)",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.8,
            0.4,
          ],
        },
      });

      map.on("mousemove", layer, (e) => {
        if (e.features!.length > 0) {
          unhover();
          hoverId = e.features![0].id as number;
          map.setFeatureState({ source: source, id: hoverId }, { hover: true });
        }
      });
      map.on("mouseleave", layer, () => {
        unhover();
        hoverId = null;
      });

      map.on("click", layer, function (e) {
        let name = e.features![0].properties!.name;
        window.location.href = `scheme.html?authority=${name}`;
      });
    });
  });

  function loadFile(text: string) {
    try {
      let gj = JSON.parse(text);
      if (!gj.authority) {
        throw new Error(
          `File doesn't have an authority set; is it an ATIP file?`
        );
      }
      if (!authoritySet.has(gj.authority)) {
        throw new Error(`Unknown authority ${gj.authority}`);
      }

      let filename = gj.authority;
      let schema = detectSchema(gj);
      if (schema != "v1") {
        filename += `_${schema}`;
      }

      // Put the file in local storage, so it'll be loaded from the next page
      window.localStorage.setItem(filename, JSON.stringify(gj));
      window.location.href = `scheme.html?authority=${gj.authority}&schema=${schema}`;
    } catch (err) {
      window.alert(`Couldn't load scheme from a file: ${err}`);
    }
  }

  function detectSchema(gj: FeatureCollection): Schema {
    if (gj.features.length > 0) {
      let props = gj.features[0].properties;
      for (let schema of ["planning", "v2", "criticals"]) {
        if (props && schema in props) {
          return schema as Schema;
        }
      }
    }
    return "v1";
  }

  function start() {
    window.location.href = `scheme.html?authority=${inputValue}`;
  }
</script>

<div class="left">
  <h1>Welcome to ATIP v2</h1>
  <button type="button" on:click={() => (showAbout = !showAbout)}>About</button>

  <p>Select Transport Authority or Local Authority District:</p>
  <div>
    <input
      data-testid="transport-authority"
      list="authorities-list"
      bind:value={inputValue}
    />
    <datalist id="authorities-list" bind:this={dataList} />
    <button type="button" on:click={start} disabled={!validEntry}>Start</button>
  </div>
  <p>Or pick a Transport Authority on the map</p>
  <p>Or upload an ATIP file:</p>
  <FileInput
    label="Upload ATIP GeoJSON file"
    uniqueId="load-geojson"
    {loadFile}
  />
</div>
<div id="map" />
<About bind:open={showAbout} />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  button {
    margin-left: 6px;
  }

  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50%;
  }

  .left {
    margin: 10px;
  }
</style>
