import { JsRouteSnapper } from "route-snapper";
import type { Map, GeoJSONSource } from "maplibre-gl";
import type { LineString } from "geojson";
import {
  emptyGeojson,
  isPoint,
  isLine,
  overwriteSource,
  overwriteLayer,
  drawCircle,
  drawLine,
  type FeatureWithProps,
} from "../../../maplibre_helpers";

const source = "route-snapper";

const circleRadiusPixels = 10;
const snapDistancePixels = 30;

export class RouteTool {
  map: Map;
  inner: JsRouteSnapper;
  active: boolean;
  eventListenersSuccess: ((f: FeatureWithProps<LineString>) => void)[];
  eventListenersFailure: (() => void)[];

  constructor(map: Map, graphBytes: Uint8Array) {
    this.map = map;
    console.time("Deserialize and setup JsRouteSnapper");
    this.inner = new JsRouteSnapper(graphBytes);
    console.timeEnd("Deserialize and setup JsRouteSnapper");
    this.active = false;
    this.eventListenersSuccess = [];
    this.eventListenersFailure = [];

    // Rendering
    overwriteSource(map, source, {
      type: "geojson",
      data: emptyGeojson(),
    });
    overwriteLayer(map, {
      id: "route-points",
      source,
      filter: isPoint,
      ...drawCircle(
        [
          "match",
          ["get", "type"],
          "hovered",
          "green",
          "important",
          "red",
          // other
          "black",
        ],
        [
          "match",
          ["get", "type"],
          "unimportant",
          circleRadiusPixels / 2.0,
          // other
          circleRadiusPixels,
        ]
      ),
    });
    overwriteLayer(map, {
      id: "route-lines",
      source,
      filter: isLine,
      ...drawLine("black", 2.5),
    });

    // Set up interactions
    map.on("mousemove", (e) => {
      if (!this.active) {
        return;
      }
      const nearbyPoint: [number, number] = [
        e.point.x - snapDistancePixels,
        e.point.y,
      ];
      const circleRadiusMeters = this.map
        .unproject(e.point)
        .distanceTo(this.map.unproject(nearbyPoint));
      if (
        this.inner.onMouseMove(e.lngLat.lng, e.lngLat.lat, circleRadiusMeters)
      ) {
        this.#redraw();
      }
    });

    map.on("click", () => {
      if (!this.active) {
        return;
      }
      this.inner.onClick();
      this.#redraw();
    });

    map.on("dragstart", (e) => {
      if (!this.active) {
        return;
      }
      if (this.inner.onDragStart()) {
        this.map.dragPan.disable();
      }
    });

    map.on("mouseup", (e) => {
      if (!this.active) {
        return;
      }
      if (this.inner.onMouseUp()) {
        this.map.dragPan.enable();
      }
    });

    document.addEventListener("keypress", (e) => {
      if (!this.active) {
        return;
      }
      if (e.key == "Enter") {
        e.preventDefault();
        this.finish();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!this.active) {
        return;
      }
      if (e.key == "Shift") {
        e.preventDefault();
        this.inner.setSnapMode(false);
        this.#redraw();
      }
    });
    document.addEventListener("keyup", (e) => {
      if (!this.active) {
        return;
      }
      if (e.key == "Shift") {
        e.preventDefault();
        this.inner.setSnapMode(true);
        this.#redraw();
      }
    });
  }

  // Activate the tool with blank state.
  start() {
    // If we were already active, don't do anything
    // TODO Or... error? Why'd this happen?
    if (this.active) {
      return;
    }

    this.active = true;
    // Otherwise, shift+click breaks
    this.map["boxZoom"].disable();
  }

  // Deactivate the tool, clearing all state. No events are fired for addEventListenerFailure.
  stop() {
    this.active = false;
    this.inner.clearState();
    this.#redraw();
    this.map["boxZoom"].enable();
  }

  // This takes a GeoJSON feature previously returned. It must have all
  // properties returned originally. If waypoints are missing (maybe because
  // the route was produced by a different tool, or an older version of this
  // tool), the edited line-string may differ from the input.
  editExisting(feature: FeatureWithProps<LineString>) {
    if (this.active) {
      window.alert("Bug: editExisting called when tool is already active");
    }

    if (!feature.properties.waypoints) {
      // Only use the first and last points as waypoints, and assume they're
      // snapped. This only works for the simplest cases.
      feature.properties.waypoints = [
        {
          lon: feature.geometry.coordinates[0][0],
          lat: feature.geometry.coordinates[0][1],
          snapped: true,
        },
        {
          lon: feature.geometry.coordinates[
            feature.geometry.coordinates.length - 1
          ][0],
          lat: feature.geometry.coordinates[
            feature.geometry.coordinates.length - 1
          ][1],
          snapped: true,
        },
      ];
    }

    this.start();
    this.inner.editExisting(feature.properties.waypoints);
    this.#redraw();
  }

  // Destroy resources attached to the map. Warning, this doesn't yet handle
  // event listeners!
  tearDown() {
    // TODO Will these throw if they're not there?
    this.map.removeLayer("route-points");
    this.map.removeLayer("route-lines");
    this.map.removeSource("route-snapper");
    // TODO Remove the event listeners on document and map
  }

  addEventListenerSuccess(callback: (f: FeatureWithProps<LineString>) => void) {
    this.eventListenersSuccess.push(callback);
  }
  addEventListenerFailure(callback: () => void) {
    this.eventListenersFailure.push(callback);
  }

  isActive(): boolean {
    return this.active;
  }

  // Either a success or failure event will happen, depending on current state
  finish() {
    let rawJSON = this.inner.toFinalFeature();
    if (rawJSON) {
      for (let cb of this.eventListenersSuccess) {
        cb(JSON.parse(rawJSON) as FeatureWithProps<LineString>);
      }
    } else {
      for (let cb of this.eventListenersFailure) {
        cb();
      }
    }
    this.stop();
  }

  // This stops the control and fires a failure event
  cancel() {
    this.inner.clearState();
    this.finish();
  }

  setConfig(config: { avoid_doubling_back: boolean }) {
    this.inner.setConfig(config);
    this.#redraw();
  }

  #redraw() {
    (this.map.getSource(source) as GeoJSONSource).setData(
      JSON.parse(this.inner.renderGeojson())
    );
  }
}
