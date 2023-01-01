<script>
  import { Modal, Link } from "carbon-components-svelte";

  export let open;
</script>

<Modal passiveModal modalHeading="About ATIP" bind:open>
  <p>
    ATIP v1 is an
    <Link href="https://github.com/acteng/atip" target="_blank"
      >open source project</Link
    >
    developed by:
  </p>
  <ul>
    <li>
      <Link href="https://dcarlino.org" target="_blank">Dustin Carlino</Link>:
      lead developer
    </li>
    <li>
      <Link
        href="https://www.linkedin.com/in/madison-wang-841977bb/"
        target="_blank">Madison Wang</Link
      >: UX design
    </li>
    <li>
      <Link href="https://github.com/BudgieInWA" target="_blank"
        >Ben Ritter</Link
      >: CSS consulting
    </li>
  </ul>
  <p>
    ATIP builds on
    <Link href="https://www.openstreetmap.org/about" target="_blank"
      >OpenStreetMap</Link
    >
    contributors,
    <Link href="https://maplibre.org/" target="_blank">MapLibre</Link>,
    <Link href="https://georust.org/" target="_blank">GeoRust</Link>, and other
    open source projects.
  </p>
</Modal>
