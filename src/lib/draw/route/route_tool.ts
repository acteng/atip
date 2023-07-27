import type { LineString, Polygon } from "geojson";
import type { GeoJSONSource, Map, MapMouseEvent } from "maplibre-gl";
import { JsRouteSnapper } from "route-snapper";
import {
  emptyGeojson,
  isLine,
  isPoint,
  isPolygon,
  getDataDrivenPropertyValueSpecification,
  overwriteCircleLayer,
  overwriteLineLayer,
  overwritePolygonLayer,
  overwriteSource,
  type FeatureWithProps,
} from "../../../maplibre_helpers";
import { isAToolInUse } from "../../../stores";
import type { EventHandler } from "../event_handler";

const source = "route-snapper";

const circleRadiusPixels = 10;
const snapDistancePixels = 30;

export class RouteTool {
  map: Map;
  inner: JsRouteSnapper;
  active: boolean;
  eventListenersSuccess: ((
    f: FeatureWithProps<LineString | Polygon>
  ) => void)[];
  eventListenersUpdated: ((
    f: FeatureWithProps<LineString | Polygon>
  ) => void)[];
  eventListenersFailure: (() => void)[];

  constructor(
    map: Map,
    graphBytes: Uint8Array,
    initialisedCallback: () => void
  ) {
    this.map = map;
    console.time("Deserialize and setup JsRouteSnapper");
    this.inner = new JsRouteSnapper(graphBytes);
    console.timeEnd("Deserialize and setup JsRouteSnapper");
    this.active = false;
    this.eventListenersSuccess = [];
    this.eventListenersUpdated = [];
    this.eventListenersFailure = [];

    // Rendering
    overwriteSource(map, source, emptyGeojson());
    overwriteCircleLayer(map, {
      id: "route-points",
      source,
      filter: isPoint,
      color: getDataDrivenPropertyValueSpecification(
        ["get", "type"],
        {
          hovered: "green",
          important: "red",
        },
        "black"
      ),
      radius: getDataDrivenPropertyValueSpecification(
        ["get", "type"],
        { unimportant: circleRadiusPixels / 2.0 },
        circleRadiusPixels
      ),
    });
    overwriteLineLayer(map, {
      id: "route-lines",
      source,
      filter: isLine,
      color: "black",
      width: 2.5,
    });
    overwritePolygonLayer(map, {
      id: "route-polygons",
      source,
      filter: isPolygon,
      color: "black",
      opacity: 0.5,
    });
    initialisedCallback();
  }

