<script lang="ts">
  import type { LineString, Polygon } from "geojson";
  import { MapMouseEvent } from "maplibre-gl";
  import type { FeatureWithProps } from "../../maplibre_helpers";
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
  // As a feature is being edited, store the latest version
  let latestEditedFeature: FeatureWithProps<LineString | Polygon> | null = null;

  export function start() {}
  export function stop() {
    if (currentlyEditing) {
      // We could've been editing anything; just handle all possibilities
      pointTool.stop();
      polygonTool.stop();
      routeTool.stop();

      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing)!;
        if (!feature) {
          window.alert(
            "You loaded another file or cleared everything while editing. Your changes were lost."
          );
          return gj;
        }

        // Show the feature again
        delete feature.properties.hide_while_editing;

        // If there are unsaved edits to the feature, copy them over. If the
        // user explicitly canceled, then a failure callback would've run.
        if (latestEditedFeature) {
          updateFeature(feature, latestEditedFeature);
        }
        return gj;
      });
    }

    stopEditing();
    mapHover.set(null);
  }

  // Handle successful edits
  for (let tool of [pointTool, polygonTool, routeTool]) {
    tool.addEventListenerSuccess((editedFeature) => {
      if ($currentMode == thisMode) {
        gjScheme.update((gj) => {
          let feature = gj.features.find((f) => f.id == currentlyEditing)!;
          if (!feature) {
            window.alert(
              "You loaded another file or cleared everything while editing. Your changes were lost."
            );
            return gj;
          }
          updateFeature(feature, editedFeature);
          delete feature.properties.hide_while_editing;
          return gj;
        });

        // Stay in this mode
        stopEditing();
      }
    });
  }

  // Auto-save for everything except pointTool
  for (let tool of [polygonTool, routeTool]) {
    tool.addEventListenerUpdated((feature) => {
      if ($currentMode == thisMode) {
        // Just remember the update; don't apply it yet
        latestEditedFeature = feature;
      }
    });
  }

  // Handle failures
  for (let tool of [pointTool, polygonTool, routeTool]) {
    tool.addEventListenerFailure(() => {
      if ($currentMode == thisMode) {
        // Throw away any updates
        gjScheme.update((gj) => {
          let feature = gj.features.find((f) => f.id == currentlyEditing)!;
          if (!feature) {
            window.alert(
              "You loaded another file or cleared everything while editing. Your changes were lost."
            );
            return gj;
          }
          delete feature.properties.hide_while_editing;
          return gj;
        });

        // Stay in this mode
        stopEditing();
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

  eventHandler.documentHandlers.keypress = (e: KeyboardEvent) => {
    routeTool.onKeyPress(e);
    polygonTool.onKeypress(e);
  };

  eventHandler.documentHandlers.keydown = (e: KeyboardEvent) => {
    pointTool.onKeyDown(e);
    polygonTool.onKeyDown(e);
    routeTool.onKeyDown(e);
  };

  eventHandler.documentHandlers.keyup = (e: KeyboardEvent) => {
    routeTool.onKeyUp(e);
  };

  function startEditing(id: number) {
    mapHover.set(null);

    let maybeFeature: FeatureUnion | null = null;
    gjScheme.update((gj) => {
      maybeFeature = gj.features.find((f) => f.id == id)!;
      // Hide it from the regular drawing while we're editing
      maybeFeature.properties.hide_while_editing = true;
      return gj;
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

  function stopEditing() {
    currentlyEditing = null;
    currentlyEditingControls = null;
    latestEditedFeature = null;
  }

  // Copy geometry and properties from source to destination
  function updateFeature(destination, source) {
    destination.geometry = source.geometry;

    // Copy properties that may come from routeTool. Not all tools or cases
    // will produce all of these.
    // TODO We're depending on implementation details here and knowing what to copy...
    if (source.properties.length_meters) {
      destination.properties.length_meters = source.properties.length_meters;
    }
    if (source.properties.waypoints) {
      destination.properties.waypoints = source.properties.waypoints;
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
