import nearestPointOnLine from "@turf/nearest-point-on-line";
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

    // This doesn't repeat the first point at the end; it's not closed
    this.points = [];
    this.cursor = null;
    this.hoverPolyon = false;
    this.hoverPoint = null;

    // Set up interactions
    map.on("mousemove", (e) => {
      if (this.active) {
        this.cursor = null;
        this.hoverPolyon = false;
        this.hoverPoint = null;

        // Order of the layers matters!
        for (let f of map.queryRenderedFeatures(e.point, {
          layers: ["edit-polygon-fill", "edit-polygon-vertices"],
        })) {
          if (f.geometry.type == "Polygon") {
            this.hoverPolyon = true;
            break;
          } else if (f.geometry.type == "Point") {
            // Ignore the cursor
            if (f.properties.hasOwnProperty("idx")) {
              this.hoverPoint = f.properties.idx;
              break;
            }
          }
        }
        if (!this.hoverPolyon && this.hoverPoint == null) {
          this.cursor = pointFeature(e.lngLat.toArray());
        }

        this.#redraw();
      }
    });

    map.on("click", (e) => {
      if (this.active && this.cursor) {
        // Insert the new point in the "middle" of the closest line segment
        let candidates = [];
        pointsToLineSegments(this.points).forEach((line, idx) => {
          candidates.push([
            idx + 1,
            nearestPointOnLine(line, this.cursor).properties.dist,
          ]);
        });
        candidates.sort((a, b) => a[1] - b[1]);

        if (candidates.length > 0) {
          this.points.splice(
            candidates[0][0],
            0,
            this.cursor.geometry.coordinates
          );
        } else {
          this.points.push(this.cursor.geometry.coordinates);
        }
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

    // Order matters here!
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
    overwriteLayer(map, {
      id: "edit-polygon-vertices",
      source: this.source,
      filter: isPoint,
      ...drawCircle(colors.hovering, circleRadius, [
        "case",
        ["boolean", ["get", "hover"], "false"],
        1.0,
        0.5,
      ]),
    });
  }

  // Called with a Feature
  addEventListener(callback) {
    this.eventListeners.push(callback);
  }

  tearDown() {
    // TODO Clean up event listeners
    this.map.removeLayer("edit-polygon-vertices");
    this.map.removeLayer("edit-polygon-fill");
    this.map.removeLayer("edit-polygon-lines");
    this.map.removeSource(this.source);
  }

  startNew() {
    this.active = true;
  }

  editExisting(feature) {
    this.active = true;
    this.points = feature.geometry.coordinates[0];
    this.points.pop();
    this.#redraw();
  }

  stop() {
    this.points = [];
    this.cursor = null;
    this.active = false;
    this.hoverPolyon = false;
    this.hoverPoint = null;
    this.#redraw();
  }

  #redraw() {
    let gj = emptyGeojson();

    this.points.forEach((pt, idx) => {
      let f = pointFeature(pt);
      f.properties.hover = this.hoverPoint == idx;
      f.properties.idx = idx;
      gj.features.push(f);
    });
    if (this.cursor) {
      gj.features.push(this.cursor);
    }

    gj.features = gj.features.concat(pointsToLineSegments(this.points));

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
    properties: {},
    geometry: {
      type: "Point",
      coordinates: pt,
    },
  };
}

// Includes the line connecting the last to the first point
function pointsToLineSegments(points) {
  let lines = [];
  for (let i = 0; i < points.length - 1; i++) {
    lines.push({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [points[i], points[i + 1]],
      },
    });
  }
  if (points.length >= 3) {
    lines.push({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [points[points.length - 1], points[0]],
      },
    });
  }
  return lines;
}
