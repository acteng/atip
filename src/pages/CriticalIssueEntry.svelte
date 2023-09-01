<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { LngLat } from "maplibre-gl";
  import { onMount } from "svelte";
  import { Layout, MapLibreMap } from "../lib/common";
  import Form from "../lib/critical_entry/Form.svelte";
  import Pin from "../lib/critical_entry/Pin.svelte";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  let markerPosition: LngLat | null = null;
</script>

<Layout>
  <div slot="sidebar" class="govuk-prose">
    <h1>Critical issue entry</h1>
    {#if markerPosition}
      <p>Critical at {markerPosition}</p>
      <Form pt={markerPosition} />
    {:else}
      <p>Click the map to add a critical</p>
    {/if}
  </div>
  <div slot="main">
    <MapLibreMap style="dataviz" startBounds={[-5.96, 49.89, 2.31, 55.94]}>
      <Pin bind:markerPosition />
    </MapLibreMap>
  </div>
</Layout>
