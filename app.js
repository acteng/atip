"use strict";

export class App {
  constructor(interventionName, drawControls, makeForm, saveForm) {
    this.authority = new URLSearchParams(window.location.search).get(
      "authority"
    );
    this.interventionName = interventionName;
    this.currentFilename = `${this.authority}_${interventionName}.geojson`;

    setupNavBar(interventionName, this.authority);

    // Before creating the map, check if there's a hash, because one will get set below
    const setCamera = !window.location.hash;

    this.map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      hash: true,
    });
    this.drawControls = drawControls;
    this.makeForm = makeForm;
    this.saveForm = saveForm;

    this.#setupMap(setCamera);

    setupCredits();
  }

  downloadGeojsonFile() {
    downloadGeneratedFile(
      this.currentFilename,
      JSON.stringify(this.drawControls.getAll())
    );
  }

  loadFromGeojson(e) {
    const reader = new FileReader();
    // TODO No await? :(
    reader.onload = (e) => {
      this.#loadFromText(e.target.result);
      this.#saveToLocalStorage();
    };
    reader.readAsText(e.target.files[0]);
  }

  #loadFromText(text) {
    const geojson = JSON.parse(text);
    this.drawControls.set(geojson);
    this.#updateSidebar();
  }

  #saveToLocalStorage() {
    window.localStorage.setItem(
      this.currentFilename,
      JSON.stringify(this.drawControls.getAll())
    );
  }

  #setupMap(setCamera) {
    this.map.on("load", async () => {
      const boundaryGeojson = await loadBoundary(this.authority);

      document.getElementById("authority").innerText = this.authority;

      if (setCamera) {
        this.map.fitBounds(geojsonExtent(boundaryGeojson), {
          padding: 20,
          animate: false,
        });
      }

      this.map.addSource("boundary", {
        type: "geojson",
        data: boundaryGeojson,
      });
      this.map.addLayer({
        id: "boundary",
        type: "line",
        source: "boundary",
        layout: {},
        paint: {
          "line-color": "black",
          "line-width": 3,
        },
      });

      // Use a layer that only ever has zero or one features for hovering. I think https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should be an easier way to do this, but I can't make it work with the draw plugin.
      this.map.addSource("hover-polygons", {
        type: "geojson",
        data: emptyGeojson(),
      });
      this.map.addSource("hover-lines", {
        type: "geojson",
        data: emptyGeojson(),
      });
      this.map.addLayer({
        id: "hover-polygons",
        source: "hover-polygons",
        type: "fill",
        paint: {
          "fill-color": "red",
          "fill-opacity": 0.5,
        },
      });
      this.map.addLayer({
        id: "hover-lines",
        source: "hover-lines",
        type: "line",
        paint: {
          "line-color": "red",
          "line-opacity": 0.5,
          "line-width": 10,
        },
      });

      // And another for the object matching the current form
      this.map.addSource("editing-polygons", {
        type: "geojson",
        data: emptyGeojson(),
      });
      this.map.addSource("editing-lines", {
        type: "geojson",
        data: emptyGeojson(),
      });
      this.map.addLayer({
        id: "editing-polygons",
        source: "editing-polygons",
        type: "line",
        paint: {
          "line-color": "red",
          "line-width": 10,
        },
      });
      this.map.addLayer({
        id: "editing-lines",
        source: "editing-lines",
        type: "line",
        paint: {
          "line-color": "red",
          "line-width": 10,
        },
      });

      this.map.addControl(this.drawControls);

      // Initially load from local storage
      const loadLocal = window.localStorage.getItem(this.currentFilename);
      if (loadLocal) {
        this.#loadFromText(loadLocal);
      }

      this.map.on("draw.selectionchange", (e) => {
        this.#updateSidebar();
        this.#saveToLocalStorage();

        if (e.features.length === 1) {
          this.#openForm(e.features[0]);
        }
      });
    });

    document.getElementById("basemaps").onchange = (e) => {
      this.map.setStyle(
        `https://api.maptiler.com/maps/${e.target.value}/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL`
      );
    };
  }

  #openForm(feature) {
    const source =
      feature.geometry.type == "Polygon" ? "editing-polygons" : "editing-lines";

    const formContents =
      this.makeForm(feature.properties) +
      `
      <button type="button" id="save">Save</button>
      <button type="button" id="cancel">Cancel</button>
      <button type="button" id="delete">Delete</button>
		  `;
    document.getElementById("panel").innerHTML = formContents;
    this.map.resize();

    document.getElementById("save").onclick = () => {
      this.saveForm(this, feature.id);
      document.getElementById("panel").innerHTML = "";
      this.map.getSource(source).setData(emptyGeojson());
      this.map.resize();
      this.#updateSidebar();
      this.#saveToLocalStorage();
    };
    document.getElementById("cancel").onclick = () => {
      document.getElementById("panel").innerHTML = "";
      this.map.getSource(source).setData(emptyGeojson());
      this.map.resize();
    };
    document.getElementById("delete").onclick = () => {
      this.drawControls.delete(feature.id);
      document.getElementById("panel").innerHTML = "";
      this.map.getSource(source).setData(emptyGeojson());
      this.map.resize();
      this.#updateSidebar();
      this.#saveToLocalStorage();
    };

    // Highlight the feature opened
    this.map.getSource(source).setData({
      type: "FeatureCollection",
      features: [feature],
    });
  }

  #updateSidebar() {
    const div = document.getElementById("scheme_list");
    div.innerHTML = "";

    const header = document.createElement("p");
    header.innerText = `${this.drawControls.getAll().features.length} ${
      this.interventionName
    }`;
    div.appendChild(header);

    var list = document.createElement("ol");

    for (const feature of this.drawControls.getAll().features) {
      var li = document.createElement("li");
      const props = feature.properties;
      const source =
        feature.geometry.type == "Polygon" ? "hover-polygons" : "hover-lines";
      li.innerText = props.scheme_name || "Untitled";
      li.onmouseover = () => {
        this.map.getSource(source).setData({
          type: "FeatureCollection",
          features: [feature],
        });
      };
      li.onmouseout = () => {
        this.map.getSource(source).setData(emptyGeojson());
      };
      li.onclick = () => {
        // TODO If another form is open, we'll lose changes
        this.#openForm(feature);
        this.map.fitBounds(geojsonExtent(feature), {
          padding: 20,
          animate: true,
        });
      };

      list.appendChild(li);
    }

    div.appendChild(list);
  }
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

