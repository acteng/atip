<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { Footer } from "govuk-svelte";
  import { Beta, ExternalLink, Header } from "lib/common";
  import { onMount } from "svelte";

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();
  });
</script>

<div class="govuk-width-container govuk-prose">
  <Header />
  <Beta />

  <h1 style="margin-top: 30px">About Plan Your Active Travel Schemes</h1>

  <p>
    Plan Your Active Travel Schemes is an
    <ExternalLink href="https://github.com/acteng/atip">
      open source project
    </ExternalLink> supported by Active Travel England and developed by:
  </p>

  <ul>
    <li>
      <ExternalLink
        href="https://www.turing.ac.uk/people/researchers/dustin-carlino"
      >
        Dustin Carlino
      </ExternalLink>: lead developer, from The Alan Turing Institute
    </li>
    <li>
      <ExternalLink href="https://github.com/Pete-Y-CS">
        Peter York
      </ExternalLink>
    </li>
    <li>
      With UX design led by
      <ExternalLink href="https://www.linkedin.com/in/jadene-aderonmu-b4713771">
        Jadene Aderonmu
      </ExternalLink>
    </li>
    <li>
      With great thanks to our various users for feedback, testing, and ideas
    </li>
  </ul>

  <p>
    Plan Your Active Travel Schemes builds on
    <ExternalLink href="https://www.openstreetmap.org/about">
      OpenStreetMap
    </ExternalLink>
    contributors,
    <ExternalLink href="https://maplibre.org/">MapLibre</ExternalLink>,
    <ExternalLink href="https://github.com/dimfeld/svelte-maplibre/">
      svelte-maplibre
    </ExternalLink>,
    <ExternalLink href="https://georust.org/">GeoRust</ExternalLink>,
    <ExternalLink href="https://material.io/resources/icons/">
      Material icons
    </ExternalLink>, and other open source projects.
  </p>

  <p>
    We want your feedback about Plan Your Active Travel Schemes! Please <ExternalLink
      href="https://github.com/acteng/atip/issues/new"
    >
      start an issue on Github
    </ExternalLink>
    or email
    <a href="mailto:plan-your-active-travel-schemes@activetravelengland.gov.uk">
      plan-your-active-travel-schemes@activetravelengland.gov.uk
    </a>
    .
  </p>

  <hr />

  <h2>Recent changes</h2>
  <ul>
    <li>
      <b>Public Beta</b>
      launched December 2024, with various UI improvements, better integration of
      browse and sketch tools, and official public access.
    </li>
    <li>
      <b>v2</b>
      launched on 2 June 2023. Changes: a complete UI rewrite, new draw tools, drawing
      areas snapped to roads, splitting routes, multiple data schemas, speed limit
      layer, lane visualization layer
    </li>
    <li>
      <b>v1</b>
      launched in March 2023
    </li>
  </ul>
</div>

<Footer
  aboutHref="about.html"
  privacyHref="privacy.html"
  accessibilityHref="accessibility.html"
  cookiesHref={undefined}
/>
