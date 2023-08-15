<script lang="ts">
  import { circleRadius } from "../../../colors";
  import { ExternalLink } from "../../common";
  import PointAmenityLayerControl from "./PointAmenityLayerControl.svelte";

  const name = "railway_stations";
</script>

<PointAmenityLayerControl
  {name}
  singularNoun="railway station"
  pluralNoun="Railway stations"
  {circleRadius}
>
  <p>
    This shows <ExternalLink
      href="https://wiki.openstreetmap.org/wiki/Tag:railway%3Dstation"
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
