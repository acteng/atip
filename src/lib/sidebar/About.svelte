<script lang="ts">
  import { ExternalLink, Modal } from "../common";

  export let open: boolean;
</script>

<Modal title="About the Active Travel Infrastructure Platform" bind:open>
  <div class="govuk-prose">
    <p>
      ATIP v2 is an
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
        With UX help from
        <ExternalLink href="https://www.linkedin.com/in/madison-wang-841977bb/">
          Madison Wang
        </ExternalLink> and CSS help from
        <ExternalLink href="https://github.com/BudgieInWA">
          Ben Ritter
        </ExternalLink>
      </li>
      <li>
        With great thanks to ATIP's various users for feedback, testing, and
        ideas
      </li>
    </ul>

    <p>
      ATIP builds on
      <ExternalLink href="https://www.openstreetmap.org/about">
        OpenStreetMap
      </ExternalLink>
      contributors,
      <ExternalLink href="https://maplibre.org/">MapLibre</ExternalLink>,
      <ExternalLink href="https://georust.org/">GeoRust</ExternalLink>,
      <ExternalLink href="https://github.com/a-b-street/osm2streets">
        osm2streets
      </ExternalLink>,
      <ExternalLink href="https://material.io/resources/icons/">
        Material icons
      </ExternalLink>, and other open source projects.
    </p>

    <p>
      We want your feedback about ATIP! Please <ExternalLink
        href="https://github.com/acteng/atip/issues/new"
      >
        start an issue on Github
      </ExternalLink>
      or email
      <a href="mailto: dcarlino@turing.ac.uk">dcarlino@turing.ac.uk</a>
      .
    </p>

    <hr />

    <h2>Recent changes</h2>
    <ul>
      <li>
        <b>v2</b>
        launched on 2 June 2023. Changes: a complete UI rewrite, new draw tools,
        drawing areas snapped to roads, splitting routes, multiple data schemas,
        speed limit layer, lane visualization layer
      </li>
      <li>
        <b>v1</b>
        launched in March 2023
      </li>
    </ul>
  </div>
</Modal>
