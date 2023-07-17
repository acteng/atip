<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import { onDestroy, onMount } from "svelte";
  import BaselayerSwitcher from "../lib/BaselayerSwitcher.svelte";
  import { processInput, type Scheme } from "../lib/browse/data";
  import Filters from "../lib/browse/Filters.svelte";
  import SchemeCard from "../lib/browse/SchemeCard.svelte";
  import FileInput from "../lib/common/FileInput.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import MapTooltips from "../lib/common/MapTooltips.svelte";
  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import ErrorMessage from "../lib/govuk/ErrorMessage.svelte";
  import SecondaryButton from "../lib/govuk/SecondaryButton.svelte";
  import Legend from "../lib/Legend.svelte";
  import MapLibreMap from "../lib/Map.svelte";
  import ZoomOutMap from "../lib/ZoomOutMap.svelte";
  import { bbox, emptyGeojson, prettyPrintMeters } from "../maplibre_helpers";
  import { gjScheme, map } from "../stores";
  import type { Scheme as GjScheme } from "../types";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  const params = new URLSearchParams(window.location.search);
  let style: string = params.get("style") || "streets";
  const schema = "v1";
  let errorMessage = "";

  let schemes: Map<string, Scheme> = new Map();
  let schemesToBeShown: Set<string> = new Set();

  onDestroy(() => {
    gjScheme.set(emptyGeojson() as GjScheme);
  });

  function loadFile(text: string) {
    try {
      let gj = JSON.parse(text);
      schemes = processInput(gj);
      gjScheme.set(gj);
      errorMessage = "";

      $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
    } catch (err) {
      errorMessage = `Couldn't load schemes from a file: ${err}`;
    }
  }

  function tooltip(props: { [name: string]: any }): string {
    // TODO Move into a Svelte component, so we don't have to awkwardly build up HTML like this
    var html = `<div class="govuk-prose" style="max-width: 30vw;">`;
    html += `<h2>${props.name} (${props.intervention_type})</h2>`;
    html += `<p>Scheme reference: ${props.scheme_reference}</p>`;
    if (props.length_meters) {
      html += `<p>Length: ${prettyPrintMeters(props.length_meters)}</p>`;
    }
    if (props.description) {
      html += `<p>${props.description}</p>`;
    }
    return html;
  }
</script>

<Layout>
  <div slot="sidebar" class="govuk-prose">
    <SecondaryButton on:click={() => window.open("index.html")}>
      Home
    </SecondaryButton>
    <div style="display: flex; justify-content: space-between">
      <h1>Browse schemes</h1>
      <ZoomOutMap boundaryGeojson={$gjScheme} />
    </div>
    {#if errorMessage}
      <ErrorMessage {errorMessage} />
    {/if}
    <FileInput label="Load from GeoJSON" id="load-geojson" {loadFile} />

    {#if schemes.size > 0}
      <Filters {schemes} bind:schemesToBeShown />
    {/if}

    <ul>
      {#each schemes.values() as scheme}
        {#if schemesToBeShown.has(scheme.scheme_reference)}
          <SchemeCard {scheme} />
        {/if}
      {/each}
    </ul>
  </div>
  <div slot="main">
    <MapLibreMap {style}>
      <InterventionLayer {schema} />
      <BaselayerSwitcher {style} />
      <Legend {schema} />
      <MapTooltips
        layers={[
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ]}
        contents={tooltip}
      />
    </MapLibreMap>
  </div>
</Layout>
