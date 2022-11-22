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
    this.currentlyEditing = null;

    this.#setupMap(setCamera);

    document.getElementById("export").onclick = () => {
      const geojson = this.toGeojson();
      var filename = this.authority;
      // Include the scheme name if it's set
      if (geojson["scheme_name"]) {
        filename += "_" + geojson["scheme_name"];
      }
      filename += ".geojson";
      downloadGeneratedFile(filename, JSON.stringify(geojson));
    };
    document.getElementById("load_geojson").onchange = (e) => {
      this.#loadFromGeojson(e);
    };
    document.getElementById("start-over").onclick = () => {
      if (
        confirm(
          "Do you want to clear the current scheme? (You should save it first!)"
        )
      ) {
        this.drawControls.set(emptyGeojson());
        this.updateSidebar();
        document.getElementById("scheme_name").value = "";
        this.map.getSource("hover").setData(emptyGeojson());
        this.map.getSource("editing").setData(emptyGeojson());
      }
    };
  }

  toGeojson() {
    var geojson = this.drawControls.getAll();
    // This is a FeatureCollection. We can just set more keys on this top-level
    // object, and they count as foreign members per the GeoJSON spec
    geojson["scheme_name"] = document.getElementById("scheme_name").value || "";
    geojson["authority"] = this.authority;
    return geojson;
  }

  #loadFromGeojson(e) {
    const reader = new FileReader();
    // TODO No await? :(
    // TODO Should we prompt before deleting the current scheme?
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
    window.localStorage.setItem(
      this.currentFilename,
      JSON.stringify(this.toGeojson())
    );
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

      // When the user modifies an existing mapbox-gl-draw object, keep the "editing" layer in sync.
      // TODO This doesn't happen in the middle of the drag. Consider
      // responding to draw.render and looking up the currentlyEditing
      // feature manually.
      this.map.on("draw.update", (e) => {
        this.map.getSource("editing").setData({
          type: "FeatureCollection",
          features: [e.features[0]],
        });
      });

      // Highlight something in the sidebar when we hover on a feature in the map
      this.previousHoverEntry = null;
      this.map.on("mousemove", (e) => {
        var newHoverEntry = null;
        if (this.currentlyEditing === null) {
          // TODO This whines about a layer missing, and I can't suppress with try/catch
          const ids = this.drawControls.getFeatureIdsAt(e.point);
          if (ids.length > 0) {
            newHoverEntry = ids[0];
          }
        }
        this.#hoveringOnMapFeature(newHoverEntry);
      });
      this.map.on("mouseout", () => {
        this.#hoveringOnMapFeature(null);
      });

      this.routeSnapper = await setupRouteSnapper(this);
    });

    document.getElementById("basemaps").onchange = (e) => {
      this.map.setStyle(
        `https://api.maptiler.com/maps/${e.target.value}/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL`
      );
    };
  }

  #hoveringOnMapFeature(newHoverEntry) {
    if (newHoverEntry == this.previousHoverEntry) {
      return;
    }
    this.previousHoverEntry = newHoverEntry;
    for (const feature of this.drawControls.getAll().features) {
      const entry = document.getElementById(`list-entry-${feature.id}`);
      if (entry === null) {
        // The form might be open instead of a normal list entry
        continue;
      }
      if (feature.id == this.previousHoverEntry) {
        entry.classList.add("list-entry-hover-on-map");
      } else {
        entry.classList.remove("list-entry-hover-on-map");
      }
    }
  }

  openForm(feature) {
    this.currentlyEditing = feature.id;
    this.updateSidebar();

    // Highlight the feature opened
    this.map.getSource("editing").setData({
      type: "FeatureCollection",
      features: [feature],
    });
    // And undo the hover
    this.map.getSource("hover").setData(emptyGeojson());
  }

  closeForm() {
    this.currentlyEditing = null;
    this.updateSidebar();

    this.map.getSource("editing").setData(emptyGeojson());
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
    // Do this immediately, so we can modify list children below and immediately then getElementById
    div.appendChild(list);

    for (const feature of this.drawControls.getAll().features) {
      const props = feature.properties;
      var li = document.createElement("li");

      if (feature.id == this.currentlyEditing) {
        li.innerHTML = makeInterventionForm(props);
        list.appendChild(li);

        for (const key of [
          "intervention_type",
          "intervention_name",
          "intervention_description",
        ]) {
          const elem = document.getElementById(key);
          // Autosave
          // TODO Can we do it on the parent?
          elem.oninput = () => {
            this.drawControls.setFeatureProperty(feature.id, key, elem.value);
            this.saveToLocalStorage();
          };
        }

        document.getElementById("save").onclick = () => {
          this.closeForm();
          this.drawControls.changeMode("simple_select");
        };
        document.getElementById("delete").onclick = () => {
          this.drawControls.delete(feature.id);
          this.closeForm();
          this.saveToLocalStorage();
        };
      } else {
        li.id = `list-entry-${feature.id}`;
        li.className = "list-entry";
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
    }
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

function sidebarEntry(props) {
  // TODO Icons
  var result = `${props.intervention_name || "Untitled"}`;
  return result;
}

function makeInterventionForm(props) {
  return `<div class="intervention-form"><label for="intervention_name">Name:</label>
          <input type="text" id="intervention_name" value="${
            props.intervention_name || ""
          }">
          ${dropdown(props, "intervention_type", "Type:", [
            "area",
            "route",
            "crossing",
            "other",
          ])}
          <label for="intervention_description">Description:</label><br/>
	  <textarea id="intervention_description" rows="3" cols="40">${
      props.intervention_description || ""
    }</textarea>
          <button type="button" id="save">Save</button>
          <button type="button" id="delete">Delete</button></div>`;
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
