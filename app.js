"use strict";

import { dropdown } from "./forms.js";
import { RouteSnapper } from "./route-snapper/lib.js";

export class App {
  constructor() {
    const params = new URLSearchParams(window.location.search);
    this.authority = params.get("authority");
    // TODO For now, this becomes unused again
    this.detailedFormExperiment = params.has("detailedFormExperiment");
    // TODO Scheme name in here would be good too
    this.currentFilename = `${this.authority}.geojson`;

    document.getElementById("authority").innerText = this.authority;

    // Before creating the map, check if there's a hash, because one will get set below
    const setCamera = !window.location.hash;

    this.map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      hash: true,
    });
    this.drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        point: true,
        polygon: true,
        line_string: true,
      },
      /*styles: [
          // make the lines thicker
          {
            id: "gl-draw-line",
            type: "line",
            filter: ["==", "$type", "LineString"],
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
            paint: {
              "line-color": "black",
              "line-width": 5,
            },
          },
        ],*/
    });

    this.#setupMap(setCamera);

    setupCredits();
  }

  saveToGeojson() {
    var geojson = this.drawControls.getAll();
    // This is a FeatureCollection. We can just set more keys on this top-level
    // object, and they count as foreign members per the GeoJSON spec
    geojson["scheme_name"] = document.getElementById("scheme_name").value || "";
    return JSON.stringify(geojson);
  }

  downloadGeojsonFile() {
    downloadGeneratedFile(this.currentFilename, this.saveToGeojson());
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

    document.getElementById("scheme_name").value = geojson["scheme_name"] || "";
  }

  #saveToLocalStorage() {
    window.localStorage.setItem(this.currentFilename, this.saveToGeojson());
  }

  #setupMap(setCamera) {
    this.map.on("load", async () => {
      const boundaryGeojson = await loadBoundary(this.authority);

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
      this.map.addSource("hover", {
        type: "geojson",
        data: emptyGeojson(),
      });
      this.map.addLayer({
        id: "hover-polygons",
        source: "hover",
        type: "fill",
        paint: {
          "fill-color": "red",
          "fill-opacity": 0.5,
        },
        filter: ["==", "$type", "Polygon"],
      });
      this.map.addLayer({
        id: "hover-lines",
        source: "hover",
        type: "line",
        paint: {
          "line-color": "red",
          "line-opacity": 0.5,
          "line-width": 10,
        },
        filter: ["==", "$type", "LineString"],
      });
      // TODO This doesn't show up at low zooms and is hard to see generally. Switch to markers?
      this.map.addLayer({
        id: "hover-points",
        source: "hover",
        type: "circle",
        paint: {
          "circle-radius": {
            base: 1.5,
            stops: [
              [12, 2],
              [22, 180],
            ],
          },
          "circle-color": "red",
          "circle-opacity": 0.5,
        },
        filter: ["==", "$type", "Point"],
      });

      // And another for the object matching the current form
      this.map.addSource("editing", {
        type: "geojson",
        data: emptyGeojson(),
      });
      this.map.addLayer({
        id: "editing-polygons",
        source: "editing",
        type: "line",
        paint: {
          "line-color": "red",
          "line-width": 10,
        },
        filter: ["==", "$type", "Polygon"],
      });
      this.map.addLayer({
        id: "editing-lines",
        source: "editing",
        type: "line",
        paint: {
          "line-color": "red",
          "line-width": 10,
        },
        filter: ["==", "$type", "LineString"],
      });
      this.map.addLayer({
        id: "editing-points",
        source: "editing",
        type: "circle",
        paint: {
          "circle-radius": {
            base: 1.5,
            stops: [
              [12, 2],
              [22, 180],
            ],
          },
          "circle-color": "red",
        },
        filter: ["==", "$type", "Point"],
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
          this.openForm(e.features[0]);
        }
      });

      this.routeSnapper = await setupRouteSnapper(this);
    });

    document.getElementById("basemaps").onchange = (e) => {
      this.map.setStyle(
        `https://api.maptiler.com/maps/${e.target.value}/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL`
      );
    };
  }

  openForm(feature) {
    var formContents = makeCommonFormFields(feature.properties);
    formContents += `
      <button type="button" id="save">Save</button>
      <button type="button" id="cancel">Cancel</button>
      <button type="button" id="delete">Delete</button>
     `;
    document.getElementById("panel").innerHTML = formContents;
    this.map.resize();

    document.getElementById("save").onclick = () => {
      for (const key of [
        "intervention_type",
        "intervention_name",
        "intervention_description",
      ]) {
        this.drawControls.setFeatureProperty(
          feature.id,
          key,
          document.getElementById(key).value
        );
      }

      document.getElementById("panel").innerHTML = "";
      this.map.getSource("editing").setData(emptyGeojson());
      this.map.resize();
      this.#updateSidebar();
      this.#saveToLocalStorage();
    };
    document.getElementById("cancel").onclick = () => {
      document.getElementById("panel").innerHTML = "";
      this.map.getSource("editing").setData(emptyGeojson());
      this.map.resize();
    };
    document.getElementById("delete").onclick = () => {
      this.drawControls.delete(feature.id);
      document.getElementById("panel").innerHTML = "";
      this.map.getSource("editing").setData(emptyGeojson());
      this.map.resize();
      this.#updateSidebar();
      this.#saveToLocalStorage();
    };

    // Highlight the feature opened
    this.map.getSource("editing").setData({
      type: "FeatureCollection",
      features: [feature],
    });
  }

  #updateSidebar() {
    const div = document.getElementById("intervention_list");
    div.innerHTML = "";

    const header = document.createElement("p");
    header.innerText = `${
      this.drawControls.getAll().features.length
    } interventions`;
    div.appendChild(header);

    var list = document.createElement("ol");

    for (const feature of this.drawControls.getAll().features) {
      var li = document.createElement("li");
      const props = feature.properties;
      li.innerHTML = sidebarEntry(props);
      li.onmouseover = () => {
        this.map.getSource("hover").setData({
          type: "FeatureCollection",
          features: [feature],
        });
      };
      li.onmouseout = () => {
        this.map.getSource("hover").setData(emptyGeojson());
      };
      li.onclick = () => {
        // TODO If another form is open, we'll lose changes
        this.openForm(feature);
        this.map.fitBounds(geojsonExtent(feature), {
          padding: 20,
          animate: true,
          duration: 500,
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

function sidebarEntry(props) {
  // TODO Icons
  var result = `${props.intervention_name || "Untitled"}`;
  return result;
}

function makeCommonFormFields(props) {
  return `
           ${dropdown(props, "intervention_type", "Intervention type:", [
             "area",
             "route",
             "crossing",
             "other",
           ])}

          <div class="form-row">
            <label for="intervention_name">Intervention name:</label>
            <input type="text" id="intervention_name" value="${
              props.intervention_name || ""
            }">
          </div>

          <div class="form-row">
            <label for="intervention_description">Intervention description:</label>
	    <textarea id="intervention_description" rows="3" cols="100">${
        props.intervention_description || ""
      }</textarea>
          </div>`;
}

async function setupRouteSnapper(app) {
  // TODO Slight hack. These files are stored in an S3 bucket, which only has an HTTP interface. When deployed to Github pages over HTTPS, we can't mix HTTP and HTTPS content, so use the Cloudfront HTTPS interface. That'll need CDN invalidations when we update these files. But when serving locally for development, HTTPS is also fine to use.
  const url = `https://play.abstreet.org/route-snappers/${app.authority}.bin`;
  console.log(`Grabbing ${url}`);
  const resp = await fetch(url);
  const mapBytes = await resp.arrayBuffer();
  window.routeSnapper = new RouteSnapper(app, new Uint8Array(mapBytes));
}