async function loadBoundary(authority) {
  const resp = await fetch("authorities.geojson");
  const body = await resp.text();
  const geojson = JSON.parse(body);
  geojson.features = geojson.features.filter(
    (feature) => feature.properties.name == authority
  );
  return geojson;
}

function setupNavBar(interventionName, authority) {
  // Very brittle way of adding the authority to the nav links.
  for (const a of document.getElementsByClassName("authority-link")) {
    a.href += `?authority=${authority}`;
    if (a.pathname === location.pathname) {
      a.classList.add("current");
    }
  }
}

// TODO I've hit bizarre bugs just sending in null or {} to a source. Figure that out / file an issue.
function emptyGeojson() {
  return {
    type: "FeatureCollection",
    features: [],
  };
}

function setupCredits() {
  const credits = document.getElementById("credits");
  credits.innerHTML = `<button type="button" class="link-button" style="float: right;" onclick="document.getElementById('credits').classList.toggle('hide-modal');">X</button>
  <h1>Credits</h1>
<p>ATIP is developed by:</p>
<ul>
    <li><a href="https://dcarlino.org" target="_blank">Dustin Carlino</a>: lead developer</li>
    <li><a href="https://robinlovelace.net" target="_blank">Robin Lovelace</a>: project lead</li>
    <li><a href="https://www.linkedin.com/in/madison-wang-841977bb/" target="_blank">Madison Wang</a>: UX design</li>
    <li><a href="https://github.com/BudgieInWA" target="_blank">Ben Ritter</a>: CSS consulting</li>
</ul>
<p>ATIP relies heavily on <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors, <a href="https://maplibre.org/" target="_blank">MapLibre</a>, <a href="https://georust.org/" target="_blank">GeoRust</a>, and other open source projects.</p>`;
  credits.classList.add("modal-popup");
  credits.classList.add("centered-fullscreen");
  credits.classList.add("hide-modal");
}
