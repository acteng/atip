import type { Feature, Point } from "geojson";
import { setPrecision } from "lib/draw/stores";
import type { Map, MapMouseEvent } from "maplibre-gl";

export class PointTool {
  map: Map;
  active: boolean;
  eventListenersSuccess: ((f: Feature<Point>) => void)[];
  eventListenersFailure: (() => void)[];
  cursor: Feature<Point> | null;

  onMouseMove = (e: MapMouseEvent) => {
    if (this.active) {
      this.cursor = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: setPrecision(e.lngLat.toArray()),
        },
      };
    }
  };

  onClick = () => {
    // TODO is it possible cursor is null?
    if (this.active && this.cursor) {
      for (let cb of this.eventListenersSuccess) {
        cb(this.cursor);
      }
      this.stop();
    }
  };

  onKeyDown = (e: KeyboardEvent) => {
    if (!this.active) {
      return;
    }
    if (e.key == "Escape") {
      e.stopPropagation();
      this.cancel();
    }
  };

  constructor(map: Map) {
    this.map = map;
    this.active = false;
    this.eventListenersSuccess = [];
    this.eventListenersFailure = [];
    this.cursor = null;

    this.map.on("mousemove", this.onMouseMove);
    this.map.on("click", this.onClick);
    document.addEventListener("keydown", this.onKeyDown);
  }

  tearDown() {
    this.map.off("mousemove", this.onMouseMove);
    this.map.off("click", this.onClick);
    document.removeEventListener("keydown", this.onKeyDown);
  }

  // This stops the tool and fires a failure event
  cancel() {
    for (let cb of this.eventListenersFailure) {
      cb();
    }
    this.stop();
  }

  addEventListenerSuccess(callback: (f: Feature<Point>) => void) {
    this.eventListenersSuccess.push(callback);
  }
  addEventListenerFailure(callback: () => void) {
    this.eventListenersFailure.push(callback);
  }
  clearEventListeners() {
    this.eventListenersSuccess = [];
    this.eventListenersFailure = [];
  }

  // Note there's no way to "edit an existing point." Just call this for a new
  // or existing point; the state just depends on the cursor anyway.
  start() {
    this.map.getCanvas().style.cursor = "crosshair";
    this.active = true;
    // TODO Figure out where the cursor is and immediately draw? To be useful,
    // the user has to move their mouse anyway; it doesn't matter much
  }

  stop() {
    this.map.getCanvas().style.cursor = "inherit";
    this.cursor = null;
    this.active = false;
  }
}
