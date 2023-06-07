import type { Point, Position } from "geojson";
import type { Map, GeoJSONSource, MapMouseEvent } from "maplibre-gl";
import {
  emptyGeojson,
  overwriteSource,
  overwriteCircleLayer,
  type FeatureWithProps,
} from "../../../maplibre_helpers";
import { colors, circleRadius } from "../../../colors";

const source = "edit-point-mode";

// Note this uses the geojson FeatureWithProps, not our specialization in types.ts
export class PointTool {
  map: Map;
  active: boolean;
  eventListenersSuccess: ((f: FeatureWithProps<Point>) => void)[];
  eventListenersFailure: (() => void)[];
  cursor: FeatureWithProps<Point> | null;

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

  tearDown() {
    this.map.removeLayer("edit-point-mode");
    this.map.removeSource(source);
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
    this.redraw();
  }

  onMouseMove = (e: MapMouseEvent) => {
    if (this.active) {
      this.cursor = pointFeature(e.lngLat.toArray());
      this.redraw();
    }
  }

  onClick = () => {
    // TODO is it possible cursor is null?
    if (this.active && this.cursor) {
      for (let cb of this.eventListenersSuccess) {
        cb(this.cursor);
      }
      this.stop();
    }
  };

  constructor(map: Map) {
    this.map = map;
    this.active = false;
    this.eventListenersSuccess = [];
    this.eventListenersFailure = [];
    this.cursor = null;

    // Render
    overwriteSource(map, source, emptyGeojson());
    overwriteCircleLayer(map, {
      id: "edit-point-mode",
      source,
      color: colors.hovering,
      radius: circleRadius,
    });
  }

  private redraw() {
    let gj = emptyGeojson();
    if (this.cursor) {
      gj.features.push(this.cursor);
    }
    (this.map.getSource(source) as GeoJSONSource).setData(gj);
  }
}

function pointFeature(pt: Position): FeatureWithProps<Point> {
  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Point",
      coordinates: pt,
    },
  };
}