  onMouseMove = (e: MapMouseEvent) => {
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
      this.redraw();
      // TODO We'll call this too frequently
      this.dataUpdated();
    }
  };

  onClick = () => {
    if (!this.active) {
      return;
    }
    this.inner.onClick();
    this.redraw();
    this.dataUpdated();
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
    this.inner.onClick();
    this.finish();
  };

  onDragStart = () => {
    if (!this.active) {
      return;
    }
    if (this.inner.onDragStart()) {
      this.map.dragPan.disable();
    }
  };

  onMouseUp = () => {
    if (!this.active) {
      return;
    }
    if (this.inner.onMouseUp()) {
      this.map.dragPan.enable();
    }
  };

  onKeyPress = (e: KeyboardEvent) => {
    if (!this.active) {
      return;
    }
    if (e.key == "Enter") {
      e.preventDefault();
      this.finish();
    }
  };

  onKeyDown = (e: KeyboardEvent) => {
    if (!this.active) {
      return;
    }
    if (e.key == "Shift") {
      e.preventDefault();
      this.inner.setSnapMode(false);
      this.redraw();
    } else if (e.key == "Escape") {
      e.preventDefault();
      this.cancel();
    }
  };

  onKeyUp = (e: KeyboardEvent) => {
    if (!this.active) {
      return;
    }
    if (e.key == "Shift") {
      e.preventDefault();
      this.inner.setSnapMode(true);
      this.redraw();
    }
  };

  // Activate the tool with blank state.
  startRoute() {
    // If we were already active, don't do anything
    // TODO Or... error? Why'd this happen?
    if (this.active) {
      return;
    }

    this.setActivity(true);

    // Otherwise, shift+click breaks
    this.map.boxZoom.disable();
    // Otherwise, double clicking to finish breaks
    this.map.doubleClickZoom.disable();
  }

  // Activate the tool with blank state.
  startArea() {
    // If we were already active, don't do anything
    // TODO Or... error? Why'd this happen?
    if (this.active) {
      return;
    }

    this.inner.setConfig({
      avoid_doubling_back: true,
      area_mode: true,
      extend_route: true,
    });
    this.setActivity(true);
    this.map.boxZoom.disable();
    this.map.doubleClickZoom.disable();
  }

  setActivity(isActive: boolean) {
    this.active = isActive;
    isAToolInUse.set(isActive);
  }

  // Deactivate the tool, clearing all state. No events are fired for eventListenersFailure.
  stop() {
    this.setActivity(false);
    this.inner.clearState();
    this.redraw();
    this.map.boxZoom.enable();
    this.map.doubleClickZoom.enable();
  }

  // This takes a GeoJSON feature previously returned. It must have all
  // properties returned originally. If waypoints are missing (maybe because
  // the route was produced by a different tool, or an older version of this
  // tool), the edited line-string may differ from the input.
  editExistingRoute(feature: FeatureWithProps<LineString>) {
    if (this.active) {
      window.alert("Bug: editExistingRoute called when tool is already active");
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

    this.startRoute();
    this.inner.editExisting(feature.properties.waypoints);
    this.redraw();
  }

  // This only handles features previously returned by this tool.
  editExistingArea(feature: FeatureWithProps<Polygon>) {
    if (this.active) {
      window.alert("Bug: editExistingArea called when tool is already active");
    }

    if (!feature.properties.waypoints) {
      window.alert(
        "Bug: editExistingArea called for a polygon not produced by the route-snapper"
      );
    }

    this.startArea();
    this.inner.editExisting(feature.properties.waypoints);
    this.redraw();
  }

  // Destroy resources attached to the map.
  tearDown() {
    // TODO Will these throw if they're not there?
    this.map.removeLayer("route-points");
    this.map.removeLayer("route-lines");
    this.map.removeLayer("route-polygons");
    this.map.removeSource("route-snapper");
  }

  addEventListenerSuccess(
    callback: (f: FeatureWithProps<LineString | Polygon>) => void
  ) {
    this.eventListenersSuccess.push(callback);
  }
  addEventListenerUpdated(
    callback: (f: FeatureWithProps<LineString | Polygon>) => void
  ) {
    this.eventListenersUpdated.push(callback);
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
      // Pass copies to each callback
      for (let cb of this.eventListenersSuccess) {
        cb(JSON.parse(rawJSON) as FeatureWithProps<LineString | Polygon>);
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
    this.inner.clearState();
    this.finish();
  }

  setRouteConfig(config: {
    avoid_doubling_back: boolean;
    extend_route: boolean;
  }) {
    this.inner.setConfig({ ...config, area_mode: false });
    this.redraw();
  }

  setHandlers = (eventHandler: EventHandler) => {
    eventHandler.mapHandlers.mousemove = this.onMouseMove;
    eventHandler.mapHandlers.click = this.onClick;
    eventHandler.mapHandlers.dblclick = this.onDoubleClick;
    eventHandler.mapHandlers.dragstart = this.onDragStart;
    eventHandler.mapHandlers.mouseup = this.onMouseUp;
    eventHandler.documentHandlers.keypress = this.onKeyPress;
    eventHandler.documentHandlers.keydown = this.onKeyDown;
    eventHandler.documentHandlers.keyup = this.onKeyUp;
  };

  private redraw() {
    (this.map.getSource(source) as GeoJSONSource).setData(
      JSON.parse(this.inner.renderGeojson())
    );
  }

  private dataUpdated() {
    let rawJSON = this.inner.toFinalFeature();
    if (rawJSON) {
      // Pass copies to each callback
      for (let cb of this.eventListenersUpdated) {
        cb(JSON.parse(rawJSON) as FeatureWithProps<LineString | Polygon>);
      }
    }
  }
}
