<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { AlphaBanner, DefaultButton } from "govuk-svelte";
  import { Header } from "lib/common";
  import { onMount } from "svelte";

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
  <AlphaBanner />

  <h1 style="margin-top: 30px">Welcome to Plan.activetravelengland.gov.uk!</h1>

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
</div>
