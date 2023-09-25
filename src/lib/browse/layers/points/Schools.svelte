<script lang="ts">
  import { ExternalLink } from "lib/common";
  import OsmLicense from "../OsmLicense.svelte";
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
  <OsmLicense />
</PolygonAmenityLayerControl>
