<script>
  import "carbon-components-svelte/css/white.css";

  import About from "./components/About.svelte";
  import Instructions from "./components/Instructions.svelte";
  import Map from "./components/Map.svelte";
  import Layout from "./components/Layout.svelte";
  import BoundaryLayer from "./components/BoundaryLayer.svelte";
  import DrawControls from "./components/DrawControls.svelte";
  import InterventionList from "./components/InterventionList.svelte";
  import EntireScheme from "./components/EntireScheme.svelte";
  import HoverLayer from "./components/HoverLayer.svelte";
  import EditingLayer from "./components/EditingLayer.svelte";

  let showAbout = false;
  let showInstructions = false;

  const params = new URLSearchParams(window.location.search);
  let authorityName = params.get("authority");
  // TODO Slight hack. These files are stored in an S3 bucket, which only has
  // an HTTP interface. When deployed to Github pages over HTTPS, we can't mix
  // HTTP and HTTPS content, so use the Cloudfront HTTPS interface. That'll need
  // CDN invalidations when we update these files. But when serving locally for
  // development, HTTPS is also fine to use.
  let snapperUrl = `https://atip.uk/route-snappers/${authorityName}.bin`;

  function toggleAbout() {
    showAbout = !showAbout;
    showInstructions = false;
  }
  function toggleInstructions() {
    showInstructions = !showInstructions;
    showAbout = false;
  }
</script>

<Layout>
  <div slot="nav">
    <button type="button" onclick="window.open('index.html');"> Home</button>
    <button type="button" on:click={toggleAbout}>About</button>
    <button type="button" on:click={toggleInstructions}>Instructions</button>
  </div>
  <div slot="sidebar">
    <h1>{authorityName}</h1>
    <EntireScheme {authorityName} />
    <br />
    <InterventionList />
  </div>
  <div slot="main">
    <Map>
      <BoundaryLayer {authorityName} />
      <DrawControls url={snapperUrl} />
      <HoverLayer />
      <EditingLayer />
    </Map>
  </div>
</Layout>

<About bind:open={showAbout} />
<Instructions bind:open={showInstructions} />
