<script lang="ts">
  import { ExternalLink } from "lib/common";
  import OsmLicense from "../OsmLicense.svelte";
  import PolygonAmenityLayerControl from "./PolygonAmenityLayerControl.svelte";
</script>

<PolygonAmenityLayerControl
  name="sports_spaces"
  singularNoun="sports space"
  pluralNoun="Sports spaces"
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dpitch"
    >
      sports pitches
    </ExternalLink> and <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dsports_centre"
    >
      sports centres
    </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
  </p>
  <OsmLicense />
</PolygonAmenityLayerControl>
