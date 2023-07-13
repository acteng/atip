<script lang="ts">
  import { type MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { bbox } from "../../maplibre_helpers";
  import {
    currentMode,
    formOpen,
    gjScheme,
    map,
    mapHover,
    openFromSidebar,
  } from "../../stores";
  import { schemaSingularNoun, type Mode, type Schema } from "../../types";
  import type { EventHandler } from "./event_handler";

  const thisMode = "edit-attribute";

  export let schema: Schema;
  export let changeMode: (m: Mode) => void;
  export let eventHandler: EventHandler;

  export function start() {}
  export function stop() {
    formOpen.set(null);
  }

  // Only run when openFromSidebar changes, not when gj changes.
  const unsubscribe = openFromSidebar.subscribe((id) => {
    if (id) {
      // When the user starts editing something from the sidebar, warp to what's
      // being edited. (Don't do this when clicking the object on the map.)
      let feature = $gjScheme.features.find((f) => f.id == id)!;

      // Padding around a point looks odd; special case it by keeping the current zoom
      if (feature.geometry.type == "Point") {
        $map.flyTo({
          center: feature.geometry.coordinates as [number, number],
          duration: 500,
        });
      } else {
        $map.fitBounds(bbox(feature), {
          padding: 200,
          duration: 500,
        });
      }

      // Interrupt any other mode and switch to this one. No need to
      // touch formOpen.
      changeMode(thisMode);
    }
  });
  onDestroy(unsubscribe);

  eventHandler.mapHandlers.mousemove = (e: MapMouseEvent) => {
    let results = $map.queryRenderedFeatures(e.point, {
      layers: [
        "interventions-points",
        "interventions-lines",
        "interventions-polygons",
      ],
    });
    mapHover.set((results[0]?.id as number) || null);
  };

  eventHandler.mapHandlers.mouseout = () => {
    mapHover.set(null);
  };

  eventHandler.mapHandlers.click = (e: MapMouseEvent) => {
    let results = $map.queryRenderedFeatures(e.point, {
      layers: [
        "interventions-points",
        "interventions-lines",
        "interventions-polygons",
      ],
    });
    if (results.length > 0) {
      formOpen.set(results[0].id as number);
    } else {
      formOpen.set(null);
    }
  };
</script>

{#if $currentMode == thisMode}
  {#if $formOpen}
    <p>Edit attributes to the left, or click {schemaSingularNoun(schema)}</p>
  {:else}
    <p>Click {schemaSingularNoun(schema)} to fill out its attributes</p>
  {/if}
{/if}
