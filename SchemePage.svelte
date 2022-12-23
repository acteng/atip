<script>
  import About from "./components/About.svelte";
  import Instructions from "./components/Instructions.svelte";

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

<p>Heya</p>
<nav>
  <button type="button" on:click={toggleAbout}>About</button>
  <button type="button" on:click={toggleInstructions}>Instructions</button>
</nav>
<About hidden={hideAbout} />
<Instructions hidden={hideInstructions} />

<style></style>
