<script lang="ts">
  import { ExternalLink } from "../common";
  import OptionalLayerToggle from "./OptionalLayerToggle.svelte";
</script>

<OptionalLayerToggle name="hospitals" singularNoun="hospital" pluralNoun="Hospitals">
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhospital"
    >
      hospital
    </ExternalLink> data from OpenStreetMap. It doesn't include outpatient clinics
    or individual doctor's offices.
  </p>
  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</OptionalLayerToggle>
