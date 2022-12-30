<script>
  import { Modal } from "carbon-components-svelte";

  export let open;
</script>

<Modal passiveModal modalHeading="About ATIP" bind:open>
  <p>
    ATIP v1 is an
    <a href="https://github.com/acteng/atip" target="_blank"
      >open source project</a
    >
    developed by:
  </p>
  <ul>
    <li>
      <a href="https://dcarlino.org" target="_blank">Dustin Carlino</a>: lead
      developer
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/madison-wang-841977bb/"
        target="_blank">Madison Wang</a
      >: UX design
    </li>
    <li>
      <a href="https://github.com/BudgieInWA" target="_blank">Ben Ritter</a>:
      CSS consulting
    </li>
  </ul>
  <p>
    ATIP builds on
    <a href="https://www.openstreetmap.org/about" target="_blank"
      >OpenStreetMap</a
    >
    contributors,
    <a href="https://maplibre.org/" target="_blank">MapLibre</a>,
    <a href="https://georust.org/" target="_blank">GeoRust</a>, and other open
    source projects.
  </p>
</Modal>
