<script lang="ts">
  import * as Comlink from "comlink";
  import type { FeatureCollection, Polygon } from "geojson";
  import { onMount } from "svelte";
  import authoritiesUrl from "../../assets/authorities.geojson?url";
  import BaselayerSwitcher from "../lib/BaselayerSwitcher.svelte";
  import BoundaryLayer from "../lib/BoundaryLayer.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import HoverLayer from "../lib/draw/HoverLayer.svelte";
  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import Toolbox from "../lib/draw/Toolbox.svelte";
  import ContextualLayers from "../lib/layers/ContextualLayers.svelte";
  import Legend from "../lib/Legend.svelte";
  import Map from "../lib/Map.svelte";
  import About from "../lib/sidebar/About.svelte";
  import EntireScheme from "../lib/sidebar/EntireScheme.svelte";
  import Instructions from "../lib/sidebar/Instructions.svelte";
  import InterventionList from "../lib/sidebar/InterventionList.svelte";
  import ZoomOutMap from "../lib/ZoomOutMap.svelte";
  import { routeInfo } from "../stores";
  import type { Schema } from "../types";
  import { type RouteInfo } from "../worker";
  import workerWrapper from "../worker?worker";

  let showAbout = false;
  let showInstructions = false;

  const params = new URLSearchParams(window.location.search);
  // TODO Add validation and some kind of error page
  let authorityName: string = params.get("authority")!;
  let style: string = params.get("style") || "streets";
  let schema: Schema = (params.get("schema") as Schema) || "v1";

  // The "v2" here is an arbitrary number, not necessarily related to the app's
  // version. The version of the code deployed has to match the data, and it's
  // simplest to increment the number here for new incompatible data releases.
  let routeSnapperUrl = `https://atip.uk/route-snappers/v2/${authorityName}.bin.gz`;
  let routeInfoUrl = `https://atip.uk/route-info/v2/${authorityName}.bin.gz`;

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
    const resp = await fetch(authoritiesUrl);
    const body = await resp.text();
    const geojson: FeatureCollection<Polygon> = JSON.parse(body);
    geojson.features = geojson.features.filter(
      (feature) => feature.properties?.name == authorityName
    );
    return geojson;
  }

  function changeSchema() {
    let params = new URLSearchParams(window.location.search);
    params.set("schema", schema);
    let href = `${window.location.pathname}?${params.toString()}${
      window.location.hash
    }`;
    window.location.href = href;
  }
</script>

<Layout>
  <div slot="sidebar">
    <div>
      <button type="button" on:click={() => window.location.href = "index.html"}> Home</button>
      <button type="button" on:click={toggleAbout}>About</button>
      <button type="button" on:click={toggleInstructions}>Instructions</button>
    </div>
    <br />
    <label>
      ATIP schema:
      <select bind:value={schema} on:change={changeSchema}>
        <option value="v1">v1</option>
        <!-- <option value="v2">v2</option> -->
        <option value="planning">Housing developments</option>
        <option value="criticals">Critical issues</option>
      </select>
    </label>
    <h1>{authorityName} <ZoomOutMap {boundaryGeojson} /></h1>
    <EntireScheme {authorityName} {schema} />
    <br />
    <InterventionList {schema} />
    <hr />
    <ContextualLayers />
  </div>
  <div slot="main">
    <Map {style}>
      <BoundaryLayer {boundaryGeojson} />
      <InterventionLayer {schema} />
      <HoverLayer />
      <Toolbox {routeSnapperUrl} {schema} />
      <BaselayerSwitcher {style} />
      <Legend {schema} />
    </Map>
  </div>
</Layout>

<About bind:open={showAbout} />
<Instructions bind:open={showInstructions} />
