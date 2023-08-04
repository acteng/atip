<script lang="ts">
  import { ExternalLink } from "../common";
  import PolygonAmenityLayerControl from "./PolygonAmenityLayerControl.svelte";
</script>

<PolygonAmenityLayerControl
  name="green_spaces"
  singularNoun="green space"
  pluralNoun="Green spaces"
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhospitalhttps://wiki.openstreetmap.org/wiki/Tag:leisure%3Dpark"
    >
      park
    </ExternalLink>, <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve"
    >
      nature reserve
    </ExternalLink>, national park, and areas of outstandaing natural beauty
    data from OpenStreetMap.
  </p>

  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</PolygonAmenityLayerControl>
