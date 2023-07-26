<script lang="ts">
  import { ExternalLink } from "../common";
  import OptionalLayer from "./OptionalLayer.svelte";
</script>

<OptionalLayer name="schools" singularNoun="school" pluralNoun="Schools">
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool"
    >
      primary and secondary schools
    </ExternalLink> from OpenStreetMap. It doesn't include kindergartens, colleges,
    universities, or other training schools.
  </p>
</OptionalLayer>
