<script lang="ts">
  import type { FeatureCollection, Polygon } from "geojson";
  import { onMount } from "svelte";
  import authoritiesUrl from "../../assets/authorities.geojson?url";
  import { routeInfo } from "../stores";
  import type { Schema } from "../types";
  import * as Comlink from "comlink";
  import workerWrapper from "../worker?worker";
  import { type RouteInfo } from "../worker";

  import About from "../lib/sidebar/About.svelte";
  import Instructions from "../lib/sidebar/Instructions.svelte";
  import Map from "../lib/Map.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import BoundaryLayer from "../lib/BoundaryLayer.svelte";
  import InterventionList from "../lib/sidebar/InterventionList.svelte";
  import ContextualLayers from "../lib/layers/ContextualLayers.svelte";
  import EntireScheme from "../lib/sidebar/EntireScheme.svelte";
  import ZoomOutMap from "../lib/ZoomOutMap.svelte";
  import BaselayerSwitcher from "../lib/BaselayerSwitcher.svelte";
  import Legend from "../lib/Legend.svelte";

  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import HoverLayer from "../lib/draw/HoverLayer.svelte";
  import Toolbox from "../lib/draw/Toolbox.svelte";

  let showAbout = false;
  let showInstructions = false;

  // TODO This is a hacky way of detecting environment. 'npm run dev' and
  // Github should be false, and only Cloudfront should be true.
  let prod = window.location.hostname.includes("atip.uk");

  const params = new URLSearchParams(window.location.search);
  // TODO Add validation and some kind of error page
  let authorityName: string = params.get("authority")!;
  let style: string = params.get("style") || "streets";
  let schema: Schema = (params.get("schema") as Schema) || "v1";

  // TODO Slight hack. These files are stored in an S3 bucket, which only has
  // an HTTP interface. When deployed to Github pages over HTTPS, we can't mix
  // HTTP and HTTPS content, so use the Cloudfront HTTPS interface. That'll need
  // CDN invalidations when we update these files. But when serving locally for
  // development, HTTPS is also fine to use.
  var routeSnapperUrl = `https://atip.uk/route-snappers/${authorityName}.bin`;
  var routeInfoUrl = `https://atip.uk/route-info/${authorityName}.bin`;
  if (!prod) {
    routeSnapperUrl = `https://atip.uk/route-snappers-dev/${authorityName}.bin`;
    routeInfoUrl = `https://atip.uk/route-info-dev/${authorityName}.bin`;
  }

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
    // TODO Maybe don't set it until loadFile is done, so that everywhere using
    // it can disable controls until loaded
    routeInfo.set(await new MyWorker());
    await $routeInfo.loadFile(routeInfoUrl);
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
  <div slot="nav">
    <div>
      <button type="button" on:click={() => window.open("index.html")}>
        Home</button
      >
      <button type="button" on:click={toggleAbout}>About</button>
      <button type="button" on:click={toggleInstructions}>Instructions</button>
    </div>
    <br />
    <label>
      ATIP schema:
      <select bind:value={schema} on:change={changeSchema}>
        <option value="v1">v1</option>
        <option value="v2">v2</option>
        <option value="planning">Housing developments</option>
        <option value="criticals">Critical issues</option>
      </select>
    </label>
  </div>
  <div slot="sidebar">
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
