<script>
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import geojsonExtent from "@mapbox/geojson-extent";
  import About from "./components/About.svelte";
  import "carbon-components-svelte/css/white.css";

  import authoritiesUrl from "./authorities.geojson?url";

  let showAbout = false;

  let inputList;
  let dataList;

  async function loadAuthorities() {
    let source = "boundary";
    let layer = "boundary-layer";

    const resp = await fetch(authoritiesUrl);
    const body = await resp.text();
    const json = JSON.parse(body);
    for (let feature of json.features) {
      let option = document.createElement("option");
      option.value = feature.properties.name;
      dataList.appendChild(option);
    }

    // Only show TAs, not LADs, in the map
    json.features = json.features.filter((f) => f.properties.level == "TA");

    let map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    });

    let hoverId = null;
    function unhover() {
      if (hoverId !== null) {
        map.setFeatureState({ source: source, id: hoverId }, { hover: false });
      }
    }

    map.on("load", function () {
      map.fitBounds(geojsonExtent(json), {
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
        if (e.features.length > 0) {
          unhover();
          hoverId = e.features[0].id;
          map.setFeatureState({ source: source, id: hoverId }, { hover: true });
        }
      });
      map.on("mouseleave", layer, () => {
        unhover();
        hoverId = null;
      });

      map.on("click", layer, function (e) {
        window.location.href = `scheme.html?authority=${e.features[0].properties.name}`;
      });
    });
  }

  loadAuthorities();

  function start() {
    if (inputList.value) {
      window.location.href = `scheme.html?authority=${inputList.value}`;
    }
  }
</script>

<div class="left">
  <h1>Welcome to ATIP v1</h1>
  <button type="button" on:click={() => (showAbout = !showAbout)}>About</button>
  <br />
  <br />
  <br />

  <p>Select Transport Authority or Local Authority District:</p>
  <input list="authorities-list" bind:this={inputList} />
  <datalist id="authorities-list" bind:this={dataList} />
  <button type="button" on:click={start}>Start</button>
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
