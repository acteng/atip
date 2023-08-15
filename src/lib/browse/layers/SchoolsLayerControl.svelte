<script lang="ts">
  import { ExternalLink } from "../../common";
  import PolygonAmenityLayerControl from "./PolygonAmenityLayerControl.svelte";
</script>

<PolygonAmenityLayerControl
  name="schools"
  singularNoun="school"
  pluralNoun="Schools"
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool"
    >
      primary and secondary schools
    </ExternalLink> from OpenStreetMap (as of 9 August 2023). It doesn't include
    kindergartens, colleges, universities, or other training schools.
  </p>
  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</PolygonAmenityLayerControl>
