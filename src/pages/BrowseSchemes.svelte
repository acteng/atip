<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import { onDestroy, onMount } from "svelte";
  import { processInput, type Scheme } from "../lib/browse/data";
  import Filters from "../lib/browse/Filters.svelte";
  import HospitalsLayer from "../lib/browse/HospitalsLayer.svelte";
  import SchemeCard from "../lib/browse/SchemeCard.svelte";
  import SchoolsLayer from "../lib/browse/SchoolsLayer.svelte";
  import {
    BaselayerSwitcher,
    CollapsibleCard,
    FileInput,
    Layout,
    MapTooltips,
    ZoomOutMap,
  } from "../lib/common";
  import PmTiles from "../lib/common/PmTiles.svelte";
  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import { CheckboxGroup, ErrorMessage, SecondaryButton } from "../lib/govuk";
  import MapLibreMap from "../lib/Map.svelte";
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
    <PmTiles />
    <MapLibreMap {style}>
      <InterventionLayer {schema} />
      <MapTooltips
        layers={[
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ]}
        contents={tooltip}
      />
      <div class="top-right">
        <CollapsibleCard label="Layers" open>
          <BaselayerSwitcher {style} />
          <CheckboxGroup small>
            <SchoolsLayer />
            <HospitalsLayer />
          </CheckboxGroup>
        </CollapsibleCard>
      </div>
    </MapLibreMap>
  </div>
</Layout>

<style>
  .top-right {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
    padding: 16px;
  }
</style>
