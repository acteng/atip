<script lang="ts">
  import { SecondaryButton } from "lib/govuk";
  import { LngLat, MapMouseEvent } from "maplibre-gl";
  import { CollapsibleCard } from ".";

  export let isInactive = true;
  const waypoints: LngLat[] = [];

  export function handleMapClickEvent(e: MapMouseEvent) {
    if (isInactive) {
      return;
    }

    if (e.type === "click") {
    }

    if (e.type === "dblclick") {
    }
  }

  export function enableStreetView() {
    isInactive = false;
  }

  export function disableStreetView() {
    isInactive = true;
  }
</script>

{#if isInactive}
  <SecondaryButton on:click={enableStreetView}>
    Enable Line Measurement Tool
  </SecondaryButton>
{:else}
  <SecondaryButton on:click={disableStreetView}>
    Disable Line Measurement Tool
  </SecondaryButton>
{/if}
{#if !isInactive}
  <CollapsibleCard label="Help">
    <ul>
      <li>
        <b>Click</b>
        on the map to place a new waypoint
      </li>
      <li>
        <b>Click & Drag</b>
        an existing waypoint to move it
      </li>
      <li>
        <b>Right click</b>
        an existing waypoint to delete it
      </li>
      <li>
        Press <b>Escape</b>
        to exit this mode
      </li>
    </ul>
  </CollapsibleCard>
{/if}
