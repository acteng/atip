<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import {
    AlphaBanner,
    DefaultButton,
  } from "govuk-svelte";
  import { Header } from "lib/common";
  import { onMount } from "svelte";

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();
  });

  function goToSketcher() {
    window.location.href = "/choose_area.html"
  }

  function goToBrowser() {
    window.location.href = "/browse.html"
  }
</script>

<div class="govuk-width-container govuk-prose">
    <Header />
    <AlphaBanner />
  
    <h1 style="margin-top: 30px">Welcome to Plan.activetravelengland.gov.uk!</h1>

    <h2>Sketch Your Scheme:</h2>
    <p>
        This feature allows you to sketch planned active travel schemes, or anything you might want to make a high level geographic sketch of. These can then be exported as geojson files to be shared using this and other tools.
    </p>
    <DefaultButton on:click={goToSketcher}>Start</DefaultButton>
    <h2>Browse Existing Sketches and Georgraphic Context:</h2>
    <p>
        Once you have made some sketches you can look at them in existing geographic context, by viewing the sketches alongside layers like bus routes, hospital locations, and authority boundaries.
    </p>
    <DefaultButton on:click={goToBrowser}>Start</DefaultButton>
</div>