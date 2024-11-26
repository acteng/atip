<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { DefaultButton } from "govuk-svelte";
  import About from "lib/common/About.svelte";
  import PrivacyStatement from "lib/common/PrivacyStatement.svelte";
  import { SecondaryButton } from "govuk-svelte";
  import { Beta, Header } from "lib/common";
  import { onMount } from "svelte";

  let showAbout = false;
  let showPrivacyStatement = false;

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();
  });

  function goToSketcher() {
    window.location.href = "choose_area.html";
  }

  function goToBrowser() {
    window.location.href = "browse.html";
  }
</script>

<div class="govuk-width-container govuk-prose">
  <Header />
  <Beta />

  <h1 style="margin-top: 30px">Welcome to Plan Your Active Travel Schemes!</h1>
  <SecondaryButton on:click={() => (showAbout = true)}>About</SecondaryButton>
  <About bind:open={showAbout} />

  <SecondaryButton on:click={() => (showPrivacyStatement = true)}>
    PrivacyStatement
  </SecondaryButton>
  <PrivacyStatement bind:open={showPrivacyStatement} />

  <h2>Sketch Your Scheme:</h2>
  <p>
    Sketch active travel schemes at a high-level. This tool produces GeoJSON
    files that can be shared with others using this tool or imported into other
    GIS software.
  </p>
  <DefaultButton on:click={goToSketcher}>Start</DefaultButton>

  <h2>Browse existing sketches and geographic context:</h2>

  <p>
    View scheme sketches alongside other contextual layers, like bus routes,
    hospital locations, and authority boundaries.
  </p>
  <DefaultButton on:click={goToBrowser}>Start</DefaultButton>

  <h3>Accessibility</h3>
  <p>
    Our accessibility statement can be found <a href="accessibility.html">
      here
    </a>
    .
  </p>
</div>
