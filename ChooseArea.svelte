<script>
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import geojsonExtent from "@mapbox/geojson-extent";

  import authoritiesUrl from "./authorities.geojson?url";

  let inputList;
  let dataList;

  async function loadAuthorities() {
    const resp = await fetch(authoritiesUrl);
    const body = await resp.text();
    const json = JSON.parse(body);
    for (const feature of json.features) {
      let option = document.createElement("option");
      option.value = feature.properties.name;
      dataList.appendChild(option);
    }

    // Only show TAs, not LADs, in the map
    json.features = json.features.filter(
      (feat) => feat.properties.level == "TA"
    );

    let map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    });
    map.on("load", async function () {
      map.fitBounds(geojsonExtent(json), {
        padding: 20,
        animate: false,
      });

      map.addSource("boundary", {
        type: "geojson",
        data: json,
      });
      map.addLayer({
        id: "boundary",
        type: "fill",
        source: "boundary",
        paint: {
          "fill-color": "rgba(200, 100, 240, 0.4)",
          "fill-outline-color": "rgba(200, 100, 240, 1)",
        },
      });

      map.on("click", "boundary", function (e) {
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
  <p>Select Transport Authority:</p>
  <input list="authorities-list" bind:this={inputList} />
  <datalist id="authorities-list" bind:this={dataList} />
  <button type="button" on:click={start}>Start</button>
</div>
<div id="map" />

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
