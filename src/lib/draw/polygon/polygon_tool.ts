import nearestPointOnLine from "@turf/nearest-point-on-line";
import type { Feature, LineString, Point, Polygon, Position } from "geojson";
import {
  emptyGeojson,
  pointFeature,
  setPrecision,
  type FeatureWithProps,
} from "lib/maplibre";
import type { Map, MapLayerMouseEvent, MapMouseEvent } from "maplibre-gl";
import { polygonToolGj } from "./stores";

export class PolygonTool {
  map: Map;
  active: boolean;
  eventListenersSuccess: ((f: FeatureWithProps<Polygon>) => void)[];
  eventListenersUpdated: ((f: FeatureWithProps<Polygon>) => void)[];
  eventListenersFailure: (() => void)[];
  points: Position[];
  cursor: Feature<Point> | null;
  // The number is an index into points
  hover: "polygon" | number | null;
  dragFrom: Position | null;

  // TODO Inconsistent ordering with point tool
  constructor(map: Map) {
    this.map = map;
    this.active = false;
    this.eventListenersSuccess = [];
    this.eventListenersUpdated = [];
    this.eventListenersFailure = [];

    // This doesn't repeat the first point at the end; it's not closed
    this.points = [];
    this.cursor = null;
    // TODO This is lots of state. Consider
    // https://maplibre.org/maplibre-gl-js-docs/example/drag-a-point/ or port
    // widgetry's World
    this.hover = null;
    this.dragFrom = null;

    this.map.on("mousemove", this.onMouseMove);
    this.map.on("click", this.onClick);
    this.map.on("dblclick", this.onDoubleClick);
    this.map.on("mousedown", this.onMouseDown);
    this.map.on("mouseup", this.onMouseUp);
    document.addEventListener("keypress", this.onKeypress);
    document.addEventListener("keydown", this.onKeyDown);
  }

  tearDown() {
    this.map.off("mousemove", this.onMouseMove);
    this.map.off("click", this.onClick);
    this.map.off("dblclick", this.onDoubleClick);
    this.map.off("mousedown", this.onMouseDown);
    this.map.off("mouseup", this.onMouseUp);
    document.removeEventListener("keypress", this.onKeypress);
    document.removeEventListener("keydown", this.onKeyDown);
  }

  // Either a success or failure event will happen, depending on current state
  finish() {
    let polygon = this.polygonFeature();
    if (polygon) {
      // TODO RouteTool passes a copy to each callback for paranoia. Should we
      // do the same everywhere here?
      for (let cb of this.eventListenersSuccess) {
        cb(polygon);
      }
    } else {
      for (let cb of this.eventListenersFailure) {
        cb();
      }
    }
    this.stop();
  }

  // This stops the tool and fires a failure event
  cancel() {
    for (let cb of this.eventListenersFailure) {
      cb();
    }
    this.stop();
  }

  onMouseMove = (e: MapMouseEvent) => {
    if (this.active && !this.dragFrom) {
      this.recalculateHovering(e);
    } else if (this.active && this.dragFrom) {
      if (this.hover == "polygon") {
        // Move entire polygon
        let dx = this.dragFrom[0] - e.lngLat.lng;
        let dy = this.dragFrom[1] - e.lngLat.lat;
        for (let pt of this.points) {
          pt[0] -= dx;
          pt[1] -= dy;
        }
      } else {
        this.points[this.hover as number] = e.lngLat.toArray();
      }
      this.dragFrom = e.lngLat.toArray();
      this.redraw();
    }
  };

  onClick = (e: MapMouseEvent) => {
    if (this.active && this.cursor) {
      // Insert the new point in the "middle" of the closest line segment
      let candidates: [number, number][] = [];
      pointsToLineSegments(this.points).forEach((line, idx) => {
        candidates.push([
          idx + 1,
          nearestPointOnLine(line, this.cursor!).properties.dist!,
        ]);
      });
      candidates.sort((a, b) => a[1] - b[1]);

      if (candidates.length > 0) {
        let idx = candidates[0][0];
        this.points.splice(idx, 0, this.cursor.geometry.coordinates);
        this.hover = idx;
      } else {
        this.points.push(this.cursor.geometry.coordinates);
        this.hover = this.points.length - 1;
      }
      this.redraw();
      this.pointsUpdated();
    } else if (this.active && typeof this.hover === "number") {
      this.points.splice(this.hover, 1);
      this.hover = null;
      this.redraw();
      this.pointsUpdated();
      // TODO Doesn't seem to work; you still have to move the mouse to hover
      // on the polygon
      this.recalculateHovering(e);
    }
  };

  onDoubleClick = (e: MapMouseEvent) => {
    if (!this.active) {
      return;
    }
    // When we finish, we'll re-enable doubleClickZoom, but we don't want this to zoom in
    e.preventDefault();
    // Double clicks happen as [click, click, dblclick]. The first click adds a
    // point, the second immediately deletes it, and so we simulate a third
    // click to add it again.
    // TODO But since the delete case currently doesn't set cursor during recalculateHovering, do this hack
    this.cursor = pointFeature(e.lngLat.toArray());
    this.onClick(e);
    this.finish();
  };

