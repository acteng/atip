<script lang="ts">
  import { gjScheme } from "../../stores";
  import { type RouteInfo } from "../../worker";
  import type { Feature, LineString } from "geojson";
  import { type Remote } from "comlink";
  import RouteInfoLayers from "./RouteInfoLayers.svelte";

  export let routeInfo: Remote<RouteInfo>;
  export let id: number;
  export let name: string;
  export let intervention_type: "area" | "route" | "crossing" | "other";
  export let description: string;
  export let length_meters: number | undefined;

  function prettyPrintMeters(x: number): string {
    if (x < 1000.0) {
      return Math.round(x) + " m";
    }
    return (x / 1000.0).toFixed(1) + "km";
  }

  // TODO Disable the button until RouteInfo is loaded and ready?
  async function autoFillDetails() {
    let linestring = $gjScheme.features.find(
      (f) => f.id == id
    ) as Feature<LineString>;
    try {
      name = await routeInfo.nameForRoute(linestring);
    } catch (e) {
      window.alert(`Couldn't auto-name route: ${e}`);
    }
  }
</script>

<label
  >Name:<br />
  <input type="text" bind:value={name} style="width: 100%" />
</label>

<br />
<br />

<label>
  <input type="radio" bind:group={intervention_type} value="area" />
  Area
</label>
<label>
  <input type="radio" bind:group={intervention_type} value="route" />
  Route
</label>
<label>
  <input type="radio" bind:group={intervention_type} value="crossing" />
  Crossing
</label>
<label>
  <input type="radio" bind:group={intervention_type} value="other" />
  Other
</label>

<br />
<br />

<label>
  Description:<br />
  <textarea bind:value={description} style="width: 100%" rows="5" />
</label>

{#if length_meters}
  Length: {prettyPrintMeters(length_meters)}
  <br /><button type="button" on:click={() => autoFillDetails()}
    >Auto-fill details</button
  >
  <RouteInfoLayers {routeInfo} {id} />
{/if}

<style>
  textarea {
    resize: none;
  }
</style>
