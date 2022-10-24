"use strict";

export class App {
  constructor(
    interventionName,
    drawControls,
    updateSidebar,
    makeForm,
    saveForm
  ) {
    this.authority = new URLSearchParams(window.location.search).get(
      "authority"
    );
    this.currentFilename = `${this.authority}_${interventionName}.geojson`;
    this.updateSidebar = updateSidebar;

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
    this.openPopup = null;
    this.makeForm = makeForm;
    this.saveForm = saveForm;

    this.#setupMap(setCamera);
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

      // Sync to local storage
      window.localStorage.setItem(
        this.currentFilename,
        JSON.stringify(this.drawControls.getAll())
      );
    };
    reader.readAsText(e.target.files[0]);
  }

  #loadFromText(text) {
    const geojson = JSON.parse(text);
    this.drawControls.set(geojson);
    this.updateSidebar(this);
  }

  #setupMap(setCamera) {
    this.map.on("load", async () => {
      const boundaryGeojson = await loadBoundary(this.authority);

      // TODO Should we assume the sidebar always has this?
      document.getElementById("authority").innerText = this.authority;
      document.getElementById("population").innerText =
        boundaryGeojson.features[0].properties.Population_2020;

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

      this.map.addControl(this.drawControls);

      // Initially load from local storage
      const loadLocal = window.localStorage.getItem(this.currentFilename);
      if (loadLocal) {
        this.#loadFromText(loadLocal);
      }

      this.map.on("draw.selectionchange", (e) => {
        if (this.openPopup != null) {
          this.openPopup.remove();
          this.openPopup = null;
        }

        this.updateSidebar(this);
        // Sync to local storage
        window.localStorage.setItem(
          this.currentFilename,
          JSON.stringify(this.drawControls.getAll())
        );

        if (e.features.length === 1) {
          const feature = e.features[0];

          const formContents =
            this.makeForm(feature.properties) +
            `
		<button type="button" id="save">Save</button>
		<button type="button" id="cancel">Cancel</button>
		<button type="button" id="delete">Delete</button>
		`;
          document.getElementById("panel").innerHTML = formContents;

          document.getElementById("save").onclick = () => {
            app.saveForm(app, feature.id);
            document.getElementById("panel").innerHTML = "";
            app.map.resize();
          };
          document.getElementById("cancel").onclick = () => {
            document.getElementById("panel").innerHTML = "";
            app.map.resize();
          };
          document.getElementById("delete").onclick = () => {
            this.drawControls.delete(feature.id);
            document.getElementById("panel").innerHTML = "";
            app.map.resize();
          };
        }
      });
    });

    document.getElementById("basemaps").onchange = (e) => {
      this.map.setStyle(
        `https://api.maptiler.com/maps/${e.target.value}/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL`
      );
    };
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
    (feature) => feature.properties.Name == authority
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
