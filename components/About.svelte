<script lang="ts">
  import {
    Modal,
    Link,
    UnorderedList,
    ListItem,
  } from "carbon-components-svelte";

  export let open;
</script>

<Modal
  passiveModal
  modalHeading="About the Active Travel Intervention Platform"
  bind:open
>
  <p>
    ATIP v1 is an
    <Link href="https://github.com/acteng/atip" target="_blank"
      >open source project</Link
    >
    developed by:
  </p>

  <br />

  <UnorderedList>
    <ListItem>
      <Link
        href="https://www.turing.ac.uk/people/researchers/dustin-carlino"
        target="_blank">Dustin Carlino</Link
      >: lead developer, from The Alan Turing Institute
    </ListItem>
    <ListItem>
      <Link
        href="https://www.linkedin.com/in/madison-wang-841977bb/"
        target="_blank">Madison Wang</Link
      >: UX design
    </ListItem>
    <ListItem>
      <Link href="https://github.com/BudgieInWA" target="_blank"
        >Ben Ritter</Link
      >: CSS consulting
    </ListItem>
  </UnorderedList>

  <br />

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

  <br />

  <p>
    We want your feedback about ATIP! Please <Link
      href="https://github.com/acteng/atip/issues/new"
      target="_blank">start an issue on Github</Link
    > or email <Link href="mailto: dcarlino@turing.ac.uk"
      >dcarlino@turing.ac.uk</Link
    >.
  </p>
</Modal>
