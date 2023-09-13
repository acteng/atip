<script lang="ts">
  import { circleRadius } from "colors";
  import { ExternalLink } from "lib/common";
  import PointAmenityLayerControl from "./PointAmenityLayerControl.svelte";

  const name = "crossings";
</script>

<PointAmenityLayerControl
  {name}
  singularNoun="crossing"
  pluralNoun="Crossings"
  {circleRadius}
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:crossing"
    >
      railway station
    </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
  </p>

  <p>
    License: <ExternalLink href="https://www.openstreetmap.org/copyright">
      Open Data Commons Open Database License
    </ExternalLink>
  </p>
</PointAmenityLayerControl>
