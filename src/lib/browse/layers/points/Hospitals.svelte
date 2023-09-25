<script lang="ts">
  import { ExternalLink } from "lib/common";
  import OsmLicense from "../OsmLicense.svelte";
  import PolygonAmenityLayerControl from "./PolygonAmenityLayerControl.svelte";
</script>

<PolygonAmenityLayerControl
  name="hospitals"
  singularNoun="hospital"
  pluralNoun="Hospitals"
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhospital"
    >
      hospital
    </ExternalLink> data from OpenStreetMap (as of 9 August 2023). It doesn't include
    outpatient clinics or individual doctor's offices.
  </p>
  <OsmLicense />
</PolygonAmenityLayerControl>
