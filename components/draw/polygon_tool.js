import { emptyGeojson } from "../../stores.js";
import {
  overwriteSource,
  overwriteLayer,
  drawCircle,
  drawPolygon,
  drawLine,
  isPoint,
  isPolygon,
  isLine,
} from "../../maplibre_helpers.js";
import { colors, circleRadius } from "../../colors.js";

export class PolygonTool {
  constructor(map) {
    this.map = map;
    this.active = false;
    // TODO Can we use
    // https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
    // not on a DOM element?
    this.eventListeners = [];

    this.points = [];
    this.cursor = null;
    this.hoverPolyon = false;

    // Set up interactions
    map.on("mousemove", (e) => {
      if (this.active) {
        // TODO Maybe doing this ourselves will be more clear; do skip the cursor, for example
        let results = map.queryRenderedFeatures(e.point, {
          layers: ["edit-polygon-fill"],
        });
        if (results.length == 1) {
          console.log(`hovering`);
          this.hoverPolyon = true;
          this.cursor = null;
        } else {
          console.log(`not hovering. ${results.length}`);
          this.hoverPolyon = false;
          this.cursor = pointFeature(e.lngLat.toArray());
        }

        this.#redraw();
      }
    });

    map.on("click", (e) => {
      if (this.active && this.cursor) {
        this.points.push(this.cursor.geometry.coordinates);
        this.#redraw();
      }
    });

    document.addEventListener("keypress", (e) => {
      if (!this.active) {
        return;
      }
      if (e.key == "Enter") {
        e.preventDefault();
        let polygon = this.#polygonFeature();
        if (polygon) {
          for (let cb of this.eventListeners) {
            cb(polygon);
          }
        }
        this.stop();
      }
    });

    // Render
    this.source = "edit-polygon-mode";
    overwriteSource(map, this.source, {
      type: "geojson",
      data: emptyGeojson(),
    });
    overwriteLayer(map, {
      id: "edit-polygon-vertices",
      source: this.source,
      filter: isPoint,
      ...drawCircle(colors.hovering, circleRadius, 1.0),
    });
    overwriteLayer(map, {
      id: "edit-polygon-fill",
      source: this.source,
      filter: isPolygon,
      ...drawPolygon("red", [
        "case",
        ["boolean", ["get", "hover"], "false"],
        1.0,
        0.5,
      ]),
    });
    overwriteLayer(map, {
      id: "edit-polygon-lines",
      source: this.source,
      filter: isLine,
      // TODO Dashed
      ...drawLine("black", 8, 0.5),
    });
    // TODO Hover stuff
  }

  // Called with a Feature
  addEventListener(callback) {
    this.eventListeners.push(callback);
  }

  teardown() {
    // TODO Clean up source, layer, event listeners
  }

  startNew() {
    this.active = true;
  }

  editExisting(feature) {
    this.active = true;
    this.points = feature.geometry.coordinates[0];
    this.points.pop();
  }

  stop() {
    this.points = [];
    this.cursor = null;
    this.active = false;
    this.#redraw();
  }

  #redraw() {
    let gj = emptyGeojson();
    for (let pt of this.points) {
      gj.features.push(pointFeature(pt));
    }
    if (this.cursor) {
      gj.features.push(this.cursor);
    }
    // Lines between confirmed points
    for (let i = 0; i < this.points.length - 1; i++) {
      gj.features.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [this.points[i], this.points[i + 1]],
        },
      });
    }
    let polygon = this.#polygonFeature();
    if (polygon) {
      polygon.properties.hover = this.hoverPolyon;
      gj.features.push(polygon);
    }
    this.map.getSource(this.source).setData(gj);
  }

  // TODO Force the proper winding order that geojson requires
  #polygonFeature() {
    if (this.points.length < 3) {
      return null;
    }
    let f = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        // Deep clone here, or face the wrath of crazy bugs later!
        coordinates: [JSON.parse(JSON.stringify(this.points))],
      },
      properties: {},
    };
    f.geometry.coordinates[0].push(f.geometry.coordinates[0][0]);
    return f;
  }
}

function pointFeature(pt) {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: pt,
    },
  };
}
