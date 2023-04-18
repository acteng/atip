<script lang="ts">
  import Modal from "./Modal.svelte";
  import ExternalLink from "./ExternalLink.svelte";

  export let open: boolean;
</script>

<Modal title="About the Active Travel Intervention Platform" bind:open>
  <p>
    ATIP v1 is an
    <ExternalLink href="https://github.com/acteng/atip"
      >open source project</ExternalLink
    >
    developed by:
  </p>

  <ul>
    <li>
      <ExternalLink
        href="https://www.turing.ac.uk/people/researchers/dustin-carlino"
        >Dustin Carlino</ExternalLink
      >: lead developer, from The Alan Turing Institute
    </li>
    <li>
      <ExternalLink href="https://www.linkedin.com/in/madison-wang-841977bb/"
        >Madison Wang</ExternalLink
      >: UX design
    </li>
    <li>
      <ExternalLink href="https://github.com/BudgieInWA"
        >Ben Ritter</ExternalLink
      >: CSS consulting
    </li>
  </ul>

  <p>
    ATIP builds on
    <ExternalLink href="https://www.openstreetmap.org/about"
      >OpenStreetMap</ExternalLink
    >
    contributors,
    <ExternalLink href="https://maplibre.org/">MapLibre</ExternalLink>,
    <ExternalLink href="https://georust.org/">GeoRust</ExternalLink>, and other
    open source projects.
  </p>

  <p>
    We want your feedback about ATIP! Please <ExternalLink
      href="https://github.com/acteng/atip/issues/new"
      >start an issue on Github</ExternalLink
    >
    or email <a href="mailto: dcarlino@turing.ac.uk">dcarlino@turing.ac.uk</a>.
  </p>
</Modal>
