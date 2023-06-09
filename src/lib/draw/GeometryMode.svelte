<script lang="ts">
  import type { LineString, Polygon } from "geojson";
  import { ClickZoomHandler, MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { editFeature } from "../../commands";
  import { currentMode, gjScheme, map, mapHover } from "../../stores";
  import type { Feature, FeatureUnion } from "../../types";
  import type { EventHandler } from "./event_handler";
  import type { PointTool } from "./point/point_tool";
  import PointControls from "./point/PointControls.svelte";
  import type { PolygonTool } from "./polygon/polygon_tool";
  import PolygonControls from "./polygon/PolygonControls.svelte";
  import type { RouteTool } from "./route/route_tool";
  import RouteControls from "./route/RouteControls.svelte";
  import SnapPolygonControls from "./snap_polygon/SnapPolygonControls.svelte";

  const thisMode = "edit-geometry";

  export let pointTool: PointTool;
  export let polygonTool: PolygonTool;
  export let routeTool: RouteTool;
  export let eventHandler: EventHandler;

  // An optional ID of what we're currently editing in this mode
  let currentlyEditing: number | null = null;
  let currentlyEditingControls:
    | "point"
    | "free-polygon"
    | "snap-polygon"
    | "route"
    | null = null;

  export function start() {}
  export function stop() {
    if (currentlyEditing) {
      // We could've been editing anything; just handle all possibilities
      pointTool.stop();
      polygonTool.stop();
      routeTool.stop();

      editFeature(currentlyEditing, (feature) => {
        delete feature.properties.hide_while_editing;
      });
    }

    currentlyEditing = null;
    currentlyEditingControls = null;
    mapHover.set(null);
  }

  // Handle successful edits
  routeTool.addEventListenerSuccessRoute((editedRoute) => {
    if ($currentMode == thisMode) {
      if (
        !editFeature(currentlyEditing, (feature) => {
          // Keep the ID and any properties. Just copy over stuff from routeSnapper.
          // TODO We're depending on implementation details here and knowing what to copy...
          feature.properties.length_meters =
            editedRoute.properties.length_meters;
          feature.properties.waypoints = editedRoute.properties.waypoints;
          delete feature.properties.hide_while_editing;
          feature.geometry = editedRoute.geometry;
        })
      ) {
        // TODO Hack around https://github.com/acteng/atip/issues/142
        window.alert(
          "You loaded another file or cleared everything while editing. Your changes were lost."
        );
      }

      // Stay in this mode
      currentlyEditing = null;
      currentlyEditingControls = null;
    }
  });

  routeTool.addEventListenerSuccessArea((editedArea) => {
    if ($currentMode == thisMode) {
      if (
        !editFeature(currentlyEditing, (feature) => {
          // Keep the ID and any properties. Just copy over stuff from routeSnapper.
          // TODO We're depending on implementation details here and knowing what to copy...
          feature.properties.waypoints = editedArea.properties.waypoints;
          delete feature.properties.hide_while_editing;
          feature.geometry = editedArea.geometry;
        })
      ) {
        window.alert(
          "You loaded another file or cleared everything while editing. Your changes were lost."
        );
      }

      // Stay in this mode
      currentlyEditing = null;
      currentlyEditingControls = null;
    }
  });

  for (let tool of [pointTool, polygonTool]) {
    tool.addEventListenerSuccess((updatedFeature) => {
      if ($currentMode == thisMode) {
        if (
          !editFeature(currentlyEditing, (feature) => {
            feature.geometry = updatedFeature.geometry;
            delete feature.properties.hide_while_editing;
          })
        ) {
          window.alert(
            "You loaded another file or cleared everything while editing. Your changes were lost."
          );
        }

        // Stay in this mode
        currentlyEditing = null;
        currentlyEditingControls = null;
      }
    });
  }

  // Handle failures
  for (let tool of [pointTool, polygonTool, routeTool]) {
    tool.addEventListenerFailure(() => {
      if ($currentMode == thisMode) {
        // Don't modify the thing we were just editing
        if (
          !editFeature(currentlyEditing, (feature) => {
            delete feature.properties.hide_while_editing;
          })
        ) {
          window.alert(
            "You loaded another file or cleared everything while editing. Your changes were lost."
          );
        }

        // Stay in this mode
        currentlyEditing = null;
        currentlyEditingControls = null;
      }
    });
  }

  eventHandler.mapHandlers.mousemove = (e: MapMouseEvent) => {
    routeTool.onMouseMove(e);
    pointTool.onMouseMove(e);
    polygonTool.onMouseMove(e);
    if (currentlyEditing == null) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      mapHover.set((results[0]?.id as number) || null);
    }
  };

  eventHandler.mapHandlers.mouseout = () => {
    if (currentlyEditing == null) {
      mapHover.set(null);
    }
  };

  // Many event handlers below forward to some/all tools, even if we're not
  // currently editing that type of object. This is safe, because they all ignore
  // events unless active.

  eventHandler.mapHandlers.click = (e: MapMouseEvent) => {
    routeTool.onClick();
    pointTool.onClick();
    polygonTool.onClick(e);

    if (currentlyEditing == null) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      if (results.length > 0) {
        startEditing(results[0].id as number);
      }
    }
  };

  eventHandler.mapHandlers.mousedown = (e: MapMouseEvent) => {
    polygonTool.onMouseDown(e);
  };

  eventHandler.mapHandlers.dblclick = (e: MapMouseEvent) => {
    routeTool.onDoubleClick(e);
    polygonTool.onDoubleClick(e);
  };

  eventHandler.mapHandlers.dragstart = () => {
    routeTool.onDragStart();
  };

  eventHandler.mapHandlers.mouseup = () => {
    routeTool.onMouseUp();
    polygonTool.onMouseUp();
  };

  eventHandler.documentHandlers.keyPress = (e: KeyboardEvent) => {
    routeTool.onKeyPress(e);
    polygonTool.onKeypress(e);
  };

  eventHandler.documentHandlers.keyDown = (e: KeyboardEvent) => {
    routeTool.onKeyDown(e);
  };

  eventHandler.documentHandlers.keyUp = (e: KeyboardEvent) => {
    routeTool.onKeyUp(e);
  };

  function startEditing(id: number) {
    mapHover.set(null);

    let maybeFeature: FeatureUnion | null = null;
    editFeature(currentlyEditing, (feature) => {
      // Hide it from the regular drawing while we're editing
      feature.properties.hide_while_editing = true;
      maybeFeature = feature;
    });
    let feature = maybeFeature!;

    currentlyEditing = id;

    if (feature.geometry.type == "LineString") {
      routeTool.editExistingRoute(feature as Feature<LineString>);
      currentlyEditingControls = "route";
    } else if (feature.geometry.type == "Polygon") {
      if (feature.properties.waypoints) {
        routeTool.editExistingArea(feature as Feature<Polygon>);
        currentlyEditingControls = "snap-polygon";
      } else {
        polygonTool.editExisting(feature as Feature<Polygon>);
        currentlyEditingControls = "free-polygon";
      }
    } else if (feature.geometry.type == "Point") {
      // No need to pass in the existing feature.geometry; it's the same as
      // where the cursor is anyway
      pointTool.start();
      currentlyEditingControls = "point";
    }
  }
</script>

{#if $currentMode == thisMode}
  {#if currentlyEditingControls == "point"}
    <PointControls {pointTool} editingExisting={true} />
  {:else if currentlyEditingControls == "free-polygon"}
    <PolygonControls {polygonTool} />
  {:else if currentlyEditingControls == "snap-polygon"}
    <SnapPolygonControls {routeTool} />
  {:else if currentlyEditingControls == "route"}
    <RouteControls {routeTool} extendRoute={false} />
  {:else}
    <p>Click an object to edit its geometry</p>
  {/if}
{/if}
