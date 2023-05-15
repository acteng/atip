<script lang="ts">
  import { onDestroy } from "svelte";
  import { type MapMouseEvent } from "maplibre-gl";
  import type { Mode } from "./types";
  import { bbox } from "../../maplibre_helpers";
  import {
    map,
    gjScheme,
    mapHover,
    openFromSidebar,
    formOpen,
  } from "../../stores";

  const thisMode = "edit-attribute";

  // TODO Just tell us if we're the current mode or not, actually...
  export let mode: Mode;
  export let changeMode: (m: Mode) => void;

  export function start() {}
  export function stop() {
    formOpen.set(null);
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

  function onMouseMove(e: MapMouseEvent) {
    if (mode == thisMode) {
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
    if (mode == thisMode) {
      mapHover.set(null);
    }
  }

  function onClick(e: MapMouseEvent) {
    if (mode == thisMode) {
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
    }
  }
</script>

{#if mode == thisMode}
  {#if $formOpen}
    <p>Edit attributes to the left, or click another intervention</p>
  {:else}
    <p>Click an intervention to fill out its attributes</p>
  {/if}
{/if}
