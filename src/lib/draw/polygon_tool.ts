import type { Feature, Point, Position, Polygon, LineString } from "geojson";
import type { Map, MapLayerMouseEvent, GeoJSONSource } from "maplibre-gl";
import nearestPointOnLine from "@turf/nearest-point-on-line";
import {
  emptyGeojson,
  overwriteSource,
  overwriteLayer,
  drawCircle,
  drawPolygon,
  drawLine,
  isPoint,
  isPolygon,
  isLine,
} from "../../maplibre_helpers";
import { colors, circleRadius } from "../../colors";

const source = "edit-polygon-mode";

export class PolygonTool {
  map: Map;
  active: boolean;
  eventListeners: ((f: Feature<Polygon>) => void)[];
  points: Position[];
  cursor: Feature<Point> | null;
  hoverPolyon: boolean;
  hoverPoint: number | null;
  dragging: boolean;
  dragFrom: Position | null;

  constructor(map: Map) {
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
    // TODO This is lots of state. Consider
    // https://maplibre.org/maplibre-gl-js-docs/example/drag-a-point/ or port
    // widgetry's World
    this.dragging = false;
    this.dragFrom = null;

    // Set up interactions
    map.on("mousemove", (e) => {
      if (this.active && !this.dragging) {
        this.#recalculateHovering(e);
      } else if (this.active && this.dragging) {
        if (this.hoverPolyon) {
          // Move entire polygon
          let dx = this.dragFrom[0] - e.lngLat.lng;
          let dy = this.dragFrom[1] - e.lngLat.lat;
          for (let pt of this.points) {
            pt[0] -= dx;
            pt[1] -= dy;
          }
        } else {
          this.points[this.hoverPoint] = e.lngLat.toArray();
        }
        this.dragFrom = e.lngLat.toArray();
        this.#redraw();
      }
    });

    map.on("click", (e) => {
      if (this.active && this.cursor) {
        // Insert the new point in the "middle" of the closest line segment
        let candidates: [number, number][] = [];
        pointsToLineSegments(this.points).forEach((line, idx) => {
          candidates.push([
            idx + 1,
            nearestPointOnLine(line, this.cursor).properties.dist,
          ]);
        });
        candidates.sort((a, b) => a[1] - b[1]);

        if (candidates.length > 0) {
          let idx = candidates[0][0];
          this.points.splice(idx, 0, this.cursor.geometry.coordinates);
          this.hoverPoint = idx;
        } else {
          this.points.push(this.cursor.geometry.coordinates);
          this.hoverPoint = this.points.length - 1;
        }
        this.#redraw();
      } else if (this.active && this.hoverPoint != null) {
        this.points.splice(this.hoverPoint, 1);
        this.hoverPoint = null;
        this.#redraw();
        // TODO Doesn't seem to work; you still have to move the mouse to hover
        // on the polygon
        this.#recalculateHovering(e);
      }
    });

    map.on("mousedown", (e) => {
      if (
        this.active &&
        !this.dragging &&
        (this.hoverPolyon || this.hoverPoint != null)
      ) {
        e.preventDefault();
        this.cursor = null;
        this.dragging = true;
        this.dragFrom = e.lngLat.toArray();
      }
    });
    map.on("mouseup", () => {
      if (this.active && this.dragging) {
        this.dragging = false;
        this.dragFrom = null;
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
    overwriteSource(map, source, {
      type: "geojson",
      data: emptyGeojson(),
    });

    // Order matters here!
    overwriteLayer(map, {
      id: "edit-polygon-fill",
      source,
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
      source,
      filter: isLine,
      // TODO Dashed
      ...drawLine("black", 8, 0.5),
    });
    overwriteLayer(map, {
      id: "edit-polygon-vertices",
      source,
      filter: isPoint,
      ...drawCircle(colors.hovering, circleRadius, [
        "case",
        ["boolean", ["get", "hover"], "false"],
        1.0,
        0.5,
      ]),
    });
  }

  addEventListener(callback: (f: Feature<Polygon>) => void) {
    this.eventListeners.push(callback);
  }

  tearDown() {
    // TODO Clean up event listeners
    this.map.removeLayer("edit-polygon-vertices");
    this.map.removeLayer("edit-polygon-fill");
    this.map.removeLayer("edit-polygon-lines");
    this.map.removeSource(source);
  }

  startNew() {
    this.active = true;
  }

  editExisting(feature: Feature<Polygon>) {
    this.active = true;
    this.points = feature.geometry.coordinates[0];
    this.points.pop();
    this.#redraw();
    // TODO #recalculateHovering, but we need to know where the mouse is
  }

  stop() {
    this.points = [];
    this.cursor = null;
    this.active = false;
    this.hoverPolyon = false;
    this.hoverPoint = null;
    this.dragging = false;
    this.dragFrom = null;
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

    (this.map.getSource(source) as GeoJSONSource).setData(gj);
  }

  #recalculateHovering(e: MapLayerMouseEvent) {
    this.cursor = null;
    this.hoverPolyon = false;
    this.hoverPoint = null;

    // Order of the layers matters!
    for (let f of this.map.queryRenderedFeatures(e.point, {
      layers: ["edit-polygon-fill", "edit-polygon-vertices"],
    })) {
      if (f.geometry.type == "Polygon") {
        this.hoverPolyon = true;
        break;
      } else if (f.geometry.type == "Point") {
        // Ignore the cursor
        if (Object.hasOwn(f.properties, "idx")) {
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

  // TODO Force the proper winding order that geojson requires
  #polygonFeature(): Feature<Polygon> | null {
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
