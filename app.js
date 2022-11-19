"use strict";

import { dropdown } from "./forms.js";
import { RouteSnapper, fetchWithProgress } from "./route-snapper/lib.js";
import { mapStyle, drawControlsStyle } from "./style.js";

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
      styles: drawControlsStyle,
    });

    this.#setupMap(setCamera);

    setupCredits();
    setupInstructions();
  }

  toGeojson() {
    var geojson = this.drawControls.getAll();
    // This is a FeatureCollection. We can just set more keys on this top-level
    // object, and they count as foreign members per the GeoJSON spec
    geojson["scheme_name"] = document.getElementById("scheme_name").value || "";
    return JSON.stringify(geojson);
  }

  downloadGeojsonFile() {
    downloadGeneratedFile(this.currentFilename, this.toGeojson());
  }

  loadFromGeojson(e) {
    const reader = new FileReader();
    // TODO No await? :(
    reader.onload = (e) => {
      this.#loadFromText(e.target.result);
      this.saveToLocalStorage();
    };
    reader.readAsText(e.target.files[0]);
  }

  #loadFromText(text) {
    const geojson = JSON.parse(text);
    this.drawControls.set(geojson);
    this.updateSidebar();

    const scheme_name = document.getElementById("scheme_name");
    scheme_name.value = geojson["scheme_name"] || "";
    scheme_name.oninput = () => {
      this.saveToLocalStorage();
    };
  }

  saveToLocalStorage() {
    window.localStorage.setItem(this.currentFilename, this.toGeojson());
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

      // Use a layer that only ever has zero or one features for hovering. I think https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ should be an easier way to do this, but I can't make it work with the draw plugin.
      this.map.addSource("hover", {
        type: "geojson",
        data: emptyGeojson(),
      });

      // And another for the object matching the current form
      this.map.addSource("editing", {
        type: "geojson",
        data: emptyGeojson(),
      });

      for (const style of mapStyle) {
        this.map.addLayer(style);
      }

      this.map.addControl(this.drawControls);

      // Initially load from local storage
      const loadLocal = window.localStorage.getItem(this.currentFilename);
      if (loadLocal) {
        this.#loadFromText(loadLocal);
      }

      this.map.on("draw.selectionchange", (e) => {
        this.updateSidebar();
        this.saveToLocalStorage();

        if (e.features.length === 1) {
          this.openForm(e.features[0]);
        } else {
          this.closeForm();
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
    document.getElementById("panel").innerHTML = makeInterventionForm(
      feature.properties
    );
    // Highlight the feature opened
    this.map.getSource("editing").setData({
      type: "FeatureCollection",
      features: [feature],
    });
    this.map.resize();

    // Autosave
    for (const key of [
      "intervention_type",
      "intervention_name",
      "intervention_description",
    ]) {
      document.getElementById(key).oninput = () => {
        this.drawControls.setFeatureProperty(
          feature.id,
          key,
          document.getElementById(key).value
        );
        this.saveToLocalStorage();
        this.updateSidebar();
      };
    }

    document.getElementById("save").onclick = () => {
      this.closeForm();
    };
    document.getElementById("delete").onclick = () => {
      this.drawControls.delete(feature.id);
      this.closeForm();
      this.updateSidebar();
      this.saveToLocalStorage();
    };
  }

  closeForm() {
    document.getElementById("panel").innerHTML = "";
    this.map.getSource("editing").setData(emptyGeojson());
    this.map.resize();
  }

  updateSidebar() {
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
        this.openForm(feature);
        this.map.fitBounds(geojsonExtent(feature), {
          padding: 20,
          animate: true,
          duration: 500,
        });
        // Act like we've selected the object
        this.drawControls.changeMode("direct_select", {
          featureId: feature.id,
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
    <li><a href="https://www.linkedin.com/in/madison-wang-841977bb/" target="_blank">Madison Wang</a>: UX design</li>
    <li><a href="https://github.com/BudgieInWA" target="_blank">Ben Ritter</a>: CSS consulting</li>
</ul>
<p>ATIP relies heavily on <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors, <a href="https://maplibre.org/" target="_blank">MapLibre</a>, <a href="https://georust.org/" target="_blank">GeoRust</a>, and other open source projects.</p>`;
  credits.classList.add("modal-popup");
  credits.classList.add("centered-fullscreen");
  credits.classList.add("hide-modal");
}

function setupInstructions() {
  const instructions = document.getElementById("instructions");
  instructions.innerHTML = `<button type="button" class="link-button" style="float: right;" onclick="document.getElementById('instructions').classList.toggle('hide-modal');">X</button>
  <p>For each intervention:</p>
  <ol>
    <li>Click one of the draw icons to the top right of the map (the icons allow you to draw points, lines, polygons or routes)</li>
    <li>Draw the intervention on the map, clicking the original point or 'Finish snapping' for the Polygon and Route tools respectively</li>
    <li>Fill in the details that appear (Intervention type, name, description)</li>
    <li>Click the "Save" button or "Delete" button to save or remove the intervention</li>
  </ol>
  <p>Repeat the steps above for each substantial infrastructure intervention in the scheme</p>
  <p>Click the intervention name or to re-open the edit panel</p>
  <p>Click the "Export to GeoJSON" button to download the interventions as a GeoJSON file</p>`;
  instructions.classList.add("modal-popup");
  instructions.classList.add("centered-fullscreen");
  instructions.classList.add("hide-modal");
}

function sidebarEntry(props) {
  // TODO Icons
  var result = `${props.intervention_name || "Untitled"}`;
  return result;
}

function makeInterventionForm(props) {
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
          </div>

      <button type="button" id="save">Save</button>
      <button type="button" id="delete">Delete</button>`;
}

async function setupRouteSnapper(app) {
  // TODO Slight hack. These files are stored in an S3 bucket, which only has an HTTP interface. When deployed to Github pages over HTTPS, we can't mix HTTP and HTTPS content, so use the Cloudfront HTTPS interface. That'll need CDN invalidations when we update these files. But when serving locally for development, HTTPS is also fine to use.
  const url = `https://play.abstreet.org/route-snappers/${app.authority}.bin`;
  console.log(`Grabbing ${url}`);
  try {
    const mapBytes = await fetchWithProgress(url, "snap-progress");
    window.routeSnapper = new RouteSnapper(app, mapBytes);
  } catch (err) {
    console.log(`Route snapper broke: ${err}`);
    document.getElementById("snap-tool").innerHTML = "Failed to load";
  }
}
