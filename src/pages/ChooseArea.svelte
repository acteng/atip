<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { bbox } from "../maplibre_helpers";
  import About from "../lib/sidebar/About.svelte";

  import authoritiesUrl from "../../assets/authorities.geojson?url";

  let showAbout = false;

  let inputValue: string;
  let dataList: HTMLDataListElement;
  let authoritySet: Set<string> = new Set();

  $: validEntry = authoritySet.has(inputValue);

  async function loadAuthorities() {
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
  }

  loadAuthorities();

  function start() {
    window.location.href = `scheme.html?authority=${inputValue}`;
  }
</script>

<div class="left">
  <h1>Welcome to ATIP v1</h1>
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
