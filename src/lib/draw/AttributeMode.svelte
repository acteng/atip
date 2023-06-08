<script lang="ts">
  import { onDestroy } from "svelte";
  import { type MapMouseEvent } from "maplibre-gl";
  import type { Mode } from "../../types";
  import type { EventHandler } from "./types";
  import { bbox } from "../../maplibre_helpers";
  import {
    map,
    gjScheme,
    mapHover,
    openFromSidebar,
    formOpen,
    currentMode,
  } from "../../stores";

  const thisMode = "edit-attribute";

  export let changeMode: (m: Mode) => void;
  export let eventHandler: EventHandler;

  export function start() {}
  export function stop() {
    formOpen.set(null);
  }

  $: {
    let id = $openFromSidebar;
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
  }

  const onMouseMove = (e: MapMouseEvent) => {
    let results = $map.queryRenderedFeatures(e.point, {
      layers: [
        "interventions-points",
        "interventions-lines",
        "interventions-polygons",
      ],
    });
    mapHover.set((results[0]?.id as number) || null);
  };

  const onMouseOut = () => {
    mapHover.set(null);
  };

  const onClick = (e: MapMouseEvent) => {
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

  eventHandler.mapHandlers.mousemove = onMouseMove;
  eventHandler.mapHandlers.mouseout = onMouseOut;
  // Handle clicking the hovered feature
  eventHandler.mapHandlers.click = onClick;
</script>

{#if $currentMode == thisMode}
  {#if $formOpen}
    <p>Edit attributes to the left, or click another object</p>
  {:else}
    <p>Click an object to fill out its attributes</p>
  {/if}
{/if}
