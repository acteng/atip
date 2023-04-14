import { emptyGeojson } from "../../stores.js";
import {
  overwriteSource,
  overwriteLayer,
  drawCircle,
} from "../../maplibre_helpers.js";
import { colors, circleRadius } from "../../colors.js";

export class PointTool {
  constructor(map) {
    this.map = map;
    this.active = false;
    // TODO Can we use
    // https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
    // not on a DOM element?
    this.eventListeners = [];

    // An optional Feature<Point>
    this.cursor = null;

    // Set up interactions
    map.on("mousemove", (e) => {
      if (this.active) {
        this.cursor = pointFeature(e.lngLat.toArray());
        this.#redraw();
      }
    });

    map.on("click", () => {
      // TODO is it possible cursor is null?
      if (this.active && this.cursor) {
        for (let cb of this.eventListeners) {
          cb(this.cursor);
        }
        this.stop();
      }
    });

    // Render
    this.source = "edit-point-mode";
    overwriteSource(map, this.source, {
      type: "geojson",
      data: emptyGeojson(),
    });
    overwriteLayer(map, {
      id: "edit-point-mode",
      source: this.source,
      ...drawCircle(colors.hovering, circleRadius, 1.0),
    });
  }

  // Called with a Feature
  addEventListener(callback) {
    this.eventListeners.push(callback);
  }

  tearDown() {
    // TODO Clean up event listeners
    this.map.removeLayer("edit-point-mode");
    this.map.removeSource(this.source);
  }

  // Note there's no way to "edit an existing point." Just call this for a new
  // or existing point; the state just depends on the cursor anyway.
  start() {
    this.active = true;
    // TODO Figure out where the cursor is and immediately draw? To be useful,
    // the user has to move their mouse anyway; it doesn't matter much
  }

  stop() {
    this.cursor = null;
    this.active = false;
    this.#redraw();
  }

  #redraw() {
    let gj = emptyGeojson();
    if (this.cursor) {
      gj.features.push(this.cursor);
    }
    this.map.getSource(this.source).setData(gj);
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
