<script lang="ts">
  import { onDestroy } from "svelte";
  import { type MapMouseEvent } from "maplibre-gl";
  import type { Mode } from "./types";
  import type { LineString, Polygon } from "geojson";
  import type { PointTool } from "./point/point_tool";
  import type { PolygonTool } from "./polygon/polygon_tool";
  import type { RouteTool } from "./route/route_tool";
  import { map, gjScheme, mapHover } from "../../stores";
  import type { Feature, FeatureUnion } from "../../types";
  import PointControls from "./point/PointControls.svelte";
  import PolygonControls from "./polygon/PolygonControls.svelte";
  import SnapPolygonControls from "./snap_polygon/SnapPolygonControls.svelte";
  import RouteControls from "./route/RouteControls.svelte";

  const thisMode = "edit-geometry";

  export let mode: Mode;
  export let pointTool: PointTool;
  export let polygonTool: PolygonTool;
  export let routeTool: RouteTool;

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

      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing)!;
        delete feature.properties.hide_while_editing;
        return gj;
      });
    }

    currentlyEditing = null;
    currentlyEditingControls = null;
    mapHover.set(null);
  }

  // Calculate hover
  $map.on("mousemove", onMouseMove);
  $map.on("mouseout", onMouseOut);
  // Handle clicking the hovered feature
  $map.on("click", onClick);

  onDestroy(() => {
    $map.off("mousemove", onMouseMove);
    $map.off("mouseout", onMouseOut);
    $map.off("click", onClick);
  });

  // Handle successful edits
  routeTool.addEventListenerSuccessRoute((editedRoute) => {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing)!;
        // Keep the ID and any properties. Just copy over stuff from routeSnapper.
        // TODO We're depending on implementation details here and knowing what to copy...
        feature.properties.length_meters = editedRoute.properties.length_meters;
        feature.properties.waypoints = editedRoute.properties.waypoints;
        delete feature.properties.hide_while_editing;
        feature.geometry = editedRoute.geometry;
        return gj;
      });

      // Stay in this mode
      currentlyEditing = null;
      currentlyEditingControls = null;
    }
  });
  routeTool.addEventListenerSuccessArea((editedArea) => {
    if (mode == thisMode) {
      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing)!;
        // Keep the ID and any properties. Just copy over stuff from routeSnapper.
        // TODO We're depending on implementation details here and knowing what to copy...
        feature.properties.waypoints = editedArea.properties.waypoints;
        delete feature.properties.hide_while_editing;
        feature.geometry = editedArea.geometry;
        return gj;
      });

      // Stay in this mode
      currentlyEditing = null;
      currentlyEditingControls = null;
    }
  });
  for (let tool of [pointTool, polygonTool]) {
    tool.addEventListenerSuccess((feature) => {
      if (mode == thisMode) {
        gjScheme.update((gj) => {
          let updateFeature = gj.features.find(
            (f) => f.id == currentlyEditing
          )!;
          updateFeature.geometry = feature.geometry;
          delete updateFeature.properties.hide_while_editing;
          return gj;
        });

        // Stay in this mode
        currentlyEditing = null;
        currentlyEditingControls = null;
      }
    });
  }

  // Handle failures
  for (let tool of [pointTool, polygonTool, routeTool]) {
    tool.addEventListenerFailure(() => {
      if (mode == thisMode) {
        // Don't modify the thing we were just editing
        gjScheme.update((gj) => {
          let feature = gj.features.find((f) => f.id == currentlyEditing)!;
          delete feature.properties.hide_while_editing;
          return gj;
        });

        // Stay in this mode
        currentlyEditing = null;
        currentlyEditingControls = null;
      }
    });
  }

  function onMouseMove(e: MapMouseEvent) {
    if (mode == thisMode && currentlyEditing == null) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      mapHover.set((results[0]?.id as number) || null);
    }
  }

  function onMouseOut() {
    if (mode == thisMode && currentlyEditing == null) {
      mapHover.set(null);
    }
  }

  function onClick(e: MapMouseEvent) {
    if (mode == thisMode && currentlyEditing == null) {
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
  }

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
</script>

{#if mode == thisMode}
  {#if currentlyEditingControls == "point"}
    <PointControls {pointTool} editingExisting={true} />
  {:else if currentlyEditingControls == "free-polygon"}
    <PolygonControls {polygonTool} />
  {:else if currentlyEditingControls == "snap-polygon"}
    <SnapPolygonControls {routeTool} />
  {:else if currentlyEditingControls == "route"}
    <RouteControls {routeTool} />
  {:else}
    <p>Click an object to edit its geometry</p>
  {/if}
{/if}
