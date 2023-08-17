import type { Point } from "geojson";
import type { Map, MapMouseEvent } from "maplibre-gl";
import { isAToolInUse } from "../../../stores";
import { pointFeature, type FeatureWithProps } from "../../maplibre/utils";
import type { EventHandler } from "../event_handler";

// Note this uses the geojson FeatureWithProps, not our specialization in types.ts
export class PointTool {
  map: Map;
  active: boolean;
  eventListenersSuccess: ((f: FeatureWithProps<Point>) => void)[];
  eventListenersFailure: (() => void)[];
  cursor: FeatureWithProps<Point> | null;

  onMouseMove = (e: MapMouseEvent) => {
    if (this.active) {
      this.cursor = pointFeature(e.lngLat.toArray());
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
      e.preventDefault();
      this.cancel();
    }
  };

  setHandlers = (eventHandler: EventHandler) => {
    eventHandler.mapHandlers.mousemove = this.onMouseMove;
    eventHandler.mapHandlers.click = this.onClick;
    eventHandler.documentHandlers.keydown = this.onKeyDown;
  };

  constructor(map: Map) {
    this.map = map;
    this.active = false;
    this.eventListenersSuccess = [];
    this.eventListenersFailure = [];
    this.cursor = null;
  }

  // This stops the tool and fires a failure event
  cancel() {
    for (let cb of this.eventListenersFailure) {
      cb();
    }
    this.stop();
  }

  addEventListenerSuccess(callback: (f: FeatureWithProps<Point>) => void) {
    this.eventListenersSuccess.push(callback);
  }
  addEventListenerFailure(callback: () => void) {
    this.eventListenersFailure.push(callback);
  }

  // Note there's no way to "edit an existing point." Just call this for a new
  // or existing point; the state just depends on the cursor anyway.
  start() {
    this.map.getCanvas().style.cursor = "crosshair";
    this.setActivity(true);
    // TODO Figure out where the cursor is and immediately draw? To be useful,
    // the user has to move their mouse anyway; it doesn't matter much
  }

  stop() {
    this.map.getCanvas().style.cursor = "inherit";
    this.cursor = null;
    this.setActivity(false);
  }

  setActivity(isActive: boolean) {
    this.active = isActive;
    isAToolInUse.set(isActive);
  }
}
