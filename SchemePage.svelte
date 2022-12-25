<script>
  import About from "./components/About.svelte";
  import Instructions from "./components/Instructions.svelte";
  import Map from "./components/Map.svelte";
  import Layout from "./components/Layout.svelte";
  import BoundaryLayer from "./components/BoundaryLayer.svelte";

  let hideAbout = true;
  let hideInstructions = true;

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
    <p>Heya</p>
  </div>
  <div slot="main">
    <Map>
      <BoundaryLayer authorityName="Telford and Wrekin" />
    </Map>
  </div>
</Layout>

<About bind:hidden={hideAbout} />
<Instructions bind:hidden={hideInstructions} />
