<script>
  import "carbon-components-svelte/css/white.css";

  import { onMount } from "svelte";
  import authoritiesUrl from "./authorities.geojson?url";

  import About from "./components/About.svelte";
  import Instructions from "./components/Instructions.svelte";
  import Map from "./components/Map.svelte";
  import Layout from "./components/Layout.svelte";
  import BoundaryLayer from "./components/BoundaryLayer.svelte";
  import InterventionList from "./components/InterventionList.svelte";
  import EntireScheme from "./components/EntireScheme.svelte";
  import ZoomOutMap from "./components/ZoomOutMap.svelte";
  import BaselayerSwitcher from "./components/BaselayerSwitcher.svelte";
  import Legend from "./components/Legend.svelte";

  import DrawControls from "./components/draw/DrawControls.svelte";
  import HoverLayer from "./components/draw/HoverLayer.svelte";
  import EditingLayer from "./components/draw/EditingLayer.svelte";

  let showAbout = false;
  let showInstructions = false;

  // TODO This is a hacky way of detecting environment. 'npm run dev' and
  // Github should be false, and only Cloudfront should be true.
  let prod = window.location.hostname.includes("atip.uk");

  const params = new URLSearchParams(window.location.search);
  let authorityName = params.get("authority");
  let style = params.get("style") || "streets";

  // TODO Slight hack. These files are stored in an S3 bucket, which only has
  // an HTTP interface. When deployed to Github pages over HTTPS, we can't mix
  // HTTP and HTTPS content, so use the Cloudfront HTTPS interface. That'll need
  // CDN invalidations when we update these files. But when serving locally for
  // development, HTTPS is also fine to use.
  var snapperUrl = `https://atip.uk/route-snappers/${authorityName}.bin`;
  if (!prod) {
    snapperUrl = `https://atip.uk/route-snappers-dev/${authorityName}.bin`;
  }

  function toggleAbout() {
    showAbout = !showAbout;
    showInstructions = false;
  }
  function toggleInstructions() {
    showInstructions = !showInstructions;
    showAbout = false;
  }

  let boundaryGeojson;
  onMount(async () => {
    boundaryGeojson = await loadAuthorityBoundary();
  });

  async function loadAuthorityBoundary() {
    const resp = await fetch(authoritiesUrl);
    const body = await resp.text();
    const geojson = JSON.parse(body);
    geojson.features = geojson.features.filter(
      (feature) => feature.properties.name == authorityName
    );
    return geojson;
  }
</script>

<Layout>
  <div slot="nav">
    <button type="button" onclick="window.open('index.html');"> Home</button>
    <button type="button" on:click={toggleAbout}>About</button>
    <button type="button" on:click={toggleInstructions}>Instructions</button>
  </div>
  <div slot="sidebar">
    <h1>{authorityName} <ZoomOutMap {boundaryGeojson} /></h1>
    <EntireScheme {authorityName} />
    <br />
    <InterventionList />
  </div>
  <div slot="main">
    <Map {style}>
      <BoundaryLayer {boundaryGeojson} />
      <DrawControls url={snapperUrl} />
      <HoverLayer />
      <EditingLayer />
      <BaselayerSwitcher {style} />
      <Legend />
    </Map>
  </div>
</Layout>

<About bind:open={showAbout} />
<Instructions bind:open={showInstructions} />
