<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { FeatureCollection, Polygon } from "geojson";
  import BoundaryLayer from "lib/BoundaryLayer.svelte";
  import {
    appVersion,
    Geocoder,
    getAuthoritiesGeoJson,
    Layout,
    LoggedIn,
    MapLibreMap,
    ZoomOutMap,
  } from "lib/common";
  import HoverLayer from "lib/draw/HoverLayer.svelte";
  import InterventionLayer from "lib/draw/InterventionLayer.svelte";
  import Toolbox from "lib/draw/Toolbox.svelte";
  import { SecondaryButton } from "lib/govuk";
  import About from "lib/sidebar/About.svelte";
  import EntireScheme from "lib/sidebar/EntireScheme.svelte";
  import Instructions from "lib/sidebar/Instructions.svelte";
  import LeftSidebar from "lib/sidebar/LeftSidebar.svelte";
  import { colorInterventionsBySchema, schemaTitle } from "schemas";
  import { mapStyle, mode } from "stores";
  import { onMount } from "svelte";
  import type { Schema } from "types";

  let showAbout = false;
  let showInstructions = false;

  const params = new URLSearchParams(window.location.search);
  // TODO Add validation and some kind of error page
  let authorityName: string = params.get("authority")!;
  let schema: Schema = (params.get("schema") as Schema) || "v1";

  mapStyle.set(params.get("style") || "streets");

  // The version numbers here are arbitrary, not necessarily related to the
  // app's version. The version of the code deployed has to match the data, and
  // it's simplest to increment the number here for new incompatible data
  // releases.
  let routeSnapperUrl = `${
    import.meta.env.VITE_RESOURCE_BASE
  }/route-snappers/v2.2/${authorityName}.bin.gz`;

  function toggleAbout() {
    showAbout = !showAbout;
    showInstructions = false;
  }
  function toggleInstructions() {
    showInstructions = !showInstructions;
    showAbout = false;
  }

  let boundaryGeojson: FeatureCollection<Polygon>;
  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    boundaryGeojson = await loadAuthorityBoundary();
  });

  async function loadAuthorityBoundary(): Promise<FeatureCollection<Polygon>> {
    let geojson = await getAuthoritiesGeoJson();
    geojson.features = geojson.features.filter(
      (feature) => feature.properties?.name == authorityName
    );
    if (geojson.features.length === 0) {
      window.location.href = `/?error=Authority name not found: ${authorityName}`;
    }
    return geojson;
  }
</script>

<Layout>
  <div slot="sidebar" class="govuk-prose">
    {#if $mode.mode == "list"}
      <div class="govuk-button-group">
        <SecondaryButton on:click={() => (window.location.href = "index.html")}>
          Home
        </SecondaryButton>
        <SecondaryButton on:click={toggleAbout}>About</SecondaryButton>
        <SecondaryButton on:click={toggleInstructions}>
          Instructions
        </SecondaryButton>
      </div>
      <p>App version: {appVersion()}</p>
      <LoggedIn />
      <p>{schemaTitle(schema)} mode</p>
      <div style="display: flex; justify-content: space-between">
        <h1>{authorityName}</h1>
        <ZoomOutMap {boundaryGeojson} />
      </div>
    {/if}
    <EntireScheme {authorityName} {schema} />
    <LeftSidebar {schema} />
  </div>
  <div slot="main">
    <MapLibreMap style={$mapStyle}>
      <Geocoder />
      <BoundaryLayer {boundaryGeojson} />
      <InterventionLayer
        {schema}
        colorInterventions={colorInterventionsBySchema(schema)}
      />
      <HoverLayer />
      <Toolbox {routeSnapperUrl} {schema} />
    </MapLibreMap>
  </div>
</Layout>

<About bind:open={showAbout} />
<Instructions bind:open={showInstructions} {schema} />
