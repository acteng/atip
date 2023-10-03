<script lang="ts">
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import * as Comlink from "comlink";
  import type { FeatureCollection, Polygon } from "geojson";
  import BoundaryLayer from "lib/BoundaryLayer.svelte";
  import {
    appVersion,
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
  import InterventionList from "lib/sidebar/InterventionList.svelte";
  import { colorInterventionsBySchema, schemaTitle } from "schemas";
  import { mapStyle, routeInfo } from "stores";
  import { onMount } from "svelte";
  import type { Schema } from "types";
  import { type RouteInfo } from "../worker";
  import workerWrapper from "../worker?worker";

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
  // releases. The two data releases may also be changed independently.
  let routeSnapperUrl = `${
    import.meta.env.VITE_RESOURCE_BASE
  }/route-snappers/v2.1/${authorityName}.bin.gz`;
  let routeInfoUrl = `${
    import.meta.env.VITE_RESOURCE_BASE
  }/route-info/v2/${authorityName}.bin.gz`;

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

    // If you get "import declarations may only appear at top level of a
    // module", then you need a newer browser.
    // https://caniuse.com/mdn-api_worker_worker_ecmascript_modules
    //
    // In Firefox 112, go to about:config and enable dom.workers.modules.enabled
    //
    // Note this should work fine in older browsers when doing 'npm run build'.
    // It's only a problem during local dev mode.
    interface WorkerConstructor {
      new (): RouteInfo;
    }

    const MyWorker: Comlink.Remote<WorkerConstructor> = Comlink.wrap(
      new workerWrapper()
    );
    // Don't populate the routeInfo store until loadFile is done, so other
    // places can disable controls until it's ready
    let info = await new MyWorker();
    await info.loadFile(routeInfoUrl);
    routeInfo.set(info);
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
    <EntireScheme {authorityName} {schema} />
    <hr />
    <InterventionList {schema} />
  </div>
  <div slot="main">
    <MapLibreMap style={$mapStyle}>
      <BoundaryLayer {boundaryGeojson} />
      <InterventionLayer
        colorInterventions={colorInterventionsBySchema(schema)}
      />
      <HoverLayer />
      <Toolbox {routeSnapperUrl} {schema} />
    </MapLibreMap>
  </div>
</Layout>

<About bind:open={showAbout} />
<Instructions bind:open={showInstructions} {schema} />