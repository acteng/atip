<script>
  import About from "./components/About.svelte";
  import Instructions from "./components/Instructions.svelte";
  import Map from "./components/Map.svelte";
  import Layout from "./components/Layout.svelte";
  import BoundaryLayer from "./components/BoundaryLayer.svelte";
  import DrawControls from "./components/DrawControls.svelte";
  import InterventionList from "./components/InterventionList.svelte";
  import EntireScheme from "./components/EntireScheme.svelte";

  let hideAbout = true;
  let hideInstructions = true;

  const params = new URLSearchParams(window.location.search);
  let authorityName = params.get("authority");
  // TODO Slight hack. These files are stored in an S3 bucket, which only has an HTTP interface. When deployed to Githu
  let snapperUrl = `https://play.abstreet.org/route-snappers/${authorityName}.bin`;

  function toggleAbout() {
    hideAbout = !hideAbout;
    hideInstructions = true;
  }
  function toggleInstructions() {
    hideAbout = true;
    hideInstructions = !hideInstructions;
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
    </Map>
  </div>
</Layout>

<About bind:hidden={hideAbout} />
<Instructions bind:hidden={hideInstructions} />
