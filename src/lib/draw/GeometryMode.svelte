<script lang="ts">
  import type { LineString, Polygon } from "geojson";
  import type { PointTool } from "./point_tool";
  import type { PolygonTool } from "./polygon_tool";
  import type { RouteSnapper } from "route-snapper/lib.js";
  import { map, gjScheme, mapHover } from "../../stores";
  import type { Feature, FeatureUnion } from "../../types";

  const thisMode = "edit-geometry";

  export let mode: string;
  export let routeSnapper: RouteSnapper;
  export let snapTool: HTMLDivElement;
  export let pointTool: PointTool;
  export let polygonTool: PolygonTool;

  export function start() {}
  export function stop() {
    if (currentlyEditing) {
      // We could've been editing anything; just handle all possibilities
      routeSnapper.stop();
      pointTool.stop();
      polygonTool.stop();

      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing);
        delete feature!.properties.hide_while_editing;
        return gj;
      });
    }

    currentlyEditing = null;
    mapHover.set(null);
  }

  // An optional ID of what we're currently editing in this mode
  let currentlyEditing: number | null = null;

  // Calculate hover
  $map.on("mousemove", (e) => {
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
  });
  $map.on("mouseout", () => {
    if (mode == thisMode && currentlyEditing == null) {
      mapHover.set(null);
    }
  });

  // Handle clicking the hovered feature
  $map.on("click", (e) => {
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
  });

  // TODO Real route-snapper types
  snapTool.addEventListener("new-route", (e: any) => {
    if (mode == thisMode) {
      const editedRoute = e.detail;
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
    }
  });
  snapTool.addEventListener("no-new-route", () => {
    if (mode == thisMode) {
      // Don't modify the thing we were just editing
      gjScheme.update((gj) => {
        let feature = gj.features.find((f) => f.id == currentlyEditing)!;
        delete feature.properties.hide_while_editing;
        return gj;
      });

      // Stay in this mode
      currentlyEditing = null;
    }
  });

  // TODO Also have cancel buttons for these tools
  for (let tool of [pointTool, polygonTool]) {
    tool.addEventListener((feature) => {
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
      }
    });
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
      routeSnapper.editExisting(feature as Feature<LineString>);
    } else if (feature.geometry.type == "Polygon") {
      polygonTool.editExisting(feature as Feature<Polygon>);
    } else if (feature.geometry.type == "Point") {
      // No need to pass in the existing feature.geometry; it's the same as
      // where the cursor is anyway
      pointTool.start();
    }
  }
</script>

{#if mode == thisMode}
  <p>Click an intervention to edit its geometry</p>
{/if}
