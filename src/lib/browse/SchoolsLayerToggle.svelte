<script lang="ts">
  import { ExternalLink } from "../common";
  import OptionalLayerToggle from "./OptionalLayerToggle.svelte";
</script>

<OptionalLayerToggle name="schools" singularNoun="school" pluralNoun="Schools">
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool"
    >
      primary and secondary schools
    </ExternalLink> from OpenStreetMap. It doesn't include kindergartens, colleges,
    universities, or other training schools.
  </p>
  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</OptionalLayerToggle>