  onMouseDown = (e: MapMouseEvent) => {
    if (this.active && !this.dragFrom && this.hover != null) {
      e.preventDefault();
      this.cursor = null;
      this.dragFrom = e.lngLat.toArray();
      this.redraw();
    }
  };

  onMouseUp = () => {
    if (this.active && this.dragFrom) {
      this.dragFrom = null;
      this.redraw();
      this.pointsUpdated();
    }
  };

  onKeypress = (e: KeyboardEvent) => {
    if (!this.active) {
      return;
    }
    if (e.key == "Enter") {
      e.stopPropagation();
      this.finish();
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

  addEventListenerSuccess(callback: (f: FeatureWithProps<Polygon>) => void) {
    this.eventListenersSuccess.push(callback);
  }
  addEventListenerUpdated(callback: (f: FeatureWithProps<Polygon>) => void) {
    this.eventListenersUpdated.push(callback);
  }
  addEventListenerFailure(callback: () => void) {
    this.eventListenersFailure.push(callback);
  }
  clearEventListeners() {
    this.eventListenersSuccess = [];
    this.eventListenersUpdated = [];
    this.eventListenersFailure = [];
  }

  startNew() {
    this.active = true;
    // Otherwise, double clicking to finish breaks
    this.map.doubleClickZoom.disable();
  }

  editExisting(feature: Feature<Polygon>) {
    this.active = true;
    this.map.doubleClickZoom.disable();
    this.points = JSON.parse(JSON.stringify(feature.geometry.coordinates[0]));
    this.points.pop();
    this.redraw();
    // TODO recalculateHovering, but we need to know where the mouse is
  }

  stop() {
    this.map.doubleClickZoom.enable();
    this.points = [];
    this.cursor = null;
    this.active = false;
    this.hover = null;
    this.dragFrom = null;
    this.redraw();
    this.map.getCanvas().style.cursor = "inherit";
  }

  private redraw() {
    let gj = emptyGeojson();

    this.points.forEach((pt, idx) => {
      let f = pointFeature(pt);
      f.properties!.hover = this.hover == idx;
      f.properties!.idx = idx;
      gj.features.push(f);
    });

    gj.features = gj.features.concat(pointsToLineSegments(this.points));

    let polygon = this.polygonFeature();
    if (polygon) {
      polygon.properties!.hover = this.hover == "polygon";
      gj.features.push(polygon);
    }

    polygonToolGj.set(gj);
    let cursorStyle = "crosshair";
    if (this.hover != null) {
      cursorStyle = this.dragFrom ? "grabbing" : "pointer";
    }
    this.map.getCanvas().style.cursor = cursorStyle;
  }

  // If there's a valid polygon, also passes to eventListenersUpdated
  private pointsUpdated() {
    let polygon = this.polygonFeature();
    if (polygon) {
      for (let cb of this.eventListenersUpdated) {
        cb(polygon);
      }
    }
  }

  private recalculateHovering(e: MapLayerMouseEvent) {
    this.cursor = null;
    this.hover = null;

    // Order of the layers matters!
    for (let f of this.map.queryRenderedFeatures(e.point, {
      layers: ["edit-polygon-fill", "edit-polygon-vertices"],
    })) {
      if (f.geometry.type == "Polygon") {
        this.hover = "polygon";
        break;
      } else if (f.geometry.type == "Point") {
        // Ignore the cursor
        if (Object.hasOwn(f.properties, "idx")) {
          this.hover = f.properties.idx;
          break;
        }
      }
    }
    if (this.hover == null) {
      this.cursor = pointFeature(e.lngLat.toArray());
    }

    this.redraw();
  }

  // TODO Force the proper winding order that geojson requires
  polygonFeature(): FeatureWithProps<Polygon> | null {
    if (this.points.length < 3) {
      return null;
    }
    let trimmed = this.points.map(setPrecision);
    // Deep clone here, or face the wrath of crazy bugs later!
    let coordinates = [JSON.parse(JSON.stringify(trimmed))];
    coordinates[0].push(JSON.parse(JSON.stringify(coordinates[0][0])));
    return {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates,
      },
      properties: {},
    };
  }
}

// Includes the line connecting the last to the first point
function pointsToLineSegments(points: Position[]): Feature<LineString>[] {
  let lines = [];
  for (let i = 0; i < points.length - 1; i++) {
    lines.push({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [points[i], points[i + 1]],
      },
      properties: {},
    });
  }
  if (points.length >= 3) {
    lines.push({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [points[points.length - 1], points[0]],
      },
      properties: {},
    });
  }
  // TODO TS is failing here
  return lines as Feature<LineString>[];
}
