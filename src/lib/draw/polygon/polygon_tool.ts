import nearestPointOnLine from "@turf/nearest-point-on-line";
import type { Feature, LineString, Point, Polygon, Position } from "geojson";
import type {
  GeoJSONSource,
  Map,
  MapLayerMouseEvent,
  MapMouseEvent,
} from "maplibre-gl";
import { circleRadius, colors } from "../../../colors";
import {
  emptyGeojson,
  isLine,
  isPoint,
  isPolygon,
  overwriteCircleLayer,
  overwriteLineLayer,
  overwritePolygonLayer,
  overwriteSource,
  type FeatureWithProps,
} from "../../../maplibre_helpers";
import { isAToolInUse } from "../../../stores";
import type { EventHandler } from "../event_handler";

const source = "edit-polygon-mode";

export class PolygonTool {
  map: Map;
  active: boolean;
  eventListenersSuccess: ((f: FeatureWithProps<Polygon>) => void)[];
  eventListenersFailure: (() => void)[];
  points: Position[];
  cursor: Feature<Point> | null;
  // The number is an index into points
  hover: "polygon" | number | null;
  dragFrom: Position | null;

  constructor(map: Map) {
    this.map = map;
    this.active = false;
    this.eventListenersSuccess = [];
    this.eventListenersFailure = [];

    // This doesn't repeat the first point at the end; it's not closed
    this.points = [];
    this.cursor = null;
    // TODO This is lots of state. Consider
    // https://maplibre.org/maplibre-gl-js-docs/example/drag-a-point/ or port
    // widgetry's World
    this.hover = null;
    this.dragFrom = null;

    // Render
    overwriteSource(map, source, emptyGeojson());

    overwritePolygonLayer(map, {
      id: "edit-polygon-fill",
      source,
      filter: isPolygon,
      color: "red",
      opacity: ["case", ["boolean", ["get", "hover"], "false"], 1.0, 0.5],
    });
    overwriteLineLayer(map, {
      id: "edit-polygon-lines",
      source,
      filter: isLine,
      // TODO Dashed
      color: "black",
      width: 8,
      opacity: 0.5,
    });
    overwriteCircleLayer(map, {
      id: "edit-polygon-vertices",
      source,
      filter: isPoint,
      color: colors.hovering,
      radius: circleRadius,
      opacity: ["case", ["boolean", ["get", "hover"], "false"], 1.0, 0.5],
    });
  }

  // Either a success or failure event will happen, depending on current state
  finish() {
    let polygon = this.polygonFeature();
    if (polygon) {
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
    } else if (this.active && typeof this.hover === "number") {
      this.points.splice(this.hover, 1);
      this.hover = null;
      this.redraw();
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
    }
  };

  onMouseUp = () => {
    if (this.active && this.dragFrom) {
      this.dragFrom = null;
    }
  };

  onKeypress = (e: KeyboardEvent) => {
    if (!this.active) {
      return;
    }
    if (e.key == "Enter") {
      e.preventDefault();
      this.finish();
    }
  };

  setHandlers = (eventHandler: EventHandler) => {
    eventHandler.mapHandlers.mousemove = this.onMouseMove;
    eventHandler.mapHandlers.click = this.onClick;
    eventHandler.mapHandlers.dblclick = this.onDoubleClick;
    eventHandler.mapHandlers.mousedown = this.onMouseDown;
    eventHandler.mapHandlers.mouseup = this.onMouseUp;
    eventHandler.documentHandlers.keyPress = this.onKeypress;
  };

  addEventListenerSuccess(callback: (f: FeatureWithProps<Polygon>) => void) {
    this.eventListenersSuccess.push(callback);
  }
  addEventListenerFailure(callback: () => void) {
    this.eventListenersFailure.push(callback);
  }

  tearDown() {
    this.map.removeLayer("edit-polygon-vertices");
    this.map.removeLayer("edit-polygon-fill");
    this.map.removeLayer("edit-polygon-lines");
    this.map.removeSource(source);
  }

  startNew() {
    this.setActivity(true);
    // Otherwise, double clicking to finish breaks
    this.map.doubleClickZoom.disable();
  }

  editExisting(feature: Feature<Polygon>) {
    this.setActivity(true);
    this.map.doubleClickZoom.disable();
    this.points = JSON.parse(JSON.stringify(feature.geometry.coordinates[0]));
    this.points.pop();
    this.redraw();
    // TODO recalculateHovering, but we need to know where the mouse is
  }

  setActivity(isActive: boolean) {
    this.active = isActive;
    isAToolInUse.set(isActive);
  }

  stop() {
    this.map.doubleClickZoom.enable();
    this.points = [];
    this.cursor = null;
    this.setActivity(false);
    this.hover = null;
    this.dragFrom = null;
    this.redraw();
  }

  private redraw() {
    let gj = emptyGeojson();

    this.points.forEach((pt, idx) => {
      let f = pointFeature(pt);
      f.properties!.hover = this.hover == idx;
      f.properties!.idx = idx;
      gj.features.push(f);
    });
    if (this.cursor) {
      gj.features.push(this.cursor);
    }

    gj.features = gj.features.concat(pointsToLineSegments(this.points));

    let polygon = this.polygonFeature();
    if (polygon) {
      polygon.properties!.hover = this.hover == "polygon";
      gj.features.push(polygon);
    }

    (this.map.getSource(source) as GeoJSONSource).setData(gj);
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
    // Deep clone here, or face the wrath of crazy bugs later!
    let coordinates = [JSON.parse(JSON.stringify(this.points))];
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

function pointFeature(pt: Position): Feature<Point> {
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
