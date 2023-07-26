<script lang="ts">
  import { ExternalLink } from "../common";
  import OptionalLayer from "./OptionalLayer.svelte";
</script>

<OptionalLayer name="hospitals" singularNoun="hospital" pluralNoun="Hospitals">
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhospital"
    >
      hospital
    </ExternalLink> data from OpenStreetMap. It doesn't include outpatient clinics
    or individual doctor's offices.
  </p>
</OptionalLayer>
