"use strict";

import { radio } from "./forms.js";
import { RouteSnapper, fetchWithProgress } from "./route-snapper/lib.js";
import { mapStyle, drawControlsStyle } from "./style.js";

export class App {
  constructor() {
    const params = new URLSearchParams(window.location.search);
    this.authority = params.get("authority");
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
      try {
        this.#loadFromText(e.target.result);
        this.saveToLocalStorage();
      } catch (err) {
        console.log(`Couldn't load from a file: ${err}`);
        window.alert(`Couldn't load scheme from a file: ${err}`);
      }
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
      this.map.addControl(new maplibregl.ScaleControl());
      this.map.addControl(new maplibregl.NavigationControl(), "bottom-right");

      // Initially load from local storage
      const loadLocal = window.localStorage.getItem(this.currentFilename);
      if (loadLocal) {
        this.#loadFromText(loadLocal);
      }

      this.map.on("draw.selectionchange", (e) => {
        if (e.features.length === 1) {
          const feature = e.features[0];

          // Bit of a hack, but force the type of "other" if it hasn't been set. This should really be in response to an object being created, but mapbox-gl-draw's events are weird
          if (feature.properties.intervention_type === undefined) {
            var type = "other";
            if (feature.geometry.type == "Polygon") {
              type = "area";
            }

            this.drawControls.setFeatureProperty(
              feature.id,
              "intervention_type",
              type
            );
            feature.properties.intervention_type = type;
          }

          this.saveToLocalStorage();
          this.updateSidebar();
          this.openForm(feature);
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

    document.addEventListener("keydown", (e) => {
      if (e.key == "Delete" && this.currentlyEditing != null) {
        this.drawControls.delete(this.currentlyEditing);
        this.closeForm();
        this.updateSidebar();
        this.saveToLocalStorage();
      }
    });
  }

  #hoveringOnMapFeature(newHoverEntry) {
    if (newHoverEntry == this.previousHoverEntry) {
      return;
    }
    if (
      this.previousHoverEntry &&
      this.previousHoverEntry != this.currentlyEditing
    ) {
      document
        .getElementById(`accordian-btn-${this.previousHoverEntry}`)
        .classList.remove("active-accordian");
    }

    if (newHoverEntry) {
      document
        .getElementById(`accordian-btn-${newHoverEntry}`)
        .classList.add("active-accordian");
    }
    this.previousHoverEntry = newHoverEntry;
  }

  openForm(feature) {
    const id = feature.id;
    this.currentlyEditing = id;
    document
      .getElementById(`accordian-btn-${id}`)
      .classList.add("active-accordian");
    const contents = document.getElementById(`accordian-contents-${id}`);
    contents.style.maxHeight = contents.scrollHeight + "px";

    // Highlight the feature opened
    this.map.getSource("editing").setData({
      type: "FeatureCollection",
      features: [feature],
    });
    // And undo the hover
    this.map.getSource("hover").setData(emptyGeojson());
  }

  closeForm() {
    const id = this.currentlyEditing;
    if (id) {
      document
        .getElementById(`accordian-btn-${id}`)
        .classList.remove("active-accordian");
      document.getElementById(`accordian-contents-${id}`).style.maxHeight =
        null;
    }

    this.currentlyEditing = null;

    this.map.getSource("editing").setData(emptyGeojson());
  }

  updateSidebar() {
    const container = document.getElementById("intervention_list");
    container.innerHTML = "";

    const header = document.createElement("div");
    const label = document.createElement("span");
    label.innerText = `${
      this.drawControls.getAll().features.length
    } interventions`;
    header.appendChild(label);
    const clearBtn = document.createElement("button");
    clearBtn.className = "underlined-button";
    clearBtn.innerText = "Clear";
    clearBtn.onclick = () => {
      if (
        confirm(
          "Do you want to clear the current scheme? (You should save it first!)"
        )
      ) {
        this.drawControls.set(emptyGeojson());
        this.saveToLocalStorage();
        this.updateSidebar();
        document.getElementById("scheme_name").value = "";
        this.map.getSource("hover").setData(emptyGeojson());
        this.map.getSource("editing").setData(emptyGeojson());
      }
    };
    clearBtn.className = "align-right";
    header.appendChild(clearBtn);
    container.appendChild(header);
    container.appendChild(document.createElement("br"));

    var i = 1;
    for (const feature of this.drawControls.getAll().features) {
      const props = feature.properties;

      // Make the accordian button
      const btn = document.createElement("button");
      btn.id = `accordian-btn-${feature.id}`;
      btn.className = "accordian";
      // TODO Icons?
      btn.innerText = `${i}) ${interventionName(feature)}`;

      btn.onmouseover = () => {
        this.map.getSource("hover").setData({
          type: "FeatureCollection",
          features: [feature],
        });
      };
      btn.onmouseout = () => {
        this.map.getSource("hover").setData(emptyGeojson());
      };
      btn.onclick = () => {
        if (this.currentlyEditing == feature.id) {
          this.closeForm();
        } else {
          // Close something else first
          this.closeForm();

          this.openForm(feature);
          // Points are weird
          if (feature.geometry.type == "Point") {
            this.map.flyTo({ center: feature.geometry.coordinates });
          } else {
            this.map.fitBounds(geojsonExtent(feature), {
              padding: 200,
              animate: true,
              duration: 500,
            });
          }
          // Act like we've selected the object. (This is irrelevant for points.)
          if (feature.geometry.type != "Point") {
            this.drawControls.changeMode("direct_select", {
              featureId: feature.id,
            });
          }
        }
      };
      container.appendChild(btn);

      // Make the accordian contents
      const contents = document.createElement("div");
      contents.id = `accordian-contents-${feature.id}`;
      contents.className = "accordian-contents";
      contents.innerHTML = makeInterventionForm(feature);
      container.appendChild(contents);

      const id = feature.id;
      for (const key of ["intervention_name", "intervention_description"]) {
        const elem = document.getElementById(`${key}-${id}`);
        // Autosave
        // TODO Can we do it on the parent?
        elem.oninput = () => {
          this.drawControls.setFeatureProperty(id, key, elem.value);
          this.saveToLocalStorage();

          if (key == "intervention_name") {
            // setFeatureProperty doesn't modify this copy of the feature, so fake things
            feature.properties.intervention_name = elem.value;
            btn.innerText = `${i}) ${interventionName(feature)}`;
          }
        };
      }

      const typeRadioButtons = document.querySelectorAll(
        `input[name="intervention_type-${id}"]`
      );
      for (const btn of typeRadioButtons) {
        btn.onchange = () => {
          this.drawControls.setFeatureProperty(id, "intervention_type", btn.id);
          this.saveToLocalStorage();
        };
      }

      document.getElementById(`save-${id}`).onclick = () => {
        this.closeForm();
        this.drawControls.changeMode("simple_select");
      };
      document.getElementById(`delete-${id}`).onclick = () => {
        this.drawControls.delete(id);
        this.closeForm();
        this.updateSidebar();
        this.saveToLocalStorage();
      };

      i += 1;
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

function makeInterventionForm(feature) {
  const props = feature.properties;
  const id = feature.id;
  return `<label for="intervention_name-${id}">Name</label><br/>
          <input type="text" id="intervention_name-${id}" value="${
    props.intervention_name || ""
  }">
          ${radio(props, "intervention_type-" + id, "intervention_type", [
            "area",
            "route",
            "crossing",
            "other",
          ])}
          <label for="intervention_description-${id}">Description</label><br/>
	  <textarea id="intervention_description-${id}" rows="3" cols="40">${
    props.intervention_description || ""
  }</textarea><br/>
  <div>
          <button type="button" id="delete-${id}">Delete</button>
          <button type="button" id="save-${id}" class="align-right">Save</button>
  </div>`;
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

function interventionName(feature) {
  if (feature.properties.intervention_name) {
    return feature.properties.intervention_name;
  }
  var noun = feature.properties.intervention_type;
  if (noun == "other") {
    if (feature.geometry.type == "Point") {
      noun = "point";
    } else if (feature.geometry.type == "LineString") {
      noun = "line";
    } else {
      noun = "polygon";
    }
  }
  return `Untitled ${noun}`;
}
